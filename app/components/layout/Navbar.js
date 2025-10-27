"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    let lastScrollState = false; // Track the current "scroll-down" state

    const handleScroll = () => {
      if (!navbar) return;

      const shouldAddClass = window.scrollY >= 25;

      // Only update class if state has changed
      if (shouldAddClass !== lastScrollState) {
        lastScrollState = shouldAddClass;
        navbar.classList.toggle("scroll-down", shouldAddClass);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Place this inside your functional component (e.g., Navbar or Layout)
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // 1. Set the initial active hash on client load
    setActiveHash(window.location.hash);

    // 2. Add an event listener to update the hash when it changes (e.g., user clicks a link)
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // 3. Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Helper function to build the class string
  const getLinkClasses = (href) => {
    // Check if the current hash matches the link's href
    const isActive = activeHash === href;

    // Base classes
    const baseClasses =
      "fs-14 font-segoeUi leading-[100%] transition-colors duration-200";

    // Conditional classes: Active state gets the green color, otherwise it's black.
    const activeClass = isActive
      ? "text-[#6C8E69]" // Active color
      : "text-black hover:text-[#6C8E69]"; // Default color + hover effect

    return `${baseClasses} ${activeClass}`;
  };

  return (
    <>
      <nav className="navbar absolute top-[17px] w-full z-10" id="navbar">
        <div className="w-full container mx-auto relative">
          <div className="bg-navbar px-5 flex justify-between items-center rounded-[30px]">
            <div className="logo-wrapper cursor-pointer">
              <Image
                src={"/images/graduate-rout-logo.svg"}
                width={151}
                height={23}
                alt="logo"
                unoptimized={true}
                className=""
              />
            </div>
            <div className="lg:flex hidden navbar-menu items-center justify-center gap-6">
              <Link className={getLinkClasses("#navbar")} href="#navbar">
                Home
              </Link>
              <Link
                className={getLinkClasses("#ourmission")}
                href="#ourmission"
              >
                Our Mission
              </Link>
              <Link className={getLinkClasses("#process")} href="#process">
                How it Works
              </Link>
              <Link
                className={getLinkClasses("#testimonials")}
                href="#testimonials"
              >
                Testimonials
              </Link>
              <Link className={getLinkClasses("#faqs")} href="#faqs">
                FAQS
              </Link>
            </div>
            <div className="lg:flex hidden group">
              <a
                href="#"
                className="btn btn-green btn-md font-segoeUi group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
              >
                Contact Us
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <div className="lg:hidden flex mr-[18px]">
                <a href="#" className="btn btn-green btn-md font-segoeUi">
                  Contact Us
                </a>
              </div>
              <button
                onClick={toggleMenu}
                className="nav-toggle-btn rounded-md transition"
                aria-label="Toggle menu"
              >
                <Image
                  src={"/images/hamburger.png"}
                  width={24}
                  height={25}
                  alt="hamburger"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
                {}
                <path
                  d="M6.58496 9.5H31.9183M6.58496 19H31.9183M6.58496 28.5H31.9183"
                  stroke="#A1A1AA"
                  strokeWidth="3.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* </svg> */}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                height: isOpen ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden px-5 w-full container mx-auto absolute mt-4 left-0 right-0 z-10 overflow-hidden"
            >
              <ul className="flex flex-col items-start px-[20px] py-[10px] overflow-hidden bg-[#ffff] font-normal rounded-[12px]">
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Our Mission
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    How it Works
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    FAQS
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
export default Navbar;