import {
  faMoon,
  faPencil,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAppContext } from "../../context/AppContext";

const SettingsModal = () => {
  const { settingsModalIsOpen, toggleSettingsModal } = useAppContext();
  const logOut = () => signOut(auth);

  if (!settingsModalIsOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)]"
        onClick={toggleSettingsModal}
      />
      <div
        className="absolute top-1/2 left-1/2 z-50 flex w-[20rem] translate-x-[-50%]
      translate-y-[-50%] flex-col rounded bg-primary3 p-2"
      >
        <div className="relative flex flex-col rounded bg-primary2 p-4">
          <button
            className="absolute right-1 top-1 rounded bg-red-700 px-2 py-0.5 transition-all hover:bg-red-500"
            onClick={toggleSettingsModal}
          >
            <FontAwesomeIcon icon={faXmark} className="text-[1.5rem]" />
          </button>
          <div className="flex flex-col items-center gap-4">
            <div
              className="group flex h-[8rem] w-[8rem] cursor-pointer items-center justify-center
          rounded-[50%] bg-primary1 transition-all hover:opacity-50"
            >
              <FontAwesomeIcon
                icon={faPencil}
                className="fa-lg opacity-0 transition-all group-hover:opacity-100"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <input
                type="text"
                placeholder="Current Username"
                className="flex w-8/12 items-center rounded-lg bg-primary5 p-2 outline-none"
              />
              <button className="w-3/12 rounded bg-primary4 p-1 transition-all hover:bg-primary6">
                Change
              </button>
            </div>
            <div className="flex w-full justify-between">
              <textarea
                cols={10}
                rows={4}
                maxLength={120}
                placeholder="Current Note"
                className="h-[12rem] w-8/12 resize-none rounded-lg bg-primary5 p-2 outline-none"
              />
              <div className="flex w-3/12 flex-col gap-4">
                <button className="rounded bg-primary4 p-1 transition-all hover:bg-primary6">
                  Change
                </button>
                <div className="flex h-full w-full flex-col justify-between rounded bg-primary1 p-2">
                  <button className="rounded bg-primary6 p-4 transition-all hover:bg-primary3">
                    <FontAwesomeIcon icon={faMoon} className="fa-lg" />
                  </button>
                  <button className="rounded p-4 transition-all hover:bg-primary3">
                    <FontAwesomeIcon icon={faSun} className="fa-lg" />
                  </button>
                </div>
              </div>
            </div>
            <button
              className="rounded bg-red-700 py-1 px-4 transition-all hover:bg-red-500"
              onClick={logOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
