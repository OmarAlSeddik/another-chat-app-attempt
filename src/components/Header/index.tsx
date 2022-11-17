import { faBars, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="flex h-12 items-center justify-between px-4 shadow">
      <button className="flex items-center justify-center hover:scale-110">
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
      <span className="">Room / User Name</span>
      <button className="flex w-8 items-center justify-center hover:scale-110">
        <FontAwesomeIcon icon={faEllipsisVertical} className="fa-2x" />
      </button>
    </div>
  );
};

export default Header;
