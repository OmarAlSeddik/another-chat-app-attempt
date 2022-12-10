import { createContext, useContext, useState } from "react";

type ContextType = {
  navBarIsExpanded: boolean;
  asideIsExpanded: boolean;
  mobileNavBarIsExpanded: boolean;
  mobileAsideIsExpanded: boolean;
  toggleNavBar?: () => void;
  toggleAside?: (display: string) => void;
  openAside?: (display: string) => void;
  closeAside?: () => void;
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

  const toggleNavBar = () => {
    setNavBarIsExpanded((prev) => !prev);
    setMobileNavBarIsExpanded((prev) => !prev);
    setMobileAsideIsExpanded(false);
  };

  const openAside = (display: string) => {
    setAsideDisplay(display);
    setAsideIsExpanded(true);
    setMobileAsideIsExpanded(true);
    setMobileAsideIsExpanded(false);
  };

  const closeAside = () => {
    setAsideIsExpanded(false);
    setMobileAsideIsExpanded(false);
  };

  const toggleAside = (display: string) => {
    if (asideDisplay !== display) {
      closeAside();
      setTimeout(() => {
        openAside(display);
      }, 300);
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
        toggleAside,
        openAside,
        closeAside,
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
