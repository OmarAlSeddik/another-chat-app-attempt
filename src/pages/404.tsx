import Loading from "@/components/Shared/Loading";
import { useAppContext } from "@/context/AppContext";
import { auth } from "@/firebase";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSwipeable } from "react-swipeable";

const NotFoundPage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const {
    mobileNavBarIsExpanded,
    mobileAsideIsExpanded,
    toggleNavBar,
    toggleAside,
  } = useAppContext();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (toggleNavBar && toggleAside) {
        mobileAsideIsExpanded ? toggleAside() : toggleNavBar();
      }
    },
    onSwipedLeft: () => {
      if (toggleNavBar && toggleAside) {
        mobileNavBarIsExpanded ? toggleNavBar() : toggleAside();
      }
    },
  });

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

  if (loading) return <Loading />;

  return (
    <div
      className={`flex h-full w-full shrink-0 flex-col items-center justify-center text-text1 transition-all
      ${mobileAsideIsExpanded && "ml-[-20rem] lg:ml-0"} lg:shrink`}
      {...handlers}
    >
      <span className="text-9xl">404</span>
      <span className="text-extraLarge">The Page Does Not Exist</span>
    </div>
  );
};

export default NotFoundPage;
