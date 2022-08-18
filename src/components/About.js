import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {
  // const bio = props.bio;
  if(typeof props.bio === "string" && props.bio!==""){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      {/* <p>{user.bio}</p> */}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );}
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}



export default About;
