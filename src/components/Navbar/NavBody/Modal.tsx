import { faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SetStateAction } from "react";
import { useState } from "react";

type PropsType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ isOpen, setIsOpen }: PropsType) => {
  const [type, setType] = useState("");

  if (!isOpen) return null;

  if (type === "create a group")
    return (
      <>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)]"
          onClick={() => {
            setIsOpen(false), setType("");
          }}
        />
        <div className="absolute top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] rounded bg-primary2 p-4">
          <button className="absolute right-4 rounded bg-red-700 px-2 transition-all hover:bg-red-500">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-[1.5rem]"
              onClick={() => {
                setIsOpen(false), setType("");
              }}
            />
          </button>
          <div className="flex flex-col items-center gap-4">
            <div className="group flex h-[8rem] w-[8rem] cursor-pointer items-center justify-center rounded-[50%] bg-primary1 transition-all hover:opacity-50">
              <FontAwesomeIcon
                icon={faPencil}
                className="fa-lg opacity-0 transition-all group-hover:opacity-100"
              />
            </div>
            <input
              type="text"
              placeholder="Group Name"
              className="flex items-center rounded-lg bg-primary5 p-2 outline-none"
            />
            <div className="flex w-full gap-4">
              <textarea
                cols={10}
                rows={4}
                maxLength={120}
                placeholder="Group Note"
                className="h-[12rem] w-full resize-none rounded-lg bg-primary5 p-2 outline-none"
              />
            </div>
            <button className="rounded bg-green-700 py-1 px-4 transition-all hover:bg-green-500">
              Create Group
            </button>
          </div>
        </div>
      </>
    );

  if (type === "join a group")
    return (
      <>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)]"
          onClick={() => {
            setIsOpen(false), setType("");
          }}
        />
        <div className="absolute top-1/2 left-1/2 z-50 flex w-[20rem] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded bg-primary2 p-4">
          <input
            id="user-id"
            type="text"
            placeholder="User ID"
            className="flex w-full items-center rounded-lg bg-primary5 p-2 outline-none"
          />
          <button className="rounded bg-green-700 py-1 transition-all hover:bg-green-500">
            Join Group
          </button>
        </div>
      </>
    );

  if (type === "message a user")
    return (
      <>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)]"
          onClick={() => {
            setIsOpen(false), setType("");
          }}
        />
        <div className="absolute top-1/2 left-1/2 z-50 flex w-[20rem] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded bg-primary2 p-4">
          <input
            id="user-id"
            type="text"
            placeholder="User ID"
            className="flex w-full items-center rounded-lg bg-primary5 p-2 outline-none"
          />
          <button className="rounded bg-green-700 py-1 transition-all hover:bg-green-500">
            Message User
          </button>
        </div>
      </>
    );

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)]"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute top-1/2 left-1/2 z-50 flex translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded bg-primary2 p-4">
        <span className="text-large">What do you want to do?</span>
        <div
          className="cursor-pointer rounded border-2 border-primary1 p-4 text-center hover:bg-primary5"
          onClick={() => setType("create a group")}
        >
          Create a Group
        </div>
        <div
          className="cursor-pointer rounded border-2 border-primary1 p-4 text-center hover:bg-primary5"
          onClick={() => setType("join a group")}
        >
          Join a Group
        </div>
        <div
          className="cursor-pointer rounded border-2 border-primary1 p-4 text-center hover:bg-primary5"
          onClick={() => setType("message a user")}
        >
          Message a User
        </div>
      </div>
    </>
  );
};

export default Modal;
