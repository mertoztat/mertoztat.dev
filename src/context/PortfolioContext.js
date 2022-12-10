import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(false);

  //   when click the button scroll to bottom to top function
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PortfolioContext.Provider value={{ scrollTop, setScrollTop, bottomToTop }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
