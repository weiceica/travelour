import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

type Props = {
    id: string;
};

function ChatBox({id}: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);

    // nosql query from firebase
    const [messages] = useCollection(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
    );

    useEffect(() => {
        if (!pathname) return;
        setActive(pathname.includes(id));
    }, [pathname]);

    // function to delete chat
    const removeChat = async() => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
        router.replace('/');
    };

  return (
    <Link href={`chat/${id}`} className={`chatRow justify-center ${active && 'bg-[#3c4534]'}`}>
        <ChatBubbleLeftIcon className="h-5 w-5"/>
        <p className="flex-1 hidden md:inline-flex truncate">
            {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
        </p>
        <TrashIcon onClick={removeChat} className="h-5 w-5 text-black hover:text-red-600"/>
    </Link>
  );
}

export default ChatBox;