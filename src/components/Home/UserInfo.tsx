const UserInfo = () => {
  return (
    <div className="flex w-[20rem] flex-wrap items-center justify-center gap-4 rounded-lg bg-primary3 p-4 lg:w-fit">
      <div className="h-[8rem] w-[8rem] rounded-[50%] bg-primary1" />
      <div className="flex w-[18rem] flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-text1">Username</span>
            <button className="rounded bg-primary4 px-4 hover:bg-primary6">
              Change
            </button>
          </div>
          <span>Some User Name</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-text1">ID</span>
            <button className="rounded bg-primary4 px-4 hover:bg-primary6">
              Change
            </button>
          </div>
          <span>Some User ID</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-text1">Note</span>
            <button className="rounded bg-primary4 px-4 hover:bg-primary6">
              Change
            </button>
          </div>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            error, placeat molestias et harum a sit illum.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
