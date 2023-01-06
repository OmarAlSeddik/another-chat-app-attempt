import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const newMessage = async (
  user: string | null | undefined,
  content: string | null | undefined,
  room: string | null | undefined,
  isGroup: boolean | null | undefined
) => {
  if (!user || !room) return;
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const dateString = `${day}/${month}/${year} ${hour}:${minute}`;
  const roomRef = isGroup ? doc(db, "groups", room) : doc(db, "direct", room);
  const docSnap = await getDoc(roomRef);

  if (!docSnap.exists()) {
    setDoc(roomRef, {
      messages: [],
    });
  }
};

export default newMessage;
// WIP
