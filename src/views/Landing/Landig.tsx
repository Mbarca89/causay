import Home from "../../components/Home/Home"
import Pedadogy from "../../components/Pedagogy/Pedagogy"
import Facilities from "../../components/Facilities/Facilities"
import NewsCarousel from "@/components/NewsCarousel/NewsCarousel"

const Landing = () => {
    return (
        <>
            <div className="">
                <Home></Home>
                <NewsCarousel></NewsCarousel>
                <Pedadogy></Pedadogy>
                {/* <svg className="rotate-180 w-100 relative mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#05AE01" preserveAspectRatio="none">
                    <path d="M1000 90C500 100 500 64 0 64V0h1000v100Z" opacity=".5" className="shape-fill"></path>
                    <path d="M1000 90C500 100 500 34 0 34V0h1000v100Z" opacity=".5" className="shape-fill"></path>
                    <path d="M1000 90C500 100 500 4 0 4V0h1000v100Z" className="shape-fill"></path></g>
                </svg> */}
                <Facilities></Facilities>
            </div>
        </>
    )
}

export default Landing