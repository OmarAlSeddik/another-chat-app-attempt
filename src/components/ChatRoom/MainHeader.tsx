import { faBars, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../context/AppContext";

const RoomHeader = () => {
  const {
    toggleNavBar,
    openAside,
    closeAside,
    asideIsExpanded,
    mobileAsideIsExpanded,
    isMobile,
  } = useAppContext();

  const handleAsideToggle = () => {
    if ((!isMobile && asideIsExpanded) || (isMobile && mobileAsideIsExpanded))
      closeAside && closeAside();
    else openAside && openAside("group");
  };

  return (
    <div className="flex h-12 flex-shrink-0 items-center justify-between px-4">
      <button
        className="flex items-center justify-center transition-all hover:scale-90"
        onClick={toggleNavBar}
      >
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
      <span className="">Room / User Name</span>
      <button
        className="flex w-8 items-center justify-center transition-all hover:scale-90"
        onClick={handleAsideToggle}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} className="fa-2x" />
      </button>
    </div>
  );
};

export default RoomHeader;
