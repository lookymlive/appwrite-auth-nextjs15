import Link from "next/link"
import React from "react"

 
const Navbar = () => {
  return (
    <nav className="border-b bg-background w-full flex items-center">
   <div className="flex w-full items-center justify-between my-4">
    <Link className="font-bold" href="/">
    Home
    </Link>
    <div className="flex items-center gap-x-5">
        <Link href="/middleware">Middleware</Link>
        <Link href="/server">Server</Link>
     </div>
   <div className="flex items-center gap-x-5">
        <Link href="/Sign in">
        <div className="flex items-center gap-x-2">
          Login  
        </div>
        </Link>
        </div>
    </div>
    </nav>
  )
}
export default Navbar