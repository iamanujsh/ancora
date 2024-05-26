import gsap from "gsap";
import React, { useEffect } from "react";

const Marquee = () => {
  useEffect(() => {
    gsap.to(".marquee_part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  return (
    <div className="marquee bg-black text-white py-6 mb-10 font-semibold relative overflow-hidden">
      <div className="marquee_inner uppercase text-2xl w-fit flex">
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
        <div className="marquee_part px-1 shrink-0">
          EVERYTHING YOU SEE WILL BE INSIDE THE PRODUCT
          <span className="px-10 ">|</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
