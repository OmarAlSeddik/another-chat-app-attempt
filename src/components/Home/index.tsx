import { useAppContext } from "@/context/AppContext";
import { useSwipeable } from "react-swipeable";
import Guide from "./Guide";
import Links from "./Links";

const Home = () => {
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
      className={`scrollbar mt-12 flex w-full shrink-0 select-text flex-col gap-4 p-4 transition-all
      ${mobileAsideIsExpanded && "ml-[-20rem] lg:ml-0"} lg:shrink`}
      {...handlers}
    >
      <Guide />
      <Links />
    </div>
  );
};

export default Home;
