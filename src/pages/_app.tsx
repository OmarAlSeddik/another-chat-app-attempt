import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import SettingsModal from "../components/Shared/SettingsModal";
import { AppContextProvider } from "../context/AppContext";
import "../styles/globals.css";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = router.route;

  return (
    <AppContextProvider>
      <SettingsModal />
      <div className={`absolute inset-0 flex w-full overflow-hidden`}>
        {url !== "/auth" && <Navbar />}
        <Component {...pageProps} />
        {url !== "/auth" && <Aside />}
      </div>
    </AppContextProvider>
  );
};

export default MyApp;
