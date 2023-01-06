import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const createNewGroup = async (
  admin: string | null | undefined,
  displayName: string | null | undefined,
  photoUrl: string | null | undefined,
  note: string | null | undefined
) => {
  if (!admin) return;
  const id = admin.slice(0, 2) + new Date().getTime();
  const groupRef = doc(db, "groups", id);
  const docSnap = await getDoc(groupRef);
  if (!docSnap.exists()) {
    setDoc(groupRef, {
      id,
      displayName,
      photoUrl,
      note,
      admin,
      members: [admin],
      bannedUsers: [],
      messages: [],
    });
  }
};

export default createNewGroup;
