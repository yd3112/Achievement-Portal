import * as React from 'react'
import ReactDom from 'react-dom';
import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Navbar from "./Navbar";
import datas from "../fake_data/datas.json";
import headings from "../fake_data/achievers.json"

const Home = () => {
  return (
    <div>
      <Navbar user={localStorage.getItem("user")}/>
      <Header bgImage="https://www.svnit.ac.in/conference/ispda2021/Images/svnit.jpeg" />
      
        {headings.map((head,j)=>(
          <center>
          <u style={{color:'blue'}}><h3 className="leading-tight text-3xl mt-20 mb-10 text-blue-600" style={{fontSize: "2.5rem"}}> 
            {head.name}
          </h3></u>
          <div className="flex align-center justify-center">
          {datas.map((data,i)=>(
            i<4 && <Card data={data} key={i}/>
          ))}
          </div>
          </center>
        ))}
    </div>
  );
};

export default Home;
