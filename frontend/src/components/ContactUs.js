import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <body className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12  rounded-xl shadow-lg text-white  ">
          <div className="flex flex-col justify-between space-y-8">
             
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>+123 456 7890</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>contact@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>Svnit,surat</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg ">
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
        </div>
        <div>
             

            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="taxt-sm">
                    Your name
                  </label>

                  <input
                    type="text"
                    placeholder="your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="taxt-sm">
                    EmailAddress
                  </label>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="taxt-sm">
                    Message
                  </label>

                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4  mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Message
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      

     
    </body>
    
</>
  );
};
export default ContactUs;
