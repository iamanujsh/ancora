import React, { useEffect, useRef } from "react";
import "./IntroSection.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GsapMagnetic from "../GsapMagnetic";

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
      y: -130,
      ease: "power1.out",
      duration: 4,
    }).to(lMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t2.to(gMoveRef.current, {
      y: -130,
      ease: "power1.out",
      duration: 4,
    }).to(gMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t3.to(nMoveRef.current, {
      y: -130,
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
      y: 130,
      ease: "power1.out",
      duration: 4,
    }).to(firstMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t2.to(secondMoveRef.current, {
      y: 130,
      ease: "power1.out",
      duration: 4,
    }).to(secondMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });

    t3.to(thirdMoveRef.current, {
      y: 130,
      ease: "power1.out",
      duration: 4,
    }).to(thirdMoveRef.current, {
      y: 0,
      ease: "power1.out",
      duration: 4,
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) {
      animateUpDown();
      animateDownUp();
    }

    const handleResize = () => {
      if (mediaQuery.matches) {
        animateUpDown();
        animateDownUp();
      } else {
        gsap.set(
          [
            firstMoveRef.current,
            secondMoveRef.current,
            thirdMoveRef.current,
            lMoveRef.current,
            gMoveRef.current,
            nMoveRef.current,
          ],
          { y: 0 }
        );
        gsap.killTweensOf([
          firstMoveRef.current,
          secondMoveRef.current,
          thirdMoveRef.current,
          lMoveRef.current,
          gMoveRef.current,
          nMoveRef.current,
        ]);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative z-50 ">
        <h1 className=" text-center text-[5vw] font-semibold mt-10 tracking-tight">
          Visual Effects & Animation Kit
        </h1>
        <div className="flex justify-center pb-10 bg-white">
          <div className="flex lg:gap-x-9 gap-x-2 text-[20vw] font-bold ">
            <div ref={firstMoveRef} className="relative lg:-top-20">
              <GsapMagnetic>
                <span className="lg:block hidden text-gradient text-2xl py-3 px-16 rotate-[30deg] absolute top-36 -left-16 rounded-full">
                  Text
                </span>
              </GsapMagnetic>
              <h4 className="gradient-text">P</h4>
            </div>
            <div ref={lMoveRef} className="relative lg:-bottom-14">
              <GsapMagnetic>
                <span className="lg:block hidden mouse-gradient text-2xl py-3 px-16 rotate-[-20deg] absolute bottom-28 -left-16 rounded-full">
                  Mouse
                </span>
              </GsapMagnetic>
              <h4 className="gradient-text">L</h4>
            </div>
            <div ref={secondMoveRef} className="relative lg:-top-20 ">
              <h4 className="gradient-text">U</h4>
            </div>
            <div ref={gMoveRef} className="relative lg:-bottom-14">
              <GsapMagnetic>
                <span className="lg:block hidden dynamic-gradient text-2xl py-3 px-16 rotate-[30deg] absolute top-36 -left-16 rounded-full">
                  Dynamic
                </span>
              </GsapMagnetic>
              <h4 className="gradient-text">G</h4>
            </div>
            <div ref={thirdMoveRef} className="relative lg:-top-20 ">
              <GsapMagnetic>
                <span className="lg:block hidden image-gradient text-2xl py-3 px-16 rotate-[-30deg] absolute bottom-20 -left-16 rounded-full">
                  Image
                </span>
              </GsapMagnetic>
              <h4 className="gradient-text">I</h4>
            </div>
            <div ref={nMoveRef} className="relative lg:-bottom-14 ">
              <GsapMagnetic>
                <span className="lg:block hidden background-gradient text-2xl py-3 px-14 rotate-[-30deg] absolute top-36 left-24 rounded-full">
                  Background
                </span>
              </GsapMagnetic>
              <h4 className="gradient-text">N</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
