import Home from "../../components/Home/Home"
import Pedadogy from "../../components/Pedagogy/Pedagogy"

const Landing = () => {
    return (
        <>
            <div className="d-flex flex-column w-100">
                <Home></Home>
                <Pedadogy></Pedadogy>
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#05AE01" preserveAspectRatio="none">
                    <path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5" className="shape-fill"></path>
                    <path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5" className="shape-fill"></path>
                    <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" className="shape-fill"></path></g>
                </svg>
            </div>
        </>
    )
}

export default Landing