import "./Pedagogy.css"
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
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()

  const categories: Category[] = [
    {
      id: 1,
      title: "Hábitos saludables",
      text: "Automatizar y hacer propias conductas que promueven la salud y el bienestar desde la primera infancia, constituye un objetivo primordial de Causay. La práctica conciente de la respiración, caminatas diarias, hidratación permanente, practica de posturas correctas, actividad física, meditación, alimentación adecuada, nos ayudan a atender, concentrarnos y aprender mejor",
      icon: <Heart className="h-6 w-6" />,
      color: "text-white",
      bgColor: "bg-green-500",
      subcategories: [
        { name: "Alimentación Inteligente", icon: <Apple className="h-5 w-5" /> },
        { name: "Actividad Física", icon: <Dumbbell className="h-5 w-5" /> },
        { name: "Vida en la naturaleza", icon: <Leaf className="h-5 w-5" /> },
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
      text: "Trabajamos para que nuestros estudiantes comprendan y se sensibilicen sobre la importancia de cuidar y preservar el medio. Conscientes del impacto que tienen nuestras acciones sobre el ecosistema, desarrollen prácticas cotidianas de sostenibilidad y conservación de los recursos naturales.",
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
      text: "A través de este Programa buscamos generar impacto positivo en la sociedad, además de desarrollar actitudes solidarias en los estudiantes, fomentando la empatía, cooperación y compromiso con los demás.",
      icon: <HeartHandshake className="h-6 w-6" />,
      color: "text-white",
      bgColor: "bg-green-500",
      subcategories: [{ name: "Acciones solidarias", icon: <Users className="h-5 w-5" /> }],
    },
  ]

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0]

  return (
    <>
      <div className="container p-4 p-md-5 position-relative d-flex flex-column flex-grow fixed-height mb-3">
        <h1 className="text-center fw-bold mb-4">Propuesta pedagógica</h1>
        <p className="text-center text-muted mb-4">
          Nuestro objetivo pedagógico está centrado en proporcionar una formación integral a nuestros alumnos/as, garantizando calidad en el logro de los aprendizajes.
        </p>

        {/* Timeline Navigation */}
        <div className="position-relative mb-5">
          <div className="position-absolute w-100 bg-light" style={{ height: "4px", top: "50%", transform: "translateY(-50%)" }}></div>

          <div className="d-flex justify-content-between position-relative">
            {categories.map((category) => (
              <button className="btn p-0 border-0" key={category.id} onClick={() => setActiveCategory(category.id)}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center shadow-sm ${activeCategory === category.id ? 'text-white' : ' border'}`} style={{ width: "50px", height: "50px", backgroundColor: activeCategory === category.id ? "#05ae01" : "#ffffff" }}>
                  {category.icon}
                </div>
                <div className="position-absolute text-center text-nowrap mt-3 d-none d-lg-block" style={{ opacity: activeCategory === category.id ? "1" : "0" }}>
                  <p><b>{category.title}</b></p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="row h-md-75 align-items-start d-flex mt-3 fixed-height-mobile">
          {/* Left Side - Category Info */}
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-between h-50 h-md-75 ">
            <div className="d-flex align-items-center gap-3">
              <div className="p-3 rounded text-white" style={{ backgroundColor: "#05ae01" }}>{currentCategory.icon}</div>
              <h2 className="fw-bold">{currentCategory.title}</h2>
            </div>
            <p className="text-muted">{currentCategory.text}</p>
            <button className="btn btn-dark d-flex align-items-center" onClick={()=>navigate("/institucional/propuesta")}>
              Explorar más <span className="ms-2"><ChevronRight /></span>
            </button>
          </div>

          {/* Right Side - Subcategories */}
          <div className="col-md-6 bg-light rounded p-4 shadow-sm ">
            <div className="d-grid gap-3">
              {currentCategory.subcategories.map((sub, idx) => (
                <div key={idx} className="d-flex align-items-center p-3 bg-white rounded shadow-sm">
                  <div className="p-2 rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", backgroundColor: "#05ae01" }}>
                    {sub.icon}
                  </div>
                  <span className="ms-3 fw-medium">{sub.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

