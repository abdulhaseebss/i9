import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>


    {/* navbar start */}


    <nav className='flex justify-center'>
        <div className='list-none flex bg-[#0065C0] text-white items-center justify-between px-8 p-2 w-[90%] mt-6 rounded-2xl outfit'>
          <div className='flex gap-10'>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Company</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Software</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'><Link to={'marketing'}>Marketing</Link></li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Blogs</li>
          </div>

            <img className='h-[10vh]' src={logo} alt="" />

            <div className='flex gap-10'>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'> <Link to={"interoperability"}>Interoperability</Link></li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Awards</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>ABDM</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'> Career</li>
            </div>
        </div>
    </nav>


{/* navbar end */}



    </>
  )
}

export default Navbar