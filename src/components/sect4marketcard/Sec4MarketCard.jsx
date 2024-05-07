

const Sec4MarketCard = (props) => {
  return (
    <>
      <div className= {`parent flex justify-evenly items-start` }>
   

   <div className="grand-child-1 mt-20">
          <div className="flex justify-center ">
            <div className="card bg-blue-400 px-5 hover:bg-blue-600 transition-all border-[4px] border-white text-white w-[280px] h-[280px] p-2 py-5 text-md rounded-xl relative z-10">
              <p className="font-bold text-xl outfit mt-14">
                {props.head}
              </p>
              <p className="mt-5  text-sm outfit-card">
               {props.pera}
              </p>
            </div>
          </div>
          <div className="flex justify-center relative z-10">
            <img className="-mt-[330px] w-[90px] absolute" src={props.image} alt="" />
          </div>
        </div>


      

  
  


        

      
      </div>
    </>
  );
};

export default Sec4MarketCard;
