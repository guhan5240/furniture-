import { HomePage } from "./pages/HomePage"

import "./App.css";
import "./home2.css";
import "./footer.css";
import "./product.css";
import { NavBar } from "./pages/NavBar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Product } from "./pages/Product";

function App() {
  

  return (
    <Router>
     <NavBar/>
      <Routes>
      <Route exact path="/"element={<HomePage/>}/>
      <Route excat path="/product" element={<Product/>}/>
    
    </Routes>
    </Router>
    
    
  )
}

export default App
