import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dot } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Facilities = () => {

    const navigate = useNavigate()

    const instalaciones = [
        {
            id: 'Espacios de juego cubiertos',
            titulo: 'Espacios de juego cubiertos',
            descripcion: 'disponemos de espacios de juego que brindan oportunidades de recreación durante los tiempos de descanso.',
            imagen: '/images/facilities/espaciosCubiertos.webp'
        },
        {
            id: 'Playón polideportivo',
            titulo: 'Playón polideportivo',
            descripcion: 'Creamos espacios funcionales y seguros para la práctica de actividades físicas y recreativas.',
            imagen: '/images/facilities/playonDeportivo.webp'
        },
        {
            id: 'Acondicionamiento Acústico',
            titulo: 'Acondicionamiento Acústico',
            descripcion: 'Reduciendo el ruido, se ayuda a crear espacios más tranquilos y saludables.',
            imagen: '/images/facilities/acustico.webp'
        },
        {
            id: 'Salas de descanso',
            titulo: 'Salas de descanso',
            descripcion: 'Los estudiantes de la Educación Primaria, luego de almorzar, descansan en las salas acondicionadas para este momento.',
            imagen: '/images/facilities/descanso.webp'
        }
    ];

    // Estado para controlar la pestaña activa
    const [activeTab, setActiveTab] = useState<number>(0);

    // Para gestionar el arrastre (swipe)
    const [dragStart, setDragStart] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    // Estado para la dirección de la animación
    const [direction, setDirection] = useState<number>(1);

    // Cambiar a la imagen siguiente o anterior
    const changeImage = (newDirection: number): void => {
        setDirection(newDirection);

        let newIndex = activeTab + newDirection;

        // Efecto circular
        if (newIndex < 0) {
            newIndex = instalaciones.length - 1;
        } else if (newIndex >= instalaciones.length) {
            newIndex = 0;
        }

        setActiveTab(newIndex);
    };

    // Gestión de eventos de arrastre con tipado
    const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void => {
        setIsDragging(true);
        setDragStart(
            'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
        );
    };

    const handleDragEnd = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void => {
        if (!isDragging) return;

        const dragEnd = 'changedTouches' in e
            ? e.changedTouches[0].clientX
            : (e as React.MouseEvent).clientX; const diff = dragStart - dragEnd;

        // Cambiar imagen solo si el arrastre es significativo
        if (Math.abs(diff) > 50) {
            changeImage(diff > 0 ? 1 : -1);
        }

        setIsDragging(false);
    };

    const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void => {
        if (!isDragging) return;
        e.preventDefault();
    };

    // Variantes de animación basadas en la dirección
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 0 : -0,
            opacity: 0.5
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -0 : 0,
            opacity: 1
        })
    };

    return (
        <div className="container overflow-hidden text-center">
            <h1>Instalaciones</h1>
            <p className='text-secondary'>Los espacios de estudio son fundamentales para un correcto aprendizaje y una experiencia única</p>
            {/* Pestañas solo para desktop */}
            <div className="hidden md:flex border-b border-green-500 justify-content-center">
                {instalaciones.map((instalacion, index) => (
                    <button
                        aria-label={instalacion.titulo}
                        key={instalacion.id}
                        className={`px-4 py-3 text-sm font-medium transition-colors ${activeTab === index
                            ? 'border-b-2 border-green-500 text-green-600'
                            : 'text-gray-600 hover:text-green-500'
                            }`}
                        style={{ backgroundColor: "transparent", border: "none" }}
                        onClick={() => {
                            setDirection(index > activeTab ? 1 : -1);
                            setActiveTab(index);
                        }}
                    >
                        {instalacion.titulo}
                    </button>
                ))}
                <button
                    aria-label='Ver todas las instalaciones'
                    className={'px-4 py-3 text-sm font-medium transition-colors text-gray-600 hover:text-green-500 d-flex flex-row align-items-center'}
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={() => navigate("/instalaciones")}
                >
                    Ver todas <span><ChevronRight /></span>
                </button>
            </div>

            {/* Título para móvil */}
            <div className="md:hidden p-4 text-center border-b">
                <h2 className="text-xl font-bold text-green-600">{instalaciones[activeTab].titulo}</h2>
            </div>

            {/* Área de contenido (con eventos de arrastre) */}
            <div
                className="relative overflow-hidden"
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
            >
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={activeTab}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: .5 }}
                        className="p-4"
                    >
                        {/* Texto descriptivo */}
                        <div className="mb-4 text-center text-gray-700">
                            <p>{instalaciones[activeTab].descripcion}</p>
                        </div>

                        {/* Imagen central */}
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                            <img
                                src={instalaciones[activeTab].imagen}
                                alt={instalaciones[activeTab].titulo}
                                className="w-full h-full object-cover"
                                draggable="false"
                            />

                            {/* Indicadores de navegación por toque */}
                            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                                <div className="p-2  bg-opacity-20 rounded-r-lg text-white ml-2">
                                    <span className="md:hidden">←</span>
                                </div>
                                <div className="p-2  bg-opacity-20 rounded-l-lg text-white mr-2">
                                    <span className="md:hidden">→</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Indicadores de navegación (puntitos) */}
            <div className="carousel-indicators position-relative mb-0 py-3 gap-3">
                {instalaciones.map((instalacion, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > activeTab ? 1 : -1);
                            setActiveTab(index);
                        }}
                        aria-label={`Ver ${instalacion.titulo}`}
                        aria-current={activeTab === index ? "true" : "false"}
                        className="rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        style={{
                            width: "44px",
                            height: "44px",
                            background: "transparent",
                            border: "none",
                        }}
                        type="button"
                    >
                        <Dot
                            size={16}
                            color={activeTab === index ? "#05ae01" : "#eeeeee"}
                            strokeWidth={10}
                            absoluteStrokeWidth
                            aria-hidden="true"
                        />
                    </button>
                ))}
            </div>
            <div className="d-flex justify-content-center mb-5 mt-3">
                <button
                    aria-label='Ver todas las instalaciones'
                    className="btn btn-dark d-flex align-items-center" onClick={() => navigate("/instalaciones")}>
                    Ver todas <span className="ms-2"><ChevronRight /></span>
                </button>
            </div>
        </div>
    )
}

export default Facilities