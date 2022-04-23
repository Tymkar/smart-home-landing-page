import "./App.css";
import { useState, useEffect } from "react";
import logo from "../src/assets/logo.svg";
import Header from "./components/Header";
import DownloadButton from "./components/DownloadButton";
import Qualities from "./components/Qualities";
import Partners from "./components/Partners";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [size, setSize] = useState(0);

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <>
      <nav className="mx-auto p-4 bg-amber-400">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="/"
            aria-label="Go to homepage"
            className="
              focus:outline-none 
              focus-visible:ring-4 
            ring-neutral-900 
              rounded-sm ring-offset-4 
            ring-offset-amber-400 
              lg:absolute 
              lg:left-1/2
              lg:-translate-x-1/2
              lg:top-9
              z-50
              hover:opacity-75
              transition-opacity
            "
          >
            <img
              src={logo}
              alt="Smart Home Logo"
              width="200"
              className="w-48 md:w-64 lg:w-72"
            />
          </a>

          <button
            id="menu"
            className="
              lg:hidden 
              focus:outline-none 
              focus-visible:ring-4 
              ring-neutral-900 
              rounded-sm ring-offset-4 
              ring-offset-amber-400
              text-neutral-900
              hover:text-neutral-600
              transition-colors
            "
            aria-expanded={mobileMenu ? "true" : "false"}
            aria-label="Open Menu"
            onClick={handleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            role="menubar"
            style={{ display: `${mobileMenu || size > 1023 ? "" : "none"}` }}
            className="
                flex 
              flex-col 
              gap-4 
              absolute 
              z-40 
              right-0 
              left-0 
              top-16 
              bg-amber-400 
              shadow-xl 
              text-center 
              text-lg 
              p-6 
              items-center 
              lg:flex 
              lg:flex-row 
              lg:static 
              lg:shadow-none 
              lg:justify-between 
              lg:w-full
            "
          >
            <a
              role="menuitem"
              href="/"
              className="
                py-1
                px-6
                dark:text-neutral-900
                focus:outline-none 
                focus-visible:ring-4 
                ring-neutral-900 
                rounded-sm 
                ring-offset-4 
                ring-offset-amber-400
                hover:text-neutral-600
                transition-colors 
              "
            >
              Home
            </a>

            <a
              role="menuitem"
              href="/"
              className="
                py-1
                px-6
                dark:text-neutral-900
                focus:outline-none 
                focus-visible:ring-4 
                ring-neutral-900 
                rounded-sm 
                ring-offset-4 
                ring-offset-amber-400
                hover:text-neutral-600
                transition-colors 
                lg:mr-auto
              "
            >
              Contact
            </a>

            <a
              role="menuitem"
              href="/"
              className="
                py-1
                px-6
                dark:text-neutral-900
                focus:outline-none 
                focus-visible:ring-4 
                ring-neutral-900 
                rounded-sm 
                  ring-offset-4 
                ring-offset-amber-400
                hover:text-neutral-600
                transition-colors 
              "
            >
              Login
            </a>

            <a
              role="menuitem"
              href="/"
              className="
                py-2
                px-6
                bg-teal-900
                text-white
                shadow-lg
                hover:shadow-none
                transition-shadow
                focus:outline-none 
                focus-visible:ring-4 
                ring-neutral-900 
                rounded-md 
                ring-offset-4 
                ring-offset-amber-400
              "
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      <Header />

      <main
        className="
          grid
          gap-12
          sm:gap-16   
          md:gap-24
          lg:gap-32
          px-8
          overflow-hidden
        "
      >
        <DownloadButton />
        <Qualities />
        <Partners />
        <SignUp />
      </main>
      <Contact />
    </>
  );
}
