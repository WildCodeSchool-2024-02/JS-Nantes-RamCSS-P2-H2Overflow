import { createContext, useState, useMemo } from "react";

const AnimationContext = createContext();

function AnimationProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const contextValue = useMemo(
    () => ({ isAnimating, setIsAnimating }),
    [isAnimating, setIsAnimating]
  );

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
}

export { AnimationProvider, AnimationContext };
