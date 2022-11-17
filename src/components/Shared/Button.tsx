import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = () => {
  return (
    <button
      className="flex items-center gap-8 rounded-3xl bg-button2 px-4 pt-4 pb-6 text-primary1
      shadow-buttonShadow1 transition-all hover:bg-button3 active:mt-2 active:pb-4 active:shadow-noShadow"
    >
      <FontAwesomeIcon icon={faGoogle} className="fa-2x" color="#f44336" />
      <span className="text-h3 font-bold">Sign In With Google</span>
    </button>
  );
};

export default Button;
