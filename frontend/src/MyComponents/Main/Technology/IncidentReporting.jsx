import React, { Component } from 'react'
import about_image from './../../../argus website/PNG/Video.png'
import { Link } from 'react-router-dom'
import TechPageButtons from './../../Components/TechPageButtons.jsx'
import SideBar from './../../Components/SideBar.jsx'
import Header from "./../../Partials/Header";
import Header2 from "./../../Partials/Header2";
import Stickynav from "./../../Partials/Stickynav"
import MobileHeader from "./../../Partials/MobileHeader";

class IncidentReporting extends Component {
    
    
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
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">INCIDENT REPORTING</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page"/>
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Robust Incident Reporting</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Simple incident reporting helps better gauge guard performance & improve client
                            relations. Incident reporting feature allows guards to add the most important
                            information anytime from any site as conveniently as possible. Traditional pen &
                            paper reporting makes producing a Daily Activity Report a hassle.</p>
                        
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Efficient Data Collection</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">We do not have to spend time chasing down information from guards instead we
                            use it to resolve the issues at hand. Silvertrac’s intuitive mobile guard app is
                            designed to make security report writing as easy as possible so the right people
                            get the right alerts at the right time. Guards simply tap and send and Silvertrac will
                            handle the rest. Report issues straight from the field - in real-time from any
                            property - based on criteria that can be included in any report, like:</p>
                        
                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Time-stamped photos, audio files, and text notes.</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Priority levels and notification settings for any issue type. </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Property-specific issue types </li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Filtered Reports</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Each incident is immediately available for review in the Issue Monitor. Reports can
                            be filtered by property, issue type, guard, priority level, and more. This allows any
                            Argus Security to easily create detailed and personalized reports that have
                            everything needed to support client demands. Reports are automatically generated
                            and ready to be delivered to clients, giving them everything they need to know in
                            one bite-sized summary.</p>

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

export default IncidentReporting
