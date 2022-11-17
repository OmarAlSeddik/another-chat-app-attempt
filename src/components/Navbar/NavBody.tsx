const NavBody = () => {
  return (
    <div className="flex grow flex-col gap-2 p-2">
      <div className="flex h-12 cursor-pointer gap-4 rounded p-2 hover:bg-primary6">
        <div className="w-8 rounded-[50%] bg-primary1" />
        <div className="flex items-center">
          <span>User Display Name</span>
        </div>
      </div>
      <div className="flex h-12 cursor-pointer gap-4 rounded p-2 hover:bg-primary6">
        <div className="w-8 rounded-[50%] bg-primary1" />
        <div className="flex items-center">
          <span>User Display Name</span>
        </div>
      </div>
    </div>
  );
};

export default NavBody;
