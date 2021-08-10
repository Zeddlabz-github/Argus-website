import React, {useState} from 'react';
import RightNav from './../../MyComponents/Partials/Mobilenav.js';



const Hamburger = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <div open={open} onClick={() => setOpen(!open)}>
            <div class="flex flex-col items-center justify-around bg-gray-1 w-10 h-10 fixed top-5 right-5">
                <div className={({ open }) => open ? "bg-red-1" : "bg-red-900"}/>
                <div class="w-8 h-1 bg-red-1"/>
                <div class="w-8 h-1 bg-red-1"/>
            </div>
          <RightNav open={open}/>
        </div>
    )
}

export default Hamburger