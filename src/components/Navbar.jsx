import React from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          {" "}
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {" "}
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {" "}
          <LinkedInIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark "
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
        {/* <Link href="/" target="_blank">
          {" "}
          Twitter
        </Link> */}
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
