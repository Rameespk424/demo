"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

function NavLink({ to, children }) {
  return (
    <a href={to} className="mx-4 capitalize">
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className="flex items-center justify-start p-4 filter drop-shadow-md bg-white h-20">
        <a className="text-xl font-semibold" href="/">
          DEMO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About Us
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/help"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          How WE Help
        </a>
        <a
          className="text-xl font-medium my-4"
          href="/pricing"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Pricing
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/portfolio"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Portfolio
        </a>
        <a
          className="text-xl font-medium my-4"
          href="/testimonial"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Testimonials
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/insight"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Insight
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close MobileNav when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false); // Close MobileNav on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50); // Change this value for when the background should change
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${
          scrolled ? " bg-[#000000] opacity-30" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Mobile Navigation */}
          <MobileNav open={open} setOpen={setOpen} />

          <div className="flex items-center   h-20">
            <div className="w-4/12 flex items-center">
              <a
                className="text-2xl font-serif font-semibold lg:text-white md:text-black"
                href="/"
              >
                DEMO
              </a>
            </div>

            <div className=" w-8/12 flex justify-end items-center">
              {/* Hamburger menu button */}
              <div
                className="z-50 flex relative w-8 h-6 flex-col gap-0 justify-between items-center md:hidden"
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`h-1 w-full md:bg-white bg-black rounded-lg transform transition duration-300 ease-in-out ${
                    open ? "rotate-45 translate-y-2.5" : "",  scrolled ? " bg-white opacity-100" : "bg-black"
                  }`}
                />
                <span
                  className={`h-1 w-full md:bg-white bg-black rounded-lg transition-all duration-300 ease-in-out ${
                    open ? "opacity-0" : "opacity-100", scrolled ? " bg-white opacity-100" : "bg-black"
                  }`}
                />
                <span
                  className={`h-1 w-full md:bg-white bg-black rounded-lg transform transition duration-300 ease-in-out ${
                    open ? "-rotate-45 -translate-y-2.5" : "", scrolled ? " bg-white opacity-100" : "bg-black"
                  }`}
                />
              </div>

              <div className="hidden md:flex items-center text-white w-full justify-between">
                <div className="hidden md:flex">
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/how_we_help">How we help</NavLink>
                  <NavLink to="/portfolios">Portfolios</NavLink>
                  <NavLink to="/testimonial">Testimonials</NavLink>
                  <NavLink to="/insight">Insight</NavLink>
                </div>

                <div className="hidden md:block">
                  <Link href="/contact" passHref>
                    <Button className="bg-gray-50   hover:bg-blue-700 w-full lg:w-auto">
                      <span className="text-black">Conatct Us </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
