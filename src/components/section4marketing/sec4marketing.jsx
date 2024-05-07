// import Sec4MarketCard from '../sect4marketcard/Sec4MarketCard'

import Sec4MarketCard from "../sect4marketcard/Sec4MarketCard";
import sec4 from "../../assets/Group2.png";
import image2 from "../../assets/sec4-2.png";
import image3 from "../../assets/sec4-3.png";
import image4 from "../../assets/sec4-4.png";
import image1 from "../../assets/pair.png";



const Sec4marketing = (props) => {

const obj = [
  {
    head: "Medication Ordering",
    para: "Simplify appointment scheduling with integrated booking systems and CRM solutions for efficient patient management and personalized care.",
    image: image1
  },

  {
    head: "Appointment Scheduling",
    para: "Our websites feature responsive, mobile-optimized designs and interactive forms, ensuring accessibility and ease of use across all devices.",
    image: image2
  },

  {
    head: "Digital Prescriptions",
    para: "We create compelling landing pages with strategic URL structuring to enhance user experience and SEO, guiding visitors towards taking desired actions.",
    image: image3
  },

  {
    head: "Telemedicine",
    para: "Through carefully crafted metadata and a strategic backlink approach, we enhance your site's SEO, improving visibility and authority.",
    image: image4
  },

  
]



  return (
    <>
      <div className="mt-28">
        <p className="outfit text-center mt-28 font-bold text-[46px] max-[850px]:text-4xl max-[700px]:text-3xl">
          <span className="text-[#8ABC3E]">Key Features of Our </span> Pharmacy and Clinic Apps
        </p>
      </div>

      <div className={`flex flex-wrap justify-evenly items-center ${props.mirror} mt-20`}>

         

          <div className=" w-[700px] grid-cols-2 gap-6 place-content-start flex-wrap flex justify-center">

          {obj.map((item ,index)=>{
             return <Sec4MarketCard key={index} head={item.head} pera={item.para} image={item.image}/>
               
          })}
        
          </div>

      <div className="marker4img child-2">
          <img className="w-[400px] " src={sec4} alt="" />
        </div>
      </div>

    
      {/* <div className="img ">
          <img src={Group2} alt="" />
        </div> */}
    </>
  );
};

export default Sec4marketing;
