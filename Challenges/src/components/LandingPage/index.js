import React from "react";
import {FaAngleDoubleRight} from "react-icons/fa"
import { IconContext } from "react-icons";
import RukundoImage from "../img/RUKUNDOKEVIN.jpg"
const LandingPage = () =>{
return (
    <div className="container home" >
    <div className="img_container">
      <img src={RukundoImage} height="420" width="400" style={{backgroundAttachment: "fixed"}} alt="Rukundo Kevin" />
      <div>
        <button className="btn cv-btn"> <span> Download My CV </span></button>
      </div>
    </div>

    <div className="arrow-right">
    <IconContext.Provider value={{ className: "terminal_arrow fa-2x" }}>
        <FaAngleDoubleRight />
     </IconContext.Provider>    </div>
    <div className="prompt">
      <div className="control red"></div>
      <div className="control yellow"></div>
      <div className="control green"></div>
      <div className="top_panel">
      </div>
      <div className="editor">
          <span id="txt">Rukundo Kevin is A </span> 
          <span className="txt-type" data-wait="1000" data-words='["Developer", "Designer", "Creator","Programmer","Data Analyst"]'>Developer</span>
              
      </div>
    </div> 
</div>
)
}

export default LandingPage;