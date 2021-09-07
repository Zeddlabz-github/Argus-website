import React, {useState} from 'react';
import Mobilenav from './Mobilenav.jsx';



const Hamburger = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className="lg:hidden" open={open} onClick={() => setOpen(!open)}>
            <div className={open ? "z-50 flex flex-col items-center justify-around bg-transparent w-10 h-10 fixed top-8 right-8" : "z-50 flex flex-col items-center justify-around bg-gray-1 w-10 h-10 fixed top-10 right-10"}>
                <div className={open ? "w-11/12 h-1 bg-white origin-left transform rotate-45 transition ease-in-out duration-700" : "w-8 h-1 bg-red-1 transform rotate-0 transition ease-in-out duration-700"}/>
                <div className={open ? "w-full h-1 bg-white origin-center transform -translate-x-full transition opacity-0 ease-in-out duration-700" : "w-8 h-1 bg-red-1 transform translate-x-0 transition opacity-1 ease-in-out duration-700"}/>
                <div className={open ? "w-11/12 h-1 bg-white origin-left transform -rotate-45 transition ease-in-out duration-700" : "w-8 h-1 bg-red-1 transform rotate-0 transition ease-in-out duration-700"}/>
            </div>
            <Mobilenav open={open}/>
        </div>
    )
}

export default Hamburger