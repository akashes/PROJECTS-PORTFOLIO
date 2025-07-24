import React from 'react'
import { SiLeetcode } from "react-icons/si";


const Social = () => {
  return (
    <div className="home__social">
    <a href="https://www.linkedin.com/in/akash-es" className="home__social-icon" target='_blank'>
      <i className="uil uil-linkedin"></i>
     </a>
    <a href="https://www.leetcode.com" className="home__social-icon" target='_blank'>
      <SiLeetcode style={{fontSize:'22px'}} />
    </a>
    <a href="https://github.com/akashes" className="home__social-icon" target='_blank'>
      <i className="uil uil-github-alt"></i>
    </a>
  </div>
  )
}

export default Social
