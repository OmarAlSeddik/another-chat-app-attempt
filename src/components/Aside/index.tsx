import About from "./About";
import ButtonContainer from "./ButtonContainer";
import Details from "./Details";
import List from "./List";
import ListText from "./ListText";
import SearchInput from "./SearchInput";

const Aside = () => {
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

  const type = "settings";
  const photoUrl = "N";
  const id = "123456789";
  const name = "Name";
  const about =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

  return (
    <div className="flex w-[15rem] flex-shrink-0 flex-col items-center border-l border-primary1 bg-primary3">
      <Details name={name} id={id} photoUrl={photoUrl} type={type} />
      <hr className="w-full border-primary1" />
      <About about={about} type={type} />
      <hr className="w-full border-primary1" />
      <ButtonContainer type={type} />
      <hr className="w-full border-primary1" />
      <ListText type={type} />
      <hr className="w-full border-primary1" />
      <SearchInput />
      <hr className="w-full border-primary1" />
      <List rooms={rooms} />
    </div>
  );
};

export default Aside;
