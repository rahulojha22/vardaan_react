import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Management from './pages/Management';
import Events from './pages/Events';
import Results from './pages/Results';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/about-us" element={<About/>} />
                <Route exact path="/management" element={<Management/>} />
                <Route exact path="/events" element={<Events/>} />
                <Route exact path="/results" element={<Results/>} />
            </Routes>
            <Footer />
        </Router>
    </>
  );
}

export default App;
