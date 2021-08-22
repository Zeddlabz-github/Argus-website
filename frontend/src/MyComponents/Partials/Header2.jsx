import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'
import {Link} from 'react-router-dom'
import Hamburger from './../../MyComponents/Partials/Hamburger.jsx';

class Header extends Component {
  render() {
    return (

<div class="w-full sticky top-2">
  <div class="hidden xl:block xl:sticky xl:top-0 container bg-opacity-0 -mb-9 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <nav class="border-collapse md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/about">
      <a class="text-l text-white px-16 xl:px-20 py-3 bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">ABOUT</a>
      </Link>

      <Link to="/services">
      <a class="text-l text-white px-16 xl:px-20 py-3 bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">SERVICES</a>
      </Link>

      <Link to="/jobs">
      <a class="text-l text-white px-20 xl:px-24 py-3 bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">JOBS</a>
      </Link>
      
      <Link to="/training">
      <a class="text-l text-white px-16 xl:px-20 py-3 bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">TRAINING</a>
      </Link>

      <Link to="/contact">
      <a class="text-l text-white px-16 xl:px-20 py-3 bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">CONTACT</a>
      </Link>
    
    </nav>
  </div>
</div>
    )
  }
}

export default Header
