import React, { useState } from 'react'


const SecMarketingCard = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const truncatedText = `${props.pera.split(" ").splice(0, 11).join(" ")}...`;
  const fullText = props.pera;

  function toggleText() {
    setIsOpen(!isOpen);
  }


  return (
    <>
        <div className='flex gap-5 shadow-xl p-3 w-[540px] outfit items-center rounded-xl px-5 mt-5' >
          <div><img className=' transition-all w-[150px] rounded-2xl' src={props.image} alt="" /></div>
          <div className='w-[90%]'>
            <p className='mb-5 text-xl'>{props.head}</p>

          <p className='font-normal'>
            {isOpen ? fullText : truncatedText}
            <span className='text-[#8ABC3E] cursor-pointer' onClick={toggleText}>
              {isOpen ? ' Less' : ' Read More'}
            </span>
          </p>
          </div>
        </div>
    </>
  )
}

export default SecMarketingCard