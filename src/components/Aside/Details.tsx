import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type PropsType = {
  name: string;
  id: string;
  type: string;
  photoUrl: string;
};

const Details = ({ name, id, type, photoUrl }: PropsType) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative flex w-full flex-col items-center py-4">
      <div
        className={`mb-4 flex h-[8rem] w-[8rem] items-center justify-center ${
          type === "settings" && "cursor-pointer hover:scale-110"
        } rounded-[50%] bg-primary1`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {photoUrl}
        {type === "settings" && hovering && <FontAwesomeIcon icon={faPencil} />}
      </div>
      <span className="select-text text-large">{name}</span>
      {type === "settings" && (
        <button className="absolute top-3/4 left-2/3 flex rounded bg-primary4 py-1 px-6 hover:scale-110 hover:bg-primary6">
          <FontAwesomeIcon icon={faPencil} />
        </button>
      )}
      <span className="cursor-pointer text-text1 hover:text-text3">{id}</span>
    </div>
  );
};

export default Details;
