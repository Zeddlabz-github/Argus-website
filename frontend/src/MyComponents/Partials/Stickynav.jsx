import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "./../../argus website/SVG/logosvg.svg"
import Scroll from "./../../argus website/SVG/Scroll up.svg"
import gsap from 'gsap'

const Stickynav = () => {
    
    const [open, setOpen] = useState(false)

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setOpen(true)
    } else {
        setOpen(false)
    }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    return (

    <div className={open? "block" : "hidden"}>
        <div className="hidden lg:block w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 text-l fixed top-0 bg-red-1 font-for-para shadow-lg z-50">
            
            <Link to="/react">
                <img src={Logo} alt="" className="w-24 fixed top-1 left-2"/>
            </Link>

            <nav class="flex flex-wrap items-center text-base">
            
            <Link to="/about" className="w-1/5 text-white py-4 text-center bg-red-1 hover:bg-gray-3">
                ABOUT
            </Link>

            <Link to="/services" className="w-1/5 text-white py-4 text-center bg-red-1 hover:bg-gray-3">
            SERVICES
            </Link>

            <Link to="/jobs" className="w-1/5 text-white py-4 text-center bg-red-1 hover:bg-gray-3">
            JOBS
            </Link>
            
            <Link to="/training" className="w-1/5 text-white py-4 text-center bg-red-1 hover:bg-gray-3">
            COURSE
            </Link>

            <Link to="/contact" className="w-1/5 text-white py-4 text-center bg-red-1 hover:bg-gray-3">
            CONTACT
            </Link>
        
            </nav>
        </div>
        <div className="w-12">
            
            <button onClick={scrollToTop}>
                <img src={Scroll} alt="" className="w-12 fixed bottom-4 right-4 shadow-lg"/>
            </button>
        </div>
      </div>
    )
}

export default Stickynav;