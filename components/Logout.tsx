"use client";

import React, { useState } from "react";
import { signOut } from "@/actions/auth";

const Logout = () => {
    const [loading, setLoading] = useState(false);

    const handleLogout = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        await signOut();
        setLoading(false);
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
                        <span>Signing out...</span>
                    </>
                ) : (
                    <>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                        <span>Sign out</span>
                    </>
                )}
            </button>
        </form>
    );
};

export default Logout;