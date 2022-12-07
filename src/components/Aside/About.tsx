type PropsType = {
  about: string;
};

const About = ({ about }: PropsType) => {
  return (
    <div className="flex w-full flex-col gap-1 p-4">
      <div className="flex items-center">
        <span className="text-text1">About</span>
      </div>
      <div className="h-[5.5rem] w-full select-text resize-none rounded bg-primary3">
        {about}
      </div>
    </div>
  );
};

export default About;
