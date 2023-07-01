// import datas from '../fake_data/datas.json'
const PersonalDataCard= (props) => {
  const data = props.datas;
    return (
      <div>
        
          <div data-aos="fade-up" className="overflow-hidden shadow-lg flex flex-col items-center pt-12 w-full" style={{width: "30vw", height: "100vh", overflowY: "hidden", position: "fixed", background: "#E6D5B8"}}>
  
          <img
            className="rounded-full h-48 w-48 mb-12"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Sunset in the mountains"
          ></img>
          <div className="flex flex-col items-center">
          <div className="flex space-x-12 mb-12" style={{fontSize: "2rem"}}>
              <a href="home.html" className="text-blue-500">
               
                <ion-icon
                  name="logo-facebook"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="home.html" className="text-blue-500">
               
                <ion-icon
                  name="logo-twitter"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="home.html" className="text-red-500">
               
                <ion-icon
                  name="logo-instagram"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="home.html" className="text-blue-800">
               
                <ion-icon
                  name="logo-linkedin"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
            </div>
              <div className="text-left ml-20">
                <div className="font-bold text-xl mb-2">Name: {data.name}</div>
                <div className="font-bold text-xl mb-2">Email: {data.email}</div>
                <div className="font-bold text-xl mb-2">Institute ID: {data.roll}</div>
                <p className="text-gray-700 text-base mt-12 mr-12">
                  {data.description}
                </p>
              </div>
          </div>
        </div>
        
        
      </div>
    );
  };
  
  export default PersonalDataCard;
  