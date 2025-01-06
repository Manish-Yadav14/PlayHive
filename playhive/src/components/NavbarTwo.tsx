import Link from 'next/link'
import React from 'react'
import {IconBrandAppleArcade} from "@tabler/icons-react";
import { useRouter } from 'next/router';

function NavbarTwo() {
  const router = useRouter();
  return (
    <div className="fixed top-0 w-full border-b border-b-gray-800 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <Link href={"/"} className="mr-6 flex items-center space-x-2 m-2 p-2">
            <IconBrandAppleArcade/>
            <span className="font-bold sm:inline-block text-xl m-2">Playhive</span>
          </Link>
        </div>
        <button onClick={()=>router.push('/login')} className='bg-violet-900 m-2 p-2 rounded-md w-16'>Login</button>
      </div>
    </div>
  )
}

export default NavbarTwo