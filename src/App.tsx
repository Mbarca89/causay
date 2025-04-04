import { Routes, Route, Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Landing from "./views/Landing/Landig"
import Footer from "./components/Footer/Footer"
import './App.css'

function App() {

  return (
    <div className="App d-flex flex-column position-relative">
      <Routes>
        <Route element={(
          <>
            <NavBar />
            <Outlet />
            <Footer></Footer>
          </>
        )}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
