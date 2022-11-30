import { useAppContext } from "../../context/AppContext";
import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavHead from "./NavHead";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { navBarIsExpanded, mobileNavBarIsExpanded } = useAppContext();

  const dynamicStyle = navBarIsExpanded
    ? "md:w-[15rem]"
    : "md:w-[0] overflow-hidden";
  const mobileDynamicStyle = mobileNavBarIsExpanded
    ? "w-[15rem]"
    : "w-[0] overflow-hidden";

  return (
    <nav
      className={`flex h-screen ${dynamicStyle} ${mobileDynamicStyle} flex-shrink-0 flex-col items-center border-r border-primary1 bg-primary3 transition-all`}
    >
      <NavHead />
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
