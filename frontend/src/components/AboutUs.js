// const AboutUs=()=>{
// return (<>

//  <div className=" w-full min-h-full bg-sky-500 ">
//     <div className=" w-4/5 block m-auto pt-24 ">
//       <div className="float-left w-2/4">
//         <div className="text-4xl ">
//           <h1>ABOUT US</h1>
//         </div>
//         <div className="content">
//           <h3 className=" mt-5  text-2xl text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
//           <p className=" mt-3 text-xl  text-white leading-normal ">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <div className=" mt-8">
//             <a className="bg-sky-800 text-white text-2xl leading-normal " href="">Read More</a>
//           </div>
//         </div>
//         <div className="m-10">
//           <a href="">
//             <i className=" text-red-600 text-3xl py-3 hover:text-red-800   " />
//           </a>
//           <a href="">
//             <i className="fab fa-twitter" />
//           </a>
//           <a href="">
//             <i className="fab fa-instagram" />
//           </a>
//         </div>
//       </div>
//       <div className="float-rightw-2/4 pl-24">
//         <img className=" w-760  h-auto pl-24" src="/img_scene.jpg" />
//       </div>
//     </div>
//   </div>
// </>
// );
// };
// export default AboutUs;

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl pt-24 px-8 xl:px-16 mx-auto" id="about">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl text-left lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal p-8">
              Want to know <strong>About Us</strong>?
            </h1>
            <p className="text-black-500 mt-4 mb-6 px-8">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. At amet enim optio architecto accusamus voluptates culpa quidem ipsam saepe quas, nostrum, illo maiores obcaecati mollitia animi alias est, similique ad.
            </p>
            <div className="flex space-x-12 mb-12 px-8 my-6" style={{fontSize: "2rem"}}>
              <a href="home.html">
               
                <ion-icon
                  name="logo-facebook"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="home.html">
               
                <ion-icon
                  name="logo-twitter"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="home.html">
               
                <ion-icon
                  name="logo-instagram"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="home.html">
               
                <ion-icon
                  name="logo-linkedin"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
            </div>
            <button className="bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-lg mt-2 mx-8"><Link to="/contactUs">Contact US</Link></button>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <img
                src="https://thefalc.com/wp-content/uploads/2021/12/developer-community-2.jpg"
                alt="about us"
                quality={100}
                width={600}
                height={1000}
                layout="responsive"
                data-aos="fade-up"
                data-aos-duration='4000'
              />
            </div>
          </div>
        </div>

         
             
            
      </div>
    </div>
  );
};

export default AboutUs;
