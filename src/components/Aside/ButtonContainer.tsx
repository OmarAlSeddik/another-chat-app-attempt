type PropsType = {
  type: string;
};

const ButtonContainer = ({ type }: PropsType) => {
  if (type === "settings") return <div>Settings</div>;

  const text = type === "group" ? "Leave Group" : "Block User";

  return (
    <span className="cursor-pointer p-[0.8125rem] text-[#a02d2f] hover:text-[#d83c3e]">
      {text}
    </span>
  );
};

export default ButtonContainer;
