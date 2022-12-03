import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Aside from "../components/Aside";
import Auth from "../components/Auth";
import Navbar from "../components/Navbar";
import { AppContextProvider } from "../context/AppContext";
import "../styles/globals.css";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = router.route;

  if (url === "/auth") return <Auth />;

  return (
    <AppContextProvider>
      <div className="flex h-screen overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
        <Aside />
      </div>
    </AppContextProvider>
  );
};

export default MyApp;
