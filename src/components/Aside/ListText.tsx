type PropsType = { type: string };

const ListText = ({ type }: PropsType) => {
  let text;
  if (type === "user") text = "Mutual Groups";
  if (type === "group") text = "Group Members";
  if (type === "settings") text = "Blocked Users";

  return <span className="p-[0.8125rem]">{text}</span>;
};

export default ListText;
