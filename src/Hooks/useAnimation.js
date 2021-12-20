import React from 'react';
const useAnimation = (container, card, scrollOn) => {
  React.useEffect(() => {
    if (
      card.current.getBoundingClientRect().top <
      (window.innerHeight * 3) / 4
    ) {
      card.current.classList.add('visible');
    } else {
      card.current.classList.remove('visible');
    }
  }, [scrollOn]);

  return [];
};
export default useAnimation;
