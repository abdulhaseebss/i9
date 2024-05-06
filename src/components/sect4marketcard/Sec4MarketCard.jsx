import images1 from "../../assets/images1.png";
import pair from "../../assets/pair.png";

const Sec4MarketCard = () => {
  return (
    <>
      <div className=" justify-evenly">
        <div className="flex justify-center">
          <img className="-mb-16" src={pair} alt="" />
        </div>
        <div className="flex justify-center">
          <div className="card bg-white w-[300px] h-[250px] p-2 py-5  rounded-xl ">
            <p className="font-bold text-xl ml-5  outfit mt-14">
              Medication Ordering{" "}
            </p>
            <p className="mt-5 ml-5 outfit-card">
              Simplify appointment scheduling with integrated booking systems
              and CRM solutions for efficient patient management and
              personalized care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec4MarketCard;
