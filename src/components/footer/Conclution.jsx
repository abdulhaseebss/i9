import React from 'react'

const Conclution = (props) => {
  return (
    <>
    <div className='outfit'>

        <h2 className='text-3xl mt-28 text-center'>{props.heading}</h2>
         
        <div className='flex justify-center mt-9'>
            <div className='bg-[#8ABC3E] w-[72%] p-8 rounded-2xl shadow-lg'>
                <p className='font-medium text-white text-center'>{props.pera}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Conclution