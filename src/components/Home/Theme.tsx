import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Theme = () => {
  return (
    <div className="flex w-[15rem] flex-col gap-2 rounded bg-primary3 pt-2">
      <span className="text-center text-large">Theme Mode</span>
      <div className="flex h-12 gap-2 bg-primary2 p-2">
        <button className="w-1/2 rounded bg-primary6 hover:bg-primary4">
          <FontAwesomeIcon icon={faMoon} className="fa-lg" />
        </button>
        <button className="w-1/2 rounded hover:bg-primary4">
          <FontAwesomeIcon icon={faSun} className="fa-lg" />
        </button>
      </div>
    </div>
  );
};

export default Theme;
