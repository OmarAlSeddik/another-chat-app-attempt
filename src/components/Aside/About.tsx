const About = () => {
  const about =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

  return (
    <div className=" flex w-full flex-col gap-1 p-2">
      <div className="flex items-center">
        <span className="text-text1">About</span>
      </div>
      <div className="scrollbar h-[5.5rem] w-full select-text resize-none overflow-y-scroll rounded bg-primary3">
        {about}
      </div>
    </div>
  );
};

export default About;
