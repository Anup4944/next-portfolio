import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <div className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </div>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{
            scale: 1.05,
          }}
        >
          Skills
        </motion.div>
        <Skill name={"React JS"} x="-20vw" y="-3vw" />
        <Skill name={"Node JS"} x="-5vw" y="-10vw" />
        <Skill name={"Next JS"} x="20vw" y="16vw" />
        <Skill name={"CSS "} x="0vw" y="11vw" />
        <Skill name={"TypeScript"} x="-20vw" y="-15vw" />
        <Skill name={"Figma"} x="15vw" y="-12vw" />
        <Skill name={"JavaScript"} x="32vw" y="-5vw" />
        <Skill name={"Tailwind CSS"} x="0vw" y="-21vw" />
        <Skill name={" HTML "} x="-5vw" y="-10vw" />
        <Skill name={"Github/Git commands"} x="-25vw" y="18vw" />
        <Skill name={"Firebase"} x="-2vw" y="21vw" />
        <Skill name={"AWS Stacks"} x="32vw" y="-20vw" />
        <Skill name={"REST API"} x="32vw" y="-20vw" />
        <Skill name={"Mongo DB"} x="19vw" y="-2vw" />
        <Skill name={"MySQL"} x="13vw" y="-25vw" />
        <Skill name={"Redux/Context API"} x="-32vw" y="5vw" />
      </div>
    </>
  );
};

export default Skills;
