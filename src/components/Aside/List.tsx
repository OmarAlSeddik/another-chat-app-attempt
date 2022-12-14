type RoomProps = {
  photoUrl: string;
  displayName: string;
};

const Room = ({ photoUrl, displayName }: RoomProps) => {
  return (
    <div className="flex h-12 shrink-0 cursor-pointer gap-4 rounded p-2 hover:bg-primary6">
      <div className="flex w-8 items-center justify-center rounded-[50%] bg-primary1">
        {photoUrl}
      </div>
      <div className="flex items-center">
        <span>{displayName}</span>
      </div>
    </div>
  );
};

const List = () => {
  const rooms = [
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
    { displayName: "User", photoUrl: "U" },
  ];

  return (
    <div className="scrollbar flex min-h-[20rem] w-full grow flex-col gap-2 overflow-y-scroll p-2">
      {rooms.map((room, index) => (
        <Room
          displayName={room.displayName}
          photoUrl={room.photoUrl}
          key={index}
        />
      ))}
    </div>
  );
};

export default List;
