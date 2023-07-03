import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <div className="font-bold text-8xl mt-64 w-full text-center">Skills</div>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <Skill name={"React JS"} x="-20vw" y="-2vw" />
        <Skill name={"Node JS"} x="-5vw" y="-10vw" />
        <Skill name={"Next JS"} x="20vw" y="6vw" />
        <Skill name={"CSS "} x="0vw" y="11vw" />
        <Skill name={"TypeScript"} x="-20vw" y="-15vw" />
        <Skill name={"Figma"} x="15vw" y="-12vw" />
        <Skill name={"JavaScript"} x="32vw" y="-5vw" />
        <Skill name={"Tailwind CSS"} x="0vw" y="-21vw" />
        <Skill name={" HTML "} x="-5vw" y="-10vw" />
        <Skill name={"Github and Git commands"} x="-25vw" y="18vw" />
        <Skill name={"Firebase"} x="-2vw" y="21vw" />
        <Skill name={"AWS Stacks"} x="32vw" y="-20vw" />
        <Skill name={"REST API"} x="32vw" y="-20vw" />
        <Skill name={"Mongo DB"} x="19vw" y="-22vw" />
        <Skill name={"MySQL"} x="-32vw" y="-20vw" />
        <Skill name={"Redux and Context API"} x="-32vw" y="5vw" />
      </div>
    </>
  );
};

export default Skills;
