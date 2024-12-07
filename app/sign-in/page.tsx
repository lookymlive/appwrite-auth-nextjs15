import { getLoggedInUser } from "@/actions/auth";
import LoginForm from "@/components/LoginForm"
import Link from "next/link"
import { redirect } from "next/navigation";
import React from "react";

const SignIn = async () => {
  const user = await getLoggedInUser();

  // If user is already logged in, redirect to home
  if (user) {
    redirect('/');
  }

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-4">
        <section className="w-full max-w-md">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-2">Welcome Back</h1>
            <p className="text-gray-400 mb-8">Sign in to continue your journey</p>
            <LoginForm/>
            <div className="mt-6 flex items-center gap-2 justify-center text-sm">
                <span className="text-gray-400">Don't have an account?</span>    
                <Link className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors" href="/sign-up">
                    Sign Up
                </Link>  
            </div>      
        </section>
    </div>
  )
}

export default SignIn