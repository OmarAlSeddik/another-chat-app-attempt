import { useSwipeable } from "react-swipeable";
import { useAppContext } from "../../context/AppContext";
import RoomBody from "./RoomBody";
import RoomFooter from "./RoomFooter";

const ChatRoom = () => {
  const {
    mobileNavBarIsExpanded,
    mobileAsideIsExpanded,
    toggleNavBar,
    toggleAside,
  } = useAppContext();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (toggleNavBar && toggleAside) {
        mobileAsideIsExpanded ? toggleAside() : toggleNavBar();
      }
    },
    onSwipedLeft: () => {
      if (toggleNavBar && toggleAside) {
        mobileNavBarIsExpanded ? toggleNavBar() : toggleAside();
      }
    },
  });

  return (
    <div
      className={`relative mt-12 flex w-full shrink-0 flex-col transition-all
      ${mobileAsideIsExpanded && "ml-[-20rem] lg:ml-0"} lg:shrink`}
      {...handlers}
    >
      <RoomBody />
      <RoomFooter />
    </div>
  );
};

export default ChatRoom;
