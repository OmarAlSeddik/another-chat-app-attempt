type RoomProps = {
  photoUrl: string;
  displayName: string;
};

const Room = ({ photoUrl, displayName }: RoomProps) => {
  return (
    <div className="flex h-12 shrink-0 cursor-pointer gap-4 rounded p-2 hover:bg-primary6">
      <div className="w-8 rounded-[50%] bg-primary1" />
      <div className="flex items-center">
        <span>{displayName}</span>
      </div>
    </div>
  );
};

export default Room;
