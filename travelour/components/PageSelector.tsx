'use client'

import { BookOpenIcon, ChatBubbleBottomCenterTextIcon, InformationCircleIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { useSession, signOut } from "next-auth/react";

function PageSelector() {
  const { data:session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen text-white items-center justify-center rounded-full">
      <div className="text-white p-3">
        {/* Home Page (Chatter) */}
        <a href="/"><ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-white hover:text-[#383F34]"/></a>
      </div>
      <div className="text-white p-3">
        {/* Home Page (Chatter) */}
        <a href="/"><BookOpenIcon className="h-16 w-16 text-white hover:text-[#383F34]"/></a>
      </div>
      <div className="text-white p-3">
        {/* travel news */}
        <a href="/"><NewspaperIcon className="h-16 w-16 text-white hover:text-[#383F34]"/></a>
      </div>
      <div className="text-white p-3 mb-3">
        {/* About */}
        <a href="/"><InformationCircleIcon className="h-16 w-16 text-white hover:text-[#383F34]"/></a>
      </div>
      {session && (
        <img 
        onClick={() => signOut()}
        className="rounded-full h-12 w-12 cursor-pointer hover:opacity-30" 
        src={session.user?.image!} 
        alt="pfp" />
      )}
    </div>
  );
}

export default PageSelector