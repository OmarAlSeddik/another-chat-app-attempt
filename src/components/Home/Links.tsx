import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <div className="flex w-fit justify-center gap-8 self-center rounded bg-primary3 px-4 py-2">
      <a
        target="_blank"
        href="https://github.com/OmarAlSeddik/another-chat-app-attempt"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faSquareGithub}
          className="cursor-pointer text-[1.5rem] text-4xl text-text1 transition-all hover:text-text3"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/omaralseddik/"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="cursor-pointer text-[1.5rem] text-4xl text-text1 transition-all hover:text-text3"
        />
      </a>
    </div>
  );
};

export default Links;
