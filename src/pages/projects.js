import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import eProject from "../../public/images/projects/image-3.png";
import sProject from "../../public/images/projects/socialProject.avif";
import nProject from "../../public/images/projects/nike.avif";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedPorject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span
          className="text-primary font-medium text-2xl dark:text-primaryDark 
        xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            {" "}
            Live demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
   xs:p-4
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-2xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold md:text-base"
          >
            {" "}
            Live
          </Link>
          <Link href={githubLink} target="_blank" className="w-8 md:w-6">
            {" "}
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Anup Poudel | My Projects</title>
        <meta name="description" content="about me"></meta>
      </Head>
      <TransitionEffect />
      <main
        className="w-full mb-16 flex flex-col items-center justify-center dark:text-light
    
      "
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-4">
            <div className="col-span-12">
              <FeaturedPorject
                title="E-commerce Website"
                summary="A feature-rich E-commerce Website using React, Overlay navbar, Stripe, React/Redux, NodeJS, MongoDb and Recharts."
                link="https://estore-1rqj.onrender.com/"
                type="Featured Project"
                img={eProject}
                githubLink="https://github.com/Anup4944/e-commerce"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Social Media App"
                summary="Like/Unlike post, Follow/Unfollow other user, CRUD post and profile data, Forgot/Reset/Update password.Mobile Responsive."
                link="https://mysocialapp.onrender.com/"
                type="Project"
                img={sProject}
                githubLink="https://github.com/Anup4944/Social"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Blog App"
                summary="This is blog app build using React , GraphQL, NextJS and Tailwind CSS"
                link="https://my-blog-anup-poudel.vercel.app/"
                type="Project"
                img={project1}
                githubLink="https://github.com/Anup4944/my-blog"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedPorject
                title="Nike Website Clone"
                summary="Nike webiste build using React, Tailwind CSS and deploy on Vercel"
                link="https://nike-store-clone-jet.vercel.app/"
                type="Featured Project"
                img={nProject}
                githubLink="https://github.com/Anup4944/nike-store-clone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Hair Dresser Website"
                summary="AFrontend for hair dressing business. Styled component, Email JS and deployed on Render"
                link="https://menshairdresser.onrender.com"
                type="Project"
                img={project1}
                githubLink="https://github.com/Anup4944/hair-dresser-project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Real Chat App"
                summary="Real chat application build using Socket.IO, deployed server side on heroku and client side on netlify"
                link="https://chatapp-ma7n.onrender.com/"
                type="Project"
                img={project1}
                githubLink="https://github.com/Anup4944/chatapp-ui"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
