const Home = () => {
  return (
    <div className="bg-grey flex grow flex-col items-center p-4">
      <div className="flex items-center gap-4 rounded-lg bg-primary3 p-4">
        <div className="mb-4 h-[8rem] w-[8rem] rounded-[50%] bg-primary1" />
        <div className="flex w-[20rem] flex-col gap-2">
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
