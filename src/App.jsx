import { HomePage } from "./pages/HomePage"

import "./App.css";
import "./home2.css";
import { NavBar } from "./pages/NavBar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {
  

  return (
    <Router>
     <NavBar/>
      <Routes>
      <Route exact path="/"element={<HomePage/>}/>
    
    </Routes>
    </Router>
    
    
  )
}

export default App
