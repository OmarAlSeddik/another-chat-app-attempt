import ButtonContainer from "./ButtonContainer";
import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavHead from "./NavHead";

const Navbar = () => {
  return (
    <nav className="flex h-screen w-[15rem] flex-shrink-0 flex-col bg-primary3">
      <NavHead />
      <hr className="border-primary1" />
      <ButtonContainer />
      <hr className="border-primary1" />
      <NavBody />
      <hr className="border-primary1" />
      <NavFooter />
    </nav>
  );
};

export default Navbar;
