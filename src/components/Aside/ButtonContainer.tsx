import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropsType = {
  type: string;
};

const ButtonContainer = ({ type }: PropsType) => {
  if (type === "settings")
    return (
      <div className="flex h-12 w-full shrink-0 gap-2 rounded bg-primary2 p-2">
        <button className="w-1/2 rounded bg-primary6 hover:bg-primary4">
          <FontAwesomeIcon icon={faMoon} className="fa-lg" />
        </button>
        <button className="w-1/2 rounded hover:bg-primary4">
          <FontAwesomeIcon icon={faSun} className="fa-lg" />
        </button>
      </div>
    );

  const text = type === "group" ? "Leave Group" : "Block User";

  return (
    <span className="cursor-pointer p-[0.8125rem] text-[#a02d2f] hover:text-[#d83c3e]">
      {text}
    </span>
  );
};

export default ButtonContainer;
