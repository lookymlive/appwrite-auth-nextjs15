import SignUpForm from "@/components/SignUpForm"
import Link from "next/link"

const SignUp = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-4">
      <section className="w-full max-w-md">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-2">Create Account</h1>
        <p className="text-gray-400 mb-8">Join us and start your journey</p>
        <SignUpForm/>
        <div className="mt-6 flex items-center gap-2 justify-center text-sm">
          <span className="text-gray-400">Already have an account?</span>    
          <Link className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors" href="/sign-in">
            Sign In
          </Link>  
        </div>      
      </section>
    </div>
  );
};
export default SignUp