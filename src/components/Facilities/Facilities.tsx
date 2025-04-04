import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dot } from "lucide-react"

const Facilities = () => {

    const instalaciones = [
        {
            id: 'Seguridad',
            titulo: 'Seguridad',
            descripcion: 'Amplia biblioteca con más de 10,000 libros, espacios de lectura cómodos y tecnología moderna para investigación.',
            imagen: '/images/facilities/security.jpg'
        },
        {
            id: 'Comedor',
            titulo: 'Comedor',
            descripcion: 'Comedor espacioso con capacidad para 600 estudiantes, ofreciendo menús saludables y variados.',
            imagen: '/images/facilities/cafe.jpg'
        },
        {
            id: 'Aislamiento Acustico',
            titulo: 'Aislamiento Acustico',
            descripcion: 'Aulas modernas equipadas con pizarras interactivas, proyectores y mobiliario ergonómico.',
            imagen: '/images/facilities/acoustic.jpg'
        },
        {
            id: 'Sala multimedia',
            titulo: 'Sala multimedia',
            descripcion: 'Laboratorios de ciencias completamente equipados para experimentos prácticos de biología, química y física.',
            imagen: '/images/facilities/multimedia.jpg'
        },
        {
            id: 'Biblioteca',
            titulo: 'Biblioteca',
            descripcion: 'Canchas polideportivas, piscina olímpica y gimnasio con equipamiento de última generación.',
            imagen: '/images/facilities/library.jpg'
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
        setDragStart(e.touches ? e.touches[0].clientX : (e as React.MouseEvent).clientX);
    };

    const handleDragEnd = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void => {
        if (!isDragging) return;

        const dragEnd = e.touches ? (e as React.TouchEvent).changedTouches[0].clientX : (e as React.MouseEvent).clientX;
        const diff = dragStart - dragEnd;

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
                        key={instalacion.id}
                        className={`px-4 py-3 text-sm font-medium transition-colors ${activeTab === index
                            ? 'border-b-2 border-green-500 text-green-600'
                            : 'text-gray-600 hover:text-green-500'
                            }`}
                        style={{ backgroundColor: "transparent", border:"none" }}
                        onClick={() => {
                            setDirection(index > activeTab ? 1 : -1);
                            setActiveTab(index);
                        }}
                    >
                        {instalacion.titulo}
                    </button>
                ))}
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
                {instalaciones.map((_, index) => (
                    <Dot size={16} color={activeTab == index ? "#05ae01" : "#eeeeee"} strokeWidth={10} absoluteStrokeWidth
                        key={index}
                        type="button"
                        onClick={() => {
                            setDirection(index > activeTab ? 1 : -1);
                            setActiveTab(index);
                        }}
                        aria-label={`Ver ${instalaciones[index].titulo}`}
                        aria-current={activeTab === index ? "true" : "false"}
                    />
                ))}
            </div>
        </div>
    )
}

export default Facilities