import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Globe, Users, BookOpen, Calculator, Laptop, Palette, Compass } from "lucide-react"
import React from 'react';

const Primary: React.FC = () => {

    const competencies = [
        {
            title: "COMPETENCIA EN COMUNICACIÓN LINGÜÍSTICA",
            description: "Utilizando el lenguaje como instrumento para:",
            icon: <MessageCircle className="h-6 w-6" />,
            points: [
                "La comunicación oral y escrita.",
                "La comprensión de la realidad.",
                "La construcción del conocimiento.",
                "La regulación de conductas y emociones.",
            ],
        },
        {
            title: "COMPETENCIA EN EL CONOCIMIENTO Y LA INTERACCIÓN CON EL MUNDO FÍSICO",
            description:
                "Adquiriendo habilidad para interactuar con el mundo físico, en sus aspectos naturales y en los generados por la acción humana para:",
            icon: <Globe className="h-6 w-6" />,
            points: [
                "Facilitar la comprensión de sucesos.",
                "Facilitar la predicción de consecuencias.",
                "Favorecer el desarrollo de actividades dirigidas a la mejora de las condiciones de vida.",
            ],
        },
        {
            title: "COMPETENCIA SOCIAL Y CIUDADANA",
            description:
                "Comportándose individualmente de manera que sea posible convivir en una sociedad cada vez más plural.",
            icon: <Users className="h-6 w-6" />,
            points: ["Participar plenamente en la vida cívica.", "Comprender la realidad social del mundo en que vive."],
        },
        {
            title: "COMPETENCIA PARA APRENDER A APRENDER",
            description: "",
            icon: <BookOpen className="h-6 w-6" />,
            points: [
                "Iniciándose en el aprendizaje y siendo capaz de continuarlo de manera autónoma.",
                "Incorporando y sosteniendo el esfuerzo y los recursos para evaluar el proceso que le permita alcanzar las metas propuestas.",
                "Desenvolverse como un buscador permanente de diversas respuestas ante un mismo problema.",
                "Reconociendo el error como parte del proceso y generador de nuevos aprendizajes.",
                "Utilizando las técnicas de estudio como recursos que fortalecen el abordaje a los textos.",
            ],
        },
        {
            title: "COMPETENCIA MATEMÁTICA",
            description:
                "Adquiriendo habilidad para utilizar los números y sus operaciones básicas, los símbolos y las formas de expresión y razonamiento matemático para:",
            icon: <Calculator className="h-6 w-6" />,
            points: [
                "Producir e interpretar informaciones.",
                "Conocer más sobre aspectos cuantitativos y espaciales de la realidad.",
                "Resolver problemas relacionados con la vida diaria.",
            ],
        },
        {
            title: "TRATAMIENTO DE LA INFORMACIÓN Y COMPETENCIA DIGITAL",
            description: "Habilidad para buscar, obtener, procesar y comunicar la información para:",
            icon: <Laptop className="h-6 w-6" />,
            points: [
                "Transformar la información en conocimiento (incluye el uso de las Tecnologías de la Información y Comunicación como generadoras y transmisoras de conocimiento y comunicación)",
            ],
        },
        {
            title: "COMPETENCIA CULTURAL Y ARTÍSTICA",
            description: "",
            icon: <Palette className="h-6 w-6" />,
            points: [
                "Apreciando y comprendiendo diferentes manifestaciones culturales y artísticas, utilizándolas como fuente de enriquecimiento personal y considerándolas parte del patrimonio cultural.",
                "Apreciando la expresión de ideas, experiencias o sentimientos de forma creativa.",
                "Expresándose mediante códigos artísticos.",
            ],
        },
        {
            title: "COMPETENCIA AUTONOMÍA E INICIATIVA PERSONAL",
            description: "",
            icon: <Compass className="h-6 w-6" />,
            points: [
                "Optando con criterio propio y llevando adelante las iniciativas necesarias para desarrollar la opción elegida haciéndose responsable de ella.",
                "Transformando las ideas en &quot;actos&quot;.",
            ],
        },
    ]

    return (
        <div className='container d-flex flex-column'>
            <div className='d-flex flex-column flex-lg-row'>
                <div className='w-100 w-lg-50 text-center text-lg-start'>
                    <h1>Educación Primaria</h1>
                    <p className='text-secondary'>Nuestra jornada extendida (8 a 16,30 h) tiene el propósito de lograr nuevas y mejores condiciones para el logro de los aprendizajes relevantes, ampliando el universo cultural de los niños y brindándoles, a su vez, un espacio de cuidado y protección mientras los padres trabajan.</p>
                    <p className='text-secondary'>Esta unidad académica está organizada en dos ciclos: 1° y 2°.</p>
                    <p className='text-secondary'>Cada ciclo permite considerar la especificidad de los modos de aprendizaje de los alumnos.</p>
                    <p className='text-secondary'>Como estrategias de enseñanza trabajamos para que nuestros alumnos sean activos y participativos, favoreciendo el desarrollo de estrategias que les permita la resolución de situaciones problemáticas y llegar así a descubrir, incorporar o establecer uno o más conceptos.</p>
                    
                </div>
                <div className='w-100 w-lg-50'>
                    <img className='rounded' src="/images/levels/2.jpg" alt="" />
                </div>
            </div>
            <div className='border-b border-green-500'>
                <p className='text-secondary'>Es nuestro desafío el uso del error como motor para probar, ensayar y/o explorar otros caminos que les servirán para que sus producciones sean cada vez más complejas.</p>
                <p className='text-secondary'>A lo largo de su escolaridad, el alumno desarrolla capacidades a través de conocimientos, valores, actitudes y habilidades que lo ayudan a descubrir sus posibilidades y sus limitaciones, buscando nuevos caminos para superarse.</p>

            </div>
            <div className="max-w-5xl mx-auto p-6">
                <p className="text-lg mb-8 text-center">
                    En la Educación Primaria trabajamos para que los alumnos/as desarrollen:
                </p>

                <div className="grid gap-6 mb-5">
                    {competencies.map((competency, index) => (
                        <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-3">
                                    <div className="text-green-500">{competency.icon}</div>
                                    <CardTitle className="text-base font-medium">{competency.title}</CardTitle>
                                </div>
                                {competency.description && <p className="text-sm text-muted-foreground mt-2">{competency.description}</p>}
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-6 space-y-1">
                                    {competency.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="text-sm">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Primary;