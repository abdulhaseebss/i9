import React from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>


    {/* navbar start */}


    <nav className='flex justify-center'>
        <div className='list-none flex bg-[#0065C0] text-white items-center justify-between px-8 p-2 w-[90%] mt-6 rounded-2xl outfit'>
          <div className='flex gap-10'>
            <li>Company</li>
            <li>Software</li>
            <li>Marketing</li>
            <li>Blogs</li>
          </div>

            <img className='h-[10vh]' src={logo} alt="" />

            <div className='flex gap-10'>
            <li>Interoperability</li>
            <li>Awards</li>
            <li>ABDM</li>
            <li> Career</li>
            </div>
        </div>
    </nav>


{/* navbar end */}



    </>
  )
}

export default Navbar