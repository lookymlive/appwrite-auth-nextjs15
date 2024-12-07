"use client";

import React, { useState } from "react";
import { signOut } from "@/actions/auth";
import { useRouter } from "next/navigation";

interface LogoutProps {
    onLogoutSuccess?: () => void;
}

const Logout = ({ onLogoutSuccess }: LogoutProps) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setLoading(true);
            await signOut();
            
            // Trigger local storage event for cross-tab synchronization
            window.localStorage.setItem("auth-state-change", Date.now().toString());
            
            // Call the callback if provided
            onLogoutSuccess?.();
            
            router.push("/sign-in");
            router.refresh();
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogout}>
            <button
                type="submit"
                disabled={loading}
                className={`
                    px-4 py-2 rounded-xl text-sm font-medium
                    transition-all duration-200 
                    ${loading
                        ? 'bg-gray-600/50 cursor-not-allowed text-gray-300'
                        : 'bg-gradient-to-r from-red-500/80 to-orange-500/80 hover:from-red-600/80 hover:to-orange-600/80 text-white'
                    }
                    flex items-center gap-2
                `}
            >
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>Logging out...</span>
                    </>
                ) : (
                    "Sign Out"
                )}
            </button>
        </form>
    );
};

export default Logout;