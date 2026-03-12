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
            name: "Acrobacia en telas",
            image: "/images/workshops/telas.webp",
            alt: "Acrobacia en telas - persona realizando acrobacias en telas aéreas",
            days: "Lunes y Miércoles",
            time: "16:40 - 17:40 hs"
        },
        {
            name: "Ajedrez",
            image: "/images/workshops/ajedrez.webp",
            alt: "Ajedrez - tablero de ajedrez con piezas",
            days: "Martes y Jueves",
            time: "16:40 - 17:40 hs"
        },
        {
            name: "Fútbol",
            image: "/images/workshops/futbol.webp",
            alt: "Fútbol - niños jugando al fútbol",
            days: "Consultar segun edad",
            time: ""
        },
        {
            name: "Patinaje en línea",
            image: "/images/workshops/patinajeL.webp",
            alt: "Patinaje en línea - persona patinando",
            days: "Martes y Jueves",
            time: "16:40 - 17:40 hs"
        },
        {
            name: "Patinaje artístico",
            image: "/images/workshops/patinajeA.webp",
            alt: "Patinaje artístico - patinador realizando una figura",
            days: "Lunes y Miércoles",
            time: "16:40 - 17:40 hs"
        },
        {
            name: "Taekwondo",
            image: "/images/workshops/taekwondo.webp",
            alt: "Taekwondo - practicantes de taekwondo en acción",
            days: "Lunes y Miércoles",
            time: "16:40 - 17:40 hs"
        },
    ]

    const adultWorkshops = [
        {
            name: "Folklore",
            image: "/images/workshops/folklore.webp",
            alt: "Folklore - bailarines de danzas tradicionales",
            days: "Martes y Jueves",
            time: "19:30 - 21:00 hs"
        },
        {
            name: "Gimnasia cognitiva",
            image: "/images/workshops/gym.webp",
            alt: "Fútbol - niños jugando al fútbol",
            days: "Lunes y Viernes",
            time: "10:30 - 11:30 hs"
        },
        {
            name: "Manejo de plataformas digitales",
            image: "/images/workshops/plataformas.webp",
            alt: "Fútbol - niños jugando al fútbol",
            days: "Lunes y Jueves",
            time: "16:40 - 17:40 hs"
        },
        {
            name: "Tejido para principiantes",
            image: "/images/workshops/tejido.webp",
            alt: "Patinaje en línea - persona patinando",
            days: "Lunes y Miercoles",
            time: "17:40 - 18:40 hs"
        },
        {
            name: "Zumba",
            image: "/images/workshops/zumba.webp",
            alt: "Patinaje en línea - persona patinando",
            days: "Martes y Jueves",
            time: "16:40 - 17:40 hs"
        }
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

            <div className="mb-8 border-b border-green-500">
                <h2 className="text-2xl font-medium mb-6 text-center">Oferta 2026</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
                    {workshops.map((workshop, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={workshop.image}
                                    alt={workshop.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-4 gap-4 flex flex-col">
                                <div>
                                    <h4 className="font-medium text-center">{workshop.name}</h4>
                                </div>
                                <div>
                                    <p className='text-center '>{workshop.days}</p>
                                    <p className='text-center text-muted-foreground'>{workshop.time}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-medium mb-6 text-center">Talleres para adultos 2026</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {adultWorkshops.map((workshop, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={workshop.image}
                                    alt={workshop.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-4">
                                <div>
                                    <h5 className="font-medium text-center">{workshop.name}</h5>
                                </div>
                                <div>
                                    <p className='text-center '>{workshop.days}</p>
                                    <p className='text-center text-muted-foreground'>{workshop.time}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workshops;