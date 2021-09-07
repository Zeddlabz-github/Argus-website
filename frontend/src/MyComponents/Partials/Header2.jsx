import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header2 extends Component {

  Header

  render() {
    return (

      <div className="hidden lg:block px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 text-sm -mb-12 font-for-para">
        <nav class="flex flex-wrap items-center text-base">
          <Link to="/about" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
            ABOUT
          </Link>

          <Link to="/services" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          SERVICES
          </Link>

          <Link to="/jobs" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          JOBS
          </Link>
          
          <Link to="/training" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          COURSES
          </Link>

          <Link to="/contact" className="w-1/5 text-white py-3 text-center bg-gray-2 bg-opacity-60 hover:bg-red-1 hover:bg-opacity-60">
          CONTACT
          </Link>
      
        </nav>
      </div>
    )
  }
}

export default Header2
