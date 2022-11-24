type PropsType = {
  about: string;
};

const About = ({ about }: PropsType) => {
  return (
    <div className="p-4">
      <span className="text-text1">About</span>
      <br />
      <span className="select-text">{about}</span>
    </div>
  );
};

export default About;
