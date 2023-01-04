import { auth, db } from "@/firebase";
import { doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

const useLoggedInUser = () => {
  const [authUser, loadingLoggedInUser] = useAuthState(auth);
  const loggedInUserRef = doc(db, "users", authUser?.uid || "placeholder");

  const [userData, loadingData] = useDocumentData(loggedInUserRef);

  const loading = loadingLoggedInUser || loadingData;

  return {
    loading,
    id: userData?.id,
    email: userData?.email,
    displayName: userData?.displayName,
    photoUrl: userData?.photoUrl,
    note: userData?.note,
    activeTheme: userData?.activeTheme,
    activePage: userData?.activePage,
    groupRooms: userData?.grouprooms,
    directRooms: userData?.directRooms,
    blockedUsers: userData?.blockedUsers,
    messages: userData?.messages,
  };
};

export default useLoggedInUser;
