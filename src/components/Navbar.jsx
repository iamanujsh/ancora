import React from "react";

const navbarList = [
  { href: "/dynamicBackground", title: "Dynamic Background" },
  { href: "/imageEffects", title: "Image Effects" },
  { href: "/backgroundText", title: "Background Text" },
  { href: "/imageMask", title: "Image Mask" },
  { href: "/mouseHelper", title: "Mouse Helper" },
  { href: "/backgroundSlides", title: "Background Slides" },
];

const Navbar = () => {
  return (
    <div className="flex p-4 bg-slate-100">
      {navbarList.map((navList) => (
        <a
          key={navList.href}
          className="p-2 px-4 group font-semibold"
          href={navList.href}
        >
          {navList.title}
          <div className="bg-black h-[1.7px] w-0 group-hover:w-full transition-all duration-500 mt-1"></div>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
