import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./views/Home/Home"
import './App.css'

function App() {

  return (
    <div className="App align-items-center d-flex flex-column">
      <Routes>
        <Route element={(
          <>
            <NavBar />
              <Outlet />
          </>
        )}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
