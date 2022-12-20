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
  userModalIsOpen: boolean;
  toggleUserModal?: () => void;
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
  userModalIsOpen: false,
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
  const [userModalIsOpen, setUserModalIsOpen] = useState(false);

  const pathname = useRouter().pathname;
  const isADirectPage = !!pathname?.match(/direct/);
  const isAGroupPage = !!pathname?.match(/group/);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;

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

  const openAside = () => {
    setAsideIsExpanded(true);
    setMobileAsideIsExpanded(true);
    setMobileNavBarIsExpanded(false);
  };

  const closeAside = () => {
    setAsideIsExpanded(false);
    setMobileAsideIsExpanded(false);
  };

  const toggleSettingsModal = () => {
    setSettingsModalIsOpen((prev) => !prev);
  };

  const toggleUserModal = () => {
    setUserModalIsOpen((prev) => !prev);
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
        userModalIsOpen,
        toggleUserModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
