const FilterTabCo = () => {
  return (
    <div data-aos="fade-right" className="overflow-hidden shadow-lg flex flex-col rounded-lg bg-stone-400 text-2xl py-20 pt-12" style={{height: "100vh", position: "fixed", width: "24vw", overflowY: "hidden"}}>
      <div>
        <input
          className="border-2 border-black rounded-lg my-12 ml-3"
          type="text"
          placeholder="Search"
        />
      </div>
       
        <div className="mb-2 items-left">
        <h1 style={{fontSize: "2rem", alignItems : "left"}}>Filters</h1> 
        </div>
       
      <div className="justify-between ml-3">
        <label htmlFor="score">Score</label>
        <div className="mt-4">
        <input type="text"/>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-left my-12">
          <button className="text-left ml-3">Hackathon</button>
          <button className="text-left ml-3">Coding Competition</button>
          <button className="text-left ml-3">Essay Competition</button>
        </div>
      
        <button className="inline-block ml-3 self-end text-lg bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 my-4 uppercase ">
                 Apply filters
                </button>
         
       
    </div>
    </div>


  );
};

export default FilterTabCo;
