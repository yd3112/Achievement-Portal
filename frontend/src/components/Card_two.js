
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
const disp = (data_des) =>{
  
  var arr = [];
  for(var i=0;i<50;i++)
  {
    arr.push(data_des.description[i])
  }
  return arr;
}
const Card_two = (props) => {
  const [flip, setFlip] = useState(false);
  const data=props.data;
  return (
      <div>
      <div className="shadow-lg flex flex-col items-center mx-6 my-6" style={{height: "26rem", width:"15rem", borderRadius: "1rem", background: "#E6D5B8"}}>
        <img
          className="h-32 w-full mb-8"
          src="/img_scene.jpg"
          alt="Sunset in the mountains"
          style={{borderRadius: "1rem"}}
        ></img>
        <div className="flex flex-col items-center px-3">
          <div className="font-bold text-md mb-3">Name: {data.name}</div>
          <div className="font-bold text-md mb-3 text-center">Branch: {data.branch}</div>
          <div className="font-bold text-md mb-3">Roll no: {data.roll}</div>
          <p className="text-gray-700 text-base text-center mb-14 mx-9">
            {disp(data)}
          </p>
        </div>
      </div>
    </div>
    )
};

export default Card_two;
