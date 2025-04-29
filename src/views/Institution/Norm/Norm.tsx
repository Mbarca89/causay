import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { Button } from 'react-bootstrap';

const Norm: React.FC = () => {
    return (
        <div className='container d-flex flex-column flex-md-row mb-5'>
            <div className='w-100 w-md-50  text-center text-md-start'>
                <h1>Sistema de Normas</h1>
                <p className='text-secondary'>Este sistema de normas fue elaborado con el aporte de todos los integrantes de nuestra comunidad educativa y es revisado permanentemente, teniendo la flexibilidad necesaria para que –sin desvirtuar los valores de respeto y responsabilidad sobre los que fue creado- se adapte a los nuevos requerimientos.</p>
            </div>
            <div className='bg-light shadow-md rounded text-center w-100 w-md-50'>
                <ul className=' cursor-pointer'>
                    <li className='d-flex gap-3' role='button'><ArrowDownToLine/><span><a className='text-dark' href="">Alumnos</a></span></li>
                    <li className='d-flex gap-3'><ArrowDownToLine/><span><a className='text-dark' href="">Matriculación</a></span></li>
                    <li className='d-flex gap-3'><ArrowDownToLine/><span><a className='text-dark' href="">Progenitores</a></span></li>
                    <li className='d-flex gap-3'><ArrowDownToLine/><span><a className='text-dark' href="">Símbolos y Distintivos patrios</a></span></li>
                    <li className='d-flex gap-3'><ArrowDownToLine/><span><a className='text-dark' href="">Abanderados</a></span></li>
                    <li className='d-flex gap-3'><ArrowDownToLine/><span><a className='text-dark' href="">Aranceles</a></span></li>
                    <button className=''>asd</button>
                    <Button>asd</Button>
                </ul>
            </div>
        </div>
    );
};

export default Norm;