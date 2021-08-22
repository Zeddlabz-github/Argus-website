import React, { Component } from 'react'
import about_image from './../../argus website/PNG/Video.png'
import SideBar from './../Components/SideBar.jsx'
import AboutPageButtons from '../Components/AboutPageButtons'

class About extends Component {
    
    render() {
        return (
            <div>
                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">ABOUT US</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page Image"/>
                        <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Objective</h2>
                        <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Argus Security began as a team of protection specialists from different public and
                            private backgrounds with the aim of delivering the highest quality of service at the
                            most competitive rates. We are a growing security firm that operating in Ontario.
                            Our team prioritizes its client satisfaction by rightfully addressing their security
                            needs. Our well-trained security guards bring forth the professionalism that
                            enables us to successfully serve and protect our clients.</p>
                        <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">In an environment with growing rules and regulations, Argus understands the
                            importance of ensuring the team is adherent to company rules and regulations. We
                            ensure trust and integrity is embodied in all the business we conduct. As a team,
                            we ensure our clients are the direct beneficiaries of our policies and procedures.
                            With Argus, we promise you the finest experience, unmatched skills, and
                            professionalism that will continuously set us apart in the security services industry.
                            Argus Security has been successfully providing premium Security, Loss
                            Prevention, and Investigation.</p>
                        
                        <AboutPageButtons />
                        
                        <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Why us?</h2>
                        <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Our mission is to provide great customer experience and superior protection
                            service. Our values are to deliver our service with honor, integrity, and dignity.
                            Argus Security is a well-established and technologically advanced security service
                            provider</p>
                        <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">Argus Security provides clients with superior security services for healthcare
                            facilities, residential and commercial buildings, and retail loss prevention. Our
                            services package delivery management, parking enforcement, access control,
                            camera monitoring, and performing periodic patrols.</p>
                        <ul className="text-gray-3 font-bold text-l flex flex-col sm:flex-row mb-8">
                            <div className="mx-5">
                            <li><span className="text-red-1">✓</span> Optimized Mobile Patrols</li>
                            <li><span className="text-red-1">✓</span> Fool Proof Checkpoints </li>
                            <li><span className="text-red-1">✓</span> GPS Tracking</li>
                            </div>
                            <div className="mx-5">
                            <li><span className="text-red-1">✓</span> Reliable Fire Watch</li>
                            <li><span className="text-red-1">✓</span> Tangible Proof of Service </li>
                            <li><span className="text-red-1">✓</span> Efficient Dispatching System </li>
                            </div>
                        </ul>
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

export default About
