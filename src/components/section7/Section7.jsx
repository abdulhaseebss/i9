import React from 'react'
import secImage1  from "../../assets/sec7-1.png" 
import secImage2  from "../../assets/sec7-2.png" 
import secImage3  from "../../assets/sec7-3.png" 
import Section4Card from '../section4card/Section4Card'

const Section7 = () => {
    const obj = [
        {
            head: "Automating Repetitive Tasks",
            pera: "The advantages of Hospital Information Systems (HIS) are manifold, including enhanced efficiency, cost-effectiveness, and improved patient care. However, it's important to acknowledge the disadvantages such as the initial setup costs and the need for ongoing training. While the upfront investment in HIS can be significant, the long-term savings and operational improvements often outweigh these initial expenses. Continuous training is essential to keep staff updated on system features, ensuring the HIS is used to its full potential.",
            image: secImage1
        },
        {
            head: "Seamless Integrations",
            pera: "Patient Information Systems and Nursing Information Systems are integral components of HIS, offering specific advantages in patient management and nursing workflows. These systems provide real-time access to patient records, streamline communication among care teams, and support evidence-based nursing practices, enhancing the quality of patient care and nursing efficiency.",
            image: secImage2
        },
        {
            head: "Empowering Growth",
            pera: "The purpose of HIS is to improve healthcare delivery by integrating and automating various hospital operations, from patient care to administrative tasks. The scope of HIS extends across all hospital departments, facilitating a seamless flow of information and coordinated care delivery, which is essential for operational excellence and enhanced patient outcomes.",
            image: secImage3
        },
    ]
  return (
    <>
    <div className='flex justify-center flex-wrap gap-5 mt-16'>
        {obj.map((item)=>{
            return <Section4Card heading={item.head} pera={item.pera} image={item.image}/>
        })}
    </div>
    </>
  )
}

export default Section7