import React from 'react'
import Section2 from '../section2/Section2'
import groupMain from '../../assets/Groupmain3.png'

const Section8 = () => {

    const text = <p>Pioneers in <span className='text-[#8ABC3E]'>Digital Healthcare</span></p>
    const peragraph = <p>At i9, we understand the importance of a lasting logo. Our experienced designers listen to your needs, crafting logos that convey your brand's name, sincerity, and dedication. With a futuristic approach, we ensure your logo stands out, attracting attention and respect for your business</p>

    const text2 = <p>The Ultimate <span className='text-[#8ABC3E]'>Healthcare Management <br /> Software</span></p>
    const text3 = <p>Beyond Software, <span className='text-[#8ABC3E]'>A Healthcare <br /> Revolution</span></p>
    

  return (
    <>
    <div className='mt-24'> 
        <Section2 imageHidden ={"hidden"} mirror={"flex-row-reverse"} hidden ={"hidden"} image={groupMain} heading={text} pera={peragraph}/>
    </div>
    <div className='mt-24'> 
        <Section2 imageHidden ={"hidden"}  hidden ={"hidden"} image={groupMain} heading={text2} pera={peragraph}/>
    </div>
    <div className='mt-24'> 
        <Section2 imageHidden ={"hidden"} mirror={"flex-row-reverse"} hidden ={"hidden"} image={groupMain} heading={text3} pera={peragraph}/>
    </div>
    </>
  )
}

export default Section8