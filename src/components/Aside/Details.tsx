import { useAppContext } from "@/context/AppContext";
import useLoggedInUser from "@/hooks/useLoggedInUser";

const Details = () => {
  const { isAGroupPage, isADirectPage } = useAppContext();
  const { displayName, id, photoUrl } = useLoggedInUser();

  console.log(photoUrl);

  if (!isAGroupPage && !isADirectPage)
    return (
      <div className="relative flex w-full flex-col items-center py-2">
        <div className="mb-4 flex h-[8rem] w-[8rem] items-center justify-center overflow-hidden rounded-[50%]">
          <img src={photoUrl} alt="" className="h-full w-full" />
        </div>
        <span className="select-text text-large">{displayName}</span>
        <span className="cursor-pointer text-text1 hover:text-text3">{id}</span>
      </div>
    );
  else return <></>;
};

export default Details;
