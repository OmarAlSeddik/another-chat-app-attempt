import {
  faUser,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../context/AppContext";

const NavHeader = () => {
  const { toggleNavBar } = useAppContext();

  return (
    <div className="flex h-12 w-full shrink-0 gap-2 bg-primary2 p-2">
      <div className="flex grow gap-2">
        <button className="w-1/2 rounded bg-primary6 transition-all hover:bg-primary4">
          <FontAwesomeIcon icon={faUser} className="fa-lg" />
        </button>
        <button className="w-1/2 rounded transition-all hover:bg-primary4">
          <FontAwesomeIcon icon={faUserGroup} className="fa-lg" />
        </button>
      </div>
      <div className="flex justify-end">
        <button
          className="rounded bg-red-700 px-2 py-0.5 transition-all hover:bg-red-500"
          onClick={() => toggleNavBar && toggleNavBar()}
        >
          <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" />
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
