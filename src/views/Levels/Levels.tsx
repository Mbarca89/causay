import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Levels = () => {

    const navigate = useNavigate()

    return (
        <section className="mb-5">
            <div className="container px-4 md:px-6">
                <h1 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Niveles Educativos
                </h1>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl">
                        <div className="relative z-10 p-6 md:p-8 flex flex-column align-items-start justify-content-between h-100">
                            <div className="mb-4 inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                                <span>Nivel Inicial</span>
                            </div>
                            <div className="mb-6 grid gap-6 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900">
                                        Primeros pasos en el aprendizaje
                                    </h3>
                                    <p className="mb-6 text-gray-700">
                                        Acompañamos a los niños en sus primeros años de formación, desarrollando habilidades sociales,
                                        emocionales y cognitivas en un ambiente cálido y estimulante.
                                    </p>
                                    <ul className="mb-6 space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Ludoteca de 8:00 a 16:50 hs.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Salas de 3, 4 y 5 años de 8:10 a 12:50 hs.</span>
                                        </li>
                                    </ul>
                                    <Button onClick={()=>navigate("/niveles/inicial")} variant="success" className="group bg-teal-600 hover:bg-teal-700 d-flex align-items-center">
                                        Conocer más
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl">
                        <div className="relative z-10 p-6 md:p-8 flex flex-column align-items-start justify-content-between h-100">
                            <div className="mb-4 inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                                <span>Nivel Primario</span>
                            </div>
                            <div className="mb-6 grid gap-6 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900">
                                        Construyendo bases sólidas
                                    </h3>
                                    <p className="mb-6 text-gray-700">
                                        Formamos a los estudiantes con una sólida base académica y valores, desarrollando habilidades
                                        fundamentales para su crecimiento personal y académico.
                                    </p>
                                    <ul className="mb-6 space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Educación personalizada</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Jordana extendida de 8:00 a 16:30 hs.</span>
                                        </li>
                                    </ul>
                                    <Button onClick={()=>navigate("/niveles/primaria")} variant="success" className="group bg-teal-600 hover:bg-teal-700 d-flex align-items-center">
                                        Conocer más
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl">
                        <div className="relative z-10 p-6 md:p-8 flex flex-column align-items-start justify-content-between h-100">
                            <div className="mb-4 inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                                <span>Nivel Secundario</span>
                            </div>
                            <div className="mb-6 grid gap-6 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900">
                                        Preparando para el futuro
                                    </h3>
                                    <p className="mb-6 text-gray-700">
                                        Formamos jóvenes preparados para continuar estudios superiores y desempeñarse en el mundo laboral,
                                        con una sólida formación académica y en valores.
                                    </p>
                                    <ul className="mb-6 space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Ciclo Básico.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Ciclo Orientado en Economía y Administración.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Ciclo Orientado en Ciencias Naturales.</span>
                                        </li>
                                    </ul>
                                    <Button onClick={()=>navigate("/niveles/secundaria")} variant="success" className="group bg-teal-600 hover:bg-teal-700 d-flex align-items-center">
                                        Conocer más
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Levels