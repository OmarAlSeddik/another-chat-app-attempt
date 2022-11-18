import { faBars, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RoomHeader = () => {
  return (
    <div className="flex h-12 flex-shrink-0 items-center justify-between px-4">
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

export default RoomHeader;
