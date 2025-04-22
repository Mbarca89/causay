
const Pilars = () => {
    return (
        <div className="container d-flex flex-column justify-content-around align-items-center">
            <div className="text-center">
                <div className="">
                    <h1>Nuestros pilares</h1>
                    <p className="text-secondary">Promovemos como pilares básicos, proyectos para el desarrollo de una conciencia sobre hábitos saludables, actitudes de amabilidad y cortesía, respeto y solidaridad para la convivencia, la conservación del ambiente y el desarrollo sustentable, el conocimiento y valoración de nuestra tradición y patrimonio cultural.</p>
                </div>
                <div className="">
                    <picture>
                        <source srcSet="/images/pilars/1w.jpg" media="(min-width: 600px)" />
                        <img className="rounded" src="/images/pilars/1.jpg" alt="" />
                    </picture>
                </div>
            </div>
            <div className="mt-5 lg:flex gap-2">
                <div className="w-100 w-md-50">
                    <h2>Convivencia</h2>
                    <p className="text-secondary">
                        Estamos convencidos que desde lo cotidiano se puede construir un mundo mejor, con el aporte sistemático de cada uno de los integrantes de la comunidad. Promovemos actitudes de amabilidad y cortesía, respeto y solidaridad
                        En nuestro proyecto de convivencia definimos dos valores sustantivos: respeto y solidaridad.
                        <b> EL RESPETO</b> como una construcción cotidiana que nace en el reconocimiento del otro como «ser humano» tan diferente y único como uno mismo.
                        <b>LA SOLIDARIDAD</b> como un valor, que consideramos valioso y deseable, y como tal, se muestra en nuestras actitudes diarias y se refleja en nuestras conductas y acciones. Es más que un simple deseo de ayudar, es un hábito.
                        Por eso construimos un sistema de normas con la participación de todos. Un sistema que es revisado anualmente y tiene la flexibilidad necesaria para ir adaptándose a los nuevos requerimientos
                    </p>
                </div>
                <div className="w-100 w-md-50">
                    <img className="rounded" src="/images/pilars/2.jpg" alt="" />
                </div>
            </div>
            <div className="text-start mt-5 d-flex flex-column-reverse flex-lg-row gap-2">
                <div className="w-100 w-md-50">
                    <img className="rounded" src="/images/pilars/3.jpg" alt="" />
                </div>
                <div className="w-100 w-sm-50">
                    <h2>Educación Ambientalista</h2>
                    <p className="text-secondary">
                        Causay fue precursor en San Luis de este movimiento y sigue trabajando en la preservación y mejoramiento del medio ambiente.
                        Una educación ambientalista implica, no sólo el abordaje de contenidos teóricos respecto a la problemática ambiental, sino el desarrollo de actitudes de respeto y compromiso con la naturaleza.
                        Nos proponemos ser mediadores del descubrimiento y el conocimiento de las distintas formas de vida y buscar experiencias que despierten la capacidad de asombro y respeto en nuestros alumnos para que puedan ser capaces de  preservar y generar transformaciones sustentables en el medio ambiente.
                    </p>
                </div>
            </div>
            <div className="text-center mb-5 mt-5">
                <h2>Identidad</h2>
                <p className="text-secondary">
                    Nuestra propuesta educativa incluye conocimientos y experiencias pedagógicas sobre la tradición, la querencia por lo nuestro, la cultura, la historia y el sentido de pertenencia como sanluiseños nacidos en esta tierra y de aquellos que la adoptaron para hacerla propia.
                </p>
            </div>
        </div>
    )
}

export default Pilars