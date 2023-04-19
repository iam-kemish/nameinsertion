import Dashboard from "./Components/Dashboard"
import Recommendations from "./Components/Recommendations"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from "./Context/Usecn"
import { useState } from "react"

function App() {
  const[user, setUser] = useState("kemish")
  return (
   
   <BrowserRouter>
  <UserContext.Provider value={[user, setUser]}>
   
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/recommendations" element={<Recommendations/>}/>
   </Routes>
  </UserContext.Provider>
   </BrowserRouter>
  )
}

export default App
