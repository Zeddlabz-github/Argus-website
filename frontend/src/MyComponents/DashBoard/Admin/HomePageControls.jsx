import React from "react";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";
import EmpOfMon from "./Components/EmpOfMon";
import Testimonials from "./Components/Testimonial";
import FooterControlSS from "./Components/FooterControl";
import FooterControl from "./Components/FooterControl";


export default function Home() {
  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full md:w-10/12 bg-gray-1 flex flex-col-reverse md:flex-row">
        <div className="w-full">

            <Testimonials />
            <EmpOfMon />
            <FooterControl />
          
        </div>

        <div className="w-full md:w-4/12 bg-white">
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
