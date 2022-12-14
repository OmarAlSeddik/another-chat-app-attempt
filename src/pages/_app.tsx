import Aside from "@/components/Aside";
import Navbar from "@/components/Navbar";
import Header from "@/components/Shared/Header";
import SettingsModal from "@/components/Shared/SettingsModal";
import UserModal from "@/components/Shared/UserModal";
import { AppContextProvider } from "@/context/AppContext";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import "../styles/globals.css";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = router.route;

  return (
    <AppContextProvider>
      <SettingsModal />
      <UserModal />
      <div className="absolute inset-0 w-full overflow-hidden">
        {url !== "/auth" && <Header />}
        <div className="flex h-full w-full">
          {url !== "/auth" && <Navbar />}
          <Component {...pageProps} />
          {url !== "/auth" && <Aside />}
        </div>
      </div>
    </AppContextProvider>
  );
};

export default MyApp;
