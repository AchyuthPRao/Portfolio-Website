import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import meImg from "../images/solo_slate.png";
import { FaFileDownload } from "react-icons/fa";

export default function Example() {
  return (
    <div id="home">
      <Navbar />
      <div className="bg-white py-28 sm:py-40 ">
        <div className="mx-auto max-w-7xl ">
          <div className="float-right mr-8 sm:top-24 sm:right-40 sm:mr-10 ">
            <div className="h-20 w-20 overflow-hidden  rounded-full sm:h-72 sm:w-72 sm:mb-12">
              <img
                src={meImg}
                alt=""
                className="object-cover h-full w-full object-center "
              />
            </div>
          </div>
          <div className="max-w-3xl ml-6 lg:ml-6 sm:ml-6 ">
            <h1 className="text-2xl tracking-tight text-gray-900 sm:text-4xl mb-2">
              Hey There!
            </h1>
            
            <h1 className="name pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-3 bg-gradient-to-r from-pink-700 via-blue-500  to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              I'm {"<Achyuth Rao/>"}
            </h1>
            <h1 className="text-xl tracking-tight text-gray-900 sm:text-4xl mb-1">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: [
                    "Ex-Pluralsight Full Stack ",
                    "Ex-Nokia Project Intern",
                    "Full Stack | Gen-AI | Software Engineering",
                  ],
                }}
              />
            </h1>
            <div className="pt-6">
              <a
                href="/Achyuth_ResumeATS.pdf"
                download="/ATS-Achyuth.pdf"
                className="text-sm tracking-tight text-gray-500 sm:text-xl to-blue-400 align-middle"
              >
                Resume{" "}
              </a>
              <span className="inline-block align-middle">
                <FaFileDownload color="gray"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
