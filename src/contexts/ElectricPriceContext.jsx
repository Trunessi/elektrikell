import { createContext, useState } from "react";

export const ElectricPriceContext = createContext(null);

function ElectricPriceProvider({ children }) {

  const [averagePrice, setAveragePrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const value = {
    values: {
      averagePrice,
      currentPrice,
    },
    actions: {
      setAveragePrice,
      setCurrentPrice,
    },
  };

  return (
    <ElectricPriceContext.Provider value={value}>
      {children}
    </ElectricPriceContext.Provider>
  );
}

export default ElectricPriceProvider;
