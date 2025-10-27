import React from 'react';
import { ArrowDownToLine } from 'lucide-react';

const Norm: React.FC = () => {
    return (
        <div className='container d-flex flex-column flex-md-row mb-5' >
            <div className='w-100 w-md-50  text-center text-md-start mt-5'>
                <h1>Sistema de Normas</h1>
                <p className='text-secondary'>Este sistema de normas fue elaborado con el aporte de todos los integrantes de nuestra comunidad educativa y es revisado permanentemente, teniendo la flexibilidad necesaria para que –sin desvirtuar los valores de respeto y responsabilidad sobre los que fue creado- se adapte a los nuevos requerimientos.</p>
            </div>
            <div className="bg-light shadow-md rounded text-center w-100 w-md-50 mt-5">
                <ul className="space-y-3 list-unstyled">
                    {[
                        { file: "ALUMNOS-2025.pdf", label: "Alumnos" },
                        { file: "2019-MATRICULACION.pdf", label: "Matriculación" },
                        { file: "2019-PROGENITORES.pdf", label: "Progenitores" },
                        { file: "2019-SIMBOLOS-Y-DISTINTIVOS-PATRIOS.pdf", label: "Símbolos y Distintivos Patrios" },
                        { file: "ABANDERADOS-2025.pdf", label: "Abanderados" },
                        { file: "2019-ARANCELES.pdf", label: "Aranceles" },
                    ].map(({ file, label }) => (
                        <li key={file}>
                            <a
                                href={`/normativa/${file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-flex align-items-center gap-3 text-dark text-decoration-none p-2 rounded hover:bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500"
                                aria-label={`Descargar normativa ${label}`}
                            >
                                <ArrowDownToLine aria-hidden="true" />
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Norm;