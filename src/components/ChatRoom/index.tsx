import { useSwipeable } from "react-swipeable";
import { useAppContext } from "../../context/AppContext";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import RoomHeader from "./RoomHeader";

const ChatRoom = () => {
  const {
    mobileNavBarIsExpanded,
    mobileAsideIsExpanded,
    toggleNavBar,
    toggleAside,
  } = useAppContext();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (toggleNavBar) toggleNavBar();
    },
    onSwipedLeft: () => {
      if (toggleAside) toggleAside();
    },
  });

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const handleClick = () => {
    if (isMobile && toggleAside && toggleNavBar) {
      if (mobileNavBarIsExpanded) toggleNavBar();
      if (mobileAsideIsExpanded) toggleAside();
    }
  };

  const expandedMobile =
    (mobileNavBarIsExpanded || mobileAsideIsExpanded) && isMobile;

  return (
    <div
      className={`flex w-full shrink-0 flex-col transition-all ${
        expandedMobile && "pointer-events-none"
      } ${mobileAsideIsExpanded && "ml-[-20rem] md:ml-0"} md:shrink`}
      {...handlers}
    >
      {expandedMobile && (
        <div
          className="pointer-events-auto absolute z-50 h-full w-full bg-[rgba(0,0,0,0.5)]"
          onClick={handleClick}
        />
      )}
      <RoomHeader />
      <hr className="border-primary1" />
      <ChatBox />
      <ChatInput />
    </div>
  );
};

export default ChatRoom;
