const Aside = () => {
  return (
    <div className="flex w-[15rem] flex-shrink-0 flex-col items-center border-l border-primary1 bg-primary3">
      <div className="flex flex-col items-center py-4">
        <div className="mb-4 h-[6rem] w-[6rem] rounded-[50%] bg-primary1" />
        <span className="text-text3">Group Name / User Name</span>
        <span className="text-text1">X Members / User ID</span>
      </div>
      <hr className="w-full border-primary1" />
      <div className="p-4">
        <span className="text-text1">About</span>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
        dolor sit amet, consectetur adipisicing elit.
      </div>
      <hr className="w-full border-primary1" />
    </div>
  );
};

export default Aside;
