import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavHeader = () => {
  return (
    <div className="flex h-12 w-full shrink-0 gap-2 bg-primary3 p-2">
      <button className="w-1/2 rounded bg-primary6 transition-all hover:bg-primary4">
        <FontAwesomeIcon icon={faUser} className="fa-lg" />
      </button>
      <button className="w-1/2 rounded transition-all hover:bg-primary4">
        <FontAwesomeIcon icon={faUserGroup} className="fa-lg" />
      </button>
    </div>
  );
};

export default NavHeader;
