import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'

const Mobilenav = ({ open }) => {
  return (


<div className={open ? "block" : "hidden"}>
<div class= {open ? "w-full h-screen bg-red-1 overflow-scroll " : "w-full h-screen z-30 bg-red-1 overflow-scroll "}>
  <div class="w-full">
    <div class="w-full">
      <div class="w-full flex flex-col mx-auto">
        <Link to="/about" class="w-11/12 md:w-7/12 lg:5/12 mx-auto">
          <button class="w-full p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">ABOUT</button>
        </Link>

        <Link to="/services" class="w-11/12 md:w-7/12 lg:5/12 mx-auto">
          <button class="w-full p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">SERVICES</button>
        </Link>

        <Link to="/jobs" class="w-11/12 md:w-7/12 lg:5/12 mx-auto">
          <button class="w-full p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">JOBS</button>
        </Link>
        
        <Link to="/training" class="w-11/12 md:w-7/12 lg:5/12 mx-auto">
          <button class="w-full p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">TRAINING</button>
        </Link>

        <Link to="/contact" class="w-11/12 md:w-7/12 lg:5/12 mx-auto">
          <button class="w-full p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">CONTACT</button>
        </Link>

        <Link to="/technology" class="w-11/12 md:w-7/12 lg:5/12 mx-auto">
          <button class="w-full p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">TECHNOLOGY</button>
        </Link>

        <Link to="/training" class="w-11/12 md:w-7/12 lg:5/12 mx-auto">
          <button class="w-full p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">GET YOUR SECURITY GUARD LICENSE</button>
        </Link>

      </div>
        <h1 class="text-white text-center text-3xl my-4 sm:my-3 ">PORTALS</h1>
        <div class="w-full flex flex-row mx-auto">
          <Link to="/login" class="w-1/4 mx-auto">
            <button class="w-full my-1 p-4 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">STUDENT PORTAL</button>
          </Link>
          <button class="w-1/4 p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">CLIENT PORTAL</button>
          <button class="w-1/4 p-4 my-1 mx-auto rounded-lg border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700">EMPLOYEE PORTAL</button>
        </div>
    </div>
  </div>  
</div>
</div>

    )
  }
export default Mobilenav