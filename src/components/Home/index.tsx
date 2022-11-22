import DirectMessageInput from "./DirectMessageInput";
import EnterGroupInput from "./EnterGroupInput";
import Theme from "./Theme";
import UserInfo from "./UserInfo";

const Home = () => {
  return (
    <div className="bg-grey flex grow flex-col items-center gap-4 p-4">
      <div className="flex w-full flex-wrap justify-center gap-4">
        <DirectMessageInput />
        <EnterGroupInput />
      </div>
      <UserInfo />
      <Theme />
    </div>
  );
};

export default Home;
