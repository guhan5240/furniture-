import { HomePage } from "./pages/HomePage"

import "./App.css";
import "./home2.css";
import "./footer.css";
import "./product.css";
import "./about.css";
import { NavBar } from "./pages/NavBar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Product } from "./pages/Product";
import {Sliderpage} from "./pages/Sliderpage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  

  return (
    <Router>
     <NavBar/>
      <Routes>
      <Route exact path="/"element={<HomePage/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/slide" element={<Sliderpage/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact"element={<Contact/>}/>
    
    </Routes>
    </Router>
    
    
  )
}

export default App
