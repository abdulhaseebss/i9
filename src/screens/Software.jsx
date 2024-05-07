import Banner from '@/components/banner/Banner'
import SoftwareFaq from '@/components/FAQ/SoftwareFaq'
import Footer from '@/components/footer/Footer'
import Section2 from '@/components/software/Section2'
import Section3 from '@/components/software/Section3'
import React from 'react'

const Software = () => {



  return (
    <>
    <Banner heading={"Lab Information Management System (LIMS)"} text={"Embark on a journey of innovation and efficiency with i9 Innovation's state-of-the-art Lab Information Management System (LIMS). "}/>
    <Section2/>
    <Section3/>
  <SoftwareFaq/>
  <Footer/>
    </>
  )
}

export default Software