import type { SetStateAction } from "react";

type PropsType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  photoUrl: string;
};

const Modal = ({ isOpen, setIsOpen, photoUrl }: PropsType) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 z-50 h-screen w-screen bg-[rgba(0,0,0,0.5)]"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] rounded bg-primary2 p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-[8rem] w-[8rem] cursor-pointer items-center justify-center rounded-[50%] bg-primary1 hover:scale-110">
            {photoUrl}
          </div>
          <div className="flex w-[20rem] gap-4">
            <input
              type="text"
              placeholder="Current Username"
              className="flex w-full items-center rounded-lg bg-primary5 px-2 outline-none"
            />
            <button className="rounded bg-primary4 p-1 hover:bg-primary6">
              Change
            </button>
          </div>
          <div className="flex w-[20rem] gap-4">
            <textarea
              cols={10}
              rows={4}
              maxLength={120}
              placeholder="Current Note"
              className="h-[12rem] w-full resize-none rounded-lg bg-primary5 p-2 outline-none"
            />
            <button className="self-start rounded bg-primary4 p-1 hover:bg-primary6">
              Change
            </button>
          </div>
          <button className="rounded bg-red-700 py-1 px-4 hover:bg-red-500">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
