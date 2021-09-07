import React, { Component } from 'react'
import about_image from './../../../argus website/PNG/Video.png'
import { Link } from 'react-router-dom'
import TechPageButtons from './../../Components/TechPageButtons.jsx'
import SideBar from './../../Components/SideBar.jsx'
import Header from "./../../Partials/Header";
import Header2 from "./../../Partials/Header2";
import Stickynav from "./../../Partials/Stickynav"
import MobileHeader from "./../../Partials/MobileHeader";

class MobilePatrols extends Component {
    
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
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">MOBILE PATROLS</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page"/>
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Optimized Mobile Patrols</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">There’s an ever-increasing demand in the security industry to deliver at speed and
                            at scale. The only way to meet that demand with mobile patrols is to be better,
                            faster, and cheaper, which means reducing time and cost spent in an operation.
                            Silvertrac helps optimize mobile patrols by:
                            </p>
                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Tracking patrol productivity in real-time through checkpoints.</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Minimizing service interruptions.</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Reducing time between sites </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Visualizing mobile patrols </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Integrating Google Maps® so guards never have to leave the app </li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Mobile Patrol Checkpoints</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Checkpoints are the key to Silvertrac’s mobile patrol software success. They guide
                            officers on patrol throughout each shift via digital checkpoints and are easy to set
                            up across multiple properties through the Issue Monitor. All of this adds a level of
                            detail that allows teams to further optimize how drivers spend their time. When a
                            checkpoint is hit, four things happen:</p>
                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> The officer receives specific instructions for the current site.</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> A pre-written note is added directly to the Daily Activity Report (DAR).</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> A GPS pinpoint is captured showing the time and location of the hit. </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Option to require a photo to be taken of the area. </li>
                        </ul>
                        
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Automatically Populate Daily Activity Reports</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">In the field, guards can quickly log all security, maintenance, and parking related
                            issues at each property with ease. As officers report what they see on site, Daily
                            Activity Reports and incident reports are automatically created so officers won’t
                            spend hours back at the office after each shift with pen & paper.</p>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Track Every Vehicle-Related Cost</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Silvertrac has the tools to stay on top of every vehicle in your fleet. Track vehicle
                            usage, reduce maintenance costs, and optimize routes by quickly recording
                            important patrol vehicle info like pre and post-shift inspections, maintenance
                            concerns, odometer readings, gas purchases, and more.</p>

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

export default MobilePatrols
