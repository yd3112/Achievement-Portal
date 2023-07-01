const FilterTab = () => {
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
          <button className="text-left ml-3">GRE</button>
          <button className="text-left ml-3">GMAT</button>
          <button className="text-left ml-3">GATE</button>
          <button className="text-left ml-3">IELTS</button>
          <button className="text-left ml-3">TOEFL</button>
          <button className="text-left ml-3">CAT</button>
          <button className="text-left ml-3">NMAT</button>
          <button className="text-left ml-3">XAT</button>
        </div>
      
        <button className="inline-block ml-3 self-end text-lg bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 my-4 uppercase ">
                 Apply filters
                </button>
         
       
    </div>
    </div>


  );
};

export default FilterTab;
