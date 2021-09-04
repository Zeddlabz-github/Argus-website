import React, { Component } from 'react';
import image1 from './../../argus website/PNG/raw-2_edited.png';
import {Link} from 'react-router-dom';
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav"
import MobileHeader from "../Partials/MobileHeader";

class Services extends Component {
    render() {
        return (
            <div>

                <Header />
                <Header2 />
                <Stickynav/>
                <MobileHeader />

                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">SERVICES</h1>
                        </div>
                    </div>
                </div>

                <div class="px-2 sm:px-40 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                    
                    <div class="container px-5 py-12 sm:py-20 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap w-full flex-wrap items-center">
                            <div class="flex flex-wrap items-center w-1/2">
                                <hr class="border-4 border-red-700 w-6/12 lg:w-1/12 mb-2 lg:m-4"/>
                                <h1 class="text-4xl font-medium lg:w-10/12 lg:mb-0 mb-4">First hand information to our operations</h1>
                            </div>
                            <p class="lg:pl-6 lg:w-1/2 mx-auto leading-relaxed text-gray-2 font-bold">As a client you will gain first hand access to day-today operations and daily occurrence reposts.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap text-center mb-8">
                        
                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">GATED COMMUNITY</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 p-2">NFS marked vehicles, communication between residents & security staff and efficient use of technology</p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">CONSTRUCTION</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">Site surveillance, road flaggers, risk assessment, loss prevention and mobile patrols at your construction site.</p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">PARKING</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">Fire Route watch, valid permit enforcement and deterrent against invalid/improper parking to ensure smoothness.</p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">RESIDENTIAL</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">Peace of mind, theft deterrent, minimize property damager and safeguard against trespassing activity.</p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">CORPORATE</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 px-6 py-2">Risk management, Information security, Corporate Governance, Compliance and Ethics Programs</p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">INDUSTRIAL</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">Access control and monitoring, crime and violence prevention and Emergency response protocols </p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">PRIVATE</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">VIP Protection, closed-circuit security feeds, preserve, protect and take care of life and property </p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">MOBILE</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">Marked Vehicles with first air kits and a patrol reporting system to document every visit to ensure security.</p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>

                        <div class="p-8 md:w-1/3">
                            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog"/>
                                <div class=" bg-white">
                                    <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">EVENT</h1>
                                    <p class="leading-relaxed mb-3 text-gray-2 p-2">Access control, emergency response, crowd control. complete threat and risk Assessment for a safe atmosphere.</p>
                                </div>
                                <Link to="/contact">
                                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-700 hover:border-red-700">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
                    <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">EVENT SECURITY SERVICES</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. </p>
                        <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
