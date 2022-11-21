import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavHead from "./NavHead";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="flex h-screen w-[15rem] flex-shrink-0 flex-col border-r border-primary1 bg-primary3">
      <NavHead />
      <hr className="border-primary1" />
      <SearchInput />
      <NavBody />
      <hr className="border-primary1" />
      <NavFooter />
    </nav>
  );
};

export default Navbar;
