import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  return (
    <GeneralContext.Provider
      value={{
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
