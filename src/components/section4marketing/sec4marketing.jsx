// import Sec4MarketCard from '../sect4marketcard/Sec4MarketCard'

import Sec4MarketCard from "../sect4marketcard/Sec4MarketCard";

const Sec4marketing = () => {

const obj = [
  {
    head: "Medication Ordering",
    para: "Simplify appointment scheduling with integrated booking systems and CRM solutions for efficient patient management and personalized care."
  },

  {
    head: "Appointment Scheduling",
    para: "Our websites feature responsive, mobile-optimized designs and interactive forms, ensuring accessibility and ease of use across all devices."
  },

  {
    head: "Digital Prescriptions",
    para: "We create compelling landing pages with strategic URL structuring to enhance user experience and SEO, guiding visitors towards taking desired actions."
  },

  {
    head: "Telemedicine",
    para: "Through carefully crafted metadata and a strategic backlink approach, we enhance your site's SEO, improving visibility and authority."
  },

  
]



  return (
    <>
      <div className="mt-28">
        <p className="outfit text-4xl text-center">
          <pan className="text-[#8ABC3E]">Key Features of Our </pan> Pharmacy and Clinic Apps
        </p>
      </div>
      <Sec4MarketCard/>

    
      {/* <div className="img ">
          <img src={Group2} alt="" />
        </div> */}
    </>
  );
};

export default Sec4marketing;
