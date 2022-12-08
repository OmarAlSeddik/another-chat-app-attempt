import { createContext, useContext, useState } from "react";

type ContextType = {
  navBarIsExpanded: boolean;
  asideIsExpanded: boolean;
  mobileNavBarIsExpanded: boolean;
  mobileAsideIsExpanded: boolean;
  toggleNavBar?: () => void;
  toggleAside?: () => void;
  isMobile: boolean;
  settingsModalIsOpen: boolean;
  toggleSettingsModal?: () => void;
};

const defaultState = {
  navBarIsExpanded: true,
  asideIsExpanded: true,
  mobileNavBarIsExpanded: false,
  mobileAsideIsExpanded: false,
  isMobile: false,
  settingsModalIsOpen: false,
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

  const toggleNavBar = () => {
    setNavBarIsExpanded((prev) => !prev);
    setMobileNavBarIsExpanded((prev) => !prev);
    setMobileAsideIsExpanded(false);
  };

  const toggleAside = () => {
    setAsideIsExpanded((prev) => !prev);
    setMobileAsideIsExpanded((prev) => !prev);
    setMobileNavBarIsExpanded(false);
  };

  const toggleSettingsModal = () => {
    setSettingsModalIsOpen((prev) => !prev);
  };

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return (
    <AppContext.Provider
      value={{
        navBarIsExpanded,
        asideIsExpanded,
        mobileNavBarIsExpanded,
        mobileAsideIsExpanded,
        toggleNavBar,
        toggleAside,
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
