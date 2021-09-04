import React, { Component } from 'react'
import technology_image from './../../../argus website/PNG/Silvertrac.png'
import { Link } from 'react-router-dom'
import TechPageButtons from './../../Components/TechPageButtons.jsx'
import SideBar from './../../Components/SideBar.jsx'
import Header from "./../../Partials/Header";
import Header2 from "./../../Partials/Header2";
import Stickynav from "./../../Partials/Stickynav"
import MobileHeader from "./../../Partials/MobileHeader";

class Technology extends Component {
    
    
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
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">TECHNOLOGY</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={technology_image} alt="About page"/>
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">SilverTrac</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Argus Security uses the Silvertrac mobile app system. This allows guards to clock
                            on upon arrival at their site. We are made automatically aware when our Guards
                            arrives on site, and their activities by the application of GPS. Silvertrac is the mist
                            efficient bridge between logistics and operations department of Argus Security.</p>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">We've exceeded customer expectations and has provided the level of service well
                            above the competition using clear, reliable reporting data. </p>
                        
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

export default Technology
