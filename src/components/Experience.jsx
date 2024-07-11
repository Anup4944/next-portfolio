import React, { useRef } from "react";
import Details from "./Details";
import { useScroll, motion } from "framer-motion";

const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Junior Software Developer"
            company="Rebb Tech"
            companyLink="https://www.rebbtech.com.au/"
            time="Novermber 2022 - May 2023"
            address="Rockdale, NSW"
            work="Write effective, maintainable, and extensible JavaScript code.
            Collaborate with the development team to complete assigned projects.
            Implement new product features and backend system improvements
            Design and construction of REST APIs integrating front-end UI with the constructed APIs.
            Continuously look to identify and improve gaps in existing applications and systems.
            Deliver highest quality software by creating unit test plan and testing code thoroughly.
            Participate in code reviews and ensure coding standards are followed.
            Fixing bugs or adding features to our existing codebase.
            Document technical issue and solution."
          />
          <Details
            position="Software Developer-Intern"
            company="Rebb Tech"
            companyLink="https://www.rebbtech.com.au/"
            time="July 2022 - November 2022"
            address="Rockdale, NSW"
            work="Research UX/UI design for online e-commerce and other web sites. 
            Design website prototypes
            Work in a team to Build front-end web application using html, CSS, JavaScript and React JS. 
            Work with team or individually to build back-end server API using NodeJS
            Create database schema
            Build and integrate database to the backend API system
            Collect data to test the system.
            Run unit and integration testing.
            Document the technical issue and solution.
            Discover bug and report, involve in the bug fix."
          />
          <Details
            position="Online Team Member"
            company="Woolworths"
            // companyLink="www.google.com"
            time="Feburary 2023 - Present"
            address="Goulburn, NSW"
            work="Delivered exceptional customer service to every customer by
            leveraging extensive knowledge of products and services and
            creating welcoming, positive experiences. Investigated and resolved customer inquiries and complaints
            quickly. Pick quality products online customer orders and loading it onto
            trucks at a fast pace. Responded proactively and positively to rapid change.
            Recommended products to customers, thoroughly explaining
            details. Maintained up-to-date knowledge of product and service
            changes. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
