import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Auth from "../components/Auth";
import Loading from "../components/Loading";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) router.replace("/");
  }, [loading, router, user]);

  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title>Auth Page</title>
        <meta name="description" content="The auth page of the chat app." />
      </Head>
      <Auth />
    </>
  );
};

export default AuthPage;
