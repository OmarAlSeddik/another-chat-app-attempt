import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

const updateUserName = (id: string, newName: string) => {
  const userRef = doc(db, "users", id);

  updateDoc(userRef, {
    displayName: newName,
  });
};

export default updateUserName;
