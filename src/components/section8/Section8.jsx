import React from 'react'
import Section2 from '../section2/Section2'
import groupMain from '../../assets/Groupmain3.png'

const Section8 = () => {

    const text = <p>Pioneers in <span className='text-[#8ABC3E]'>Digital Healthcare</span></p>
    const peragraph = <p>At i9, we understand the importance of a lasting logo. <br /> Our experienced designers listen to your needs, <br /> crafting logos that convey your brand's name, <br /> sincerity, and dedication. With a futuristic approach, <br /> we ensure your logo stands out, attracting attention <br /> and respect for your business</p>

  return (
    <>
    <div className='mt-24'> 
        <Section2 imageHidden ={"hidden"} mirror={"flex-row-reverse"} hidden ={"hidden"} image={groupMain} heading={text} pera={peragraph}/>
    </div>
    </>
  )
}

export default Section8