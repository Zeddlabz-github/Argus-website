import React, { Component } from 'react'

import fleet from './../../argus website/PNG/fleet linked in.png'

class Contact extends Component {
    
    
    
    render() {
        return (
            <div>
                
                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-contactbg">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-black">Contact Us</h1>
                        </div>
                    </div>
                </div>

        <div className="overflow-hidden bg-no-repeat bg-mapbg">
            <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-26">
            <img src={fleet} alt="Security Cars"/>
                <div className="flex flex-wrap my-12">
                    <div className="p-2 md:w-1/4 flex flex-col items-start">
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">How can we help ?</h2>
                        <p className="leading-relaxed mb-8">Demo text ss adsf dasf df df  eadsf fad f adsf dasf df  easdf ewar qwe gfgh.</p>
                    </div>
                    <div className=" lg:w-2/3 p-4 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        
                            <div className="relative mb-4">
                                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button className="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </div>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.38568994079!2d-79.71944568499285!3d43.681744458603305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f742bd5dfaf%3A0x4e85dd4aa00d79f1!2sArgus%20Security%20Services%20Corp.!5e0!3m2!1sen!2sin!4v1628009453160!5m2!1sen!2sin" className="w-full h-80 bg-gray-200" allowfullscreen="" loading="lazy"></iframe>

            </div>
        )
    }
}

export default Contact

