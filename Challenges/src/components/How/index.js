import React from "react";
import { FaCoffee, FaEnvelope, FaIdBadge, FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const HowPage = () =>{
 return(
    <div id="how" >
    <div>
      <h1>Get In Touch With Me</h1>
      <hr/>
      <hr/>
    </div>
    <div className="how-description">
      <h2 style={{textAlign:  "center"}}>Contact Me  </h2>
      <p>  Got a job and you want to hire me, ask me something , request a collaboration or just want to buy me a cup of coffee. Send me a message i will be happy to reply.</p>
        <div>
            <h3>Name</h3>
          <FaIdBadge />  Rukundo Kevin
        </div>
        <div>
            <h3>Address</h3>
          <IconContext.Provider value={{ color: "red", className: "fa-1x" }}>
                <FaMapMarkerAlt />
            </IconContext.Provider> 
           Huye, Rwanda
        </div>
        <div>
            <h3>Email</h3>
           <FaEnvelope /> kevinrukundo1@gmail.com
        </div> 
        <div>
            <h3>Favourite Coffee</h3>
          <FaCoffee />  Cappuccino
        </div>
    </div>
    <div className="last">
       <div className="error">
            
       </div>
      <form  action="#" className="" method="post" id="contact-form">
        <div className="form-item">
          <input type="text" name="name" id="name" />
          <label>Names</label>
        </div>

        <div className="form-item">
          <input type="email" name="email" id="email" />
          <label>Email</label>
        </div>
        <div className="form-item">
          <input type="text" name="subject" id="subject" />
          <label>Subject</label>
        </div>
        <div className="form-item">
          <textarea name="message" id="message">
            
          </textarea>
          <label>Message</label>
        </div>
        <button className="btn "><span>Send Message </span>  </button>
      </form>
    </div>
  </div>
 )
}

export default HowPage;