import React, { useState } from "react";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";
import EmpOfMon from "./Components/EmpOfMon";
import Testimonials from "./Components/Testimonial";
import FooterControlSS from "./Components/FooterControl";
import FooterControl from "./Components/FooterControl";


export default function Home() {
  const [show, setShow] = useState(1)
  
  
  
  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full md:w-10/12 bg-gray-1 flex flex-col-reverse md:flex-row">
        <div className="w-full">

            <div>
              <nav className="flex flex-col sm:flex-row justify-evenly my-2">
                <button className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white" onClick={() => setShow(1)}>Testimonial</button>
                <button className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white" onClick={() => setShow(2)} >Employee of the Month</button>
                <button className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white" onClick={() => setShow(3)}>Company Contact</button>
                <button className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white" onClick={() => setShow(4)}>Clients</button>
                <button className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white" onClick={() => setShow(5)}>Team</button>
              </nav>
              <div className={show == 1 ? "block" : "hidden"}>
                <Testimonials />
              </div>
              <div className={show == 2 ? "block" : "hidden"}>
                <EmpOfMon />
              </div>
              <div className={show == 3 ? "block" : "hidden"}>
                <FooterControl />
              </div>
            </div>


        </div>

        <div className="w-full md:w-4/12 bg-white">
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
