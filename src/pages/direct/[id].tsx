import ChatRoom from "@/components/ChatRoom";
import Loading from "@/components/Shared/Loading";
import { auth } from "@/firebase";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const DirectPage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

  if (loading) return <Loading />;

  return <ChatRoom />;
};

export default DirectPage;
