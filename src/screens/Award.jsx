import Banner from '@/components/banner/Banner'
import React from 'react'
import groupMain from "../assets/Groupmain3.png"
import groupMain4 from "../assets/groupmain4.png"
import Section2 from '@/components/section2/Section2'
import Conclution from '@/components/footer/Conclution'
import Footer from '@/components/footer/Footer'
import Section3 from '@/components/section3/Section3'
import Sec3Award from '@/components/section3/Sec3Award'
import image1 from "../assets/sec3award-1.png";
import image2 from "../assets/sec3award-2.png";

const Award = () => {

  const bannerHead = <p>Online Pharmacy Software in India with Next -Gen Online workflows</p> 
  const heading = <p>Super Dr <span className='text-[#A3DC2F]'>Online Pharmacy</span></p>
  const heading2 = <p>The SuperDr <span className='text-[#A3DC2F]'>Advantage</span></p>
  const conclutionHead = <p>In <span className='text-[#A3DC2F]'>Conclusion</span></p>
  const conclutionPera = <p>For pharmacy and hospital owners in India looking to thrive in the digital age, transitioning to an online pharmacy software is imperative. With its comprehensive features, from inventory management to customer engagement, and its ability to integrate seamlessly with modern business practices, online pharmacy software is the key to unlocking new opportunities and achieving unparalleled success in the healthcare industry.</p>
  const pera = "In the dynamic world of healthcare and pharmaceuticals, staying ahead of technological advancements is not just an option; it's a necessity. For pharmacy and hospital owners in India, the traditional Windows-based pharmacy software, costing around ₹25,000 per year, is rapidly becoming a relic of the past.These systems lack the modern web features and business enhancement tools crucial for today's fast-paced market. Enter the era of online pharmacy software – a game-changer for the industry."
  const pera2 = "Super Dr is not just another online pharmacy software; it's a comprehensive solution designed with the needs of Indian pharmacies and hospitals in mind. It brings together all the essential features required to manage a modern pharmacy efficiently and safely while also providing tools to enhance business growth and customer satisfaction."


  const CardObj = [
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

  const secondPera = <p>Traditional pharmacy management systems in India have served their purpose well, but with the advent of digitalization, their limitations are glaringly apparent. They lack essential features such as
  <li>Digital indenting,</li> 
  <li>Digital short books,</li>
  <li>Auto order forms, and</li>
  <li>Efficient management of medicine locations,</li>
  <li>Including look-alike and</li>
  <li>Sound-alike drugs.</li>
  These limitations not only hamper operational efficiency but also pose significant risks to patient safety.

  </p>


  const Card3Obj = [
    {
      head: "Understanding the Limitations of Traditional Pharmacy Software",
      pera: "The new generation of online pharmacy software, like Super Dr, is designed to overcome these challenges. It's not just software; it's a comprehensive ecosystem that brings a host of features tailored for the modern pharmacy and hospital operations, ensuring that you are not just keeping up but setting the pace in the healthcare industry.",
      image: image1
    },
    {
      head: "Understanding the Limitations of Traditional Pharmacy Software",
      pera: secondPera,
      image: image2
    },
  ]

  return (
   <>
    <Banner heading={bannerHead}/>
    <Section2 image={groupMain} mirror="flex-row-reverse" hidden="hidden" heading={heading} pera={pera}/>


<div className='flex justify-center gap-8 flex-wrap mx-5'> 

    {
      Card3Obj.map((item)=>{
        return <Sec3Award head={item.head} pera={item.pera} image={item.image}/>
      })
    }
    
  

</div>

<div className="flex justify-center mt-24">
        <p className="text-center font-bold text-[46px] outfit text-[#8ABC3E] w-[80%]"> Key Features<span className="text-black"> and </span>Benefits:</p>
       
    </div>

    <div className="flex justify-center flex-wrap mt-16 gap-6">
    {
     CardObj.map((item , index)=>{
        return <Section3 key={index} heading={item.heading} pera={item.headPara}/>
      })
    }

    </div>

    

    <Section2 image={groupMain4} hidden="hidden" heading={heading2} pera={pera2}/>
    <Conclution heading={conclutionHead} pera={conclutionPera}/>
    <Footer/>
   </>
  )
}

export default Award