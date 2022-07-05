import React from "react";
import { FaBars } from "react-icons/fa";
const Header = ({customStyle}) => {

  const  mobileMenu = (e) => {
    const hamburger = e.target.parentNode;
    const navMenu = document.querySelector(".nav-ul");

  //   if(e.target.id === 'bars'){
  //     hamburger.innerHTML = `
  //           <<i class="fa fa-times fa-2x"></i> > 
  //     `;
  //   }else{
  //     hamburger.innerHTML = `
  //     <FaBars> 
  // `; 
  //   }
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
return (
    <div className="nav">
    <ul style={customStyle}>
      <span className="name"> <span className="circle">R</span> UKUND</span>
      <div className="pulse">
      </div>
          <span className="nav-ul">
          <a href="/#who" className="nav-item">
            <li className="first_list"> <span className="list"> About </span> </li>
          </a>
          <a href="/#why" className="nav-item">
            <li> <span className="list"> Social </span> </li>
          </a>

          <a href="/#how" className="nav-item">
              <li id="howLi"> <span className="list"> Contact </span></li>
          </a>
          <a href="/todo" className="nav-item">
             <li id="howLi"> <span className="list"> Todo </span></li>
          </a>
        <li id="hamburger" className="hamburger" > <FaBars id="bars" onClick={mobileMenu}/>  </li>
        </span>
    </ul>
  </div>
)
}

export default Header;
