import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonContainer = () => {
  return (
    <div className="flex h-12 shrink-0 gap-2 rounded bg-primary3 p-2 shadow">
      <button
        className="flex w-1/2 items-center justify-center rounded bg-button2 px-2 pt-2 pb-3
        shadow-buttonShadow2 transition-all hover:bg-button3 active:mt-1 active:pb-2 active:shadow-noShadow"
      >
        <FontAwesomeIcon icon={faPlus} color="#202225" />
      </button>
      <button
        className="flex w-1/2 items-center justify-center rounded bg-button2 px-2 pt-2 pb-3
      shadow-buttonShadow2 transition-all hover:bg-button3 active:mt-1 active:pb-2 active:shadow-noShadow"
      >
        <FontAwesomeIcon icon={faFilter} color="#202225" />
      </button>
    </div>
  );
};

export default ButtonContainer;
