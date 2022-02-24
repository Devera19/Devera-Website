import "./App.css";
import Testimonials from "./components/Testimonials/testimonials";
import Profile from "./components/Home/profile";
import AboutUs from "./components/AboutUs/aboutUs";
import Services from "./components/services/services";

function App() {
  return (
    <div className="App">
      
      <Profile />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
