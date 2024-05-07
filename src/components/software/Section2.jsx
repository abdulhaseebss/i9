import React from 'react'
import sec1img from "../../assets/sotware1.png"

const Section2 = () => {
  return (
    <div className='flex justify-center items-center mt-20 flex-wrap gap-8 max-[600px]:gap-5'>
        <img className='w-[40%] max-[1200px]:w-[60%] max-[600px]:w-[80%]' src={sec1img} alt=''/>
    
     <div className='para w-[40%] bg-blue-600 text-white p-8 ml-5 rounded-xl max-[1000px]:w-[50%]  max-[1000px]:p-4 max-[1000px]:mt-10 max-[680px]:w-[70%] max-[500px]:w-[80%] max-[500px]:ml-0'>
            <p className='outfit text-xl max-[1000px]:text-lg max-[820px]:'>Exploring RIS, PACS, and Mobile Imaging with Super Dr</p>
            <p className='outfit text-md mt-5 font-light max-[1000px]:text-sm'>The fields of Radiology Information Systems (RIS) and Picture Archiving and Communication Systems (PACS) have fundamentally transformed the landscape of medical imaging and radiology. Originating from the necessity to manage and store vast amounts of imaging data efficiently, RIS and PACS have become indispensable in modern healthcare. Let's explore their origins, functionalities, and how Super Dr is pioneering mobile PACS, particularly for CATHLAB images.</p>
        </div>
     
    </div>
  )
}

export default Section2