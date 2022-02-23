import "./App.css";
import Testimonials from "./components/Testimonials/testimonials";
import Profile from "./components/Home/profile";
import AboutUs from "./components/AboutUs/aboutUs";

function App() {
  return (
    <div className="App">
      
      <Profile />
      <AboutUs />
      <Testimonials />
    </div>
  );
}

export default App;
