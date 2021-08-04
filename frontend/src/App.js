import './App.css';
import Header from './MyComponents/Partials/Header';
import Footer from './MyComponents/Partials/Footer';
import Home from './MyComponents/Main/Home';
import SignUp from './MyComponents/User/SignUp';
import Contact from './MyComponents/Main/Contact';
import LogIn from './MyComponents/User/LogIn'
import About from './MyComponents/Main/About'
import Jobs from './MyComponents/Main/Jobs'

function App() {
  return (
    <div className="App">
      <About />
      <Jobs />
      <Contact />
      <Footer />
      <SignUp/>
      <LogIn/>
    </div>
  );
}

export default App;
