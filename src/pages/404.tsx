import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSwipeable } from "react-swipeable";
import { auth } from "../../firebase";
import Loading from "../components/Shared/Loading";
import { useAppContext } from "../context/AppContext";

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
      className={`flex w-full shrink-0 flex-col transition-all
    ${mobileAsideIsExpanded && "ml-[-20rem] md:ml-0"} md:shrink`}
      {...handlers}
    >
      <hr className="border-primary1" />
      <span className="flex h-full items-center justify-center">
        Page Not Found...
      </span>
    </div>
  );
};

export default NotFoundPage;
