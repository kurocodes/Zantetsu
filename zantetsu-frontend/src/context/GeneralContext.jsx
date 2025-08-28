import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [showAuthContainer, setShowAuthContainer] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showAuthContainer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAuthContainer]);

  return (
    <GeneralContext.Provider
      value={{
        showAuthContainer,
        setShowAuthContainer,
        navigate,
        showCart, 
        setShowCart,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);
