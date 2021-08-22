import React, { Component } from 'react';
import about_image from './../../argus website/PNG/Video.png'
import {Link} from 'react-router-dom';
import SideBar from './../Components/SideBar.jsx'

class Training extends Component {
    
    render() {
        return (
            <div>
                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">TRAINING</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page Image"/>
                        <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Road to Success</h2>
                        <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Argus Institute‘s Basic Security Training Course gives you everything you need to
                            prepare for your Ontario Security Guard Licence test. No appointment is required.
                            You may stop by Monday to Friday from 10:00 A.M. until 6 P.M. to register.</p>
                        <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">You can also take advantage of our Online Learning Platform that features SelfPaced Online Courses (SPOC), optional live instructor-led sessions within our
                            Virtual Training Room (VTR), and 8 hours of in-classroom First Aid/CPR Level C
                            certification training.</p>
                        
                        <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Basic Security Traning Course (online) $149.99</h2>
                        <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">You can take advantage of our Online Learning Platform that features Self-Paced
                            Online Courses (SPOC), optional live instructor-led sessions within our Virtual
                            Training Room (VTR), and 8 hours of in-classroom First Aid/CPR Level C
                            certification training.</p>
                        <button className="w-1/3 p-5 rounded-lg text-xl border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">REGISTER</button>

                        <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Basic Security Training Course – (In-class room) $199.99</h2>
                            <ul class="text-gray-3 font-bold text-l mb-8"> 
                                <li><span className="text-red-1">✓</span> Course is five days (40 hours) Monday – Friday, 8:30am – 5:00pm</li>
                                <li><span className="text-red-1">✓</span> Comprehensive Security Manual is included </li>
                                <li><span className="text-red-1">✓</span> Exceeds Ontario government standards</li>
                                <li><span className="text-red-1">✓</span> Our guarantee – if you fail the ministry test, you can retake the course for free!</li>
                                <li><span className="text-red-1">✓</span> Courses run weekly in Brampton. </li>
                            </ul>
                        <button className="w-1/3 p-5 rounded-lg text-xl border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">REGISTER</button>
                        
                        <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Basic Security Training Course topics</h2>
                            <ul className="text-gray-3 font-bold text-l flex flex-col sm:flex-row mb-8">
                                <div className="mx-5">
                                <li><span className="text-red-1">✓</span> Introduction to the Security Industry</li>
                                <li><span className="text-red-1">✓</span> Basic Procedures  </li>
                                <li><span className="text-red-1">✓</span> Regulations </li>
                                <li><span className="text-red-1">✓</span> Use of Force Theory</li>
                                <li><span className="text-red-1">✓</span> Emergencies </li>
                                </div>
                                <div className="mx-5">
                                <li><span className="text-red-1">✓</span> Health & Safety</li>
                                <li><span className="text-red-1">✓</span> Canadian Legal System & Authorities  </li>
                                <li><span className="text-red-1">✓</span> Communication I & II  </li>
                                <li><span className="text-red-1">✓</span> Conflict Resolution</li>
                                <li><span className="text-red-1">✓</span> Diversity & Sensitivity</li>
                                </div>
                            </ul>
                            <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">FAQ</h2>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">1.</span> Where do I take the test?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">2.</span> Is there a government website to answer my questions?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">3.</span> How much does it cost? </p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">4.</span> Does this fee include the cost of my license?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">5.</span> Where do I take the training?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">6.</span> Is everything included in the price of the course? </p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">7.</span> What is the cost to the five days of training?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">8.</span> Do I have to take the test each time my license is going to expire?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">9.</span> How many questions are on the test?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">10.</span> How much time is given to complete the test?</p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">11.</span> When will I get back my test results? </p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">12.</span> When is the expiry date on my license? What is the cost of the license? </p>
                            <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full"><span className="text-red-1 font-bold">13.</span> Do I need to attend the CPR training if I already have the certification?</p>
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

export default Training
