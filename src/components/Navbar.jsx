import React from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/project" title="Projects" className="mx-4" />
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
