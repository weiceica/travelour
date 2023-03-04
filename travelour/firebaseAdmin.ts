import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACC_KEY as string
);

if(!getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}
const dbb = admin.firestore();
export {dbb};