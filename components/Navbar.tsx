"use client";
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Logout from "@/components/Logout"
import { getLoggedInUser } from "@/actions/auth"
import { usePathname } from "next/navigation"

interface UserDetails {
  username: string;
  email: string;
}

const Navbar = () => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const pathname = usePathname();

  const fetchUser = async () => {
    try {
      const userData = await getLoggedInUser();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [pathname]); // Re-fetch user when pathname changes

  // Add event listener for storage changes
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "auth-state-change") {
        fetchUser();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="border-b border-gray-800 bg-gray-900/60 backdrop-blur-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            className="text-lg font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent" 
            href="/"
          >
            Home
          </Link>
          
          <div className="flex items-center gap-x-6">
            <Link 
              href="/middleware" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Middleware
            </Link>
            <Link 
              href="/server"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Server
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            {!user ? (
              <Link 
                href="/sign-in"
                className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 
                         hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-200"
              >
                Sign In
              </Link>
            ) : (
              <div className="flex items-center gap-x-4">
                <span className="text-gray-300">
                  {user.username}
                </span>
                <Logout onLogoutSuccess={fetchUser} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;