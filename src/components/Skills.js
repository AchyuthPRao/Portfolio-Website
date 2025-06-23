import React from "react";
// import { useRef, useEffect } from "react";
import reactLogo from "../images/logos/react.png";
import docker from "../images/logos/docker.png";
import js from "../images/logos/js.png";
import node from "../images/logos/nodejs.png";
import mysql from "../images/logos/mysql.png";
import mongo from "../images/logos/mongo.png";
// import vite from "../images/logos/vite.png";
import express from "../images/logos/express.png";
import ts from "../images/logos/ts.png";
import c from "../images/logos/c++.png";
import rest from "../images/logos/rest.png"
import post from "../images/logos/postgres.jpg"
// import jupyter from "../images/logos/jupyter.png";
import "../App.css";

function Skills() {
  return (
    <div>
      <div className="logos ">
        <div className="logos-slide">
          <img className="" src={reactLogo} alt="" />
          <img src={docker} alt="" />
          <img src={js} alt="" />
          <img src={node} alt="" />
          <img src={mysql} alt="" />
          <img src={mongo} alt="" />
          {/* <img src={vite} alt="" /> */}
          <img src={express} alt="" />
          <img src={c} alt="" />
          <img src={ts} alt="" />
          <img src={post} alt="" />
          <img src={rest} alt="" />
        </div>
        <div className="logos-slide">
          <img className="" src={reactLogo} alt="" />
          <img src={docker} alt="" />
          <img src={js} alt="" />
          <img src={node} alt="" />
          <img src={mysql} alt="" />
          <img src={mongo} alt="" />
          {/* <img src={vite} alt="" /> */}
          <img src={express} alt="" />
          <img src={c} alt="" />
          <img src={ts} alt="" />
          <img src={post} alt="" />
          <img src={rest} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
