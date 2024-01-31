import React, { useState, useEffect } from 'react';

export const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  const isMobile = window.innerWidth < 768;
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasWelcomeShown, setHasWelcomeShown] = useState(false);

  useEffect(() => {
    if (loadingProgress >= 100) {
      setHasWelcomeShown(true);
    }
  }, [loadingProgress]);

  return (
    <HomeContext.Provider 
      value={{ isMobile, loadingProgress, setLoadingProgress, hasWelcomeShown, setHasWelcomeShown }}>
      {children}
    </HomeContext.Provider>
  );
};
