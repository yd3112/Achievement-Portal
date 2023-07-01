import React from "react";
const ModalCo = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className="   bg-zinc-500 opacity-90 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-900 w-1/2 opacity-100">
          <form action="" className="flex flex-col space-y-4">
            <div className=" flex justify-center items-center text-2xl font-bold ">
              
              Add more to Co-curricular Achievement
            </div>
            <div className="flex justify-evenly">
              <div>
                <label htmlFor="" className="text-sm">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="title"
                  className="ring-1 ring-gray-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Organization
                </label>

                <input
                  type="text"
                  placeholder="organization"
                  className="ring-1 ring-gray-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
            </div>
            <div className="flex justify-evenly">
              <div>
                <label htmlFor="AddTag" className="text-sm">
                   Skills
                </label>
                <select
                  name="Add tags"
                  id="AddTags"
                  className="ring-1 ring-gray-900 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                >
                  <option value="competitive programming">competitive programming</option>
                  <option value="hackathon">hackathon</option>
                  <option value="case studies competition">case studies competition</option>
                  <option value="Development">Development</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                 Date
                </label>

                <input
                  type="date"
                  placeholder="date"
                  className="ring-1 ring-gray-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
            </div>
            <div className="flex justify-evenly">
              <div>
                <label htmlFor="" className="text-sm">
                  position
                </label>

                <input
                  type="text"
                  placeholder="position"
                  className="ring-1 ring-gray-900 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm">
                  Description
                </label>

                <textarea
                  placeholder="Description"
                  rows="1"
                  className="ring-1 ring-gray-900 w-full rounded-md px-4  mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
            </div>
            
              <div>
                <label htmlFor="" className="text-sm">
                  Attach PDF
                </label>

                <input
                  type="file"
                  placeholder="Institude"
                  className="ring-1 ring-gray-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
               
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Add Photos
              </label>

              <input
                type="file"
                placeholder="Institude"
                className="ring-1 ring-gray-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
             
               
           
            <div className="flex flex-row-reverse">
            <button
              onClick={handleOKClick}
              className=" mx-2 inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
            >
              Submit
            </button>
            <button
              onClick={handleCancelClick}
              className="inline-block self-end  bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
            >
              Cancel
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCo;
