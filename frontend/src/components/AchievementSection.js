import Navbar
 from "./Navbar";
 import Card from "./Card";
 
 const AchievementSection=()=>{
    return (
        <div>
           <Navbar/>
           <div className="flex justify-around  ">
            <div className=" mx-36 mt-36">
            Are you an SVNIT Alumnus who would liketo share his Academic Achievement and experience with us? Well then, mention it right now to enlighten the students with your journey....

            Are you an SVNIT Alumnus who would liketo share his Academic Achievement and experience with us? Well then, mention it right now to enlighten the students with your journey....
            
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8px px-16 border border-blue-700 rounded mx-36 my-36">
 Enter Now
</button>

           </div>
           <div className="flex mx-36 my-3 justify-evenly">
           
           </div>
        </div>
    );
 };
 export default AchievementSection;