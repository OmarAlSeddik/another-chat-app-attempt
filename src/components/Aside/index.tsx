import Room from "./Room";
import SearchInput from "./SearchInput";

const Aside = () => {
  const rooms = [
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
    { displayName: "User", photoUrl: "User" },
  ];

  return (
    <div className="flex w-[15rem] flex-shrink-0 flex-col items-center border-l border-primary1 bg-primary3">
      <div className="flex flex-col items-center py-4">
        <div className="mb-4 h-[8rem] w-[8rem] rounded-[50%] bg-primary1" />
        <span className="">Group Name</span>
        <span className="cursor-pointer text-text1 hover:text-text3">
          Group ID
        </span>
      </div>
      <hr className="w-full border-primary1" />
      <div className="p-4">
        <span className="text-text1">About</span>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit.
      </div>
      <hr className="w-full border-primary1" />
      <span className="cursor-pointer p-4 text-[#a02d2f] hover:text-[#d83c3e]">
        Leave Group
      </span>
      <hr className="w-full border-primary1" />
      <span className="p-4">Group Members</span>
      <hr className="w-full border-primary1" />
      <SearchInput />
      <div className="scrollbar flex w-full grow flex-col gap-2 overflow-y-scroll p-2">
        {rooms.map((room, index) => (
          <Room
            displayName={room.displayName}
            photoUrl={room.photoUrl}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Aside;
