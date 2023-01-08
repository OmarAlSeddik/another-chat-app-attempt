import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

const updateUserNote = (id: string, newNote: string) => {
  const userRef = doc(db, "users", id);

  updateDoc(userRef, {
    note: newNote,
  });
};

export default updateUserNote;
