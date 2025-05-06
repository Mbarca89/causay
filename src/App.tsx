import { Routes, Route, Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Landing from "./views/Landing/Landig"
import Footer from "./components/Footer/Footer"


import './App.css'
import { lazy, Suspense } from "react"
import ScrollToTop from "./utils/ScrollToTop"

const PedagogyView = lazy(() => import("./views/Institution/PedagogyView/PedagogyView"))
const Levels = lazy(() => import("./views/Levels/Levels"))
const Pilars = lazy(() => import("./views/Institution/Pilars/Pilars"))
const Norm = lazy(() => import("./views/Institution/Norm/Norm"))
const Institution = lazy(() => import("./views/Institution/Institution"))
const Starting = lazy(() => import("./views/Levels/Starting/Starting"))
const Primary = lazy(() => import("./views/Levels/Primary/Primary"))
const Secondary = lazy(() => import("./views/Levels/Secondary/Secondary"))
const ServicesView = lazy(() => import("./views/ServicesView/ServicesView"))
const Workshops = lazy(() => import("./views/Workshops/Workshops"))
const Pricing = lazy(() => import("./views/Pricing/Pricing"))
const FacilitiesView = lazy(() => import("./views/FacilitiesView/FacilitiesView"))
const Scholarship = lazy(() => import("./views/Scholarship/Scholarship"))
const Contact = lazy(() => import("./views/Contact/Contact"))

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route element={(
          <>
            <NavBar />
            <div className="Content" style={{ marginTop: location.pathname != "/" ? "110px" : 0 }}>
              <Suspense>
                <Outlet />
              </Suspense>
            </div>
            <Footer />
          </>
        )}>
          <Route path="/" element={<Landing />} />
          <Route path="/niveles" element={<Levels />} />
          <Route path="/niveles/inicial" element={<Starting />} />
          <Route path="/niveles/primaria" element={<Primary />} />
          <Route path="/niveles/secundaria" element={<Secondary />} />
          <Route path="/institucional" element={<Institution />} />
          <Route path="/institucional/pilares" element={<Pilars />} />
          <Route path="/institucional/propuesta" element={<PedagogyView />} />
          <Route path="/institucional/normativa" element={<Norm />} />
          <Route path="/servicios" element={<ServicesView />} />
          <Route path="/talleres" element={<Workshops />} />
          <Route path="/aranceles" element={<Pricing />} />
          <Route path="/instalaciones" element={<FacilitiesView />} />
          <Route path="/becas" element={<Scholarship />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
