import sec4market from "../../assets/Group2.png";
import pair from "../../assets/pair.png";

const Sec4MarketCard = () => {
  return (
    <>
      <div className=" parent flex justify-evenly items-start">
   <div className="child-1 grid grid-cols-2 gap-4 place-content-start h-48 ...">

   <div className="grand-child-1 mt-20">
          <div className="flex justify-center ">
            <div className="card bg-blue-400 hover:bg-blue-600 transition-all border-[4px] border-white text-white w-[280px] h-[230px] p-2 py-5 text-md rounded-xl relative z-10">
              <p className="font-bold text-xl ml-5  outfit mt-14">
                Medication Ordering
              </p>
              <p className="mt-5 ml-5 text-sm outfit-card">
                Simplify appointment scheduling with integrated booking systems
                and CRM solutions for efficient patient management and
                personalized care.
              </p>
            </div>
          </div>
          <div className="flex justify-center relative z-10">
            <img className="-mt-[310px] h-[130px] absolute" src={pair} alt="" />
          </div>
        </div>


      

  
   </div>


        

        <div className="marker4img child-2">
          <img className="h-[420px] " src={sec4market} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sec4MarketCard;
