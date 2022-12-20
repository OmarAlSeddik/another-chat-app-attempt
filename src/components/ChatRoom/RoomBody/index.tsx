import Message from "./Message";

const RoomBody = () => {
  const messages = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <div className="scrollbar flex grow flex-col gap-4 pb-9">
      {messages.map((message, index) => (
        <Message key={index} id={index} />
      ))}
    </div>
  );
};

export default RoomBody;
