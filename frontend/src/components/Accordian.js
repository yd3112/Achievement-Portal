import details from '../fake_data/accordian_data.json'
import '../accordian.css'
import React, { useState } from 'react';
import Carousel from './Carousel';
const Accordian = ({title, content,heading}) => {
    const [isActive, setIsActive] = useState(false);
    return ( 
        <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h1>{title}</h1>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content"><p><center><h3 style={{fontSize: "2rem"}}>{heading}</h3></center></p>{content}
      <br />
      <div className="pl-32 mt-6 mr-24">
              <Carousel/>
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
      <button className="inline justify-left text-sm text-white rounded-md px-2 py-2 ml-3" style={{backgroundColor: "#3282B8"}}>
                 Delete
          </button>
          <a href="./modifyAchievement">
          <button className="inline justify-left text-sm text-white rounded-md px-2 py-2 ml-3" style={{background: "#3282B8"}}>
                 Modify
          </button>
          </a>
          </div>
          </div>}
    </div>
     );
}
 
export default Accordian;