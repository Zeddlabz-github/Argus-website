import React, { Component } from 'react'
import about_image from './../../../argus website/PNG/Video.png'
import { Link } from 'react-router-dom'
import TechPageButtons from './../../Components/TechPageButtons.jsx'
import SideBar from './../../Components/SideBar.jsx'
import Header from "./../../Partials/Header";
import Header2 from "./../../Partials/Header2";
import Stickynav from "./../../Partials/Stickynav"
import MobileHeader from "./../../Partials/MobileHeader";

class Communication extends Component {
    
    
    render() {
        return (
            <div>

                <Header />
                <Header2 />
                <Stickynav />
                <MobileHeader />
                
                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">COMMUNICATIONS</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page"/>
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Highest Rated Industry Platform</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">When looking for a guard management solution, it’s important that the features it
                            offers line up with the goals of the customer. But it’s also important that the
                            software provides quality service that helps the customer make the most of their
                            investment. That’s why Silvertrac is ranked the highest reviewed platform in the
                            industry. With Silvertrac, you get three big benefits not found on any other guard
                            management software:</p>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Online Resource Center</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Get full access to a comprehensive library of concise, informative how-to videos
                            and support articles to ensure customers get whatever they need at any time</p>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">“Show Me How”</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">The Issue Monitor has “Show Me How” buttons everywhere so system
                            administrators & clients can get quick answers to questions in one place and get
                            back on track easily.</p>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Top-Tier, Canada-based Support Teams</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">One critical part of customer service for any software company is providing
                            customers with support from a dedicated team of technical specialists. At Argus
                            Security, customer service is a top priority. That means a few things:</p>
                        
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

export default Communication
