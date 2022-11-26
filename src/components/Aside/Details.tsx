type PropsType = {
  name: string;
  id: string;
  photoUrl: string;
};

const Details = ({ name, id, photoUrl }: PropsType) => {
  return (
    <div className="flex w-full flex-col items-center py-4">
      <div className="mb-4 flex h-[8rem] w-[8rem] items-center justify-center rounded-[50%] bg-primary1">
        {photoUrl}
      </div>
      <span className="select-text text-large">{name}</span>
      <span className="cursor-pointer text-text1 hover:text-text3">{id}</span>
    </div>
  );
};

export default Details;
