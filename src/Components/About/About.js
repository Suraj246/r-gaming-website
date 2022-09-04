import React from "react";
import "./About.css"

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutData">
          <img src="Images/thu.jpg" alt="" className="aboutImg"/>
          <div className="aboutText">
            <h2 style={{fontSize:"2vw",padding:"10px"}}>Know More About Us</h2>
        
            <p>Ps4 has the best free online games selection and offers the most fun experience to play alone or with friends. We offer instant play to all our games without downloads, login, popups or other distractions. Our games are playable on desktop, tablet and mobile so you can enjoy them at school, at home or on the road. Every month over 30 million gamers from all over the world play their favorite games on Ps4.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
