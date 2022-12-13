import { faBars, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { toggleNavBar, toggleAside } = useAppContext();

  return (
    <div className="absolute flex h-12 w-full flex-shrink-0 items-center justify-between border-b border-[#202225] px-4">
      <button
        className="flex items-center justify-center transition-all hover:scale-90"
        onClick={toggleNavBar}
      >
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
      <span className="cursor-pointer">NextFire Chat App</span>
      <button
        className="flex w-8 items-center justify-center transition-all hover:scale-90"
        onClick={() => toggleAside && toggleAside()}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} className="fa-2x" />
      </button>
    </div>
  );
};

export default Header;
