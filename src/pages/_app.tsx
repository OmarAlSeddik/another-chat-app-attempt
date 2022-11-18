import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Aside from "../components/Aside";
import Auth from "../components/Auth";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = router.route;

  if (url === "/auth") return <Auth />;

  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <Component {...pageProps} />
      <Aside />
    </div>
  );
};

export default MyApp;
