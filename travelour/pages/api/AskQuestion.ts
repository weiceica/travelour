// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  query  from "../../util/queryApi";
import  admin  from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbb } from "../../firebaseAdmin";

type Data = {
  ans: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {prompt, chatId, model, session} = req.body;
  if(!chatId){
    res.status(400).json({
        ans: "Please use a valid chatID!"
    });
    return;
  }

  if(!prompt){
    res.status(400).json({
        ans: "Please enter a valid prompt!"
    });
    return;
  }

  let response = await query(prompt, chatId, model)
  const msg: Message = {
    text: response || "Travelour has yet to provide this functionality",
    timestamp: admin.firestore.Timestamp.now(),
    user: {
        _id: 'Travelour',
        name: 'Travelour',
        avatar: 'https://www.linkpicture.com/q/imageedit_2_6123759516.png',
    },
  };
  await dbb.collection('users').doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(msg);
  res.status(200).json({ans: msg.text});
}