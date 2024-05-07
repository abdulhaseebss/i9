import React, { useState } from 'react'

const FaqCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    function openPera() {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <div className='flex justify-center mt-5 outfit'>
        <div className='shadow-md p-5 pb-5 w-[80%] max-[600px]:w-[90%] rounded-xl transition-all cursor-pointer' onClick={openPera}>

            <div className='flex justify-between items-center'>
                 <h1>{props.ques}</h1>
                 <i className={`fa-solid fa-chevron-right mr-5 text-[#8ABC3E] transition-all ${!isOpen ? '' : 'rotate-90'}`}></i>
            </div>

            <p className={`mt-5 text-[#3C3C43] font-normal transition-all ${isOpen ? '' : 'hidden'}`}>{props.ans}</p>
        </div>
    </div>
    </>
  )
}

export default FaqCard