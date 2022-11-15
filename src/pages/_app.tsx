import { type AppType } from "next/dist/shared/lib/utils";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Aside />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
