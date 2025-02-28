"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

import {IconBrandGithub,IconBrandGoogle} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await axios.post('/api/auth/login',{email,password});
      console.log("Login Success",res.data);
      toast.success("Login Successful !")
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error:any) {
      console.log("Login failed!");
      toast.error("Login failed!");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 pt-12 relative overflow-y-auto">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <Toaster/>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black/[0.90] relative">
        <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
          Welcome Back
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Sign in to your Account
        </p>
        <form className="my-6" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              id="email" placeholder="projectmayhem@fc.com" type="email" required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              id="password" placeholder="••••••••" type="password" required />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login &rarr;
            <BottomGradient />
          </button>

          <div className="flex items-center text-neutral-600 p-2 text-sm max-w-sm mt-4 dark:text-neutral-300">
            Don't have an Account? &nbsp;
            <Link href={"signup"}>
                <p className="text-base text-teal-600 font-semibold tracking-wide">
                    Sign Up
                </p>
            </Link>
          </div>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />
        </form>
          <div className="flex flex-col space-y-3">
            <button
              onClick={()=>signIn("github")}
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
