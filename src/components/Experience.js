import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import wsa from "../images/wsa.png";
import nokia from "../images/nokia.jpg";
import ps from "../images/ps.jpg";
import wisework from "../images/wisework.png";

export default function Experience() {
  return (
    <div id="experience" className="bg-gray-800 py-20 sm:pb-64">
      <h1 className="text-4xl font-bold mx-4 sm:text-6xl text-white p-3 text-center mb-6">
        Experience{" "}
      </h1>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date=" Jan 2025 - Jun 2025"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon={<img src={ps} alt="myLogo" className="rounded-full" />}
        >
          <h2 className="vertical-timeline-element-title mb-1 font-bold text-dark">
            Full Stack Intern - Pluralsight
          </h2>
          <h4 className="text-dark mt-2">
            1. Built a low-latency interactive live streaming MVP from scratch
            using WebRTC and WebSockets, achieving 300ms latency
            <br />
            2. Implemented Rest API's using NodeJs, Built UI's with ReactJs
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="Feb 2024 - Jul 2024"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon={<img src={nokia} alt="myLogo" className="rounded-full" />}
        >
          <h2 className="vertical-timeline-element-title mb-1 font-bold text-dark">
            Intern-
          </h2>
          <h2 className="vertical-timeline-element-subtitle mb-2 font-bold text-dark">
            Nokia
          </h2>
          <h4 className="text-dark">
            A Project based Internship to build an Intent based LLM.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="Dec 2023 – March 2024"
          iconStyle={{ color: "#000", backgroundColor: "#fff" }}
          icon={<img src={wisework} alt="myLogo" className="rounded-full" />}
        >
          <h2 className="vertical-timeline-element-title mb-1 font-bold text-dark">
            Intern-
          </h2>
          <h2 className="vertical-timeline-element-subtitle mb-2 font-bold text-dark">
            WiseWork
          </h2>
          <h4 className="text-dark">
            Wise Work is an innovation-centric AI-driven Metaverse solutions
            company
          </h4>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(995,995,995)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(995,995,995)" }}
          date="Nov 2023"
          icon={
            <img
              src={wsa}
              alt="myLogo"
              className="h-10 sm:h-16 md:h-16 w-20 rounded-full"
            />
          }
        >
          <h2 className="vertical-timeline-element-title mb-1 font-bold text-dark">
            Intern
          </h2>
          <h2 className="vertical-timeline-element-subtitle mb-2 font-bold text-dark">
            WebStackAcademy - Emerxte Technologies
          </h2>
          <h4 className="text-dark">
            MERN stack internship completed with a fully functional project
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
