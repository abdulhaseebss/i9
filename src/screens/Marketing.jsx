import React from 'react'
import Banner from '../components/banner/Banner'
import Sec4marketing from '@/components/section4marketing/sec4marketing'

const Marketing = () => {


  const textval = <p>Customized Clinic & Pharmacy App <br /> Development | i9 Innovations</p>
  return (
    <div>
      <Banner heading={textval}/>
      <Sec4marketing/>
    </div>
  )
}

export default Marketing