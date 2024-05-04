import vector75 from "../../assets/Vector75.png";
import Section5Card from "../section5card/Section5Card";

const Section5 = () => {

const obj = [
    {
        head: "HIPAA and HL7 Compliance:",
        para: "Super Dr is meticulously engineered to meet the stringent standards of HIPAA and HL7, ensuring the utmost security and interoperability of patient data. This compliance not only safeguards patient information but also facilitates seamless communication between different healthcare systems, enhancing data exchange and integration."
    },

    {
        head: "ABHA Enablement:",
        para: "With ABHA (Ayushman Bharat Health Account) enablement, Super Dr Super Dr is not just an HIS; it's a holistic solution that caters to every conceivable need of a hospital or clinic. From pharmacy management to inventory control, appointment scheduling, and billing, Super Dr's modules are designed to streamline operations, improve efficiency, and enhance patient care.is at the forefront of supporting national health initiatives, ensuring that patients can securely access and share their health records across the healthcare ecosystem, promoting continuity of care and patient empowerment."

        
    },

    {
        head: "HIPAA and HL7 Compliance:",
        para: "With ABHA (Ayushman Bharat Health Account) enablement, Super Dr is at the forefront of supporting national health initiatives, ensuring that patients can securely access and share their health records across the healthcare ecosystem, promoting continuity of care and patient empowerment."

    },

    {
        head: "HIPAA and HL7 Compliance:",
        para: "Recognizing the diverse technological proficiency of healthcare staff, Super Dr is built with user-friendliness at its core. Its intuitive interface ensures that doctors, nurses, and administrators can navigate and utilize the system effectively, minimizing the learning curve and maximizing productivity."

    },

    {
        head: "Medico-Legal Compliance:",
        para: "In the complex landscape of healthcare, medico-legal compliance is non-negotiable. Super Dr is designed with this in mind, incorporating features that ensure compliance with local and international medico-legal requirements, safeguarding healthcare providers and patients alike."

    },
    {
        head: "Future-Ready:",
        para: "Super Dr is not just about meeting today's needs but also anticipating the future of hospital management systems. With features like AI-enabled workflows and templatised automated billing, Super Dr is poised to adapt to the evolving healthcare landscape, ensuring that healthcare providers remain at the cutting edge of technology."

    },
]





  return (
    <div className=" bg-[#F5F5F9]">
    <div className="mt-10">
    <p className="outfit text-5xl text-center mt-20">
        The Super Dr <span className="text-[#8ABC3E]"> Advantages</span>
      </p>
      <img className="ml-28 h-32" src={vector75} alt="" />
      <div className="flex justify-evenly flex-wrap gap-5">
      <Section5Card/>
   
      </div>
    </div>
    </div>
  );
};

export default Section5;
