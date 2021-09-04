import React, {useState} from 'react';
import Logo from "./../../argus website/SVG/logosvg.svg"
import {Link} from 'react-router-dom'
import LogIn from '../User/LogIn';


export default function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="shadow-lg sticky">
      <div className="hidden lg:block px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 bg-red-1 shadow-lg text-sm">
        <div className="flex flex-row items-center mx-auto justify-between font-bold border-white font-for-para">
          <nav className="flex flex-row items-center">
              <Link to="/technology" className="text-white border-3 border-white rounded px-5 py-3 mr-3.5 hover:bg-white hover:text-red-1 hover:shadow-inner">
                Technology
              </Link>
              <Link to="/Training" className="text-white border-3 border-white rounded px-6 py-3 hover:bg-white hover:text-red-1 hover:shadow-inner">
                Get Your Security Guard License
              </Link>
          </nav>
          <Link to="/react">
            <img src={Logo} alt="Logo of Argus Security" className="w-24 my-2"/>
          </Link>
          <nav className="flex flex-row items-center">
            <Link open={open} onClick={() => setOpen(!open)} className="text-white border-3 border-white rounded px-3 py-3 mr-3 hover:bg-white hover:text-red-1 hover:shadow-inner">
              Student Portal
            </Link>
            <Link to="/dashboard/student/home" className="text-white border-3 border-white rounded px-3 py-3 mr-3 hover:bg-white hover:text-red-1 hover:shadow-inner">
              Client Portal
            </Link>
            <Link to="/dashboard/admin/home" className="text-white border-3 border-white rounded px-3 py-3 hover:bg-white hover:text-red-1 hover:shadow-inner">
              Employee Portal
            </Link>
          </nav>
        </div>
      </div>
      <LogIn open={open}/>
    </div>
  )
}

