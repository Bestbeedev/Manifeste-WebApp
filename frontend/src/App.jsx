import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Contacts from "./components/Contacts/Contacts"
import APropos from "./components/A Propos/A Propos"
import Enseignements from "./components/Enseignements/Enseignements"
import Predicateurs from "./components/Predicateurs/Predicateurs"
import Activites from "./components/Activites/Activites"
import Login from "./Auth/Login"
import Signup from "./Auth/Signup"
import { useEffect } from "react"
import Welcome from "./Pages/Welcome"

function App() {
  return (
    <div className="">
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/apropos" element={<APropos/>} />
      <Route path="/enseignements" element={<Enseignements/>} />
      <Route path="/predicateurs" element={<Predicateurs/>} />
      <Route path="/activites" element={<Activites/>} />
      <Route path="/" element={<Dashboard/>} />
    </Routes>
    </div>
  )
}

export default App
