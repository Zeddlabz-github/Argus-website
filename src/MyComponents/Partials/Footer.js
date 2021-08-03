import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'
import phone_logo from './../../argus website/SVG/Phone logo.svg'

class Footer extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             email: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })

    }

    handleSubmit = (event) => {
        alert(`${this.state.email}`)
        event.preventDefault()
    }


    
    render() {
        return (
            
<div class="footer bg-center bg-no-repeat bg-cover bg-footer relative pt-1 ">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8 sm:items-center ">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="w-1/4 flex flex-col p-3 text-white">
                    <img class="w-24" src={logo} alt="Logo of Argus Security"/>
                    <p class="text-white">Your protection is Our Mission. Proudly serving business and residential sector in Ontario.</p>
                    <hr class="border-1 border-gray-600 w-11/12 my-2 py-2" />
                    <a href="tel:6472891070" class="p-1">
                        <div>
                            {/* <img src={phone_logo} alt="Phone Logo" /> */}
                            <p>647-289-1070</p>
                        </div>
                    </a>
                    <a href="mailto:info@argussecurityservices.ca" class="p-1">
                        <div>
                            {/* <img src={phone_logo} alt="Phone Logo" /> */}
                            <p>info@argussecurityservices.ca</p>
                        </div>
                    </a>
                    <div class="p-1">
                        {/* <img src={phone_logo} alt="Phone Logo" /> */}
                        <p>350 Rutherford Road South Brampton ON L6W-4N6 Suite 210 Plaza 2</p>
                    </div>
                    </div>
                <div class="w-1/4 flex flex-col m-10">
                    <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Explore</span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">About</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Our Services</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Covid-19 Plan</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Organization Structure</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Jobs</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Personnel</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Training</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Contact Us</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Technology</a></span>
                </div>
                <div class="w-1/4 flex flex-col m-10">
                    <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Services</span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Gated Community Security</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Construction Security</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Parking Enforcement</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Residential Security</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Corporate Security</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Industrial Security</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Private Security</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Mobile Security</a></span>
                    <span class="my-1"><a href="#" class="text-white text-md hover:text-red-700">Event Security</a></span>
                </div>
                <div class="w-1/4 flex flex-col bg-red-700 text-white">
                    <form class="flex flex-col items-center text-center" onSubmit={this.handleSubmit}>
                        <h1 class="font-bold py-6">Newsletter</h1>
                        <p class="pb-6">Signup to get our daily latest security news and updates</p>
                        <input className="w-2/3 mb-3 py-3 px-4 border border-gray-400 focus:outline-none focus:ring-1 ring-cyan-500" type="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange}/>
                        <button className="w-2/3 bg-black text-white p-3 rounded-lg font-semibold text-lg">REGISTER NOW</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-600 flex flex-col items-left">
            <div class="sm:w-2/3 text-left py-6">
                <p class="text-sm text-white font-bold mb-2">
                    © Copyright 2021 by Argus Security Services Corp.
                </p>
            </div>
        </div>
    </div>
</div>


        )
    }
}

export default Footer
