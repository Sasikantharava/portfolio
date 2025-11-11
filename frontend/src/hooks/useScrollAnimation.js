import { useEffect } from 'react';
import AOS from 'aos';

const useScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
};

export default useScrollAnimation;