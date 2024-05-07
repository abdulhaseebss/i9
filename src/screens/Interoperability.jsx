import Section2 from "../components/section2/Section2"
import Section3 from "../components/section3/Section3"
import Group from "../assets/Group1321314912.png"
import Banner from "@/components/banner/Banner"
import Section4 from "@/components/section4/Section4"
import Section5 from "@/components/section5/Section5"
import Footer from "@/components/footer/Footer"
import Conclution from "@/components/footer/Conclution"
import { useEffect, useState } from "react"


const Interoperability = () => {

 
// Section 3 object

const obj = [

  {
    heading:"Hospital Data Security",
    headPara: "In the digital age, Hospital data security in healthcare is paramount. Hospital Information Systems (HIS) are designed with robust security protocols to protect sensitive patient information against unauthorized access, breaches, and other cyber threats"
  },
  {
    heading: "Cost Reduction and Better Revenue Management in Hospital",
    headPara: "One of the most significant advantages of implementing a Hospital Information System is the notable cost reduction it brings about. By automating routine tasks, reducing paperwork,"
  },
  {
    heading: "Enhanced Patient Experience",
    headPara: "HIS plays a crucial role in providing a better patient experience. From streamlined appointment scheduling to reduced waiting times and more personalized care, HIS makes the patient journey smoother and more satisfactory.The ability to access"
  },
  {
    heading: "Pharmacy and Inventory Management",
    headPara: "HIS plays a crucial role in providing a better patient experience. From streamlined appointment scheduling to reduced waiting times and more personalized care, HIS makes the patient journey smoother and more satisfactory.The ability to access"
  },
  {
    heading: "Improved Diagnostics and Treatment in Hospital",
    headPara: "HIS significantly contributes to better diagnosis and treatment outcomes in hospitals and clinics. By providing healthcare professionals with comprehensive and up-to-date patient"
  },
  {
    heading: "Efficiency and Easy Data Retrieval in hospital software",
    headPara: "The efficiency of hospital operations is greatly enhanced by HIS, which automates and streamlines processes, reducing the time and effort required for various tasks. Easy patient data retrieval by"
  },
  {
    heading: "Error Reduction and Advanced Analytics in Hospitals",
    headPara: "By automating data entry and processing, HIS significantly reduces the risk of human error, leading to safer and more reliable patient care. Additionally, HIS offers advanced analytics for hospital capabilities"
  },
  {
    heading: "Enhanced Patient Care and Interdepartmental ",
    headPara: "HIS enhances patient care by ensuring that all relevant patient information is readily accessible to the care team, facilitating coordinated and comprehensive care. It also improves communication between hospital departments"
  },
  {
    heading: "Comprehensive Billing and EMR Features in hospital ",
    headPara: "The billing process is streamlined with HIS, which automates and accurately captures all chargeable services, reducing billing errors and improving within HIS ensures that patient records are maintained in a digital format, making them revenue collection. The integration of"
  },
  {
    heading: "Faster Turnaround and Improved Services ",
    headPara: "HIS contributes to a faster turnaround in patient care processes, from admission to discharge, enhancing the overall efficiency of hospital services. This efficiency leads to improved services"
  },
  {
    heading: "Centralized Control and Access",
    headPara: "HIS provides centralized control over all aspects of hospital operations, offering a unified view and management platform for administrators. This centralization ensures consistent policies"
  },
  {
    heading: "Enhanced Patient Care and Interdepartmental s",
    headPara: "Effective pharmacy management and inventory management are critical components of hospital operations. HIS integrates these aspects, ensuring that medication and supplies are managed efficiently"
  },
]





  const text = <p><span className="text-[#8ABC3E]">The Essential Role</span>  of Hospital <br /> Information Systems</p>
  
  const peragraph = <p>In the rapidly evolving landscape of healthcare, the integration of technology has become a cornerstone for enhancing operational efficiency and elevating patient care standards. At the heart of this technological revolution lies the Hospital Information System (HIS), a comprehensive suite that seamlessly integrates various <br/> aspects of hospital operations, from patient management to administrative workflows. The adoption of HIS is not just a trend  but a necessary evolution to meet the increasing demands of modern healthcare delivery, ensuring that patient care is both effective and efficient.</p>

  const conclutionHead = <p>In <span className="text-[#8ABC3E]">Conclusion</span></p>
  const conclutionpera = "He journey of electronic medical records (EMR) from its humble beginnings to the digital excellence of platforms like Super Dr is a testament to the transformative power of technology in healthcare. With systems like Super Dr EMR, the future of patient record management"

  return (
<>
<Banner heading={"Maximizing Efficiency"} text={"Advantages of Hospital Information System"}/>
<Section2 image={Group} heading={text} pera={peragraph} hidden={"hidden"} />

<div className="flex justify-center">
        <p className="text-center font-bold text-[46px] outfit w-[80%]"> <span className="text-[#8ABC3E]">Key Advantages </span>of Hospital Information Systems</p>
       
    </div>


<div className="flex justify-center flex-wrap mt-16 gap-6">

{
  obj.map((item , index)=>{
    return <Section3 key={index} heading={item.heading} pera={item.headPara}/>
  })
}
</div>

{/* <Section3/> */}
<Section4/>
<Section5/>
<Conclution heading={conclutionHead} pera={conclutionpera}/>
<Footer/>

</>
  )
}

export default Interoperability