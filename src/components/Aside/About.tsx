type PropsType = {
  about: string;
};

const About = ({ about }: PropsType) => {
  return (
    <div className="flex w-full flex-col gap-1 p-4">
      <div className="flex items-center">
        <span className="text-text1">About</span>
      </div>
      <textarea
        disabled
        className="h-[11rem] w-full select-text resize-none rounded bg-primary3"
      >
        {about}
      </textarea>
    </div>
  );
};

export default About;
