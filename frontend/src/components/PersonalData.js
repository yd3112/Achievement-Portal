import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonalDataCard from "./PersonalDataCard";
import PersonalDataInformation from "./PersonalDataInformation";
import datas from "../fake_data/datas.json";
import "../dashboard.css";
import headings from "../fake_data/achievements.json"
import Accordian from "./Accordian";
import accordianData from '../fake_data/accordian_data.json'

export default function Dashboard(props) {
    const [user, setUser] = useState(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : false
    );
    const [student, setStudent] = useState(null);
    console.log(user);
    const url = `http://localhost:4000/get/${user.uid}`;
  
    useEffect(() => {
      axios.get(url).then((response) => {
        setStudent(response.data);
      });
    });
    return (
        <>
          <Navbar />
           <div className="data_section"
            style={{
              display: "flex",
              marginTop: "2rem",
              position: "absolute",
              width: "100vw",
            }} 
         > 
            {/* this data is of the logged in user */}
            {/* Send an appropriate response from the backend about the user who has logged in */}
             <div> 
                
            <PersonalDataCard datas={datas[0]} />
             
            <PersonalDataInformation datas={datas[0]}/>
            
            </div>
  
            
            
             </div>
            
            
          </>
    );
};
 