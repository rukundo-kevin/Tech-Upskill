import React from "react";
import SkillBar from "./SkillBar";

const SkillBox = ({title, skills}) =>{
 return(
    <div className="social skills">
        <h2 style={{textAlign: "center"}}>{title}</h2>
       {
        skills.map(({id, skill, percentage})=>(
            <SkillBar key={id} skill={skill} percentage={percentage}/>
        ))
       }
    </div>
 )
}

export default SkillBox;