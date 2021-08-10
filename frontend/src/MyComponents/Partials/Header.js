import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
<div class="w-full">
  <div class="text-white body-font bg-red-1">
    <div class="container w-9/12 mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Technology</a>
        <a class="mr-5 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Get Your Security Guard License</a>
      </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <Link to="/">
          <img src={logo} alt="Logo of Argus Security Services" class="w-24 shadow-lg"/>
        </Link>
        </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <nav class="flex lg:w-full flex-wrap items-center text-base md:ml-auto">
          <Link to="/login">
          <a class="mr-3 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Student Portal</a>
          </Link>
          <a class="mr-3 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Client Portal</a>
          <a class="mr-3 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Employee Portal</a>
        </nav>
      </div>
    </div>
  </div>
  <div class="container bg-opacity-0 -mb-8 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/about">
      <a class="border border-gray-800 bg-gray-700 bg-opacity-50 text-l text-white px-16 py-2 hover:text-red-1">ABOUT</a>
      </Link>

      <Link to="/services">
      <a class="border border-gray-800 bg-red-1 bg-opacity-50 text-l text-white px-16 py-2 hover:text-red-1">SERVICES</a>
      </Link>

      <Link to="/jobs">
      <a class="border border-gray-800 bg-gray-500 bg-opacity-50 text-l text-white px-16 py-2 hover:text-red-1">JOBS</a>
      </Link>
      
      <Link to="/training">
      <a class="border border-gray-800 bg-gray-500 bg-opacity-50 text-l text-white px-16 py-2 hover:text-red-1">TRAINING</a>
      </Link>

      <Link to="/contact">
      <a class="border border-gray-800 bg-gray-500 bg-opacity-50 text-l text-white px-16 py-2 hover:text-red-1">CONTACT</a>
      </Link>
    
    </nav>
  </div>
</div>
    )
  }
}

export default Header
