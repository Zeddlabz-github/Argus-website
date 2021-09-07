import "./App.css";
import "./MyComponents/Components/FontAwesomeIcons"
import { TweenMax , Power3 } from "gsap/gsap-core";

import AdminRoute from "./MyComponents/DashBoard/Admin/Components/AdminRoutes";
import StudentRoutes from "./MyComponents/DashBoard/Student/Components/StudentRoutes";

import Footer from "./MyComponents/Partials/Footer.jsx";
import Home from "./MyComponents/Main/Home.jsx";
import SignUp from "./MyComponents/User/SignUp.jsx";
import Contact from "./MyComponents/Main/Contact.jsx";
import About from "./MyComponents/Main/About.jsx";
import Jobs from "./MyComponents/Main/Jobs.jsx";
import Services from "./MyComponents/Main/Services.jsx";
import Training from "./MyComponents/Main/Training.jsx";
import Technology from "./MyComponents/Main/Technology/Technology";
import IncidentReporting from "./MyComponents/Main/Technology/IncidentReporting.jsx";
import ToursCheckpoints from "./MyComponents/Main/Technology/ToursCheckpoints.jsx";
import DispatchTasks from "./MyComponents/Main/Technology/DispatchTasks.jsx";
import ReportsData from "./MyComponents/Main/Technology/ReportsData.jsx";
import Communication from "./MyComponents/Main/Technology/Communication.jsx";
import MobilePatrols from "./MyComponents/Main/Technology/MobilePatrols.jsx";
import OrganisationStructure from "./MyComponents/Main/OrganisationStructure.jsx";
import HarassementPolicy from "./MyComponents/Main/HarassementPolicy";
import Personell from "./MyComponents/Main/Personell";
import StudentHome from "./MyComponents/DashBoard/Student/Home.jsx";
import StudentCalendar from  "./MyComponents/DashBoard/Student/Calendar.jsx";
import StudentCourse from "./MyComponents/DashBoard/Student/PurchaseCourse.jsx";
import StudentTraining from "./MyComponents/DashBoard/Student/Training"
import StudentContact from "./MyComponents/DashBoard/Student/Contact"
import ScrollToTop from "./Functions/ScrollToTop";

import LoginForAdmin from "./MyComponents/DashBoard/Admin/AdminControl/LoginForAdmin";
import AdminHome from "./MyComponents/DashBoard/Admin/Home"
import AdminHomeControls from "./MyComponents/DashBoard/Admin/HomePageControls"
import AdminStatistics from "./MyComponents/DashBoard/Admin/Statistics"
import AdminCourseControl from "./MyComponents/DashBoard/Admin/CourseControl"
import AdminContactControl from "./MyComponents/DashBoard/Admin/ContactFormMessages"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <switch>
          <Route path="/react" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/jobs" exact component={Jobs} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signup" component={SignUp} />
          <Route path="/training" component={Training} />
          <Route path="/services" component={Services} />
          <Route path="/technology" component={Technology} />

          <Route path="/incidentreporting" component={IncidentReporting} />
          <Route path="/tours&checkpoints" component={ToursCheckpoints} />
          <Route path="/dispatch&tasks" component={DispatchTasks} />
          <Route path="/reports&data" component={ReportsData} />
          <Route path="/communication" component={Communication} />
          <Route path="/mobilepatrols" component={MobilePatrols} />
          <Route path="/organisationstructure" component={OrganisationStructure}/>
          <Route path="/harassementpolicy" component={HarassementPolicy} />
          <Route path="/personell" component={Personell} />
          
          <StudentRoutes path="/dashboard/student/home" component={StudentHome} />
          <StudentRoutes path="/dashboard/student/calendar" component={StudentCalendar} />
          <StudentRoutes path="/dashboard/student/training" component={StudentTraining} />
          <StudentRoutes path="/dashboard/student/course" component={StudentCourse} />
          <StudentRoutes path="/dashboard/student/contact" component={StudentContact} />

          <Route path="/dashboard/admin/login" component={LoginForAdmin} /> 
          <AdminRoute path="/dashboard/admin/home" component={AdminHome} />
          <AdminRoute path="/dashboard/admin/homecontrols" component={AdminHomeControls} />
          <AdminRoute path="/dashboard/admin/statistics" component={AdminStatistics} />
          <AdminRoute path="/dashboard/admin/coursecontrol" component={AdminCourseControl} />
          <AdminRoute path="/dashboard/admin/contactformmessages" component={AdminContactControl} />

        </switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
