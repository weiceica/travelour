import Chat from "../../../components/Chat";
import ChatIn from "../../../components/ChatIn";

type Props = {
    params: {
        id: string
    };
};

function ChatPage({params: {id}}: Props) {
  return (
    <div className="overflow-hidden h-screen flex grow flex-col p-5">
        {/* Chat Element */}
        <Chat chatId={id}/>
        {/* Chat Input Element */}
        <ChatIn chatId={id}/>
    </div>
  );
}

export default ChatPage;