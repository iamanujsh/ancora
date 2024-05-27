import React, { useRef, useEffect, useState } from "react";

import "./CursorFollower.css";
import gsap from "gsap";

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const isTouchDevice = "ontouchstart" in window;
  useEffect(() => {
    const cursor = cursorRef.current;
    if (isTouchDevice || !cursor) {
      return;
    }
    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;
      const isTargetBtn = target?.closest("button");
      const isTargetSpan = target?.closest("span");
      gsap.to(cursor, {
        x: x - 9,
        y: y - 10,
        duration: 1.3,
        ease: "power2.out",
        backgroundColor: isTargetBtn ? "white" : "black",
        opacity: isTargetSpan ? 0.5 : 1,
        transform: `scale(${isTargetSpan ? 2.5 : 1})`,
      });
    });
    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, []);
  return <div ref={cursorRef} className="cursor-follower"></div>;
};

export default CursorFollower;
