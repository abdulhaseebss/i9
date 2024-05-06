import React from 'react'
import FaqCard from './FaqCard'

const FaqSection = () => {

  const obj = [
    {
      ques: "What is ABHA ID?",
      ans: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently"
    },
    {
      ques: "What is the difference between a health ID and ABHA card?",
      ans: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently"
    },
    {
      ques: "How and Where to create ABHA ID?",
      ans: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently"
    },
    {
      ques: "How to get ABHA Gold Card?",
      ans: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently"
    },
    {
      ques: "Who is eligible for ABHA health?",
      ans: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently"
    },
    {
      ques: "What is the benefit of the ABHA health Card 5 lakh?",
      ans: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently"
    },
    {
      ques: "Does ABHA card provide free treatment?",
      ans: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently"
    },
  ]

  return (
    <>
    <h2 className='text-3xl mt-28 text-center outfit'>Basic FAQs for <span className='text-[#8ABC3E]'> Clinic & Pharmacy</span> <br /> App Development</h2>
 
    <div className='mt-16'>

        {obj.map((item , index)=>{
          return  <FaqCard key={index} ques={item.ques} ans={item.ans}/>
        })}
       
    </div>
    </>
  )
}

export default FaqSection