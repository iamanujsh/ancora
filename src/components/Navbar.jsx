import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

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
    <div className="sticky top-0 z-[500] bg-white flex lg:justify-around justify-between p-10 lg:p-4 py-8 items-center ">
      <img
        src="https://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/logo-2x.png"
        alt="ancoraLogo"
        className="h-8 cursor-pointer"
      />
      <div className="lg:flex hidden">
        {navbarList.map((navList) => (
          <a
            key={navList.href}
            className="px-4 group font-semibold"
            href={navList.href}
          >
            {navList.title}
            <div className="bg-black h-[1.7px] w-0 group-hover:w-full transition-all duration-500 mt-1"></div>
          </a>
        ))}
      </div>
      <button className="lg:block hidden bg-white text-black border-black border-2 hover:bg-black hover:text-white py-3 px-14 rounded-full transition-all duration-300">
        Buy Now
      </button>
      <RxHamburgerMenu className="sm:block block lg:hidden" />
    </div>
  );
};

export default Navbar;
