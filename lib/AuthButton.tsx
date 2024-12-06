const AuthButton = ({ type, loading }: { type: "login" | "register"; loading: boolean }) => {
  const buttonText = type === "login" ? "Sign In" : "Sign Up";
  
  return (
    <button 
      disabled={loading} 
      type="submit" 
      className={`
        w-full py-3 px-4 rounded-xl text-white font-medium 
        transition-all duration-200 transform hover:-translate-y-0.5
        ${loading 
          ? 'bg-gray-600/50 cursor-not-allowed' 
          : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
        }
        flex items-center justify-center
      `}
    >
      {loading ? (
        <span className="flex items-center">
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
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
          Processing...
        </span>
      ) : (
        buttonText
      )}
    </button>
  );
};

export default AuthButton;
