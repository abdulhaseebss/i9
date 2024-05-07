import React from 'react'
import Sec3Card from './Sec3Card'

const Section3 = () => {

    const obj = [
        {
            head: "PACS",
            para: ""
        }
    ]

  return (
    <div className='mt-20'>
        <p className='outfit text-4xl text-center'>Understanding <span className='text-[#8ABC3E]'>RIS and PACS</span> </p>
    <div className='flex flex-wrap gap-5 justify-around'>
        <Sec3Card/>
        <Sec3Card/>
        <Sec3Card/>
        <Sec3Card/>
    </div>
    </div>
  )
}

export default Section3