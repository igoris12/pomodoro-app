import { useEffect, useState } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resetScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resetScreenSize);
    
    return () => {window.removeEventListener('resize', resetScreenSize)}
  }, []);

  return screenSize;
}

export default useScreenSize;
