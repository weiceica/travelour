'use client'
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { query, orderBy, collection } from "firebase/firestore";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Message from "./Message";
import { db } from "../firebase";

type Props = {
    chatId: string;
};

function Chat({chatId}: Props) {
  const {data: session} = useSession();
  const [messages] = useCollection(session && query(
    collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), orderBy("timestamp", "asc"))
  );
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">Ask Travelour Anything Down Below!!</p>
          <ArrowDownCircleIcon className="text-white animate-bounce h-10 w-10 mx-auto mt-5"></ArrowDownCircleIcon>
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()}/>
      ))}
    </div>
  )
}

export default Chat;