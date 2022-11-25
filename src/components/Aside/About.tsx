import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropsType = {
  type: string;
  about: string;
};

const About = ({ about, type }: PropsType) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center justify-between">
        <span className="text-text1">About</span>
        {type === "settings" && (
          <button className="flex rounded bg-primary4 py-1 px-6 hover:scale-110 hover:bg-primary6">
            <FontAwesomeIcon icon={faPencil} />
          </button>
        )}
      </div>
      <span className="select-text">{about}</span>
    </div>
  );
};

export default About;
