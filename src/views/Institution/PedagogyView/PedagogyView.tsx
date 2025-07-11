import "./PedagogyView.css"
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

interface Program {
    id: number
    title: string
    text: string
    image: string
}


const PedagogyView: React.FC = () => {


    const programs: Program[] = [{
        id: 1,
        title: "Hábitos saludables",
        text: "Automatizar y hacer propias conductas que promueven la salud y el bienestar desde la primera infancia, constituye un objetivo primordial de Causay. La práctica consiente de la respiración, caminatas diarias, hidratación permanente, practica de posturas correctas, actividad física, meditación, alimentación adecuada, nos ayudan a atender, concentrarnos y aprender mejor.",
        image: "/images/pedagogy/habitos.webp"
    },
    {
        id: 2,
        title: "Alimentación inteligente",
        text: "Una alimentación inteligente se caracteriza por el consumo de alimentos saludables con alto nivel nutricional, fundamental   para que los niños y adolescentes logren un desarrollo armónico físico y psíquico y contribuye a una actividad escolar exitosa, por ello priorizamos la ingesta de alimentos saludables en las actividades institucionales. En la oferta de venta en el kiosco para Primaria y Secundaria y en la implementación del desayuno y colaciones en la Educación Inicial, así como en el Comedor Escolar, los alimentos son equilibrados y variados preparados en condiciones higiénicas, con insumos de calidad",
        image: "/images/pedagogy/alimentacionInteligente.webp"
    },
    {
        id: 3,
        title: "Vida en la naturaleza",
        text: "A través de estas actividades tratamos de contribuir a la construcción de la autonomía en sus diversas dimensiones -corporal, social, ética– vinculando a alumnos/as con experiencias de convivencia intensa que priorizan la cooperación, la resolución de situaciones, conflictos, necesidades, aplicación de valores, etc.Desde esta perspectiva, la vida en la naturaleza y al aire libre promueve la apropiación por parte de las nuevas generaciones de la problemática ecológica y ambiental, de la actitud de respeto por el medio natural, y la experimentación de las posibilidades de acción y sus consecuencias. Es un recurso que integra el conjunto de espacios curriculares que aportan saberes que se desarrollan antes, durante o después de la experiencia. La vida en la naturaleza y al aire libre se caracteriza por incluir una gran variedad de juegos y trabajos físicos que son realizados en el medio natural que constituyen un espacio educativo particularmente rico y formativo. Actividades que se desarrollan: Caminatas, ascensiones, bicicleteadas y campamentos.",
        image: "/images/pedagogy/vidaNaturaleza.webp"
    },
    {
        id: 4,
        title: "Yoga",
        text: "El yoga, dentro del contexto institucional, es una herramienta que afecta positivamente al alumno, al docente, a la relación entre ambos y al proceso de enseñanza y de aprendizaje. Este Proyecto, iniciado en el año 2012, permite que los estudiantes de la Educación Inicial, Primaria y Secundaria ejerciten su respiración, aumenten la flexibilidad, mejoren el equilibrio, fortalezcan músculos y huesos , mejoren su concentración y aprendan a relajarse ante situaciones de estrés, situaciones conflictivas y distractoras. Un ambiente saludable y equilibrado facilita, tanto al alumno como al docente, la comprensión de los contenidos que son captados con mayor fluidez y naturalidad.",
        image: "/images/pedagogy/yoga.webp"
    },
    {
        id: 5,
        title: "Meditación",
        text: "La Meditación es una práctica de autocontrol destinada a regular el cuerpo y la mente hacia un estado de profunda relajación. Implementar técnicas de relajación nos permite cultivar un entorno educativo más saludable y propicio para el aprendizaje, promoviendo el bienestar emocional, la atención plena y la resiliencia tanto en los docentes como en los estudiantes. Practicas sistemáticas de meditación, favorecen la gestión adecuada de situaciones de estrés, aumenta la capacidad de atención, favorece el estado de calma y amabilidad, potencia la creatividad, favorece climas de trabajo más colaborativos y armónicos.",
        image: "/images/pedagogy/meditacion.webp"
    },
    {
        id: 6,
        title: "Conciencia Ecológica",
        text: "Procuramos reducir los residuos que generamos diariamente y los clasificamos, así podemos reutilizar y reciclar para actividades artísticas y tecnológicas y preparar compost para nuestras plantas. Somos Centro de Recolección de tapitas de la Fundación Garrahan para su Programa de reciclado y medio ambiente. Mensualmente entregamos a la Municipalidad de San Luis ladrillos ecológicos, pilas, cartones, envases plásticos, y todo lo reciclable que recolectamos para su traslado a la Planta de Reciclado y Tratamiento de Residuos Urbanos (RSU) Además, se planifican actividades de extensión comunitaria, tareas de concientización e interviniendo y mejorando espacios públicos. Al mismo tiempo, la conciencia ecológica se desarrolla cuando en contacto con la naturaleza, aprendemos sobre sus ciclos y la injerencia del hombre en ella.",
        image: "/images/pedagogy/concienciaEcologica.webp"
    },
    {
        id: 7,
        title: "Educación Emocional",
        text: "La inteligencia emocional constituye el cimiento y motor de las demás inteligencias. Hoy, enseñar y aprender, no implica solamente conceptos, los logros afectivos y emocionales abarcan el trato interpersonal, la independencia, la disciplina, la responsabilidad, la autoestima, la tolerancia a la frustración, la comprensión de sí mismo y las demás herramientas esenciales para poder aprender. En este sentido, no es fortuito que la UNESCO haya incluido como pilares de la educación los aprendizajes ligados al conocer, ser, hacer, vivir juntos y transformarse. Por ello, trabajamos el desarrollo de la inteligencia emocional, para que cada alumno pueda reconocer sus emociones y las de los demás y poder gestionarlas de manera sana y positiva, tanto para sí mismo como para la comunidad. ",
        image: "/images/pedagogy/educacionEmocional.webp"
    },
    {
        id: 8,
        title: "Educación Tecnológica y Científica",
        text: "En los primeros años de escolaridad fomentamos el pensamiento lógico y computacional, sin necesidad de utilizar pantallas. Luego iniciamos la alfabetización digital para que los estudiantes dominen las habilidades básicas para interactuar con dispositivos tecnológicos. Las competencias blandas como el pensamiento lógico, la creatividad y la resolución de problemas se abordan desde todos los niveles y espacios curriculares, enfocándonos en las habilidades técnicas en la última etapa de la educación obligatoria, preparando a los alumnos para su futuro digital. Las bases de la programación, la introducción al mundo de la robótica, la inteligencia artificial, el desarrollo de aplicaciones contribuyen a adquirir un pensamiento lógico y sistemático para la resolución de problemas, estimulando su curiosidad científica y tecnológica, para que propongan soluciones que pueden ser la semilla de la innovación y el emprendimiento futuro.",
        image: "/images/pedagogy/tecnologicaCientifica.webp"
    },
    {
        id: 9,
        title: "Extensión a la Comunidad",
        text: "A través de este Programa buscamos generar impacto positivo en la sociedad, además de desarrollar actitudes solidarias en los estudiantes, fomentando la empatía, cooperación y compromiso con los demás. Algunas actividades llevadas a cabo: Recuperación de espacios públicos, plantación de árboles, ayuda escolar en centros comunitarios, elaboración de aislantes para personas en situación de callle, colecta permanente de ropa, calzado, útiles escolares, juguetes, artículos de higiene escolar. Confección de bufandas y cuellitos de abrigo. ",
        image: "/images/pedagogy/comunidad.webp"
    }
    ]

    const [activeProgram, setActiveProgram] = useState<number>(0);

    const goToPrevious = () => {
        setActiveProgram((prev) => (prev !== 0 ? prev - 1 : programs.length - 1))
    }

    const goToNext = () => {
        setActiveProgram((prev) => (prev !== programs.length - 1 ? prev + 1 : 0))
    }

    // Configure swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => goToNext(),
        onSwipedRight: () => goToPrevious(),
        trackMouse: false,
        preventScrollOnSwipe: true,
    })

    return (
        <Container className='mb-3'>
            <div className='d-flex flex-column flex-lg-row border-b border-green-500'>
                <div className='w-100 w-md-50 d-flex flex-column justify-content-center text-center text-lg-start'>
                    <h1>Propuesta pedagógica</h1>
                    <p className='text-secondary'>Consideramos a la educación como un proceso formativo y orientador de nuestros alumnos/as, que además de brindar herramientas para adquirir conocimientos, procure fomentar el desarrollo de valores éticos y sociales.</p>
                    <h2 className='fs-3'>Objetivos pedagógicos</h2>
                    <p className='text-secondary'>Nuestro objetivo pedagógico está centrado en proporcionar una formación integral a nuestros alumnos/as, garantizando calidad en el logro de los aprendizajes, promoviendo el respeto en las relaciones con los demás y fomentando la sinceridad, el compañerismo y la cooperación solidaria como base de una auténtica convivencia escolar</p>
                </div>
                <div className='w-sm-100 w-md-50 mb-3'>
                    <picture>
                        <source media="(min-width: 769px)" srcSet="/images/pedagogy/1w.webp" />
                        <img className='rounded' src="/images/pedagogy/1.webp" alt="" />
                    </picture>
                </div>
            </div>
            <div className='mt-3 text-center border-b border-green-500'>
                <h2 className=''>Aprendizaje basado en proyectos (ABP)</h2>
                <p className='text-secondary'>En el año 2019 iniciamos, con la capacitación del personal docente, la implementación de un método sistemático de enseñanza que involucra a los estudiantes en el aprendizaje de conocimientos y habilidades, a través de un proceso extendido de indagación, estructurado alrededor de preguntas complejas y auténticas, y tareas y productos cuidadosamente diseñados.</p>
                <div className='mb-3 flex justify-content-center'>
                    <picture>
                        <source media="(min-width: 769px)" srcSet="/images/pedagogy/abpWV2.webp" />
                        <img className='rounded' src="/images/pedagogy/abp.webp" alt="" />
                    </picture>
                </div>
                <p className='text-secondary'>Este método, denominado Aprendizaje Basado en Proyectos (ABP) promueve en los alumnos un aprendizaje vinculado con su vida real y les brinda herramientas para resolver un problema. Las actividades parten de una provocación inicial -una pregunta significativa, problema o desafío, que hace de detonante creativo. También reciben una pregunta inicial que los invita a la investigación. En esta fase los estudiantes se sumergen en un proceso donde trabajan de manera relativamente autónoma y con un alto nivel de implicación y colaboración. De esta forma, el Aprendizaje Basado en Proyecto busca impulsar la participación activa y el trabajo colaborativo, integrar diversas disciplinas, vincular los conocimientos, la teoría, la práctica y las experiencias.
                    Todos nuestros proyectos están orientados a partir de nuestros programas transversales.
                </p>
            </div>
            <h2 className='text-center mt-3'>Programas transversales</h2>
            <div className='mt-3 d-flex flex-column flex-md-row p-2'>
                <div className='d-flex d-md-none justify-content-between align-items-center mb-3'>
                    <button onClick={activeProgram != 1 ? () => setActiveProgram(activeProgram - 1) : () => setActiveProgram(programs.length - 1)}><ChevronLeft /></button>
                    <h3 className='fs-6 m-0'>{programs[activeProgram].title}</h3>
                    <button onClick={activeProgram != programs.length - 1 ? () => setActiveProgram(activeProgram + 1) : () => setActiveProgram(1)}><ChevronRight /></button>
                </div>
                <div className='d-none d-md-flex flex-column justify-content-start text-nowrap gap-1' style={{ minWidth: "300px" }}>
                    {programs.map((program, index) => (
                        <button
                            key={program.id}
                            onClick={() => setActiveProgram(index)}
                            className={`d-flex text-start h-100 align-items-center border-0 bg-transparent py-2 ${activeProgram === index ? "fw-bold" : ""
                                }`}
                        >
                            <p className="d-flex m-0">
                                <span
                                    className={`border-b border-transparent ${activeProgram === index ? "border-green-500" : "hover:border-green-500"}`}
                                >
                                    {program.title}
                                </span>
                                {activeProgram === index && (
                                    <span>
                                        <ChevronRight className="ms-2" />
                                    </span>
                                )}
                            </p>
                        </button>
                    )
                    )}
                </div>
                <div {...swipeHandlers} className="program-card bg-light shadow-md rounded text-center p-3">
                    <div className="program-card__content">
                        <h3 className="d-none d-md-block text-dark">{programs[activeProgram].title}</h3>
                        <p className="mt-0 text-secondary">{programs[activeProgram].text}</p>
                    </div>
                    {programs[activeProgram].image && (
                        <img
                            src={programs[activeProgram].image}
                            alt=""
                            className="rounded"
                        />
                    )}

                </div>
            </div>
        </Container>
    );
};

export default PedagogyView;