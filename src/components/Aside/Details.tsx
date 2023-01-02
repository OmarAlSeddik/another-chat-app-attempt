const Details = () => {
  const photoUrl = "N";
  const id = "EbTlRB2sxC";
  const name = "Name";

  return (
    <div className="relative flex w-full flex-col items-center py-2">
      <div className="mb-4 flex h-[8rem] w-[8rem] items-center justify-center rounded-[50%] bg-primary1">
        {photoUrl}
      </div>
      <span className="select-text text-large">{name}</span>
      <span className="cursor-pointer text-text1 hover:text-text3">{id}</span>
    </div>
  );
};

export default Details;
