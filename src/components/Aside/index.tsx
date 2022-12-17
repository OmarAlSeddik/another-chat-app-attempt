import { useSwipeable } from "react-swipeable";
import { useAppContext } from "../../context/AppContext";
import About from "./About";
import ButtonContainer from "./ButtonContainer";
import Details from "./Details";
import List from "./List";
import ListText from "./ListText";
import SearchInput from "./SearchInput";

const Aside = () => {
  const {
    toggleAside,
    asideIsExpanded,
    mobileAsideIsExpanded,
    isADirectPage,
    isAGroupPage,
  } = useAppContext();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      toggleAside && toggleAside();
    },
  });

  const dynamicStyle = asideIsExpanded
    ? "lg:w-[20rem]"
    : "lg:w-[0] overflow-hidden";
  const mobileDynamicStyle = mobileAsideIsExpanded
    ? "w-[20rem]"
    : "w-[0] overflow-hidden";

  if (!isADirectPage && !isAGroupPage) return <div></div>;

  return (
    <aside
      className={`scrollbar flex ${dynamicStyle} ${mobileDynamicStyle} mt-12 flex-shrink-0
      flex-col items-center border-l border-primary1 bg-primary3 transition-all`}
      {...handlers}
    >
      <Details />
      <hr className="w-full border-primary1" />
      <About />
      <hr className="w-full border-primary1" />
      <ButtonContainer />
      <hr className="w-full border-primary1" />
      <ListText />
      <hr className="w-full border-primary1" />
      <SearchInput />
      <hr className="w-full border-primary1" />
      <List />
    </aside>
  );
};

export default Aside;
