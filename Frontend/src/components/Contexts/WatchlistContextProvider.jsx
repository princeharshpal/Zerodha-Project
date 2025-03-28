import React, { useState, createContext } from "react";

// Export the context
export const WatchlistContext = createContext();

export const WatchlistContextProvider = ({ children }) => {
  const [isBuyOpen, setBuyOpen] = useState(false);
  const [isSellOpen, setSellOpen] = useState(false);

  return (
    <WatchlistContext.Provider
      value={{ isBuyOpen, setBuyOpen, isSellOpen, setSellOpen }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;
