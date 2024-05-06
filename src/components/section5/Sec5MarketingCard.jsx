import React from 'react'


const SecMarketingCard = (props) => {
  return (
    <>
        <div className='flex gap-5 shadow-xl p-3 w-[540px] outfit items-center rounded-xl px-5' >
          <div><img className='w-[350px]' src={props.image} alt="" /></div>
          <div>
            <p className='mb-5 text-xl'>{props.head}</p>
            <p className='font-normal'>{props.pera}<span className='text-[#8ABC3E]'>Read More</span></p>
          </div>
        </div>
    </>
  )
}

export default SecMarketingCard