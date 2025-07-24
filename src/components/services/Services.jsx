import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const[toggleState,setToggleState]=useState(0)

    const toggleTab=(index)=>{
        setToggleState(index)
    }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>


      <div className="services__container container grid">



        <div className="services__content ">
            <div ><i className="uil uil-monitor services__icon"></i>
                <h3 className="services__title">
                    Product <br /> Designer
                </h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">                                        Product <br /> Designer</h3>
                    <p className="services__modal-description">
            Focused on building full-stack web applications using MongoDB, Express, React, and Node.js.
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I develop the user interface</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Web Page development</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I create UX element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I create UX element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Implemented CRUD operations for product and user management.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      <div className="services__content  ">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                    Ui/Ux <br /> Enthusiast
                </h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">                                        Ui/Ux <br /> Enthusiast
</h3>
                    <p className="services__modal-description">
Self-taught designer focused on crafting simple and engaging user experiences.


                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Designed user-centric interfaces using Figma and Canva</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Prioritized usability and accessibility in all designs</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Created wireframes and mockups for personal projects.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Adapted modern design trends into project interfaces.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Design and mockups of products for companies.</p>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
      <div className="services__content ">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">
                    MERN Stack Developer
                </h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">                     MERN Stack Developer
</h3>
                    <p className="services__modal-description">
Focused on building full-stack web applications using MongoDB, Express, React, and Node.js.
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Built full-stack projects with authentication and REST APIs

</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Integrated MongoDB Atlas for real-time data storage

</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Implemented CRUD operations for product and user management

.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Deployed apps on platforms like Render and Vercel

.</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
      </div>
      </div>

    </section>
  )
}

export default Services
