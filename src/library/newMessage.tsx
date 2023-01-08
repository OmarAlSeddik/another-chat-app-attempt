import { db } from "@/firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const newMessage = async (
  user: string | null | undefined,
  content: string | null | undefined,
  room: string | null | undefined,
  isGroup: boolean | null | undefined
) => {
  if (!user || !room) return;

  const getDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    let hour = date.getHours();
    let hourString = String(hour).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    let session = "AM";
    if (hour === 0) hourString = "12";
    if (hour > 12) {
      hour -= 12;
      hourString = String(hour).padStart(2, "0");
      session = "PM";
    }
    const dateString = `${day}/${month}/${year} ${hourString}:${minute} ${session}`;
    return dateString;
  };

  const roomRef = isGroup ? doc(db, "groups", room) : doc(db, "direct", room);
  const docSnap = await getDoc(roomRef);

  const message = {
    date: getDate(),
    user,
    content,
  };

  if (!docSnap.exists()) {
    updateDoc(roomRef, {
      messages: arrayUnion(message),
    });
  }
};

export default newMessage;
