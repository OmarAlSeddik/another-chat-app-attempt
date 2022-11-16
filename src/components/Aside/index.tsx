import AsideBody from "./AsideBody";
import AsideFooter from "./AsideFooter";
import AsideHead from "./AsideHead";

const Aside = () => {
  return (
    <nav className="flex h-screen w-[15rem] flex-col bg-navy">
      <AsideHead />
      <AsideBody />
      <AsideFooter />
    </nav>
  );
};

export default Aside;
