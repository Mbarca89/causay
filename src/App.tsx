import { Routes, Route, Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Landing from "./views/Landing/Landig"
import Footer from "./components/Footer/Footer"


import './App.css'
import { lazy, Suspense, useEffect, useRef, useState } from "react"

const PedagogyView = lazy(() => import("./views/Institution/PedagogyView/PedagogyView"))
const Levels = lazy(() => import("./views/Levels/Levels"))
const Pilars = lazy(() => import("./views/Institution/Pilars/Pilars"))


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
            <Suspense>
              <div style={{ marginTop: location.pathname != "/" ? "110px" : 0 }}>
                <Outlet />
                <Footer />
              </div>
            </Suspense>
          </>
        )}>
          <Route path="/" element={<Landing />} />
          <Route path="/niveles" element={<Levels />} />
          <Route path="/institucional/pilares" element={<Pilars />} />
          <Route path="/institucional/propuesta" element={<PedagogyView />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
