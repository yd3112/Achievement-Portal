import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ModifyDataForm from "./ModifyDataForm";
import PersonalDataInformation from "./PersonalDataInformation";
import datas from "../fake_data/datas.json";

export default function ModifyAchievement(props){
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
            }} >
           
        
            <ModifyDataForm/>
            
           
            <PersonalDataInformation/>
        </div>

          

        
        
      </>

    );

};
 