import React from "react";
import market from "../../assets/3market.png"

const Sec3Market = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-center mt-28 font-bold text-[46px] max-[850px]:text-4xl max-[700px]:text-3xl">The Importance of <span className="text-[#8ABC3E]">Customized Clinic</span>  & <br /> <span className="text-[#8ABC3E]">Pharmacy App Development</span> </p>
      </div>
 
      <div className="flex justify-center mt-20 gap-24 items-center flex-wrap">
        <img className="w-[300px]" src={market} alt="market" />
        <div className="w-[38%] max-[800px]:w-[80%]">
        <p className="font-bold text-2xl ml-5 outfit"><span className="text-[#8ABC3E]">Immediate Access</span> to Healthcare Services</p>
        <p className="mt-5 mx-5 outfit-card">We tailor content strategies to meet healthcare needs, fostering patient loyalty. Our approach communicates empathy, expertise, and reliability—qualities patients value in providers. With SEO optimization, we boost your online visibility, making it easier for patients to find and choose your services.</p>
        </div>
      </div>

      <div className="flex justify-center mt-20 gap-6 flex-wrap">
        <div className="w-[380px] max-[750px]:w-[80%]">
            <h2 className="font-bold text-2xl ml-5 outfit">Enhanced Patient Engagement</h2>
            <p className="mt-5 mx-5 outfit-card">We tailor content strategies to meet healthcare needs, fostering patient loyalty. Our approach communicates empathy, expertise, and reliability—qualities patients value in providers. With SEO optimization, we boost your online visibility, making it easier for patients to find and choose your services.</p>
        </div>
        <p className="border-l-2 mr-3 max-[830px]:hidden "></p>
        <div className="w-[380px] max-[750px]:w-[80%]">
             <h2 className="font-bold text-2xl ml-5 outfit">Streamlined Operations</h2>
            <p className="mt-5 mx-5 outfit-card">We tailor content strategies to meet healthcare needs, fostering patient loyalty. Our approach communicates empathy, expertise, and reliability—qualities patients value in providers. With SEO optimization, we boost your online visibility, making it easier for patients to find and choose your services.</p>
        </div>
      </div>
    </>
  );
};

export default Sec3Market;
