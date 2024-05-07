import React from 'react'
import rectangle from "../../assets/Rectangle34624213.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <>
        <div className='flex justify-center outfit mt-20 mb-[-8vh] z-50 relative max-[1340px]:mb-[-2vh] '>
            <form className='w-[80%] shadow-2xl p-10 rounded-2xl bg-white'>
                <h2 className='text-[#8ABC3E] text-3xl text-center'>Enquire Now</h2>
                <p className='text-lg text-center font-medium'>And we will connect with you within 24 hours!</p>
                <div className='flex flex-wrap mt-5 gap-5 justify-between '>
                    <input className='font-medium text-black border-2 p-2 rounded-full w-[48%] max-[750px]:w-full transition-all outline-none' type="text" placeholder='Your Full Name'/>
                    <input className='font-medium text-black border-2 p-2 rounded-full w-[48%] max-[750px]:w-full transition-all outline-none' type="email" placeholder='Your Email ID'/>
                    <input className='font-medium text-black border-2 p-2 rounded-full w-[48%] max-[750px]:w-full transition-all outline-none' type="number" placeholder='Your Mobile Number'/>
                    <input className='font-medium text-black border-2 p-2 rounded-full w-[48%] max-[750px]:w-full transition-all outline-none' type="text" placeholder='Name of your Hospital'/>
                    <input className='font-medium text-black border-2 p-2 rounded-full w-[48%] max-[750px]:w-full transition-all outline-none' type="number" placeholder='Number of Beds'/>
                </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#0065C0] mt-8 text-white p-2 px-9 rounded-full font-medium'>Submit</button>
                    </div>
            </form>
        </div>

        <div className='outfit max-[1200px]:mt-[8vh] max-[1200px]:mb-[8vh]'>
            <img className='absolute  max-[1200px]:h-[60vh] transition-all' src={rectangle} alt="rectangle" />

            <div className=' flex flex-wrap justify-evenly text-white max-[1200px]:text-black relative items-start h-full z-50 px-28 gap-12'>

                <div className='mt-[12vh] max-[1340px]:mt-[6vh] max-[600px]:w-full'>
                    <div className='max-[1200px]:bg-[#0065C0] max-[1200px]:p-3 max-[600px]:hidden max-[1200px]:rounded-3xl max-[1200px]:mb-3 transition-all'>
                        <img className='h-[10vh] ' src={logo} alt="" />
                    </div>
                    <p className='w-[25vw] font-medium max-[1000px]:hidden'>Where we harness the power of technology to transform Hospitals in India. With offices in Mumbai, Pune, Mangalore and Dubai. </p>
                    <div className='flex gap-3 mt-7 justify-between max-[350px]:hidden'>
                        <i className="bg-white max-[1200px]:bg-[#A3DC2F] max-[1200px]:text-white p-2 cursor-pointer text-[#A3DC2F] rounded-full fa-brands fa-twitter"></i>
                        <i className="bg-white max-[1200px]:bg-[#A3DC2F] max-[1200px]:text-white p-2 cursor-pointer text-[#A3DC2F] rounded-full fa-brands fa-facebook-f"></i>
                        <i className="bg-white max-[1200px]:bg-[#A3DC2F] max-[1200px]:text-white p-2 cursor-pointer text-[#A3DC2F] rounded-full fa-brands fa-instagram"></i>
                        <i className="bg-white max-[1200px]:bg-[#A3DC2F] max-[1200px]:text-white p-2 cursor-pointer text-[#A3DC2F] rounded-full fa-brands fa-linkedin"></i>
                        <i className="bg-white max-[1200px]:bg-[#A3DC2F] max-[1200px]:text-white p-2 cursor-pointer text-[#A3DC2F] rounded-full fa-brands fa-youtube"></i>
                    </div>
                </div>
                
                <div className='mt-[12vh] max-[1340px]:mt-[6vh] max-[350px]:hidden'>
                    <h2>Quick links</h2>
                    <div className='flex list-none font-normal mt-4 gap-8 ' >
                        <div className='flex-col gap-8 w-[35%] leading-[6vh]'>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>About us</li>
                            <li className='cursor-pointer'>Our Team</li>
                            <li className='cursor-pointer'>Privacy-Policy</li>
                        </div>
                        <div className='flex-col gap-8 leading-[6vh]'>
                            <li className='cursor-pointer'>Awards</li>
                            <li className='cursor-pointer'>Career</li>
                            <li className='cursor-pointer'>Contact us</li>
                        </div>
                    </div>
                </div>
                
                <div className='mt-[12vh] w-[45vh] max-[1340px]:mt-[6vh] max-[350px]:mt-[-1vh]' >
                    <h2>Address</h2>
                    <p className='font-normal'>2774 Oak Drive, Plattsburgh, New York</p>
                    <h2 className='mt-5'>Contact</h2>
                    <p className='font-normal'>518-564-3200 <br />
                        contact@helby.com</p>
                </div>
            </div>
        </div>
        <div className='relative z-50 max-[1400px]:mt-3 outfit bg-[#006FAF] text-center text-white p-8'>
            <p className='font-light'>COPYRIGHT © 2015 - 2024 I9 INNOVATIONS & EDUCATIONS PVT, LTD. |PRIVACY POLICY| DISCLAIMER| ALL RIGHTS RESERVED</p>
        </div>
    </>
  )
}

export default Footer