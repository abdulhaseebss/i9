import React from 'react'
import Banner from '../components/banner/Banner'

import Sec4marketing from '@/components/section4marketing/sec4marketing'

import Section2 from '@/components/section2/Section2'
import group123 from "../assets/Group123.png"
import Sec3Market from '@/components/section3/Sec3Market'
import Footer from '@/components/footer/Footer'
import Conclution from '@/components/footer/Conclution'
import Sec5Markiting from '@/components/section5/Sec5Markiting'
import Section8 from '@/components/section8/Section8'
import Section7 from '@/components/section7/Section7'
import FaqSection from '@/components/FAQ/FaqSection'


const Marketing = () => {



  const textval = <p>Customized Clinic & Pharmacy App <br /> Development | i9 Innovations</p>


  const text = <p>Transforming Healthcare <br /> Delivery with<span className="text-[#8ABC3E]"> Innovation App</span></p>
  const peragraph = <p>In the evolving landscape of healthcare in India, the Ayushman Bharat Digital <br /> Mission (ABDM) and Ayushman Bharat Health Account (ABHA) are becoming <br /> cornerstones of a more integrated and accessible healthcare system. These <br /> initiatives are not just transforming patient care but are also setting new <br /> standards for how hospital software should operate. As we delve into the <br /> significance of ABDM and ABHA, it's crucial to understand how their <br /> integration into hospital software can lead to a more efficient, secure, and <br /> patient-centric healthcare ecosystem.</p>

  const conclutionHead = <p>i9 <span className="text-[#8ABC3E] ">Innovations</span></p>
  const conclutionpera = "i9 Innovations' LIMS is more than just a laboratory information management system; it's a comprehensive solution designed to elevate the standards of laboratory operations. By choosing Super Dr's LIMS, you're not just adopting new software; you're embracing a future ."


  return (
    <div>
      <Banner heading={textval}/>

      

      <Section2 image={group123} heading={text} pera={peragraph}/>
      <Sec3Market/>
      <Sec4marketing/>
      <Sec5Markiting/>
      <Sec4marketing mirror="flex-row-reverse"/>
      <Section7/>
      <Section8/>
      <Conclution heading={conclutionHead} pera={conclutionpera}/>
      <FaqSection/>
      <Footer/>

    </div>
  )
}

export default Marketing