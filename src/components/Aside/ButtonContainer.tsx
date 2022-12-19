import { useAppContext } from "../../context/AppContext";

const ButtonContainer = () => {
  const { isADirectPage, isAGroupPage, toggleSettingsModal } = useAppContext();

  let text;
  if (isADirectPage) text = "Block User";
  else if (isAGroupPage) text = "Leave Group";
  else {
    text = "Settings";
  }

  const personalStyle =
    "bg-primary2 text-white hover:text-white hover:bg-primary5";

  return (
    <span
      className={`${personalStyle} w-full cursor-pointer p-[0.8125rem]
      text-center text-[#a02d2f] transition-all hover:text-[#d83c3e]`}
      onClick={toggleSettingsModal}
    >
      {text}
    </span>
  );
};

export default ButtonContainer;
