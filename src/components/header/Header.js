import React, { useState } from 'react';
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {

  // when we scroll, what header looks like
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")           //element with class "header" selected
    header.classList.toggle("active", window.scrollY > 100)   // active class is added and removed because of classList.toggle
  }) 

  // toggle state
  const [ismobile, setMobile] = useState(false);

  // changes value of mobile state, according to type of screen
  // useEffect(() => {
  //   const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
  //   const mobile = Boolean(
  //    userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i),
  //   );
  //   setMobile(mobile);
  // }, []);

  console.log(ismobile);

  return (
    <>
     <header className="header">
      <div className="container d_flex">
       <div className="logo">
         <img className="circle" src={logo} alt='' />
         <h2><a href="#home">Portfolio</a></h2>
       </div>

       <div className="navlink">
          {/* link tag is responsible for no appearance of nav link on small screen initially */}
          <ul className={ismobile ? "nav-links-mobile" : "link f_flex uppercase"}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#skill">SKILLS</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>

          <button className='toggle' onClick={() => setMobile(!ismobile)}>
            {/* to understand why button is not visible in larger screen, read "open", "close" styles in header.css */}
            {ismobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            {/* fa-times fa-bars, classes from font awesome, link in index.html */}
          </button>
       </div>
      </div>
     </header>
    </>
  )
}

export default Header