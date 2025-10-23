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

  return (
    <>
      <nav className="navbar absolute top-[17px] w-full z-10" id="navbar">
        <div className="w-full container mx-auto relative">
          <div className="bg-navbar px-fixed-20 flex justify-between items-center rounded-[30px]">
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
              <a className="fs-14 font-segoeUi leading-[100%] text-black" href="#navbar">
                Home
              </a>
              <a className="fs-14 font-segoeUi leading-[100%] text-black" href="#ourmission">
                Our Mission
              </a>
              <a className="fs-14 font-segoeUi leading-[100%] text-black" href="#process">
                How it Works
              </a>
              <a className="fs-14 font-segoeUi leading-[100%] text-black" href="#testimonials">
                Testimonials
              </a>
              <a className="fs-14 font-segoeUi leading-[100%] text-black" href="#faqs">
                FAQS
              </a>
            </div>

            <div className="lg:flex hidden">
              <a href="#" className="btn btn-green btn-md font-segoeUi">
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
                  src={
                    "/images/hamburger.png"
                  }
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
              className="lg:hidden px-fixed-20 w-full container mx-auto absolute mt-4 left-0 right-0 z-10 overflow-hidden"
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
                    About
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Locations
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Articles
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