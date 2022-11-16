import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  color: string;
};

const Button = ({ color }: ButtonProps) => {
  const isYellow = color === "yellow";
  const yellowStyling = "bg-yellow shadow-yellowShadow hover:bg-yellowLight";
  const blueStyling = "bg-blue shadow-blueShadow hover:bg-blueLight";
  const dynamicStyling = isYellow ? yellowStyling : blueStyling;

  return (
    <button
      className={`flex items-center gap-8 rounded-[1rem] px-4 pt-4 pb-6 text-navyDark ${dynamicStyling} transition-all active:mt-2 active:pb-4 active:shadow-noShadow`}
    >
      <FontAwesomeIcon icon={faGoogle} className="fa-2x" />
      <span className="text-h3 font-bold">Sign In With Google</span>
    </button>
  );
};

export default Button;
