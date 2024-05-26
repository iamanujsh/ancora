import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import "./GrowingCircle.css";

const GrowingCircle = () => {
  const circleRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top center",
        end: "+=100%",
        scrub: true, // Makes the animation progress with scroll position
        pin: true,
      },
    });

    tl.to(circleRef.current, {
      scale: "60",
      duration: 10,
      ease: "power1.out",
    });
  });

  return (
    <div className="circle-container">
      <div ref={circleRef} className="dot"></div>;
    </div>
  );
};

export default GrowingCircle;
