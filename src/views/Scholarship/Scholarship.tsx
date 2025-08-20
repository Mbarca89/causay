import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface GuidelineSection {
    id: number
    title: string
    content: React.ReactNode
  }

const Scholarship: React.FC = () => {
    const [activeSection, setActiveSection] = useState(0)

    const guidelineSections: GuidelineSection[] = [
      {
        id: 1,
        title: "Objetivos",
        content: (
          <p>
            El Programa tiene como objetivo general reconocer el esfuerzo y el rendimiento académico, estimular el
            cumplimiento del plan de estudios en los plazos estipulados, fortalecer el inicio de la escuela primaria, la
            transición entre la escuela primaria y la secundaria o entre la escuela secundaria y el nivel superior y/o la
            inserción laboral, según corresponda.
          </p>
        ),
      },
      {
        id: 2,
        title: "Objeto y destinatarios",
        content: (
          <p>
            Adjudicar becas para estudiantes ingresantes a la Educación Primaria y/o Secundaria, según se establezca
            anualmente.
          </p>
        ),
      },
      {
        id: 3,
        title: "Requisitos",
        content: (
          <div>
            <p>
              Completar el siguiente &gt;&gt;{" "}
              <a href="https://forms.gle/xnsnf7wnEeH3kHS28" target='blank_' className="text-green-500 hover:underline inline-flex items-center">
                FORMULARIO <ExternalLink className="ml-1 h-4 w-4" />
              </a>{" "}
              &lt;&lt;
            </p>
            <p>Entregar la documentación respaldatoria solicitada.</p>
          </div>
        ),
      },
      {
        id: 4,
        title: "Criterios de selección",
        content: (
          <div>
            <p>
              Los postulantes serán evaluados en los contenidos prioritarios de Lengua y Matemática e Inglés a partir de
              2° Grado de la Educación Primaria.
            </p>
            <p>Deberán cumplir con los requisitos y con la presentación de los documentos solicitados.</p>
          </div>
        ),
      },
      {
        id: 5,
        title: "Duración",
        content: <p>La BECA tendrá una duración de diez (10) meses, de marzo a diciembre inclusive.</p>,
      },
      {
        id: 6,
        title: "Renovación",
        content: (
          <p>
            La BECA podrá renovarse hasta la finalización del nivel en el que ingresó si el estudiante aprueba todos los
            espacios curriculares y mantiene una adecuada convivencia y respeto por las normas establecidas en la
            Institución.
          </p>
        ),
      },
      {
        id: 7,
        title: "Adjudicación",
        content: <p>La cantidad de BECAS a otorgar estará sujeta al cupo disponible de acuerdo a la matrícula.</p>,
      },
      {
        id: 8,
        title: "Documentarción respaldatoria",
        content: (
          <ul className="list-disc pl-5">
            <li>Certificado analítico o boletín de calificaciones de la escuela que proviene.</li>
            <li>Fotocopia del DNI con la actualización de domicilio.</li>
          </ul>
        ),
      },
      {
        id: 9,
        title: "Importante",
        content: (
          <ul className="list-disc pl-5">
            <li>
              La postulación sólo es válida cuando se ha realizado en tiempo y forma la inscripción y la presentación de
              la documentación requerida.
            </li>
            <li>
              Un mal desempeño o el incumplimiento de los requisitos solicitados por Causay podrán dar por finalizada la
              BECA antes del período acordado.
            </li>
            <li>Las decisiones del Equipo Directivo de Causay son inapelables.</li>
            <li>El cumplimiento de los requisitos formales para postular no garantiza la obtención de la BECA.</li>
            <li>
              No se realizarán devoluciones individuales sobre su solicitud a los postulantes que en esta oportunidad no
              hayan resultado beneficiados con la BECA.
            </li>
            <li>No se aceptarán solicitudes presentadas en forma incompleta o luego del cierre de la convocatoria.</li>
            <li>
              El Equipo Directivo de Causay podrá rescindir la BECA en caso de incumplimiento de las normas de convivencia
              de parte del alumno/a.
            </li>
          </ul>
        ),
      },
    ]
  
    const goToPrevious = () => {
      setActiveSection((prev) => (prev !== 0 ? prev - 1 : guidelineSections.length - 1))
    }
  
    const goToNext = () => {
      setActiveSection((prev) => (prev !== guidelineSections.length - 1 ? prev + 1 : 0))
    }
  
    // Configure swipe handlers
    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => goToNext(),
      onSwipedRight: () => goToPrevious(),
      trackMouse: false,
      preventScrollOnSwipe: true,
    })
  
    return (
      <div className="mt-3 d-flex flex-column p-2 container mb-5">
        <h1 className="text-center">Becas</h1>
        <div className="d-flex d-lg-none justify-content-between align-items-center mb-3">
          <button onClick={goToPrevious} className="border-0 bg-transparent">
            <ChevronLeft />
          </button>
          <h3 className="fs-6 m-0">{guidelineSections[activeSection].title}</h3>
          <button onClick={goToNext} className="border-0 bg-transparent">
            <ChevronRight />
          </button>
        </div>
  
        <div className="d-flex flex-column flex-lg-row w-100">
          <div
            className="d-none d-lg-flex flex-column justify-content-start text-nowrap gap-1 pe-4 border-end"
            style={{ minWidth: "300px" }}
          >
            {guidelineSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`d-flex text-start h-100 align-items-center border-0 bg-transparent py-2 ${
                  activeSection === index ? "fw-bold" : ""
                }`}
              >
                <p className="d-flex m-0">
                  <span
                    className={`border-b border-transparent ${activeSection === index ? "border-green-500" : "hover:border-green-500"}`}
                  >
                    {section.title}
                  </span>
                  {activeSection === index && (
                    <span>
                      <ChevronRight className="ms-2" />
                    </span>
                  )}
                </p>
              </button>
            ))}
          </div>
  
          <div {...swipeHandlers} className="bg-light shadow-md rounded text-start p-4 flex-grow-1 ms-md-4">
            <h3 className="mb-3 fw-bold">{guidelineSections[activeSection].title}</h3>
            <div className="text-secondary">{guidelineSections[activeSection].content}</div>
  
            {/* Mobile pagination indicator */}
            <div className="d-flex d-lg-none justify-content-center mt-4 gap-1">
              {guidelineSections.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-circle ${activeSection === index ? "bg-green-500" : "bg-gray-300"}`}
                  style={{ width: "8px", height: "8px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
};

export default Scholarship;