import React from 'react'

const Info = () => {
  return (
   <div className="about__info grid">
    <div className="about__box">
        <i class="bx bx-medal about__icon"></i>
        <h3 className="about__title">
            Skills
        </h3>
            <span className="about__subtitle">
                MERN stack
                
            </span>
    </div>
    <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">
            Completed
        </h3>
            <span className="about__subtitle">
                20 + Projects
                
            </span>
    </div>
    <div className="about__box">
<i class='bx  bx-message-bubble-exclamation about__icon'  ></i>      
   <h3 className="about__title">
            Support
        </h3>
            <span className="about__subtitle">
               Collaborative 
                
            </span>
    </div>
   </div>
  )
}

export default Info
