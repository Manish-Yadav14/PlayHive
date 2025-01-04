import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased dark:text-white">
      <div className="relative w-full flex items-center justify-center ">
        <Navbar />
      </div>
      <HeroSection/>
    </main>
  );
}
