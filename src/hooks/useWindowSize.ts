import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    const cleanUp = () => {
      console.log('runs if useEffect dep changes');
      window.removeEventListener('resize', handleResize);
    };
    return cleanUp;
  }, []);
  return windowSize;
};
export default useWindowSize;
