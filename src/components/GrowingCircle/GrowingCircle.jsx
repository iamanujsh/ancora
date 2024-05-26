import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

// import "./GrowingCircle.css";

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
    <div>
      <div className="flex flex-col items-center justify-center mt-40 ">
        <FaArrowDownLong className="text-white absolute w-7 h-7 z-40" />
        <div ref={circleRef} className="w-16 h-16 bg-black rounded-full"></div>
      </div>
      <div className="flex justify-center mt-20 ">
        <h1 className="z-40 text-white">Dynamic Background</h1>
      </div>
    </div>
  );
};

export default GrowingCircle;
