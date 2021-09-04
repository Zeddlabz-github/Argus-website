import React, { Component } from 'react'
import about_image from './../../../argus website/PNG/Video.png'
import { Link } from 'react-router-dom'
import TechPageButtons from './../../Components/TechPageButtons.jsx'
import SideBar from './../../Components/SideBar.jsx'
import Header from "./../../Partials/Header";
import Header2 from "./../../Partials/Header2";
import Stickynav from "./../../Partials/Stickynav"
import MobileHeader from "./../../Partials/MobileHeader";

class ToursCheckpoints extends Component {
    
    
    render() {
        return (
            <div>
      
                <Header />
                <Header2 />
                <Stickynav/>
                <MobileHeader />

                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">TOURS & CHECKPOINTS</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page"/>
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Full Officer Accountability</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Providing full accountability in a security guard company is a critical differentiator
                            and a scalable advantage. Clients expect transparency on where and when guards
                            are active and what is actually getting done. But traditional guard tour systems lack
                            the ability to show clients what guard activity looks like in real-time.</p>
                        
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Painting a Complete Picture</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Silvertrac’s digital guard tour system software provides a complete story of every
                            security guard tour with:</p>

                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Custom tour sequences</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Step-by-step post instructions</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Live tour updates </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> GPS mapping/checkpoint verification </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Photo and/or written note reporting requirements for increased accountability </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Instant notifications on checkpoint scanning </li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Painting a Complete Picture</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Silvertrac’s digital guard tour system software provides a complete story of every
                            security guard tour with:</p>

                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Custom tour sequences</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Step-by-step post instructions</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Live tour updates </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> GPS mapping/checkpoint verification </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Photo and/or written note reporting requirements for increased accountability </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Instant notifications on checkpoint scanning </li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">An All-Inclusive Mobile Guard App</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Everything guards need for rounds exists within an intuitive mobile guard app that:</p>

                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Scans checkpoints using QR Codes, Barcodes, or NFC Tags</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Sends specific instructions to the phone for each hit</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Automatically logs GPS and time-stamping on each scan </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Shows time left before each tour is due </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Crosses out each hit as it happens </li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Send Relevant Information Quickly</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Guards need someone behind the scenes to create and dispatch tasks in order to
                            stay focused. That’s why every piece of data gets sent back to the issue monitor
                            database automatically. The Issue Monitor gathers all scanned checkpoint data
                            from the field and prepares it in your Daily Activity Reports. Allowing management
                            to better measure guard performance and address issues before they cost a
                            contract. All of this radically streamlines daily operations, keeps guards focused,</p>

                        <TechPageButtons />

                        <div>
                            
                        </div>                   
                    
                    </div>
                    <SideBar />
                </div>
            </div>

            </div>
        )
    }
}

export default ToursCheckpoints
