
import HIS from "../../assets/HIS.png";
import Critica from "../../assets/Critica.png";
import Hospital from "../../assets/hospital.png";
import Purpose from "../../assets/Purpose.png";
import Super from "../../assets/super.png";
import Super2 from "../../assets/super2.png";
import background from "../../assets/Background.png";

import Section4Card from "../section4card/Section4Card";

const Section4 = () => {


        const obj = [
            {
                image: HIS,
                head: "Advantages and Disadvantages in Hospital information system",
                para: "The advantages of Hospital Information Systems (HIS) are manifold, including enhanced efficiency, cost-effectiveness, and improved patient care. However, it's important to acknowledge the disadvantages such as the initial setup costs and the need for ongoing training. While the upfront investment in HIS can be significant, the long-term savings and operational improvements often outweigh these initial expenses. Continuous training is essential to keep staff updated on system features, ensuring the HIS is used to its full potential."
            },
            {
                image: Purpose,
                head: "Patient and Nursing Information Systems",
                para: "Patient Information Systems and Nursing Information Systems are integral components of HIS, offering specific advantages in patient management and nursing workflows. These systems provide real-time access to patient records, streamline communication among care teams, and support evidence-based nursing practices, enhancing the quality of patient care and nursing efficiency."
            },
            {
                image: Hospital,
                head: "Purpose and Scope of Hospital information system",
                para: "The purpose of HIS is to improve healthcare delivery by integrating and automating various hospital operations, from patient care to administrative tasks. The scope of HIS extends across all hospital departments, facilitating a seamless flow of information and coordinated care delivery, which is essential for operational excellence and enhanced patient outcomes."
            },
            {
                image: Super,
                head: "Critical Care and Development",
                para: "In critical care settings, HIS provides vital support by enabling quick access to critical patient data, supporting rapid decision-making, and ensuring the delivery of timely care. The development of a robust HIS involves careful planning, customization to meet specific hospital needs, and integration with existing healthcare technologies, ensuring that the system enhances care delivery in high-stakes environments."
            },
            {
                image: Super2,
                head: "Future Trends in Hospital information system",
                para: "The future of HIS is promising, with advancements in AI, machine learning, and interoperability set to further revolutionize healthcare. These technologies will enhance predictive analytics, automate routine tasks, and improve the sharing of health information across different systems and settings, leading to more personalized and efficient healthcare delivery."
            },
            {
                image: Critica,
                head: "The Super Dr Advantages",
                para: "In the realm of Hospital Information Systems (HIS), our flagship product, Super Dr, stands out as a beacon of innovation and efficiency. Designed with the modern healthcare environment in mind, Super Dr encapsulates the essence of what a comprehensive HIS should be, aligning perfectly with the advantages discussed earlier."
            },
        ]

    
  return (
    <div>
      <p className="text-center outfit text-5xl text mt-32">
        Addressing <span className="text-[#8ABC3E]"> Common Questions </span>
      </p>
      
        <img className="absolute top-[520vh] max-[1200px]:hidden" src={background} alt="" />
      <div className="flex justify-center flex-wrap gap-5 mt-5">
      {obj.map((item)=>{
        return <Section4Card heading={item.head} pera={item.para} image={item.image}/>
      })}
    
      </div>
      
   
    </div>
  );
};

export default Section4;
