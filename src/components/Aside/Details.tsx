import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../context/AppContext";

type PropsType = {
  name: string;
  id: string;
  photoUrl: string;
};

const Details = ({ name, id, photoUrl }: PropsType) => {
  const { toggleAside } = useAppContext();

  return (
    <div className="relative flex w-full flex-col items-center py-2">
      <button
        className="absolute right-2 rounded bg-red-700 px-2 py-0.5 transition-all hover:bg-red-500"
        onClick={() => toggleAside && toggleAside("personal")}
      >
        <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" />
      </button>
      <div className="mb-4 flex h-[8rem] w-[8rem] items-center justify-center rounded-[50%] bg-primary1">
        {photoUrl}
      </div>
      <span className="select-text text-large">{name}</span>
      <span className="cursor-pointer text-text1 hover:text-text3">{id}</span>
    </div>
  );
};

export default Details;
