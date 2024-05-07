import React from 'react'
import sec2img from "../../assets/sotware2.png"


const Sec3Card = () => {
  return (
    <div className='w-[30%] bg-[#f1f1f1] border-2  border-gray-200 shadow-lg p-8 rounded-2xl'>
       <div className='flex justify-center'>
       <img className=' max-[1200px]:w-[60%] max-[600px]:w-[80%]' src={sec2img} alt=''/>
       </div>
       <div className='para text mx-2'>
            <p className='outfit text-xl'>RIS</p>
            <p className=''>A Radiology Information System (RIS) is a networked software system designed to manage medical imagery and associated data. RIS handles scheduling, tracking radiology... Read More</p>
       </div>
        
    </div>
  )
}

export default Sec3Card