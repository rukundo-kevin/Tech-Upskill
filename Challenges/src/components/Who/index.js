import React from "react";
import { FaGithub, FaUser } from "react-icons/fa";
import SkillBox from "./SkillBox";
import skills from "./skills";

const WhoPage = () => {
   return(
    <div className="container" id="who">
    <div className="social about">
      <div className="social_box">
        <FaUser /><br />
      ABout Me
      <hr />
      <div className="about-text">
          Rukundo Kevin is goal oriented , enthusiastic developer with problem solving capabilities and techinical writing skills under his sleeve.
          With over 3 years of experience in front-end and back-end development.
      </div>
      <a href="https://www.github.com/rukundo-kevin" target="blank">
                  <button className="btn github-btn">
                      <FaGithub />
                    View Github Profile 
                  </button>
      </a>
      </div>
    </div>
     {
      skills.map(({id, skillEnd, skills})=>(
        <SkillBox key={id} title={skillEnd} skills={skills}/>
      ))
     }
     </div>
   )
}

export default WhoPage;
