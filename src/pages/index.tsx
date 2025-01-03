import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <main className="min-h-screen bg-black antialiased dark:text-white">
      <div className="relative w-full flex items-center justify-center ">
        <Navbar />
      </div>
      <HeroSection/>
      {session.status ==="authenticated" ? (
        <div>
          <p>{session.data?.user?.name}</p>
          <button onClick={()=>signOut()}>Logout</button>
        </div>
      ):(
      <button onClick={()=>signIn("github")}>Login</button>
      )}
    </main>
  );
}
