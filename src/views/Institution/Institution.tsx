import React from 'react';

const Institution: React.FC = () => {
    return (
        <div className='container d-flex flex-column align-items-center gap-4 mb-5'>
            <div className='text-center'>
                <h1>Institucional</h1>
                <p className='text-secondary'>Nuestra institución educativa, pública de gestión privada, fue creada en el año 1981 por Resolución  Nº 36-DPIGPJ/81 y comenzamos la actividad pedagógica en el año lectivo 1982.</p>
            </div>
            <div className='w-100'>
                <div className='d-flex relative justify-content-center w-100'>
                    <picture>
                        <source media="(min-width: 769px)" srcSet="/images/institutional/institucional1W.webp" className='rounded w-100 object-fit-fill' />
                        <img className='rounded' src="/images/institutional/institucional1.webp" alt="" style={{ opacity: ".8" }} />
                    </picture>
                    <p className='absolute text-light fs-4 text-center' style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))",
                        width: "80%"
                    }}><b>Causay es un espacio donde la VIDA, como proceso de aprendizaje, se transforma en experimentación, práctica, evolución y búsqueda.</b></p>
                </div>
            </div>
            <p className='text-center fs-5'>Somos, cada uno desde su rol, generadores y protagonistas.</p>
            <div className='d-flex flex-column flex-lg-row w-100 gap-3'>
                <div className='w-100 w-lg-50'>
                    <img className='rounded' src="/images/institutional/institucional2.webp" alt="" />
                </div>
                <div className='d-flex w-100 w-lg-50 flex-column justify-content-between text-center text-lg-start'>
                    <p className='text-secondary'>Constituimos una comunidad educativa que proclama el respeto mutuo, la tolerancia y la solidaridad como pilares básicos que presiden los cimientos que sostienen la convivencia, así como el cuidado del ambiente y el sentido de pertenencia a nuestra comunidad.
                    </p>
                    <p className='text-secondary'>Nuestro proyecto pedagógico está comprometido con la calidad y la valorización del trabajo como realización del ser humano y la sociedad, y como eje vertebrador del proceso social y educativo, concibiendo a la educación como un proceso de formación integral y permanente que armoniza acciones educativas formales y no formales ofrecidas a la comunidad.</p>
                    <p className='text-secondary'>Cada etapa evolutiva es pensada en su dinámica y problemática; para poder generar cambios con estímulos sistemáticos que complementan y enriquecen la vivencia.</p>
                </div>
            </div>
        </div>
    );
};

export default Institution;