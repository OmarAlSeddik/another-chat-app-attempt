import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavHead = () => {
  return (
    <div className="flex h-12 gap-2 rounded bg-primary2 p-2">
      <button className="w-1/2 rounded bg-primary6 hover:bg-primary3">
        <FontAwesomeIcon icon={faUser} className="fa-lg" />
      </button>
      <button className="w-1/2 rounded hover:bg-primary3">
        <FontAwesomeIcon icon={faUserGroup} className="fa-lg" />
      </button>
    </div>
  );
};

export default NavHead;
