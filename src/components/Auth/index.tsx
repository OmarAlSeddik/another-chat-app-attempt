import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button className="flex items-center gap-8 rounded bg-white p-4 text-primary1 transition-all hover:scale-95">
        <FontAwesomeIcon icon={faGoogle} className="fa-2x" color="#f44336" />
        <span className="text-h3 font-bold">Sign In With Google</span>
      </button>
    </div>
  );
};

export default Auth;
