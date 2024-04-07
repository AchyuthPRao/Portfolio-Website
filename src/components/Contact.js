import React from "react";
import "../App.css";
export default function Contact() {
  return (
    <div className="m-0 bg-gray-700 p-5 flex justify-evenly ">
      <a
        href="https://github.com/AchyuthPRao"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center"
      >
        <i class="bi bi-github text-white ikon"></i>
        <p className="text-sm  text-white sm:text-lg mx-1 sm:mx-0">Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/achyuth-p-rao/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center"
      >
        <i class="bi bi-linkedin text-white ikon "></i>
        <p className="text-sm  text-white sm:text-lg mx-1 sm:mx-0">LinkedIn</p>
      </a>
      <a
        href="mailto:achyuthprao123@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center"
      >
        <i class="bi bi-envelope-fill text-white ikon"></i>
        <p className="text-sm text-white sm:text-lg mx-1 sm:mx-0">Gmail</p>
      </a>
    </div>
  );
}
