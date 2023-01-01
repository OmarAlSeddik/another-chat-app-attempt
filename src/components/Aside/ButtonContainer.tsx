import { useAppContext } from "../../context/AppContext";

const ButtonContainer = () => {
  const { isADirectPage, isAGroupPage, toggleSettingsModal } = useAppContext();

  let text;
  if (isADirectPage) text = "Block User";
  else if (isAGroupPage) text = "Leave Group";
  else {
    text = "Settings";
  }

  const variableStyle =
    text === "Settings"
      ? "bg-primary2 w-full text-white hover:text-white hover:bg-primary5"
      : "text-red-700 transition-all hover:text-red-500";

  const blockUser = () => {
    return "placeholder";
  };

  const leaveGroup = () => {
    return "placeholder";
  };

  const handleClick = () => {
    if (isADirectPage) blockUser();
    else if (isAGroupPage) leaveGroup();
    else if (toggleSettingsModal) toggleSettingsModal();
  };

  return (
    <span
      className={`${variableStyle} cursor-pointer p-[0.8125rem] text-center`}
      onClick={handleClick}
    >
      {text}
    </span>
  );
};

export default ButtonContainer;
