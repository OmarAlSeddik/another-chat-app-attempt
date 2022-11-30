import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Aside from "../components/Aside";
import Auth from "../components/Auth";
import Navbar from "../components/Navbar";
import { AppContextProvider } from "../context/AppContext";
import useSwipe from "../hooks/useSwipe";
import "../styles/globals.css";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = router.route;
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();

  if (url === "/auth") return <Auth />;

  return (
    <AppContextProvider>
      <div
        className="min-w-screen flex min-h-screen"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Navbar />
        <Component {...pageProps} />
        <Aside />
      </div>
    </AppContextProvider>
  );
};

export default MyApp;
