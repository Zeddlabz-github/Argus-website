import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'

class SignUp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })

    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })

    }

    handleSubmit = (event) => {
        alert(`${this.state.email} ${this.state.password}`)
        event.preventDefault()
    }
    
    
    render() {
        return (
            
        <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-hero">
            <div className="content text-3xl text-center md:text-left lg:w-2/3">
              <h1 className="text-5xl text-gray-700 font-bold">Argus Security</h1>
              <p>Your partners in protection</p>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <form className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center" onSubmit={this.handleSubmit}>
                <img src={logo} alt="Logo" className="w-20 mb-3"/>
                    <div classname="w-full flex flex-col item-center">
                        <hr className="w-1/3 border-1 border-black"/>
                        <p>or</p>
                        <hr className="w-1/3 border-1 border-black"/>
                    </div>
                    <input className="w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                    <input className="w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
        
                    <button className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg">Next</button>
                    <a className="text-gray-900 font-bold text-center my-2">Already Registered?<span className="text-blue-500"> Log In</span> </a>
                    <hr className="border-1 border-black w-full" />
                    <p className="text-gray-900 text-center text-sm my-2">By clicking on next, you acknowledge that you have read and accepted the Terms of Service and the Privacy Policy</p>
                </form>
            </div>
        </div>
        )
    }
}

export default SignUp
