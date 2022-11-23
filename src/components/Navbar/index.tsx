import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavHead from "./NavHead";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="flex h-screen w-[15rem] flex-shrink-0 flex-col items-center border-r border-primary1 bg-primary3">
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
