import React, {useState} from 'react';
import logo from './../../argus website/PNG/Logo Vectors.png'
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger.jsx';
import LogIn from '../User/LogIn';

const Header = () => {
  const [open, setOpen] = useState(false)


  {
    return (
<div>
<div class="w-full">
  <Hamburger />
  <div class="text-white body-font bg-red-1">
    <div class="container w-9/12 mx-auto flex flex-wrap pt-2 pb-4 flex-col md:flex-row items-center">
      <nav class="hidden xl:block flex lg:w-2/5 flex-wrap items-center text-xl md:ml-auto justify-between">
        <Link to="/technology">
          <a class="mr-5 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Technology</a>
        </Link>
        <a class="mr-5 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Get Your Security Guard License</a>
      </nav>
        <a class="block flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <Link to="/">
          <img src={logo} alt="Logo of Argus Security Services" class="w-24 shadow-lg"/>
        </Link>
        </a>
      <div class="hidden xl:block lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <nav class="flex lg:w-full flex-wrap items-center text-base md:ml-auto">
          <Link open={open} onClick={() => setOpen(!open)}>
          <a class="mr-3 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Student Portal</a>
          </Link>
          <Link to="/dashboard/student/home">
          <a class="mr-3 px-3 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Client Portal</a>
          </Link>
          <a class="px-4 py-2 border-2 text-sm text-white border-white rounded hover:text-red-700 hover:bg-white">Employee Portal</a>
        </nav>
      </div>
    </div>
  </div> 
</div>
<LogIn open={open}/>
</div>
    )
  }
}

export default Header
