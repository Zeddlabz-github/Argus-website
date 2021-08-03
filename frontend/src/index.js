import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
//                                     <div className="mb-4 md:flex md:justify-between">
//                                         <div className="mb-4 md:mr-2 md:mb-0">
//                                             <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
//                                             <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="email" value={this.state.email} onChange={this.handleEmailChange}/>
//                                         </div>
//                                         <div>
//                                             <label>Password</label>
//                                             <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
//                                         </div>
//                                     </div>
//                                 </form>