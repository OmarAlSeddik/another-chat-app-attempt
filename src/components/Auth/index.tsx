import { auth } from "@/firebase";
import createNewUser from "@/library/createNewUser";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Auth = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleClick = async () => {
    const response = await signInWithGoogle();
    const user = response?.user;
    createNewUser(user?.uid, user?.email, user?.displayName, user?.photoURL);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <button
        className="flex items-center gap-8 rounded bg-white p-4 text-primary1 transition-all hover:scale-105"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faGoogle} className="fa-2x" color="#f44336" />
        <span className="text-h3 font-bold">Sign In With Google</span>
      </button>
    </div>
  );
};

export default Auth;
