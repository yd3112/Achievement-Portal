import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { SocialIcon } from "react-social-icons";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Auth from "./Auth";
import Card from "./Card";
import datas from "../fake_data/datas.json";
import "../dashboard.css";
import PersonalDataCard from "./PersonalDataCard";
// import datas from "../fake_data/datas.json";
import headings from "../fake_data/achievements.json"
import Accordian from "./Accordian";
import accordianData from '../fake_data/accordian_data.json'
import Modal from "./AddData";
import ModalCo from "./AddDataCo";
import ModalPlac  from './AddDataPlacement';
import ModalMisc from "./AddDataMisc";
import ModalHighStud from "./AddDataHighStud";

{
  /* its for Moon Patel
            I have used Name of student object prop like fname socials lname change it according to you.
            and change in backend also. 
*/
}

{
  /* if User is not signed in Then It Will Redirect The User to the SignIn Page Instead of Dashboard
   */
}

export default function Dashboard(props) {
  const [modalOn, setModalOn] = useState(false);
  const [modalCo, setModalCo] = useState(false);
  const [modalplac, setModalplac] = useState(false);
  const [modalHighstud, setModalHighstud] = useState(false);
  const [modalMisc, setModalMisc] = useState(false);
   
  const [choice, setChoice] = useState(false)

  const clicked = (e) => {
    if(e.target.getAttribute("data-value")=="Academic Achievements")
     {
    setModalOn(true)
     }
     if(e.target.getAttribute("data-value")=="Cocurricular Achievements")
     {
     setModalCo(true);
     }
     if(e.target.getAttribute("data-value")=="Placement Section")
     {
      setModalplac(true);
     }
     if(e.target.getAttribute("data-value")=="Higher Studies")
     {
      setModalHighstud(true);
     }
     if(e.target.getAttribute("data-value")=="Miscellaneous Achievements")
     {
      setModalMisc(true);
     }

    
  }
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

  // as of now kept as !student but it actually is -> if(student) ... just for making the changes in the display
  if (!student) {
    return (
      <> 
      <div>
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
          <PersonalDataCard datas={datas[0]} />

          <div style={{display: "flex", flexDirection : "column", marginTop: "5rem", marginLeft: "35vw"}}>
          {headings.map((heading)=>(
            <div>
                <h1 style={{fontSize: "3rem"}}>{heading.title}</h1>
            <div className="accordion" style={{width: "60vw"}}>
            {accordianData.map(({ title, content, heading }) => (
              <Accordian title={title} content={content} heading={heading}/>
            ))}
          </div>
          <button onClick={clicked} data-value={heading.title} className="inline-block self-end text-md bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 mb-12 uppercase ">
                 Add more +
          </button>
          </div>
           
          ))}
          
          </div>
        </div>
        </div>
         
          {modalOn && < Modal  setModalOn={setModalOn} setChoice={setChoice} />}
         
        
        {modalCo && < ModalCo  setModalOn={setModalOn} setChoice={setChoice} />}
         
        {modalplac && < ModalPlac  setModalOn={setModalOn} setChoice={setChoice} />}
         
        {modalHighstud && < ModalHighStud  setModalOn={setModalOn} setChoice={setChoice} />}
         
        {modalMisc && < ModalMisc  setModalOn={setModalOn} setChoice={setChoice} />}
       
         
       
      </>
    );
  } else {
    return <Auth signup={false} />;
  }
}
