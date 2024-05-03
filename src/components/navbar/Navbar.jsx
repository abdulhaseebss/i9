import React from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>
        <div>
            <li>Company</li>
            <li>Software</li>
            <li>Marketing</li>
            <li>Blogs</li>
            <img src={logo} alt="" />
        </div>
    </>
  )
}

export default Navbar