import { getLoggedInUser } from "@/actions/auth";
import { redirect } from "next/navigation";

const Server = async () => {
    const user: UserDetails | null = await getLoggedInUser();

    // If user is already logged in, redirect to home
    if (user) {
      redirect('/');
    } else {
      return <p>User not logged in.</p>; // Handle the case when user is null
    }

  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
     <h1 className="text-3xl ">Server Page</h1>
     <p className="text-lg">{user?.email}</p>


    </main>
  )
}
export default Server