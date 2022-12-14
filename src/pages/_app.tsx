import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import Header from "../components/Shared/Header";
import SettingsModal from "../components/Shared/SettingsModal";
import { AppContextProvider, useAppContext } from "../context/AppContext";
import "../styles/globals.css";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = router.route;
  const { isADirectPage, isAGroupPage } = useAppContext();
  console.log(isADirectPage);
  console.log(isAGroupPage);

  return (
    <AppContextProvider>
      <SettingsModal />
      <div className="absolute inset-0 flex w-full overflow-hidden">
        <Header />
        <div className="mt-12 flex w-full">
          {url !== "/auth" && <Navbar />}
          <Component {...pageProps} />
          {url !== "/auth" && <Aside />}
        </div>
      </div>
    </AppContextProvider>
  );
};

export default MyApp;
