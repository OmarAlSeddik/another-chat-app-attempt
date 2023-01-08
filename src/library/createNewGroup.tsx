import { db } from "@/firebase";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const createNewGroup = async (
  adminId: string | null | undefined,
  displayName: string | null | undefined,
  photoUrl: string | null | undefined,
  note: string | null | undefined
) => {
  if (!adminId) return;
  const id = adminId.slice(0, 2) + new Date().getTime();
  const groupRef = doc(db, "groups", id);
  const userRef = doc(db, "users", adminId);
  const docSnap = await getDoc(groupRef);
  if (!docSnap.exists()) {
    setDoc(groupRef, {
      id,
      displayName,
      photoUrl,
      note,
      adminId,
      members: [adminId],
      bannedUsers: [],
      messages: [],
    });
    updateDoc(userRef, {
      groupRooms: arrayUnion(id),
    });
  }
};

export default createNewGroup;
