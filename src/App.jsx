import "./App.css";
import Testimonials from "./components/Testimonials/testimonials";
import Profile from "./components/Home/profile";
import AboutUs from "./components/AboutUs/aboutUs";
import Services from "./components/services/services";
import ContactUs from "./components/ContactUs/contactUs";

function App() {
  return (
    <div className="App">
      
      <Profile />
      <Services />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
