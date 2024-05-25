import React, { useEffect, useRef } from "react";
import "./IntroSection.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IntroSection = () => {
  const firstMoveRef = useRef(null);
  const secondMoveRef = useRef(null);
  const thirdMoveRef = useRef(null);

  const lMoveRef = useRef(null);
  const gMoveRef = useRef(null);
  const nMoveRef = useRef(null);

  const animateDownUp = () => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    const t2 = gsap.timeline({ repeat: -1, yoyo: true });
    const t3 = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(lMoveRef.current, {
      y: -200,
      ease: "power1.out",
      duration: 4,
    }).to(lMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t2.to(gMoveRef.current, {
      y: -200,
      ease: "power1.out",
      duration: 4,
    }).to(gMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t3.to(nMoveRef.current, {
      y: -200,
      ease: "power1.out",
      duration: 4,
    }).to(nMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });
  };

  const animateUpDown = () => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    const t2 = gsap.timeline({ repeat: -1, yoyo: true });
    const t3 = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(firstMoveRef.current, {
      y: 200,
      ease: "power1.out",
      duration: 4,
    }).to(firstMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t2.to(secondMoveRef.current, {
      y: 200,
      ease: "power1.out",
      duration: 4,
    }).to(secondMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t3.to(thirdMoveRef.current, {
      y: 200,
      ease: "power1.out",
      duration: 4,
    }).to(thirdMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });
  };

  useEffect(() => {
    animateUpDown();
    animateDownUp();
  }, []);

  return (
    <>
      <h1 className=" text-center text-8xl font-semibold mt-10 tracking-tighter">
        Visual Effects & Animation Kit
      </h1>
      <div className="flex justify-center py-10 ">
        <div className="flex gap-x-10 text-[20vw] font-bold ">
          <div ref={firstMoveRef} className="relative -top-28">
            <span className="text-gradient text-2xl py-3 px-16 rotate-[30deg] absolute top-36 -left-16 rounded-full">
              Text
            </span>
            <h4 className="gradient-text">P</h4>
          </div>
          <div ref={lMoveRef} className="relative -bottom-32">
            <span className="mouse-gradient text-2xl py-3 px-16 rotate-[-20deg] absolute bottom-28 -left-16 rounded-full">
              Mouse
            </span>
            <h4 className="gradient-text">L</h4>
          </div>
          <div ref={secondMoveRef} className="relative -top-28 ">
            <h4 className="gradient-text">U</h4>
          </div>
          <div ref={gMoveRef} className="relative -bottom-32">
            <span className="dynamic-gradient text-2xl py-3 px-16 rotate-[30deg] absolute top-36 -left-16 rounded-full">
              Dynamic
            </span>
            <h4 className="gradient-text">G</h4>
          </div>
          <div ref={thirdMoveRef} className="relative -top-28 ">
            <span className="image-gradient text-2xl py-3 px-16 rotate-[-30deg] absolute bottom-20 -left-16 rounded-full">
              Image
            </span>
            <h4 className="gradient-text">I</h4>
          </div>
          <div ref={nMoveRef} className="relative -bottom-32">
            <span className="background-gradient text-2xl py-3 px-14 rotate-[-30deg] absolute top-36 left-24 rounded-full">
              Background
            </span>
            <h4 className="gradient-text">N</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
