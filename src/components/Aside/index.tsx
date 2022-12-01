import { useAppContext } from "../../context/AppContext";
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

  const type = "group";
  const photoUrl = "N";
  const id = "id0123456789";
  const name = "Name";
  const about =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

  const { asideIsExpanded, mobileAsideIsExpanded } = useAppContext();

  const dynamicStyle = asideIsExpanded
    ? "md:w-[20rem]"
    : "md:w-[0] overflow-hidden";
  const mobileDynamicStyle = mobileAsideIsExpanded
    ? "w-[20rem]"
    : "w-[0] overflow-hidden";

  return (
    <div
      className={`scrollbar flex ${dynamicStyle} ${mobileDynamicStyle} h-screen flex-shrink-0 flex-col items-center overflow-y-scroll border-l border-primary1 bg-primary3 transition-all`}
    >
      <Details name={name} id={id} photoUrl={photoUrl} />
      <hr className="w-full border-primary1" />
      <About about={about} />
      <hr className="w-full border-primary1" />
      <ButtonContainer type={type} photoUrl={photoUrl} />
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
