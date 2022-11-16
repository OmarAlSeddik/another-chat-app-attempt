import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button className="flex items-center gap-8 rounded-[1rem] bg-yellow px-4 pt-4 pb-6 text-navyDark shadow-yellowShadow transition-all hover:bg-yellowLight active:mt-2 active:pb-4 active:shadow-noShadow">
        <FontAwesomeIcon icon={faGoogle} className="fa-2x" />
        <span className="text-h3 font-bold">Sign In With Google</span>
      </button>
    </div>
  );
};

export default Auth;
