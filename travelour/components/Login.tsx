'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";
import TravelLogo from "../images/travelour-logo.png";

function Login() {
  return (
    <div className="bg-[#383F34] flex h-screen flex-col items-center justify-center text-center pd-10">
      <Image
        src={TravelLogo}
        width={500}
        height={500}
        alt="logo"
      />
      <button onClick={() => signIn('google')} className="text-white fond-bold text-4xl animate-pulse hover:text-black hover:animate-bounce">Sign in to use Travelour</button>
    </div>
  );
}

export default Login