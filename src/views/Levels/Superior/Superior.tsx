import React from 'react';
import { Calendar, Clock, Users, BookOpen, DollarSign, Mail, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge, Button } from 'react-bootstrap';


const Superior: React.FC = () => {

    const modules = [
        {
            title: "Inmersión en IA",
            description: "Conceptos básicos, usos y desafíos éticos.",
        },
        {
            title: "Educar en tiempos de IA",
            description: "Alfabetización digital y ciudadanía crítica.",
        },
        {
            title: "Diseño de tareas con IA",
            description: "Rediseño pedagógico, secuencias y evaluación.",
        },
        {
            title: "Crear con IA",
            description: "Proyectos educativos con herramientas generativas.",
        },
        {
            title: "Diseñar con IA",
            description: "Planificación, recursos didácticos y evaluación innovadora.",
        },
    ]

    const requirements = [
        "Título docente",
        "Título habilitante para el ejercicio de la docencia",
        "Certificación de regularidad de estudios en curso",
    ]

    const moduleIncludes = [
        "Material de lectura y recursos audiovisuales",
        "Actividades de análisis y de producción individual y/o grupal",
        "Foros de intercambio con docentes y pares",
    ]

    return (
        <div className='container d-flex flex-column'>
            <div className='d-flex flex-column border-b border-green-500 pb-3'>
                <div className='w-100 w-lg-50'>
                    <h1 className='text-center'>Educación Superior</h1>
                    <p className='text-secondary text-center'>A través de la Educación Superior nos proponemos ofrecer propuestas orientadas a la formación continua, la actualización profesional y la capacitación de calidad, dando respuesta a las demandas sociales y laborales actuales.
                    </p>
                    <p className='text-secondary text-center'>
                        La característica que nos distingue es la aplicabilidad practica de cada propuesta.
                    </p>
                    <p className='text-secondary text-center'>
                        Cada postítulo, diplomatura, o programa de formación es concebido como una herramienta útil, actualizada y significativa.
                    </p>
                </div>

            </div>
            <div className='mt-3 pb-3'>

                <div className=''>
                    <h2 className='text-center'>Oferta 2026</h2>
                    <h3 className='fs-5 text-center'>ACTUALIZACIÓN ACADÉMICA EN INTELIGENCIA ARTIFICIAL APLICADA A LA EDUCACIÓN. NIVEL I </h3>
                    <p className='fw-bold text-center bg-muted rounded-lg'>CERTIFICACIÓN OFICIAL CON VALIDEZ MINISTERIAL -RESOLUCIÓN Nº 339-SDCDYFP-2025.-</p>
                    <p className='text-center'>En un contexto de transformación digital acelerada, la inteligencia artificial (ia) impacta de manera significativa en la educación. este postítulo responde a la necesidad de formar docentes capaces de integrar y problematizar críticamente la ia en susprácticas pedagógicas, promoviendo la equidad, la creatividady una ciudadanía digital activa.</p>
                    <div className='d-flex align-items-center justify-content-center w-100 mb-3'>
                        <picture>
                            <source className='rounded' media="(min-width: 769px)" srcSet="/images/levels/superior2.webp" />
                            <img className='rounded' src="/images/levels/superior2.webp" alt="" />
                        </picture>
                    </div>
                    <div className="grid gap-6 mb-8">
                        {/* Course Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-green-500" />
                                    Información General
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">
                                            <strong>Duración:</strong> 4 meses (200 horas reloj)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">
                                            <strong>Inicio:</strong> Sábado 8 de marzo de 2026
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-green-500" />
                                    <span className="text-sm">
                                        <strong>Horario:</strong> 8:30 a 13:30 hs.
                                    </span>
                                </div>
                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <p className="text-sm">
                                        <strong>Modalidad:</strong> La cursada combinará encuentros presenciales, instancias sincrónicas
                                        virtuales y actividades asincrónicas.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Requirements */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    Requisitos de Admisión
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm ">{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Modules */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-green-500" />
                                    Cinco Módulos
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {modules.map((module, index) => (
                                        <div key={index}>
                                            <div className="flex items-start gap-3">
                                                <Badge bg='success' className="mt-0.5 text-green-500">
                                                    {index + 1}
                                                </Badge>
                                                <div>
                                                    <h4 className="font-medium">{module.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{module.description}</p>
                                                </div>
                                            </div>
                                            {index < modules.length - 1 && <hr className="my-4" />}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 bg-muted/50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Cada módulo incluirá:</h4>
                                    <ul className="space-y-1">
                                        {moduleIncludes.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                        {/* Pricing */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <DollarSign className="h-5 w-5 text-green-500" />
                                    Aranceles
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="text-center p-4 border rounded-lg">
                                        <h4 className="font-medium mb-2">Cuota Mensual</h4>
                                        <p className="text-2xl font-bold">$80.000</p>
                                    </div>
                                    <div className="text-center p-4 border rounded-lg bg-primary/5">
                                        <h4 className="font-medium mb-2">Pago Total Anticipado</h4>
                                        <p className="text-2xl font-bold text-green-500">$300.000</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <Badge bg='success'>Bonificación de matrícula hasta el 15/12/2025</Badge>
                                </div>
                            </CardContent>
                        </Card>
                        {/* Contact and Registration */}
                        <Card className='mb-3'>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-green-500" />
                                    Inscripción e Informes
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-green-500" />
                                    <span className="text-sm">
                                        <strong>Informes:</strong>{" "}
                                        <a href="mailto:info@causay.edu.ar" className="text-green-500 hover:underline">
                                            info@causay.edu.ar
                                        </a>
                                    </span>
                                </div>

                                <div className="d-flex flex-column flex-md-row align-items-center gap-3 justify-content-center">
                                    <Button aria-label='Formulario de preinscripción' className="gap-2" variant='success'>
                                        <a className='text-light flex flex-row align-items-center gap-2' href="https://forms.gle/GaGWvwXR3GaPHL4n7" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4" />
                                            Formulario de Preinscripción
                                        </a>
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-muted-foreground p-3 rounded-lg">
                                    Formalizar la inscripción a partir del mes de noviembre
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Superior;