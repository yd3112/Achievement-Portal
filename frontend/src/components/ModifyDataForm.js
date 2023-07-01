const ModifyDataForm=()=>{
    return (
      <div  className="overflow-hidden shadow-lg flex flex-col items-center   w-full" style={{width: "30vw", height: "100vh", overflowY: "hidden", position: "fixed"}}>
             <div className="flex w-full min-h-screen justify-center items-center">
                <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                    
              <form action="" className="flex flex-col space-y-3">
              <div className="text-xl font-bold">Form to Modify data</div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Institude
                  </label>

                  <input
                    type="text"
                    placeholder="Institude"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                 
                <div>
                  <label htmlFor="" className="text-sm">
                     Date
                  </label>

                  <input
                    type="date"
                    placeholder="Date"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="" className="text-sm">
                   Description
                  </label>

                  <textarea
                    placeholder="Description"
                    rows="2"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4  mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="AddTag" className="text-sm">
                    Add Tags
                  </label>

                  <select name="Add tags" id="AddTags" className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300">
                  <option value="MBA">MBA</option>
                   <option value="CAT">CAt</option>
                   <option value="GRE">GRE</option>
                   <option value="GATE">GATE</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                   Attach PDF
                  </label>

                  <input
                    type="file"
                    placeholder="Institude"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Add Photos
                  </label>

                  <input
                    type="file"
                    placeholder="Institude"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                 Submit
                </button>
              </form>
            </div>
            </div>
            </div>

            

    );
};

export default ModifyDataForm;