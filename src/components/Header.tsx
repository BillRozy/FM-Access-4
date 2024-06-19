import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error no types for js file
import tailwindConfig from "../../tailwind.config.js";
import { throttle } from 'lodash'

const { theme } = resolveConfig(tailwindConfig);

const TABLET_SIZE = parseInt(theme.screens.tablet);

export default function Header({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (change: boolean) => void;
}) {
  const [screenWidth, setScreenWidth] = useState(0);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const openBtn = useRef<HTMLButtonElement>(null);
  const links = ["Home", "New", "Popular", "Trending", "Categories"];
  const mobileClassesNav = `flex-col absolute bg-white-off z-20 w-[256px] h-screen top-[0] right-[0] ${
    open ? "" : "sr-only"
  }`;
  const wideScreenClassesNav = `tablet:static tablet:bg-none tablet:z-0 tablet:w-auto tablet:h-auto tablet:p-[0]`;
  const toggleMenuAndChangeFocus = () => {
    onOpenChange(!open);
  };
  useEffect(() => {
    const listener = throttle((event: UIEvent) => {
      if (event.target != null) {
        const target = event.target as Window;
        setScreenWidth(target.innerWidth)
      }
    }, 250);
    window.addEventListener("resize", listener, { capture: false });
    setScreenWidth(window.innerWidth)
    return () => window.removeEventListener("resize", listener);
  }, []);
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (["Escape", "Esc"].includes(event.key) && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener("keyup", listener);
    return () => window.removeEventListener("keyup", listener);
  });
  useEffect(() => {
    open ? closeBtn?.current?.focus() : openBtn?.current?.focus();
  }, [open]);
  useEffect(() => {
    if (screenWidth >= TABLET_SIZE) {
      onOpenChange(false);
    }
  }, [screenWidth, onOpenChange]);

  return (
    <header
      className="flex flex-row justify-between items-center"
      aria-live="polite"
    >
      <img
        className="w-[44.98px] tablet:w-800 tablet:aspect-[16/10]"
        src={logo}
        alt="Logo of a company: W letter"
      ></img>
      {open && (
        <div
          className={`fullscreen-overlay absolute z-10 w-full h-screen bg-blue-dark-opaque top-[0] left-[0] tablet:hidden`}
        ></div>
      )}
      <nav
        role="navigation"
        aria-label="Primary"
        inert={open || screenWidth >= TABLET_SIZE ? undefined : "true"}
        className={`flex p-300 pt-[28px] gap-300 ${mobileClassesNav} ${wideScreenClassesNav}`}
      >
        <button
          ref={closeBtn}
          className="tablet:hidden self-end mb-[62px]"
          aria-expanded={open}
          onClick={toggleMenuAndChangeFocus}
        >
          <img
            className="size-[30.41px]"
            src={menuClose}
            alt="Hamburger menu close button"
          ></img>
        </button>
        <ul
          className={`gap-300 flex flex-col ${
            open ? "" : "max-tablet:hidden"
          } tablet:flex-row tablet:gap-500`}
        >
          {links.map((link) => (
            <li key={link}>
              <a
                className="text-blue-dark text-lg leading-6 tablet:text-[15px] tablet:leading-[26px] tablet:text-blue-grayish-dark hover:text-red-soft"
                href=""
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        ref={openBtn}
        className={`tablet:hidden ${open ? "hidden" : ""}`}
        aria-expanded={open}
        onClick={toggleMenuAndChangeFocus}
      >
        <img
          className="w-[40px] h-auto"
          src={menuOpen}
          alt="Hamburger menu open button"
        ></img>
      </button>
    </header>
  );
}
