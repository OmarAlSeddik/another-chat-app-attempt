import { useAppContext } from "@/context/AppContext";
import useLoggedInUser from "@/hooks/useLoggedInUser";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavFooter = () => {
  const { toggleSettingsModal } = useAppContext();
  const { displayName, photoUrl, id } = useLoggedInUser();
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const copyIdToClipboard = () => {
    navigator.clipboard.writeText(id);
    setCopiedToClipboard(true);
    setTimeout(() => {
      setCopiedToClipboard(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex w-full bg-primary2">
        <div
          className="flex h-12 shrink-0 grow cursor-pointer gap-4 p-2 transition-all hover:bg-primary6"
          onClick={toggleSettingsModal}
        >
          <div className="w-8 overflow-hidden rounded-[50%] bg-primary1">
            <img src={photoUrl} alt="" className="h-full w-full" />
          </div>
          <div className="flex shrink-0 items-center">
            <span>{displayName}</span>
          </div>
        </div>
        <div className="flex">
          <button
            className={`relative px-4 transition-all  ${
              copiedToClipboard
                ? "bg-green-600"
                : "bg-primary1 hover:bg-primary6"
            }`}
            onClick={copyIdToClipboard}
          >
            <span
              className={`absolute top-[-1px] right-0 translate-y-[-100%] rounded-tl bg-green-600 p-1 transition-all ${
                copiedToClipboard ? "visible" : "hidden"
              }`}
            >
              Copied!
            </span>
            <FontAwesomeIcon icon={faHashtag} className="text-[1.5rem]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavFooter;
