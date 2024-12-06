"use client";
import { getLoggedInUser, type UserDetails } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
 const router = useRouter();
 const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

 useEffect(() => {
  const checkAuth = async () => {
      const user = await getLoggedInUser();
      if (!user) {
        router.push("/sign-in");
        return;
      }
      setUserDetails(user);
    };
    checkAuth();
 }, [router]);
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
     <h1 className="text-3xl ">Lookym Home</h1>
     {userDetails && (
       <div className="text-lg">
         Welcome back, {userDetails.username}!
       </div>
     )}
    </main>
  )
}