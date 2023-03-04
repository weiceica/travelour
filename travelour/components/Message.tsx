import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData;
};

function Message({ message }: Props) {
  const isTravelour = message.user.name === "Travelour";
  return (
    <div className={`py-5 text-white rounded-3xl ${isTravelour && "bg-[#404e38]"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <img src={message.user.avatar} className="h-8 w-8" alt="" />
            <p className="pt-1 text-sm">{message.text}</p>
        </div>
    </div>
  )
}

export default Message;