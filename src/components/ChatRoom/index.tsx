import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import RoomHeader from "./RoomHeader";

const ChatRoom = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-x-auto">
      <RoomHeader />
      <hr className="border-primary1" />
      <ChatBox />
      <ChatInput />
    </div>
  );
};

export default ChatRoom;
