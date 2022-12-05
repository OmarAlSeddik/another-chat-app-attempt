import { useAppContext } from "../../context/AppContext";

const NavFooter = () => {
  const { toggleAside } = useAppContext();

  const handleClick = () => {
    toggleAside && toggleAside();
  };

  return (
    <div
      className="flex h-12 w-full shrink-0 cursor-pointer gap-4 bg-primary2 p-2 transition-all hover:bg-primary6"
      onClick={handleClick}
    >
      <div className="w-8 rounded-[50%] bg-primary1 " />
      <div className="flex shrink-0 items-center">
        <span>User Display Name</span>
      </div>
    </div>
  );
};

export default NavFooter;
