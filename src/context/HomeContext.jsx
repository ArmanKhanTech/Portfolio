import React, { useState, useEffect } from "react";

export const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasWelcomeShown, setHasWelcomeShown] = useState(false);

  useEffect(() => {
    if (loadingProgress >= 100) {
      setHasWelcomeShown(true);
    }
  }, [loadingProgress]);

  return (
    <HomeContext.Provider
      value={{
        loadingProgress,
        setLoadingProgress,
        hasWelcomeShown,
        setHasWelcomeShown,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
