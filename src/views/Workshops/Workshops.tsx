import React from 'react';
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Workshops: React.FC = () => {

    const objectives = [
        "Fortalecer la motricidad.",
        "Desarrollar habilidades cognitivas, emocionales y sociales.",
        "Fomentar la imaginación y la capacidad de innovar.",
        "Aumentar la concentración y paciencia.",
        "Generar competencias técnico tácticas para desarrollar niveles de juego colectivo progresivamente.",
        "Valorar el trabajo en equipo y colaboración.",
        "Promover el cumplimiento de normas de cortesía, logrando una convivencia cordial.",
    ]

    const workshops = [
        {
            name: "ACROBACIA EN TELAS",
            image: "/images/workshops/telas.jpg",
            alt: "Acrobacia en telas - persona realizando acrobacias en telas aéreas",
        },
        {
            name: "AJEDREZ",
            image: "/images/workshops/ajedrez.jpg",
            alt: "Ajedrez - tablero de ajedrez con piezas",
        },
        {
            name: "BAILE",
            image: "/images/workshops/baile.jpg",
            alt: "Baile - personas bailando en un estudio",
        },
        {
            name: "FOLKLORE",
            image: "/images/workshops/folklore.jpg",
            alt: "Folklore - bailarines de danzas tradicionales",
        },
        {
            name: "FUTBOL",
            image: "/images/workshops/futbol.webp",
            alt: "Fútbol - niños jugando al fútbol",
        },
        {
            name: "PATINAJE EN LÍNEA",
            image: "/images/workshops/patinajeL.webp",
            alt: "Patinaje en línea - persona patinando",
        },
        {
            name: "PATINAJE ARTÍSTICO",
            image: "/images/workshops/patinajeA.webp",
            alt: "Patinaje artístico - patinador realizando una figura",
        },
        {
            name: "TAEKWONDO",
            image: "/images/workshops/taekwondo.jpg",
            alt: "Taekwondo - practicantes de taekwondo en acción",
        },
        {
            name: "YOGA",
            image: "/images/workshops/yoga.jpg",
            alt: "Yoga - persona practicando yoga",
        },
    ]

    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-12 border-b border-green-500">
                <h1 className="text-3xl font-light mb-4">Talleres</h1>
                <p className="text-muted-foreground mx-auto">
                    Los Talleres son el espacio que Causay destina para realizar actividades placenteras que desarrollen
                    habilidades y destrezas. Convirtiéndose además en un canal de expresión a través del cual se estimula el
                    sentido crítico y estético, afianzando la autoconfianza, despertando la imaginación y la creatividad, e
                    incentivando actitudes solidarias. Logrando de esta manera un adecuado empleo del tiempo libre y un
                    complemento ideal para el enriquecimiento de la educación formal.
                </p>
            </div>
            <div className='border-b border-green-500'>

                <div className="mb-6 bg-muted/50 p-6 rounded-lg">
                    <h2 className="mb-4 text-center">Objetivos generales</h2>
                    <ul className="grid gap-2 md:grid-cols-2">
                        {objectives.map((objective, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{objective}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="text-center mt-3">
                Esta propuesta no sólo abarca a los alumnos de Causay, sino a su comunidad educativa y también al público en
                general.
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-medium mb-6 text-center">Oferta 2025</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {workshops.map((workshop, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={workshop.image || "/placeholder.svg"}
                                    alt={workshop.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-4">
                                <h4 className="font-medium text-center">{workshop.name}</h4>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workshops;