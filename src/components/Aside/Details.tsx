type PropsType = {
  name: string;
  id: string;
};

const Details = ({ name, id }: PropsType) => {
  return (
    <div className="flex flex-col items-center py-4">
      <div className="mb-4 h-[8rem] w-[8rem] rounded-[50%] bg-primary1" />
      <span className="select-text text-large">{name}</span>
      <span className="cursor-pointer text-text1 hover:text-text3">{id}</span>
    </div>
  );
};

export default Details;
