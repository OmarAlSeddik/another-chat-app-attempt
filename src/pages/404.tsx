import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Loading from "../components/Shared/Loading";

const NotFoundPage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

  if (loading) return <Loading />;

  return (
    <div className="flex h-full grow items-center justify-center">
      Page Not Found...
    </div>
  );
};

export default NotFoundPage;
