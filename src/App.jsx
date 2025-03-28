import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ManagementTeam from "./pages/ManagementTeam";
import Gallery from "./pages/Gallery";
import Investors from "./pages/Investors";
import CSR from "./pages/CSR";
import Contact from "./pages/Contact";
import IPO from "./pages/IPO";
import PoliciesPage from "./pages/Policies";
import Updates from "./pages/Updates";
import ProjectsPage from "./pages/Projects";
import ServicePage from "./pages/Services";
import ProductPage from "./pages/Products";
import CSRSection from "./pages/CSR";
import MarqueeNews from "./Landing/Marquee";



const App = () => {
  return (
    <Router> {/* Ensure Router is wrapping everything */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
          <Route path="*" element={<Home/>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management-team" element={<ManagementTeam />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/investors/IPO" element={<IPO />} />
            <Route path="/investors/polices" element={<PoliciesPage/>} />
            <Route path="/investors/latestupdates" element={<Updates/>} />
            <Route path="/solutions/projects" element={<ProjectsPage/>} />
            <Route path="/solutions/services" element={<ServicePage/>} />
            <Route path="/solutions/products" element={<ProductPage/>} />
            <Route path="/csr" element={<CSRSection/>} />
            
          </Routes>
        
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
