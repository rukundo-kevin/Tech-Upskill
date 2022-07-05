import React from "react";

const SkillBar = ({skill, percentage})=>{
   const style={width: `${percentage}`}

    return(
        <span>
        {skill}
        <div className="skill-bar">
            <div className="bar" style={style}></div>
        </div>
        </span>
    )
}

export default SkillBar;