"use server";

import { createAdminClient, createSessionClient } from "@/lib/appwrite";
import { cookies } from "next/headers";
import { ID, Query } from "node-appwrite";
import { headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";
import { redirect } from "next/navigation";
import { get } from "http";

export type UserDetails = {
  userId: string;
  username: string;
  email: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $collectionId: string;
  $permissions: string[];
};

export const getUserDetails = async (userId: string) => {
  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(process.env.DATABASE_ID!, process.env.USERS_COLLECTION_ID!, [Query.equal("userid", userId)]);

    return JSON.stringify(user.documents[0]);
  } catch (error: any) {
  }
};

export async function getLoggedInUser(): Promise<UserDetails | null> {
  const sessionClient = await createSessionClient();
  if (!sessionClient) return null;
  
  try {
    const { account } = sessionClient;
    const result = await account.get();
    
    if (result) {
      const userDetailsStr = await getUserDetails(result.$id);
      if (userDetailsStr) {
        const userDetails = JSON.parse(userDetailsStr);
        return {
          userId: userDetails.userid,
          username: userDetails.username,
          email: userDetails.email,
          $id: userDetails.$id,
          $createdAt: userDetails.$createdAt,
          $updatedAt: userDetails.$updatedAt,
          $databaseId: userDetails.$databaseId,
          $collectionId: userDetails.$collectionId,
          $permissions: userDetails.$permissions
        };
      }
    }
    return null;
  } catch (error: any) {
    console.error('Error getting logged in user:', error);
    return null;
  }
}

type SignUpSuccess = {
  success: string;
  userId: string;
  username: string;
  email: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $collectionId: string;
};

type SignUpError = {
  error: string;
};

type SignUpResponse = SignUpSuccess | SignUpError;

export async function signUp(formData: FormData): Promise<SignUpResponse> {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!username || !email || !password) {
    return {
      error: "All fields are required",
    };
  }

  try {
    const { account, database } = await createAdminClient();
    
    // Create user account
    const newUserAccount = await account.create(ID.unique(), email, password, username);
    if (!newUserAccount) {
      return {
        error: "Failed to create user account",
      };
    }

    // Create user document in database
    const newUser = await database.createDocument(
      process.env.DATABASE_ID!,
      process.env.USERS_COLLECTION_ID!,
      ID.unique(),
      {
        userid: newUserAccount.$id,
        username: username,
        email: email
      }
    );

    if (!newUser) {
      // Rollback account creation if document creation fails
      const { user } = await createAdminClient();
      await user.delete(newUserAccount.$id);
      return {
        error: "Failed to create user profile",
      };
    }

    // Create session
    const session = await account.createEmailPasswordSession(email, password);
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return {
      success: "User created successfully",
      userId: newUserAccount.$id,
      username: username,
      email: email,
      $id: newUser.$id,
      $createdAt: newUser.$createdAt,
      $updatedAt: newUser.$updatedAt,
      $databaseId: newUser.$databaseId,
      $collectionId: newUser.$collectionId
    };
  } catch (error: any) {
    // Handle Appwrite specific errors
    if (error?.code === 409) {
      return {
        error: "Email already exists",
      };
    }
    
    return {
      error: error?.message || "Failed to create account",
    };
  }
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return {
      success: "User logged in successfully",
    };
  } catch (error: any) {
    return {
      error: (error as Error).message,
    };
  }
}

export async function signOut(): Promise<void> { 
  try {
    const sessionClient = await createSessionClient();
    if (!sessionClient) {
      return;
    }
    
    const { account } = sessionClient;
    const cookieStore = await cookies();
    
    // Delete cookie first for immediate client-side effect
    cookieStore.delete("appwrite-session");
    
    // Then delete the session in Appwrite
    try {
      await account.deleteSession("current");
    } catch (error) {
      console.error('Error deleting Appwrite session:', error);
      // Continue even if Appwrite session deletion fails
    }
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}
