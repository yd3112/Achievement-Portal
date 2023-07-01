
import Carousel from "./Carousel";


const PersonalDataInformation=()=>{
    return (
        <div>

        <div className="overflow-hidden shadow-lg flex flex-col items-center mt-8" style={{width: "70vw", marginLeft: "30vw", height: "100vh", background: "#F1F6F8"}}>
  
          {/* <img
            className="rounded-full h-32 w-32 my-6"
            src="/img_scene.jpg"
            alt="Sunset in the mountains"
          ></img> */}
          <div className="flex flex-col items-center p-12">
            
            <div className="font-bold text-xl ">Name of recognizing institude</div>
            <div className=" font-extralight 
             text-sm mb-2 inline-block self-end">-date when taken</div>
            <p className="text-gray-700 text-base text-left mb-6 mx-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-10 align-center">
              <Carousel/>
          </div>
 
          
        </div>
      </div>
    );
};
export default PersonalDataInformation;
