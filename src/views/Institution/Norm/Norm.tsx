import React from 'react';
import { ArrowDownToLine } from 'lucide-react';

const Norm: React.FC = () => {
    return (
        <div className='container d-flex flex-column flex-md-row' >
            <div className='w-100 w-md-50  text-center text-md-start mt-5'>
                <h1>Sistema de Normas</h1>
                <p className='text-secondary'>Este sistema de normas fue elaborado con el aporte de todos los integrantes de nuestra comunidad educativa y es revisado permanentemente, teniendo la flexibilidad necesaria para que –sin desvirtuar los valores de respeto y responsabilidad sobre los que fue creado- se adapte a los nuevos requerimientos.</p>
            </div>
            <div className='bg-light shadow-md rounded text-center w-100 w-md-50 mt-5'>
                <ul className='space-y-3'>
                    <li className='d-flex gap-3' role='button'><ArrowDownToLine/><span><a className='text-dark' href="/normativa/ALUMNOS.pdf" target='window'>Alumnos</a></span></li>
                    <li className='d-flex gap-3' role='button'><ArrowDownToLine/><span><a className='text-dark' href="/normativa/2019-MATRICULACION.pdf" target='window'>Matriculación</a></span></li>
                    <li className='d-flex gap-3' role='button'><ArrowDownToLine/><span><a className='text-dark' href="/normativa/2019-PROGENITORES.pdf" target='window'>Progenitores</a></span></li>
                    <li className='d-flex gap-3' role='button'><ArrowDownToLine/><span><a className='text-dark' href="/normativa/2019-SIMBOLOS-Y-DISTINTIVOS-PATRIOS.pdf" target='window'>Símbolos y Distintivos patrios</a></span></li>
                    <li className='d-flex gap-3' role='button'><ArrowDownToLine/><span><a className='text-dark' href="/normativa/2024-ELECCION-DE-ABANDERADOS-Y-ESCOLTAS.pdf" target='window'>Abanderados</a></span></li>
                    <li className='d-flex gap-3' role='button'><ArrowDownToLine/><span><a className='text-dark' href="/normativa/2019-ARANCELES.pdf" target='window'>Aranceles</a></span></li>
                </ul>
            </div>
        </div>
    );
};

export default Norm;