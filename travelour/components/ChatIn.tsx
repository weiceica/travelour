'use client';

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../firebase";

type Props = {
    chatId: string;
};

function ChatIn({chatId}: Props) {
    const model = "davinci";
    const [prompt, setPrompt] = useState("");
    const { data: session } = useSession();

    // reference to response
    const sendMessage = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!prompt) return;
        const input = prompt.trim();
        setPrompt("");
        const message: Message = {
            text: input,
            timestamp: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
            }
        };

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message);

        const notifs = toast.loading('Travelour is processing information');

        // notif (calling the API using json) we will just stick with the davinci model for our spcific call to chatGPT
        await fetch('/api/AskQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            }),
        }).then(() => 
            // success
            // access toast
            toast.success('>>>', {
                id: notifs,
            })
        );
    };

  return (
    <div className="bg-[#526646] text-white rounded-lg text-sm flex">
        <form onSubmit={sendMessage} className='p-3 space-x-5 flex flex-1'>
            <input 
            className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-200"
            disabled={!session}
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)}
            type="text" 
            placeholder='Enter message here...'
            />

            <button 
            disabled={!session || !prompt} 
            className="bg-[#607751] hover:opacity-50 text-white font-bold px-5 py-2 rounded disabled:bg-[#48583e] disabled:curor-not-allowed"
            type="submit">
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45"/>
            </button>
        </form>
    </div>
  )
}

export default ChatIn