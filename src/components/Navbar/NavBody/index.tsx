import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";
import Room from "./Room";

const NavBody = () => {
  const rooms = [
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
    { displayName: "Room", photoUrl: "R" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="scrollbar flex w-full grow flex-col gap-2 p-2">
      <div
        className="flex h-12 shrink-0 cursor-pointer items-center justify-center gap-4
      rounded p-2 text-[#4caf50] hover:bg-primary6"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} className="fa-lg" color="#4caf50" />
        <div className="flex items-center">
          <span>Add a Room</span>
        </div>
      </div>
      {rooms.map((room, index) => (
        <Room
          displayName={room.displayName}
          photoUrl={room.photoUrl}
          key={index}
          isActive={index === 0}
        />
      ))}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavBody;
