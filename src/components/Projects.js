import React from "react";
import bitez from "../images/bitez.png";
import catal from "../images/catal.png";
import curious from "../images/curious.png";
import smsp from "../images/smsp.png";
import hekman from "../images/hekman.png";
import nokiaa from "../images/nokiiaa.png";

const posts = [
  {
    id: 4,
    title: "Intent Based LLM - Nokia",
    href: "",
    description:
      "Utilizing LLMs to translate natural language into intents, aligned with TMF921 Intent Management API standards.  Engineered prompts for the Llama3 model to accurately generate TMF921 Payload in JSON-LD format, ensuring precise and efficient data representation. Processed 500+ service intents using Llama3, mapping user queries into structured JSON-LD payloads.",
    date: "February, 2024",
    category: { title: "Gen AI - LLM", href: "#" },
    image: nokiaa,
  },
  {
    id: 2,
    title: "Hackman v7",
    href: "https://hackman-v7.netlify.app/",
    description:
      "HACKMAN v.7 is an Inter College, extravagant 24-hour Hackathon, hosted by the Department of ISE, Dayananda Sagar College of Engineering (DSCE), Bangalore , Led the Frontend team and collaboratively worked with 10+ people on Github",
    date: "February, 2024",
    category: { title: "ReactJs, Postgres,Express", href: "#" },
    image: hekman,
  },
  {
    id: 3,
    title: "Curious Capital",
    href: "https://curiouscapital.in/",
    description:
      "Built this website for a Crypto investments company,Curious Capital.A MERN stack project with a blog interface for the admin to post blogs.",
    date: "April, 2024",
    category: { title: "MERN stack", href: "#" },
    image: curious,
  },
  {
    id: 1,
    title: "Catalysis2.0",
    href: "https://isecatalysis.in/",
    description:
      "Catalysis is an inter-department, extravagant 3-day tech fest, hosted by the ISE Department of Dayananda Sagar College of Engineering (DSCE), Bangalore.Contributed in making this full stack website. Catalysis aims to bring out the technical aspects in students by incorporating tech in various events going to be held throughout the whole of the fest",
    date: "December, 2023",
    category: { title: "MERN stack", href: "#" },
    image: catal,
  },
  {
    
    id: 5,
    title: "Bitez",
    href: "https://github.com/AchyuthPRao/Bitez",
    description:
      "A fully functional Food-ordering website built from scratch using MERN stack, with a robust database built using Mongoose and MongoDB,An interactive and quick Frontend UI built using ReactJs,Redux and The backend is handled by NodeJs and Express",
    date: "November, 2023",
    category: { title: "MERN stack", href: "#" },
    image: bitez,
  },
  
  // More posts...
];
export default function Projects() {
  return (
    <div id="projects" className="bg-white py-20 sm:py-24 sm:pb-60">
      <div className="mx-auto max-w-7xl ">
        <h1 className="text-4xl font-bold mx-4 sm:text-7xl -mb-8 bg-gradient-to-r from-green-700 via-gray-900 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient pb-2 name">
          {"<Projects/>"}{" "}
        </h1>
        <div className="ml-6 lg:ml-6 sm:ml-6 md:ml-4 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-s">
                <time className="text-gray-500">{post.date}</time>
                <span className="relative z-1 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-500 hover:text-white shadow-sm">
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
                <div className="mt-2 mr-2 shadow-lg">
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
