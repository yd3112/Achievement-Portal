import Navbar from "./Navbar";

import Card_two from "./Card_two";
import data from '../fake_data/datas.json'
import FilterTabH from "./FilterTabH";

const HigherStudies=()=>{
    return(
         
      <div>
        <div className="fixed" style={{zIndex: "100"}}>
        <Navbar/>
        </div>
        <div className="flex">
            <div className="w-1/3">
                <FilterTabH/>
            </div>
            <div className="pt-20">
              <h1 style={{fontSize: "2.5rem"}}><u>Higher Studies</u></h1>
            <div className="flex mx-36 my-3 justify-evenly">
           <Card_two data={data[0]}/>
           <Card_two data={data[1]}/>
           <Card_two data={data[2]}/>
           </div>
           <div className="flex mx-36 my-3 justify-evenly">
           <Card_two data={data[0]}/>
           <Card_two data={data[1]}/>
           <Card_two data={data[2]}/>
           </div>
           <div className="flex mx-36 my-3 justify-evenly">
           <Card_two data={data[0]}/>
           <Card_two data={data[1]}/>
           <Card_two data={data[2]}/>
           </div>

           </div>

        </div>
      </div>

    );
};
export default HigherStudies;