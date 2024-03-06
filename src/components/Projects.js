import React from "react";
import bitez from "../images/bitez.png";
import catal from "../images/catal.png";
import smsp from "../images/smsp.png";
import pharma from "../images/Screenshot 2024-03-06 135747.png";

const posts = [
  {
    id: 1,
    title: "PharmaDB",
    href: "https://github.com/AchyuthPRao/Pharma_db-React",
    description:
      "A Full Stack Project with ReactJs, Docker, ExpressJs and MySql as the database. To Store Pharmaceutical data. Database normalized to 3NF with multiple tables and forms.",
    date: "February, 2024",
    category: { title: "DBMS and Full Stack (Dockerized)", href: "#" },
    image: pharma,
  },
  {
    
    id: 4,
    title: "Bitez",
    href: "https://github.com/AchyuthPRao/Bitez",
    description:
      "A fully functional Food-ordering website built from scratch using MERN stack, with a robust database built using Mongoose and MongoDB,An interactive and quick Frontend UI built using ReactJs,Redux and The backend is handled by NodeJs and Express",
    date: "November, 2023",
    category: { title: "MERN stack", href: "#" },
    image: bitez,
  },
  {
    id: 2,
    title: "SmartSpend",
    href: "https://github.com/AchyuthPRao/SmartSpend",
    description:
      "One stop solution for your Untracked Expenses! A full fledged expense tracker with User Authentication,P2P lending(Chat Room), Interactive Ui, Annual Financial Analysis and much more!",
    date: "November, 2023",
    category: { title: "MERN stack", href: "#" },
    image: smsp,
  },
  {
    id: 3,
    title: "Catalysis2.0",
    href: "https://isecatalysis.in/",
    description:
      "Catalysis is an inter-department, extravagant 3-day tech fest, hosted by the ISE Department of Dayananda Sagar College of Engineering (DSCE), Bangalore.Contributed in making this full stack website. Catalysis aims to bring out the technical aspects in students by incorporating tech in various events going to be held throughout the whole of the fest",
    date: "December, 2023",
    category: { title: "MERN stack", href: "#" },
    image: catal,
  },
 

  // More posts...
];
export default function Projects() {
  return (
    <div id="projects" className="bg-white py-20 sm:py-32 sm:pb-60">
      <div className="mx-auto max-w-7xl ">
        <h1 className="text-4xl font-bold mx-4 sm:text-7xl -mb-8 bg-gradient-to-r from-pink-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient pb-2">
          Projects{" "}
        </h1>
        <div className="ml-6 lg:ml-6 sm:ml-6 md:ml-4 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-s">
                <time className="text-gray-500">{post.date}</time>
                <span className="relative z-1 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href} target="_blank">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
                <div className="mt-2 mr-2">
                  <img src={post.image} alt={post.image} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
