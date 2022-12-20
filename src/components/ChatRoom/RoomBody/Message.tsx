import { useRef } from "react";
import { useAppContext } from "../../../context/AppContext";

type MessageProps = {
  id: number;
};

const Message = ({ id }: MessageProps) => {
  const {
    isMobile,
    mobileNavBarIsExpanded,
    mobileAsideIsExpanded,
    toggleUserModal,
  } = useAppContext();

  const ref = useRef<HTMLDivElement>(null);

  let disabled = false;
  if (isMobile && (mobileNavBarIsExpanded || mobileAsideIsExpanded))
    disabled = true;

  return (
    <div
      ref={ref}
      className={`relative flex gap-4 px-4 py-1 lg:hover:bg-primary3
      ${disabled && "pointer-events-none"}
      ${id === 0 && "mt-auto"}`}
    >
      <div
        className="h-10 w-10 flex-shrink-0 cursor-pointer rounded-[50%] bg-primary1 lg:hover:shadow-xl"
        onClick={toggleUserModal}
      />
      <div className="flex flex-col">
        <div className="flex items-end gap-4">
          <span
            className="cursor-pointer font-bold hover:underline"
            onClick={toggleUserModal}
          >
            User Name
          </span>
          <span className="text-small text-text1">Today at 12:15 am</span>
        </div>
        <span className="select-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          sapiente dignissimos iure pariatur velit consequatur earum temporibus
          magni commodi beatae impedit autem explicabo officia blanditiis quia,
          delectus maiores deleniti ea?
        </span>
      </div>
    </div>
  );
};

export default Message;
