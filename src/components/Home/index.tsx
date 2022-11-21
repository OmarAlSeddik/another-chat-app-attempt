const Home = () => {
  return (
    <div className="bg-grey flex grow flex-col items-center gap-4 p-4">
      <div className="flex w-full flex-wrap justify-center gap-4">
        <div className="flex w-[20rem] flex-col gap-2 rounded-2xl bg-primary3 p-4">
          <div className="flex items-center justify-between">
            <label htmlFor="user-id-input" className="text-text1">
              Direct Message
            </label>
            <button className="rounded bg-primary4 px-4 hover:bg-primary6">
              Confirm
            </button>
          </div>
          <input
            id="user-id-input"
            type="text"
            placeholder="Enter User ID..."
            className="flex h-12 w-full flex-shrink-0 items-center rounded bg-primary5 px-2 outline-none"
          />
        </div>
        <div className="flex w-[20rem] flex-col gap-2 rounded-2xl bg-primary3 p-4">
          <div className="flex items-center justify-between">
            <label htmlFor="user-id-input" className="text-text1">
              Enter a Group
            </label>
            <button className="rounded bg-primary4 px-4 hover:bg-primary6">
              Confirm
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Group ID..."
            className="flex h-12 w-full flex-shrink-0 items-center rounded bg-primary5 px-2 outline-none"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg bg-primary3 p-4 sm:w-[20rem] lg:w-fit">
        <div className="h-[8rem] w-[8rem] rounded-[50%] bg-primary1" />
        <div className="flex w-[18rem] flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-text1">Username</span>
            <span>Some User Name</span>
          </div>
          <div className="flex flex-col">
            <span className="text-text1">ID</span>
            <span>Some User ID</span>
          </div>
          <div className="flex flex-col">
            <span className="text-text1">Note</span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati error, placeat molestias et harum a sit illum.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
