import { createContext, useContext, useState } from "react";
import { node, bool } from "prop-types";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <NavbarContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavbarContext.Provider>
  );
};

NavbarProvider.proptypes = {
  children: node.isRequired,
  isVisible: bool.isRequired,
};

const useNavbarContext = () => {
  const value = useContext(NavbarContext);

  if (value === undefined) {
    throw Error("useNavbarContext must be used with a NavbarProvider");
  }

  return value;
};

export { NavbarProvider, useNavbarContext };
