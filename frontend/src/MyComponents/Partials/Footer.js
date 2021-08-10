import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'
import { Link } from 'react-router-dom'

class Footer extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             subscriber: ''
        }
    }

    handleSubscriberChange = (event) => {
        this.setState({
            subscriber: event.target.value
        })

    }

    handleSubmit = (event) => {
        alert(`${this.state.subscriber}`)
        event.preventDefault()
    }


    
    render() {
        return (


<div class="text-white text-xl md:text-sm  body-font bg-center bg-no-repeat bg-cover bg-footer">
  <div class="container px-4 sm:px-24 pb-12 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 pt-4">
        <img class="w-28 mx-auto md:mx-0" src={logo} alt="Logo of Argus Security"/>
        <p class="text-white">Your protection is Our Mission. Proudly serving business and residential sector in Ontario.</p>
        <hr class="border-1 border-gray-600 w-11/12 my-3" />
        <a href="tel:6472891070" class="px-2">
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>647-289-1070</p>
        </a>
        <a href="mailto:info@argussecurityservices.ca" class="px-2">
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>info@argussecurityservices.ca</p>
        </a>
            {/* <img src={phone_logo} alt="Phone Logo" /> */}
            <p>350 Rutherford Road South Brampton ON L6W-4N6 Suite 210 Plaza 2</p>
    </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 pt-10 md:pt-32">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORE</h2>
        <nav class="list-none mb-10">
          <li> <Link to="/about">
            <a class="text-white hover:text-red-1">➔ About</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Our Services</a>
          </Link> </li>
          <li> <Link to="/">
            <a class="text-white hover:text-red-1">➔ Covid-19 Plan</a>
          </Link> </li>
          <li> <Link to="/">
            <a class="text-white hover:text-red-1">➔ Organization Structure</a>
          </Link> </li>
          <li> <Link to="/jobs">
            <a class="text-white hover:text-red-1">➔ Jobs</a>
          </Link> </li>
          <li> <Link to="/">
            <a class="text-white hover:text-red-1">➔ Personnel</a>
          </Link> </li>
          <li> <Link to="/training">
            <a class="text-white hover:text-red-1">➔ Training</a>
          </Link> </li>
          <li> <Link to="/contact">
            <a class="text-white hover:text-red-1">➔ Contact Us</a>
          </Link> </li>
          <li> <Link to="/">
            <a class="text-white hover:text-red-1">➔ Technology</a>
          </Link> </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 pt-10 md:pt-32">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
        <nav class="list-none mb-10">
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Gated Community Security</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Construction Security</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Parking Enforcement</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Residential Security</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Corporate Security</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Industrial Security</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Private Security</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Mobile Security</a>
          </Link> </li>
          <li> <Link to="/services">
            <a class="text-white hover:text-red-1">➔ Event Security</a>
          </Link> </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 text-center items-center pt-10 md:pt-28">
        <div class="flex flex-col bg-red-1 items-center p-6 ">
          <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 text-center">NEWSLETTER</h2>
          <p class="text-white text-sm mt-2 text-center">Signup to get our daily latest
          security news and updates.</p>
          <form class="w-full py-2" onSubmit={this.handleSubmit}>
            <input type="email" class="w-full my-4 bg-white border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-white focus:border-white text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter Email" value={this.state.subscriber} onChange={this.handleSubscriberChange}/>
            <button className="w-full p-4 rounded-lg border font-bold text-white bg-black hover:bg-white hover:text-red-700 hover:border-black">REGISTER NOW</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="border-t-2">
    <div class="container px-20 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <p class="text-xl text-white sm:ml-6 sm:mt-0 mt-4">© Copyright 2021 by Argus Security Services Corp.</p>
    </div>
  </div>
</div>

        )
    }
}

export default Footer
