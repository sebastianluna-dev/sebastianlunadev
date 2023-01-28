import { useState, useEffect, useRef } from "react";

function getOffset(el) {
  let x = 0;
  let y = 0;
  while (el && !el.offsetLeft.isNaN && !el.offsetTop.isNaN) {
    x += el.offsetLeft - el.scrollLeft;
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: y, left: x };
}

export const useViewportRatio = (id) => {
  const [ViewportRatio, setViewportRatio] = useState(0);
  const iterationCounter = useRef(0);
  useEffect(() => {
    const calcViewportRatio = () => {
      const elementStart = getOffset(document.getElementById(id)).top;
      const elementHeight = document.getElementById(id).clientHeight;
      const elementEnd = elementStart + elementHeight;
      const elementMiddlePoint = (elementEnd + elementStart) / 2;
      const viewportStart = window.scrollY;
      const viewportEnd = viewportStart + window.innerHeight;
      const viewportRatio = (viewportEnd - elementMiddlePoint) / window.innerHeight;
      if (viewportRatio < 0) {
        setViewportRatio(0);
      } else if (viewportRatio > 1) {
        setViewportRatio(1);
      } else {
        setViewportRatio(viewportRatio);
      }
    };

    if (iterationCounter.current === 0) {
      setViewportRatio(0);
    }

    window.addEventListener("scroll", calcViewportRatio);
    iterationCounter.current += 1;

    return () => window.removeEventListener("scroll", calcViewportRatio);
  }, []);

  return ViewportRatio;
};