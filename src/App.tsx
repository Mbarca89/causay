import { Routes, Route, Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Landing from "./views/Landing/Landig"
import Footer from "./components/Footer/Footer"
import Pilars from "./views/Institution/Pilars/Pilars"
import Levels from "./views/Levels/Levels"
import './App.css'
import { useEffect, useRef, useState } from "react"

function App() {

  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const location = useLocation();

  return (
    <div className="App d-flex flex-column position-relative">
      <Routes>
        <Route element={(
          <>
            <NavBar />
            <div style={{ marginTop: location.pathname != "/" ? "110px" : 0 }}>
              <Outlet />
              <Footer />
            </div>
          </>
        )}>
          <Route path="/" element={<Landing />} />
          <Route path="/niveles" element={<Levels />} />
          <Route path="/institucional/pilares" element={<Pilars />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
