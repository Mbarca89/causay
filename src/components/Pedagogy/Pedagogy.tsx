"use client"

import type React from "react"

import { useState } from "react"
import {
  Heart,
  Cpu,
  SmilePlus,
  Recycle,
  HeartHandshake,
  ChevronRight,
  Apple,
  MonitorIcon as Running,
  Leaf,
  BotIcon as Robot,
  Code,
  Lightbulb,
  Trash2,
  Repeat,
  Undo2,
  Users,
  Dumbbell,
} from "lucide-react"

interface Category {
  id: number
  title: string
  text: string
  icon: React.ReactNode
  color: string
  bgColor: string
  subcategories: { name: string; icon: React.ReactNode }[]
}

export default function Pedagogy() {
  const [activeCategory, setActiveCategory] = useState<number>(1)

  const categories: Category[] = [
    {
      id: 1,
      title: "Hábitos Saludables",
      text: "Automatizar y hacer propias conductas que promueven la salud y el bienestar desde la primera infancia, constituye un objetivo primordial de Causay. La práctica consiente de la respiración, caminatas diarias, hidratación permanente, practica de posturas correctas, actividad física, meditación, alimentación adecuada, nos ayudan a atender, concentrarnos y aprender mejor",
      icon: <Heart className="h-6 w-6" />,
      color: "text-white",
      bgColor: "bg-green-500",
      subcategories: [
        { name: "Alimentación Inteligente", icon: <Apple className="h-5 w-5" /> },
        { name: "Actividad Física", icon: <Dumbbell className="h-5 w-5" /> },
        { name: "Naturaleza", icon: <Leaf className="h-5 w-5" /> },
      ],
    },
    {
      id: 2,
      title: "Ciencia y Tecnología",
      text: "En los primeros años de escolaridad fomentamos el pensamiento lógico y computacional, sin necesidad de utilizar pantallas. Luego iniciamos la alfabetización digital para que los estudiantes dominen las habilidades básicas para interactuar con dispositivos tecnológicos.",
      icon: <Cpu className="h-6 w-6" />,
      color: "text-white",
      bgColor: "bg-green-500",
      subcategories: [
        { name: "Robótica", icon: <Robot className="h-5 w-5" /> },
        { name: "Programación", icon: <Code className="h-5 w-5" /> },
      ],
    },
    {
      id: 3,
      title: "Educación Emocional",
      text: "La inteligencia emocional constituye el cimiento y motor de las demás inteligencias.Hoy, enseñar y aprender, no implica solamente conceptos, los logros afectivos y emocionales abarcan el trato interpersonal, la independencia, la disciplina, la responsabilidad, la autoestima, la tolerancia a la frustración, la comprensión de sí mismo y las demás herramientas esenciales para poder aprender.",
      icon: <SmilePlus className="h-6 w-6" />,
      color: "text-white",
      bgColor: "bg-green-500",
      subcategories: [{ name: "Gestión de emociones", icon: <Lightbulb className="h-5 w-5" /> }],
    },
    {
      id: 4,
      title: "Conciencia Ecológica",
      text: "Procuramos reducir los residuos que generamos diariamente y los clasificamos, así podemos reutilizar y reciclar para actividades artísticas y tecnológicas y preparar compost para nuestras plantas.",
      icon: <Recycle className="h-6 w-6" />,
      color: "text-white",
      bgColor: "bg-green-500",
      subcategories: [
        { name: "Reducir", icon: <Trash2 className="h-5 w-5" /> },
        { name: "Reutilizar", icon: <Repeat className="h-5 w-5" /> },
        { name: "Reciclar", icon: <Undo2 className="h-5 w-5" /> },
      ],
    },
    {
      id: 5,
      title: "Compromiso Social",
      text: "Somos Centro de Recolección de tapitas de la Fundación Garrahan para su Programa de reciclado y medio ambiente.",
      icon: <HeartHandshake className="h-6 w-6" />,
      color: "text-white",
      bgColor: "bg-green-500",
      subcategories: [{ name: "Acciones solidarias", icon: <Users className="h-5 w-5" /> }],
    },
  ]

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0]

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Propuesta pedagógica</h1>
        <p className="text-gray-500 mb-16">Nuestro objetivo pedagógico está centrado en proporcionar una formación integral a nuestros alumnos/as, garantizando calidad en el logro de los aprendizajes, promoviendo el respeto en las relaciones con los demás y fomentando la sinceridad, el compañerismo y la cooperación solidaria como base de una auténtica convivencia escolar.</p>

        {/* Timeline navigation */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute h-1 bg-gray-200 top-1/2 left-0 right-0 -translate-y-1/2"></div>

          {/* Timeline nodes */}
          <div className="relative flex justify-between">
            {categories.map((category) => (
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                key={category.id}
                className={`relative flex flex-col items-center transition-all duration-300 ${activeCategory === category.id ? "scale-110" : "opacity-70 hover:opacity-100"
                  }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {/* Node */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors ${activeCategory === category.id
                      ? category.bgColor + " text-white shadow-lg"
                      : "bg-white border-2 rounded-full" + category.color
                    }`}
                >
                  {category.icon}
                </div>

                {/* Label */}
                <div
                  className={`absolute top-16 text-center whitespace-nowrap font-medium ${activeCategory === category.id ? "opacity-100" : "opacity-0"
                    } transition-opacity`}
                >
                  {category.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Category info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${currentCategory.bgColor} text-white`}>{currentCategory.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900">{currentCategory.title}</h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {currentCategory.text}
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
              Explorar más
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right side - Subcategories */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
            <div className="space-y-4">
              {currentCategory.subcategories.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow transition-shadow cursor-pointer group"
                >
                  <div className={`p-3 rounded-xl ${currentCategory.bgColor} bg-opacity-10 ${currentCategory.color}`}>
                    {sub.icon}
                  </div>
                  <span className="font-medium text-gray-800">{sub.name}</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#05AE01"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></g></svg>
    </div>
  )
}

