import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const useSwipe = () => {
  const { toggleNavBar, toggleAside } = useAppContext();

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    // add your conditional logic here
    if (isLeftSwipe && toggleNavBar) toggleNavBar();
    if (isRightSwipe && toggleAside) toggleAside();
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};

export default useSwipe;
