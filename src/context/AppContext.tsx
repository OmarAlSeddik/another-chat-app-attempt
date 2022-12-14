import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

type ContextType = {
  navBarIsExpanded: boolean;
  asideIsExpanded: boolean;
  mobileNavBarIsExpanded: boolean;
  mobileAsideIsExpanded: boolean;
  toggleNavBar?: () => void;
  openAside?: () => void;
  closeAside?: () => void;
  toggleAside?: () => void;
  isMobile: boolean;
  settingsModalIsOpen: boolean;
  toggleSettingsModal?: () => void;
  isADirectPage: boolean;
  isAGroupPage: boolean;
};

const defaultState = {
  navBarIsExpanded: true,
  asideIsExpanded: true,
  mobileNavBarIsExpanded: false,
  mobileAsideIsExpanded: false,
  isMobile: false,
  settingsModalIsOpen: false,
  isADirectPage: false,
  isAGroupPage: false,
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

  const pathname = useRouter().pathname;
  console.log(pathname);
  const isADirectPage = !!pathname?.match(/direct/);
  const isAGroupPage = !!pathname?.match(/group/);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;

  const toggleNavBar = () => {
    setNavBarIsExpanded((prev) => !prev);
    setMobileNavBarIsExpanded((prev) => !prev);
    setMobileAsideIsExpanded(false);
  };

  const openAside = () => {
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
      mobileAsideIsExpanded ? closeAside() : openAside();
    }
    if (!isMobile) {
      asideIsExpanded ? closeAside() : openAside();
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
        isMobile,
        settingsModalIsOpen,
        toggleSettingsModal,
        isADirectPage,
        isAGroupPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
