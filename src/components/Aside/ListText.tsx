type PropsType = { asideDisplay: string };

const ListText = ({ asideDisplay }: PropsType) => {
  let text;
  if (asideDisplay === "user") text = "Mutual Groups";
  if (asideDisplay === "group") text = "Group Members";
  if (asideDisplay === "personal") text = "Blocked Users";

  return <span className="p-[0.8125rem]">{text}</span>;
};

export default ListText;
