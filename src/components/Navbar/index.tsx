import { useSwipeable } from "react-swipeable";
import { useAppContext } from "../../context/AppContext";
import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavHeader from "./NavHeader";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { navBarIsExpanded, mobileNavBarIsExpanded, toggleNavBar } =
    useAppContext();

  const dynamicStyle = navBarIsExpanded
    ? "md:w-[20rem]"
    : "md:w-[0] overflow-hidden";
  const mobileDynamicStyle = mobileNavBarIsExpanded
    ? "w-[20rem]"
    : "w-[0] overflow-hidden";

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (toggleNavBar) toggleNavBar();
    },
  });

  return (
    <nav
      className={`flex ${dynamicStyle} ${mobileDynamicStyle} flex-shrink-0 flex-col items-center
      border-r border-primary1 bg-primary3 transition-all`}
      {...handlers}
    >
      <NavHeader />
      <hr className="w-full border-primary1" />
      <SearchInput />
      <hr className="w-full border-primary1" />
      <NavBody />
      <hr className="w-full border-primary1" />
      <NavFooter />
    </nav>
  );
};

export default Navbar;
