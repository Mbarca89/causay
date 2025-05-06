import React from 'react';
import { BookOpen, FlaskRoundIcon as Flask, Leaf, Brain, Users, Cpu, Globe, LightbulbIcon } from "lucide-react"
import { Card, CardContent } from '@/components/ui/card';

const Secondary: React.FC = () => {


    const objectives = [
        {
            id: 1,
            text: "Adquirir significativamente los saberes y conocimientos que le permitan comprender y valorar, a través de las distintas áreas y disciplinas, el conocimiento de sí mismo en su dimensión psicosomática, del medio físico y del medio histórico-social.",
            category: "Conocimiento",
            icon: <BookOpen className="h-5 w-5" />,
        },
        {
            id: 2,
            text: "Observar, clasificar y relacionar datos, formular hipótesis, aplicar principios y leyes, hacer contrastaciones empíricas, así como saber utilizar los procedimientos demostrativos propios de la ciencia.",
            category: "Pensamiento Científico",
            icon: <Flask className="h-5 w-5" />,
        },
        {
            id: 3,
            text: "Conocer las principales estrategias para la conservación, preservación y protección de los recursos naturales incorporando herramientas de planificación y prevención que fundamenten un uso sustentable de los recursos.",
            category: "Medio Ambiente",
            icon: <Leaf className="h-5 w-5" />,
        },
        {
            id: 4,
            text: "Desarrollar una personalidad equilibrada y autónoma que le permita afrontar con esfuerzo y espíritu de superación las dificultades de su propio proceso madurativo.",
            category: "Desarrollo Personal",
            icon: <Brain className="h-5 w-5" />,
        },
        {
            id: 5,
            text: "Analizar los mecanismos y valores que rigen el funcionamiento de las sociedades, de manera de lograr una voluntad comprometida con el bien común para el uso responsable de la libertad y para adoptar comportamientos sociales de contenido ético en el plano individual, familiar, laboral y comunitario.",
            category: "Responsabilidad Social",
            icon: <Users className="h-5 w-5" />,
        },
        {
            id: 6,
            text: "Reconocer la importancia del desarrollo tecnológico y manifestar actitudes, valores y conocimientos que le permitan evaluar el uso de tecnologías desde el punto de vista ambiental, social y económico.",
            category: "Tecnología",
            icon: <Cpu className="h-5 w-5" />,
        },
        {
            id: 7,
            text: "Lograr una inserción positiva en la sociedad, mediante el conocimiento y respeto de las normas de comportamiento social y mediante la asunción personal de valores morales (responsabilidad, solidaridad, respeto a los diversos pluralismos, espíritu crítico)",
            category: "Responsabilidad Social",
            icon: <Users className="h-5 w-5" />,
        },
        {
            id: 8,
            text: "Conocer algunos acontecimientos de la historia de los ambientes naturales y las sociedades humanas desde el punto de vista ecológico, que han determinado la posibilidad de evolución o la extinción de especies y ecosistemas, para poder tomar decisiones responsables en cuanto al uso de los recursos del planeta.",
            category: "Medio Ambiente",
            icon: <Leaf className="h-5 w-5" />,
        },
        {
            id: 9,
            text: "Identificar diferentes concepciones de la ciencia con el fin de discernir o anticipar la actitud de los hombres y mujeres de ciencia frente a los problemas que tratan de solucionar.",
            category: "Pensamiento Científico",
            icon: <Flask className="h-5 w-5" />,
        },
        {
            id: 10,
            text: "Obtener y seleccionar información, tratarla de forma autónoma y crítica con una finalidad previamente establecida y transmitirla a los demás de manera organizada e inteligible.",
            category: "Pensamiento Crítico",
            icon: <LightbulbIcon className="h-5 w-5" />,
        },
        {
            id: 11,
            text: "Comprender, interpretar y utilizar con propiedad, autonomía y creatividad los códigos lingüísticos – tanto de la lengua materna como la inglesa- , así como aquellos códigos simbólicos (científicos, artísticos, tecnológicos) propios de las distintas áreas del saber.",
            category: "Conocimiento",
            icon: <BookOpen className="h-5 w-5" />,
        },
        {
            id: 12,
            text: "Desarrollar una cultura de la calidad y la responsabilidad personal frente al trabajo como instrumento de realización personal, de integración en la vida productiva y de desarrollo sostenido de la comunidad.",
            category: "Desarrollo Personal",
            icon: <Brain className="h-5 w-5" />,
        },
        {
            id: 13,
            text: "Relacionarse con otras personas y participar en trabajos de grupo con actividades solidarias y tolerantes, reconociendo y valorando críticamente las diferencias de tipo social y rechazando cualquier tipo de discriminación basada en diferencias de raza, sexo, creencias, clase social y otras características individuales y sociales.",
            category: "Responsabilidad Social",
            icon: <Users className="h-5 w-5" />,
        },
        {
            id: 14,
            text: "Conocer y apreciar el patrimonio cultural, las creencias, actitudes y valores básicos de nuestra tradición, valorarlos críticamente y elegir aquellas opciones que mejor favorezcan a su desarrollo integral.",
            category: "Cultura",
            icon: <Globe className="h-5 w-5" />,
        },
        {
            id: 15,
            text: "Asumir una actitud reflexiva pero crítica frente a las metodologías o problemáticas científicas que se dan a conocer por los medios masivos de divulgación de la ciencia.",
            category: "Pensamiento Crítico",
            icon: <LightbulbIcon className="h-5 w-5" />,
        },
        {
            id: 16,
            text: "Discernir la multiplicidad de los factores que afectan a las problemáticas ecológicas actuales: de índole biológica, social, política y económica, entre otros",
            category: "Medio Ambiente",
            icon: <Leaf className="h-5 w-5" />,
        },
    ]

    return (
        <div className='container d-flex flex-column'>
            <div className='d-flex flex-column border-b border-green-500 pb-3'>
                <div className='w-100 w-lg-50'>
                    <h1>Educación Secundaria</h1>
                    <p className='text-secondary text-center'>Nuestra propuesta pedagógica garantiza las tres funciones de la Educación Secundaria: la formación del ciudadano/a, la preparación para proseguir estudios superiores y la formación para desempeñar actividades laborales.
                        Se divide en dos (2) ciclos: un (1) Ciclo Básico, de carácter común a todas las orientaciones y un (1) Ciclo Orientado, de carácter diversificado según distintas áreas del conocimiento, del mundo social y del trabajo.
                    </p>
                </div>
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <picture>
                        <source className='rounded' media="(min-width: 769px)" srcSet="/images/levels/3w.jpg" />
                        <img className='rounded' src="/images/levels/3.jpg" alt="" />
                    </picture>
                </div>
            </div>
            <div className='mt-3 border-b border-green-500 pb-3'>
                <h2 className='text-center'>Orientaciones</h2>
                <p className='text-secondary text-center'>Nuestros Alumnos pueden optar entre dos orientaciones, sin embargo, nos proponemos jerarquizar las materias de fundamento, esenciales en el aprendizaje de niveles superiores y para el desarrollo integral del estudiante, como así también las habilidades blandas, esenciales para el adecuado desempeño laboral.</p>
                <div className='d-grid md:grid-cols-2 gap-2'>
                    <div className='bg-light rounded shadow-sm p-2'>
                        <h3 className='text-center'>Orientación en Economía y Administración</h3>
                        <p className='text-secondary'>La elección de la orientación “Economía y Administración” para la Educación Secundaria, tiene por objetivo dotar al estudiante de conocimientos que le permitan insertarse en la sociedad y poder interactuar en ella, cualquiera sea la actividad profesional que elijan, con un conocimiento acabado de lo que es el comportamiento organizacional y sus elementos constitutivos.</p>
                        <p className='text-secondary'>Podemos decir, sin temor a equivocarnos, que toda actividad humana se lleva a cabo en y con organizaciones.
                            Por lo tanto, las competencias que desarrolla esta modalidad, se focalizan en los campos del saber y del hacer asociados a las Ciencias Económicas y Sociales, a la Gestión y Administración de Organizaciones y a los Sistemas de Información como base para la toma de decisiones, y son aplicables a cualquier microemprendimiento, o a la gestión de organizaciones industriales, comerciales o servicios (como el Turismo), agropecuarias, extractivas o a la administración pública.
                        </p>
                    </div>
                    <div className='bg-light rounded shadow-sm p-2'>
                        <h4 className='text-center'>Orientación en Ciencias Naturales</h4>
                        <p className='text-secondary'>En esta orientación la centralidad que hoy ocupa la ciencia es la producción y su vinculación con las problemáticas del ambiente y la salud que abren un amplio campo de inserciones laborales posibles. Una formación científica con anclajes fuertes en los problemas de la producción, el ambiente y la salud, ofrecerá así una base apropiada para un mundo de trabajo en el cual estas cuestiones tienen alta relevancia.</p>
                        <p className='text-secondary'>Desde esta modalidad de Ciencias Naturales se procurará la formación de personas con capacidad para comprender e interpretar los procesos de la naturaleza y la interacción del ser humano con ella, apuntando al mejoramiento del medio ambiente.</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto p-6 border-b border-green-500 pb-3">
                <h2 className="text-3xl font-light mb-8 text-center">Objetivos</h2>
                <p className="text-lg mb-8 text-center text-muted-foreground">
                    Al finalizar este Nivel se espera que el alumno logre:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                    {objectives.map((objective) => (
                        <Card key={objective.id} className="overflow-hidden transition-all hover:shadow-md">
                            <CardContent className="p-4 flex gap-4">
                                <div className="mt-1 p-2 rounded-full flex items-center justify-center text-green-500">{objective.icon}</div>
                                <div>
                                    <p className="text-sm">{objective.text}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='mt-3 mb-5'>
                <h2 className='text-center'>Convenio con la Universidad Nacional de San Luis – UNSL</h2>
                <div className='d-flex flex-column flex-lg-row gap-2'>
                    <div className='w-100 w-lg-50 d-flex justify-content-center align-items-center'>
                        <img src="/images/levels/unsl.png" alt="" />
                    </div>
                    <div className='w-100 w-lg-50 d-flex flex-column justify-content-center'>
                        <p>En febrero del 2020 Causay firmó con la Universidad Nacional de San Luis un convenio de cooperación mutua e intercambio recíproco, de información científica, tecnológica, desarrollo de nuevos conocimientos, creación y aplicación de nuevas tecnologías y emprendimientos en todos los campos en que desarrollan sus actividades.</p>
                        <p>Las acciones que se desarrollen en el marco de este convenio articulará y facilitará la transición de los egresados de Causay y la universidad.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secondary;