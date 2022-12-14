import { useAppContext } from "../../context/AppContext";

const ListText = () => {
  const { isAGroupPage, isADirectPage } = useAppContext();

  let text;
  if (isADirectPage) text = "Mutual Groups";
  if (isAGroupPage) text = "Group Members";

  return <span className="p-[0.8125rem]">{text}</span>;
};

export default ListText;
