import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

type ContextType = {
  navBarIsExpanded: boolean;
  asideIsExpanded: boolean;
  mobileNavBarIsExpanded: boolean;
  mobileAsideIsExpanded: boolean;
  toggleNavBar?: () => void;
  openAside?: (display: string) => void;
  closeAside?: () => void;
  toggleAside?: () => void;
  openPersonal?: () => void;
  isMobile: boolean;
  settingsModalIsOpen: boolean;
  toggleSettingsModal?: () => void;
  asideDisplay: string;
};

const defaultState = {
  navBarIsExpanded: true,
  asideIsExpanded: true,
  mobileNavBarIsExpanded: false,
  mobileAsideIsExpanded: false,
  isMobile: false,
  settingsModalIsOpen: false,
  asideDisplay: "group",
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [navBarIsExpanded, setNavBarIsExpanded] = useState(true);
  const [asideIsExpanded, setAsideIsExpanded] = useState(true);
  const [mobileNavBarIsExpanded, setMobileNavBarIsExpanded] = useState(false);
  const [mobileAsideIsExpanded, setMobileAsideIsExpanded] = useState(false);
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);
  // group, user, personal
  const [asideDisplay, setAsideDisplay] = useState("group");

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const router = useRouter();

  const getDisplay = () => {
    const url = router.route;
    const isADirectPage = url.match(/direct/);
    const isAGroupPage = url.match(/group/);
    let display;
    if (isADirectPage) display = "user";
    else if (isAGroupPage) display = "group";
    else display = "personal";
    return display;
  };

  const toggleNavBar = () => {
    setNavBarIsExpanded((prev) => !prev);
    setMobileNavBarIsExpanded((prev) => !prev);
    setMobileAsideIsExpanded(false);
  };

  const openAside = (display: string) => {
    setAsideDisplay(display);
    setAsideIsExpanded(true);
    setMobileAsideIsExpanded(true);
    setMobileNavBarIsExpanded(false);
  };

  const closeAside = () => {
    setAsideIsExpanded(false);
    setMobileAsideIsExpanded(false);
  };

  const toggleAside = () => {
    if (isMobile) {
      mobileAsideIsExpanded ? closeAside() : openAside(getDisplay());
    }
    if (!isMobile) {
      asideIsExpanded ? closeAside() : openAside(getDisplay());
    }
  };

  const openPersonal = () => {
    if (isMobile) openAside("personal");
    if (!isMobile) {
      if (!asideIsExpanded) openAside("personal");
      else {
        if (asideDisplay === "personal") return;
        else {
          closeAside();
          setTimeout(() => openAside("personal"), 300);
        }
      }
    }
  };

  const toggleSettingsModal = () => {
    setSettingsModalIsOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        navBarIsExpanded,
        asideIsExpanded,
        mobileNavBarIsExpanded,
        mobileAsideIsExpanded,
        toggleNavBar,
        openAside,
        closeAside,
        toggleAside,
        openPersonal,
        asideDisplay,
        isMobile,
        settingsModalIsOpen,
        toggleSettingsModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
