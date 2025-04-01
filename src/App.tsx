import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Landing from "./views/Landing/Landig"
import './App.css'

function App() {

  return (
    <div className="App align-items-center d-flex flex-column position-relative">
      <Routes>
        <Route element={(
          <>
            <NavBar />
              <Outlet />
          </>
        )}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
