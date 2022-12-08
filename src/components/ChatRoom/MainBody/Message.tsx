const Message = () => {
  return (
    <div className="flex gap-4 px-4 py-1 md:hover:bg-primary6">
      <div className="h-10 w-10 flex-shrink-0 cursor-pointer rounded-[50%] bg-primary1 md:hover:shadow-xl" />
      <div className="flex flex-col">
        <div className="flex items-end gap-4">
          <span className="cursor-pointer font-bold hover:underline">
            User Name
          </span>
          <span className="text-small text-text1">Today at 12:15 am</span>
        </div>
        <span className="select-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          sapiente dignissimos iure pariatur velit consequatur earum temporibus
          magni commodi beatae impedit autem explicabo officia blanditiis quia,
          delectus maiores deleniti ea?
        </span>
      </div>
    </div>
  );
};

export default Message;
