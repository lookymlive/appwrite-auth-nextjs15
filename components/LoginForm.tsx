"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AuthButton from "@/lib/AuthButton";
import { signIn } from "@/actions/auth";

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    
      const formData = new FormData(event.currentTarget);
      const result = await signIn(formData);

      if (result.error) {
        setError(result?.error);
      } else if (result?.success) {
       router.push('/');
      }
      setLoading(false);
  };
       

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 to-gray-900/60 rounded-2xl p-8 shadow-xl border border-gray-800/50">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-200 text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              name="username"
              required
              className="mt-2 block w-full px-4 py-3 rounded-xl border border-gray-800 
                       bg-gray-900/50 text-gray-100 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
                       transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full px-4 py-3 rounded-xl border border-gray-800 
                       bg-gray-900/50 text-gray-100 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
                       transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              required
              className="mt-2 block w-full px-4 py-3 rounded-xl border border-gray-800 
                       bg-gray-900/50 text-gray-100 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
                       transition-all duration-200"
            />
          </div>
          <div className="pt-2">
            <AuthButton type="login" loading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
