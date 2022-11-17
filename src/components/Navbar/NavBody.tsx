import Room from "./Room";

const NavBody = () => {
  const rooms = [
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
    { displayName: "Room", photoUrl: "Room" },
  ];

  return (
    <div className="scrollbar flex grow flex-col gap-2 overflow-y-scroll p-2">
      {rooms.map((room, index) => (
        <Room displayName={room.displayName} photoUrl="Some Url" key={index} />
      ))}
    </div>
  );
};

export default NavBody;
