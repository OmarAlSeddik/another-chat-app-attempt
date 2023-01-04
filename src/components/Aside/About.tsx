import { useAppContext } from "@/context/AppContext";
import useLoggedInUser from "@/hooks/useLoggedInUser";

const About = () => {
  const { isAGroupPage, isADirectPage } = useAppContext();
  const { note } = useLoggedInUser();

  let about;
  if (isADirectPage) about = "Other User About";
  else if (isAGroupPage) about = "Group About";
  else about = note;

  return (
    <div className=" flex w-full flex-col gap-1 p-2">
      <div className="flex items-center">
        <span className="text-text1">About</span>
      </div>
      <div className="scrollbar h-[5.5rem] w-full select-text resize-none rounded bg-primary3">
        {about}
      </div>
    </div>
  );
};

export default About;
