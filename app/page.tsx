"use client";
import { getLoggedInUser, type UserDetails } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
 const router = useRouter();
 const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const checkAuth = async () => {
    try {
      const user = await getLoggedInUser();
      if (!user) {
        router.replace("/sign-in");
        return;
      }
      setUserDetails(user);
    } catch (error) {
      console.error("Auth check failed:", error);
      router.replace("/sign-in");
    } finally {
      setLoading(false);
    }
  };
  checkAuth();
 }, [router]);

  if (loading) {
    return (
      <main className="flex h-full flex-col items-center justify-center p-24">
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
          Lookym Home
        </h1>
        {userDetails && (
          <div className="text-lg text-center text-gray-300">
            Welcome back, {userDetails.username}!
          </div>
        )}
      </div>
    </main>
  );
}