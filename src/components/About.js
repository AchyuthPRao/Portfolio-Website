import React from "react";
import code from "../images/coding.png"

export default function About() {
  return (
    <>
      <div className="bg-gray-800 p-12 sm:p-24">
        <h1 className="text-2xl sm:text-5xl font-bold text-white mx-2">
          About
        </h1>
        <div className="flex">
        <p className="text-white m-2 text-[10px] sm:text-2xl sm:leading-10 ">
          I am a passionate Full Stack Developer,with Internships at <strong className="font-bold tracking-tight text-gray-900 bg-gradient-to-r from-pink-700 to-blue-500  text-transparent bg-clip-text bg-300% animate-gradient">
            <a target="_blank" rel="noopener noreferrer" href="http://pluralsight.com" >Pluralsight</a> 
          </strong> as a Full Stack Intern.
          and at <strong className="font-bold tracking-tight text-gray-900 bg-gradient-to-r from-blue-300 to-blue-500  text-transparent bg-clip-text bg-300% animate-gradient">
            <a target="_blank" rel="noopener noreferrer" href="http://nokia.com" >Nokia</a> 
          </strong> as a Project Intern.
          Additionally, I have taken on <strong className="font-bold text-green-300">Freelance projects </strong> 
          where I have designed and implemented websites tailored to clients'
          specific needs.<span className="hidden sm:block">I'm passionate about using technology to solve challenges and always eager to learn and adapt to the latest trends. I'm Open to Work!
            If my profile matches you requirements, <a className="text-blue-200 font-semibold" href="#contact">do reach out!</a>
          </span>
          
        </p>
        <img className="rounded-full h-16 w-16 sm:h-56 sm:w-56 ml-4" src={code} alt="" />
        </div>
      </div>
    </>
  );
}
