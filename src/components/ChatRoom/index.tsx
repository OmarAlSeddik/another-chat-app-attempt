import { useSwipeable } from "react-swipeable";
import { useAppContext } from "../../context/AppContext";
import MainBody from "./MainBody";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

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
        mobileAsideIsExpanded ? toggleAside("group") : toggleNavBar();
      }
    },
    onSwipedLeft: () => {
      if (toggleNavBar && toggleAside) {
        mobileNavBarIsExpanded ? toggleNavBar() : toggleAside("group");
      }
    },
  });

  return (
    <div
      className={`flex w-full shrink-0 flex-col transition-all
      ${mobileAsideIsExpanded && "ml-[-20rem] md:ml-0"} md:shrink`}
      {...handlers}
    >
      <MainHeader />
      <hr className="border-primary1" />
      <MainBody />
      <MainFooter />
    </div>
  );
};

export default ChatRoom;
