import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(ref.current, { x: x, duration: 1, ease: "elastic.out(1,0.3)" });
      gsap.to(ref.current, { y: y, duration: 1, ease: "elastic.out(1,0.3)" });
    };

    const mouseLeave = (e) => {
      gsap.to(ref.current, { x: 0, duration: 1, ease: "elastic.out(1,0.3)" });
      gsap.to(ref.current, { y: 0, duration: 1, ease: "elastic.out(1,0.3)" });
    };

    ref.current.addEventListener("mousemove", mouseMove);
    ref.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current.addEventListener("mousemove", mouseMove);
      ref.current.addEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref });
};

export default GsapMagnetic;
