import './App.css';

import Hamburger from './MyComponents/Partials/Hamburger';
import Header from './MyComponents/Partials/Header';
import Footer from './MyComponents/Partials/Footer';
import Home from './MyComponents/Main/Home';
import SignUp from './MyComponents/User/SignUp';
import Contact from './MyComponents/Main/Contact';
import LogIn from './MyComponents/User/LogIn';
import About from './MyComponents/Main/About';
import Jobs from './MyComponents/Main/Jobs';
import Services from './MyComponents/Main/Services';
import Training from './MyComponents/Main/Training';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <switch>
          <Route path="/react" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/jobs" exact component={Jobs}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/training" component={Training}/>
          <Route path="/services" component={Services}/>
        </switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
