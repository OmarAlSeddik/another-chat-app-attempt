type RoomProps = {
  photoUrl: string;
  displayName: string;
  isActive: boolean;
};

const Room = ({ photoUrl, displayName, isActive }: RoomProps) => {
  return (
    <div
      className={`flex h-12 shrink-0 cursor-pointer gap-4 ${
        isActive ? "bg-primary5 text-text3" : "bg-primary3"
      } rounded p-2 text-text1 hover:bg-primary4 hover:text-text3`}
    >
      <div className="flex w-8 items-center justify-center rounded-[50%] bg-primary1">
        {photoUrl}
      </div>
      <div className="flex items-center">
        <span>{displayName}</span>
      </div>
    </div>
  );
};

export default Room;
