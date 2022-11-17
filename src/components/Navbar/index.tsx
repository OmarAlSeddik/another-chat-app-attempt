import ButtonContainer from "./ButtonContainer";
import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavHead from "./NavHead";

const Navbar = () => {
  return (
    <nav className="flex h-screen w-[15rem] flex-col bg-primary3">
      <NavHead />
      <ButtonContainer />
      <NavBody />
      <NavFooter />
    </nav>
  );
};

export default Navbar;
