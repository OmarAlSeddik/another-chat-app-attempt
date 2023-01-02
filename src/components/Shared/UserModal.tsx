import { useAppContext } from "@/context/AppContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserModal = () => {
  const { userModalIsOpen, toggleUserModal } = useAppContext();

  if (!userModalIsOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)]"
        onClick={toggleUserModal}
      />
      <div className="absolute top-1/2 left-1/2 z-50 w-[20rem] translate-x-[-50%] translate-y-[-50%] rounded bg-primary3 p-2">
        <div className="relative flex flex-col rounded bg-primary2">
          <button
            className="absolute top-1 right-1 rounded bg-red-700 px-2 py-0.5 transition-all hover:bg-red-500"
            onClick={toggleUserModal}
          >
            <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" />
          </button>
          <div className="flex gap-4 p-4">
            <div className="h-20 w-20 flex-shrink-0 rounded-[50%] bg-primary1" />
            <div className="flex w-full flex-col justify-end gap-1">
              <span className="select-text text-large font-bold">
                User Name
              </span>
              <span className="select-text">#UserID</span>
            </div>
          </div>
          <hr className="border-primary6" />
          <p className="scrollbar h-[5.5rem] w-full select-text resize-none rounded px-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <hr className="border-primary6" />
          <button className="bg-primary1 p-2 transition-all hover:bg-primary6">
            Message
          </button>
          <hr className="border-primary6" />
          <button className="bg-primary1 p-2 transition-all hover:bg-primary6">
            Copy ID
          </button>
          <hr className="border-primary6" />
          <button className="rounded-b bg-red-700 p-2 transition-all hover:bg-red-500">
            Block
          </button>
        </div>
      </div>
    </>
  );
};

export default UserModal;
