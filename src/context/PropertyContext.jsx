import React, { createContext } from 'react';

export const PropertyContext = createContext(null);

export const PropertyProvider = ({ children }) => {
  return <PropertyContext.Provider value={null}>{children}</PropertyContext.Provider>;
};
