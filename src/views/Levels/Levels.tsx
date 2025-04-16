import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "react-bootstrap"

const Levels = () => {
    return (
        <section className="py-16">
            <div className="container px-4 md:px-6">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Niveles Educativos
                </h2>

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
                                            <span>Salas para niños de 3, 4 y 5 años</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Actividades lúdicas y educativas</span>
                                        </li>
                                    </ul>
                                    <Button variant="success" className="group bg-teal-600 hover:bg-teal-700 d-flex align-items-center">
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
                                            <span>Desarrollo de habilidades sociales y académicas</span>
                                        </li>
                                    </ul>
                                    <Button variant="success" className="group bg-teal-600 hover:bg-teal-700 d-flex align-items-center">
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
                                            <span>Ciclo Básico y Ciclo Orientado</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Diversas orientaciones académicas</span>
                                        </li>
                                    </ul>
                                    <Button variant="success" className="group bg-teal-600 hover:bg-teal-700 d-flex align-items-center">
                                        Conocer más
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl">
                        <div className="relative z-10 p-6 md:p-8 flex flex-column align-items-start justify-content-between h-100">
                            <div className="mb-4 inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                                <span>Nivel Superior</span>
                            </div>
                            <div className="mb-6 grid gap-6 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900">
                                        Formando profesionales
                                    </h3>
                                    <p className="mb-6 text-gray-700">
                                        Somos sede provincial de la Universidad Abierta Interamericana Online que ofrece programas universitarios de formación en la modalidad a distancia.
                                    </p>
                                    <ul className="mb-6 space-y-2">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Licenciatura en gestión de las instituciones educativas</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
                                            <span>Analista Programador</span>
                                        </li>
                                    </ul>
                                    <Button variant="success" className="group bg-teal-600 hover:bg-teal-700 d-flex align-items-center">
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