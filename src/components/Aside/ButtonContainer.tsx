import { useAppContext } from "../../context/AppContext";

const ButtonContainer = () => {
  const { isADirectPage, isAGroupPage } = useAppContext();

  let text;
  if (isADirectPage) text = "Block User";
  if (isAGroupPage) text = "Leave Group";

  return (
    <span className="cursor-pointer p-[0.8125rem] text-[#a02d2f] hover:text-[#d83c3e]">
      {text}
    </span>
  );
};

export default ButtonContainer;
