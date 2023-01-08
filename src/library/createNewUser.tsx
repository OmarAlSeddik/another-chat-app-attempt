import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const createNewUser = async (
  uid: string | null | undefined,
  email: string | null | undefined,
  displayName: string | null | undefined,
  photoUrl: string | null | undefined
) => {
  if (!uid) return;
  const id = uid.slice(0, 10);
  const userRef = doc(db, "users", id);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    setDoc(userRef, {
      uid,
      id,
      email,
      displayName,
      photoUrl,
      note: "Hello there! I haven't edited my note yet.",
      activeTheme: "dark",
      activePage: "",
      groupRooms: [],
      directRooms: [],
      blockedUsers: [],
    });
  }
};

export default createNewUser;
