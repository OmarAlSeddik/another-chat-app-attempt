import { type NextPage } from "next";
import Head from "next/head";
import Auth from "../components/Auth";

const AuthPage: NextPage = () => {
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
