'use client'

import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ChatBox from "./ChatBox";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

function SideBar() {
    const { data:session } = useSession();
    const [chats, loading, error] = useCollection(
      session && query(
        collection(db, 'users', session?.user?.email!, 'chats'),
        orderBy('timestamp', 'asc')
    ));
    
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />

        {/* All the Chats */}
        {chats?.docs.map(chat => (
          <ChatBox key={chat.id} id={chat.id}/>
        ))}
      </div>
    </div>
  );
}

export default SideBar