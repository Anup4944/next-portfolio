import React from "react";
import { useRouter } from "next/router";

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleOnClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleOnClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light 
        
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark
     
        `}
      ></span>
    </button>
  );
};

export default CustomMobileLink;
