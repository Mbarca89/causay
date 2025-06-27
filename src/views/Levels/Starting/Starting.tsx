import React from 'react';
import { BookOpen, Users, MessageSquare, Globe, Apple, Calculator, Heart, Building, Palette, Leaf, BookUp } from "lucide-react"
import { Card, CardContent } from '@/components/ui/card';

const Starting: React.FC = () => {

    const objectives = [
        {
            icon: <BookUp className="h-5 w-5" />,
            text: "Favorecer el desarrollo de la conciencia, expresión y regulación emocional en los niños y niñas de Educación Inicial, promoviendo la empatía, la autoestima, las habilidades sociales y la construcción de vínculos afectivos positivos en su vida cotidiana.",
        },
        {
            icon: <BookOpen className="h-5 w-5" />,
            text: "Desarrollar capacidades básicas en relación con el conocimiento y sus formas de producción en relación con los otros y en relación consigo mismo, promoviendo situaciones de aprendizaje sistemático de saberes vinculados a su entorno social y cotidiano.",
        },
        {
            icon: <MessageSquare className="h-5 w-5" />,
            text: "Desarrollar su oralidad ampliando los contextos de uso, tomar contacto con una amplia variedad de textos orales y escritos y reflexionar acerca de las particularidades de cada uno de ellos para promover el sentido estético, el gusto por la lectura y el interés por la utilización de la palabra como herramienta de comunicación y expresión.",
        },
        {
            icon: <Users className="h-5 w-5" />,
            text: "Ejercitar hábitos de comportamiento social basados en normas de respeto, tolerancia y solidaridad.",
        },
        {
            icon: <Globe className="h-5 w-5" />,
            text: "Lograr familiarizarse con la lengua inglesa comprendiendo el lenguaje cotidiano y desarrollando la confianza en sí mismo para poder lograr producciones orales básicas.",
        },
        {
            icon: <Apple className="h-5 w-5" />,
            text: "Practicar hábitos alimentarios que brindan los aportes nutricionales necesarios para el bienestar del organismo.",
        },
        {
            icon: <Calculator className="h-5 w-5" />,
            text: "Adquirir conceptos básicos sobre número, espacio y medida vinculados a sus usos y funciones, generando capacidades asociadas al establecimiento de relaciones y de representaciones gráficas y a su comunicación oral y escrita.",
        },
        {
            icon: <Heart className="h-5 w-5" />,
            text: "Conocer y cuidar el propio cuerpo y el de los otros, adquiriendo paulatinamente hábitos y nociones que le permiten mantener la salud y prevención de accidentes.",
        },
        {
            icon: <Building className="h-5 w-5" />,
            text: "Conocer y valorar los modos de organización social, logrando identidad y sentido de pertenencia.",
        },
        {
            icon: <Palette className="h-5 w-5" />,
            text: "Expresarse y comunicarse a través de distintos lenguajes artísticos, actuando grupalmente, imitando y explorando diferentes materiales y procedimientos propios de cada lenguaje.",
        },
        {
            icon: <Leaf className="h-5 w-5" />,
            text: "Actuar a nivel individual y grupal en la protección y mejoramiento del medio ambiente.",
        },
    ]

    return (
        <div className='container d-flex flex-column text-center'>
            <div className='d-flex flex-column flex-lg-row'>
                <div className='w-100 w-lg-50 text-center text-lg-start'>
                    <h1>Educación inicial</h1>
                    <p className='text-secondary'>La educación inicial constituye una unidad pedagógica.</p>
                    <p className='text-secondary'>Contamos con salas para niños de 3, 4 y 5 años con horario extendido (8.10 a 12.50 h) y brindamos un servicio de Ludoteca con horarios flexible (8.00 a 17.00 h) para niños desde que caminan hasta los 6 años.</p>
                    <p className='text-secondary'>La estrategia pedagógica de la Educación Inicial está centrada en el juego. Es la actividad esencial de la infancia. Es así como “jugando” de manera espontánea y siguiendo el estímulo de objetos o situaciones, los niños conocen el mundo que los rodea, lo comprenden y a la vez lo recrean.</p>
                    <p className='text-secondary'>A través de los sentidos, el movimiento y luego la palabra, incorporan conceptos y desarrollan múltiples capacidades. “Jugar es cosa seria” y no solo divierte y entretiene sino que ayuda a crecer, a incorporar conocimientos y procedimientos.</p>
                    <p className='text-secondary'>Los alumnos de la Ludoteca y el Jardín de Infantes construyen de esta manera sus aprendizajes y desarrollan capacidades básicas que son el cimiento y sostén de su futura escolaridad.</p>
                </div>
                <div className='w-100 w-lg-50'>
                    <img className='rounded' src="/images/levels/inicial.webp" alt="" />
                </div>
            </div>
            <div className='border-b border-green-500'>
                <p className='text-secondary'>Por otra parte, el juego favorece el proceso de socialización, ya que jugamos con otros, respetamos reglas, nos adaptamos a tiempos externos y aprendemos a conocer y aceptar diferencias individuales.</p>
                <p className='text-secondary'>El desafío de “enseñar y aprender jugando” es un arco iris de incalculables colores, formas, sonidos, movimientos, asombros, descubrimientos, pequeñas certezas y cotidianas búsquedas que transforman la escuela en un lugar para crecer.</p>

            </div>
            <div className='mt-3 mb-5'>
                <h2>Objetivos</h2>
                <p>Al finalizar este Nivel se espera que el alumno logre:</p>
                <div className="grid gap-4 md:grid-cols-2">
                    {objectives.map((objective, index) => (
                        <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                            <CardContent className="p-4 flex gap-4">
                                <div className="mt-1 text-green-500">{objective.icon}</div>
                                <p className="text-sm">{objective.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Starting;