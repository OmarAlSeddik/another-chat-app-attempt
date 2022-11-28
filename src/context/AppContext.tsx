import { createContext, useState } from "react";

const AppContext = createContext({
  navBarIsExpanded: true,
  setNavBarIsExpanded: () => ,
  asideIsExpanded: true,
  mobileNavBarIsExpanded: false,
  mobileAsideIsExpanded: false,
});

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

const AppContextProvider = ({ children }: PropsType) => {
  const [navBarIsExpanded, setNavBarIsExpanded] = useState(true);
  const [asideIsExpanded, setAsideIsExpanded] = useState(true);
  const [mobileNavBarIsExpanded, setMobileNavBarIsExpanded] = useState(false);
  const [mobileAsideIsExpanded, setMobileAsideIsExpanded] = useState(false);

  return (
    <AppContext.Provider
      value={{
        navBarIsExpanded,
        setNavBarIsExpanded,
        asideIsExpanded,
        setAsideIsExpanded,
        mobileNavBarIsExpanded,
        setMobileNavBarIsExpanded,
        mobileAsideIsExpanded,
        setMobileAsideIsExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
