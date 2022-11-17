const NavFooter = () => {
  return (
    <div className="flex h-12 shrink-0 cursor-pointer gap-4 bg-primary2 p-2 hover:bg-primary6">
      <div className="w-8 rounded-[50%] bg-primary1" />
      <div className="flex items-center">
        <span>User Display Name</span>
      </div>
    </div>
  );
};

export default NavFooter;
