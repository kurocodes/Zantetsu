import { createContext, useContext, useEffect, useState } from "react";
import { useVerifyUser } from "../hooks/useAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showAuthContainer, setShowAuthContainer] = useState(false);
  const { data: user, isLoading, isError } = useVerifyUser();

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
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isError,
        showAuthContainer,
        setShowAuthContainer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
