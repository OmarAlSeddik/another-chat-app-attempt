import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";

type PropsType = {
  type: string;
  photoUrl: string;
};

const ButtonContainer = ({ type, photoUrl }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  if (type === "settings")
    return (
      <>
        <div
          className="flex h-12 w-full shrink-0 cursor-pointer items-center
        justify-center gap-2 bg-primary2 p-2 hover:bg-primary6"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faGear} className="fa-lg" />
          <span>Settings</span>
        </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} photoUrl={photoUrl} />
      </>
    );

  const text = type === "group" ? "Leave Group" : "Block User";

  return (
    <span className="cursor-pointer p-[0.8125rem] text-[#a02d2f] hover:text-[#d83c3e]">
      {text}
    </span>
  );
};

export default ButtonContainer;
