'use client'

import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

function NewChat() {
  const router = useRouter();
  const {data: session} = useSession();
  const createNewChat = async() => {
    const document = await addDoc(
      collection(
        db, 'users', session?.user?.email!, 'chats'), 
      {
        userId: session?.user?.email!, 
        timestamp: serverTimestamp()
      }
      );

      router.push(`/chat/${document.id}`);
  }
  return (
    <div onClick={createNewChat} className="border-[#71905f] border chatRow">
        <PlusIcon className="h-5 w-5"/>
        <p>New Chat</p>
    </div>
  );
}

export default NewChat