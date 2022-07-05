import React from "react";
import { FaBook, FaFutbol, FaGithub, FaHeart, FaLaptop, FaMusic } from "react-icons/fa";
import { IconContext } from "react-icons";

import { ReactComponent as ReadSvg } from '../img/read.svg';
import { ReactComponent as MusicSvg } from '../img/music.svg';
import { ReactComponent as FootballSvg } from '../img/football.svg';
import { ReactComponent as SocialMediaSvg } from '../img/socialMedia.svg';

const WhyPage = () =>{
 return(
    <div className="container" id="why">
      <div className="why-text"> I Don't  Like
              <IconContext.Provider value={{ color: "#ee354b", className: "fa-1x" }}>
                  <FaLaptop />
              </IconContext.Provider> 
                                  only,    I also                                
              <IconContext.Provider value={{ color: "#0080A9", className: "fa-1x" }}>
                  <FaHeart />
              </IconContext.Provider> 
      These Things
      </div>
      <div className="social svg football">
        <h3>Football   
                  <FaFutbol />
        </h3>  
        <h4>Though I don't play, I am one hell of a fan. And a big sucker for Chelsea Fc</h4>
      <FootballSvg />
    </div>
    <div className="social svg music">
        <h3>Music  <FaMusic /></h3> 
        <h4>From classNameics  to Rock 'n Roll, Down To Modern Pop, Name it I listen to it. <i className="fa fa-chelsea"></i></h4>
        <MusicSvg />
    </div>
      <div className="social svg social-media">
          <h3>Social Media <FaGithub/></h3>
          <h4>And When i get a free time, i do love to browse the net.</h4>
          <SocialMediaSvg />
      </div>
    <div className="social svg reading">
        <h3>Reading <FaBook /> </h3>
          <h4 className="reading-text">Say No More</h4>
          <ReadSvg />
    </div>
</div>
 )
}

export default WhyPage;
