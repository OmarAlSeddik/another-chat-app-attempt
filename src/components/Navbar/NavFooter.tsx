import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../context/AppContext";

const NavFooter = () => {
  const { toggleSettingsModal } = useAppContext();
  const toggleModal = () => toggleSettingsModal && toggleSettingsModal();

  return (
    <>
      <div className="flex w-full bg-primary2">
        <div className="flex h-12 shrink-0 grow cursor-pointer gap-4 p-2 transition-all hover:bg-primary6">
          <div className="w-8 rounded-[50%] bg-primary1" />
          <div className="flex shrink-0 items-center">
            <span>User Display Name</span>
          </div>
        </div>
        <div className="flex">
          <button
            className="bg-primary1 px-4 transition-all hover:bg-primary6"
            onClick={toggleModal}
          >
            <FontAwesomeIcon icon={faGear} className="text-[1.5rem]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavFooter;
