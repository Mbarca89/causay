import { Link } from 'react-router-dom'

const commerces = [
  { rubro: 'Seguros', telefono: '2664-220160', direccion: 'Av. Sarmiento 1364', redes: 'https://www.instagram.com/garciamelitagm/' },
  { rubro: 'Distribución y comercialización de agua envasada y hielo', telefono: '2664-200074', direccion: 'Almirante Brown 904', redes: 'https://www.instagram.com/elhielodelrocksl/' },
  { rubro: 'Seguros de todo tipo', telefono: '351-5493535', direccion: '-', redes: 'https://www.instagram.com/barbararanalli.lasegunda/' },
  { rubro: 'Metalúrgica', telefono: '2664-878412', direccion: 'Europa 2010', redes: 'https://www.instagram.com/tf.metalurgica_sl/' },
  { rubro: 'Servicios Estética', telefono: '2664-579424', direccion: 'Lavalle 822 local 1', redes: 'https://www.instagram.com/embellecenter/' },
  { rubro: 'Agencia de viajes', telefono: '2664-587446', direccion: 'Ayacucho 827', redes: 'https://www.instagram.com/flipa.travel/' },
  { rubro: 'Estética y venta de productos cosméticos', telefono: '2664-850446', direccion: 'Junín 713', redes: 'https://www.instagram.com/cbesteticaintegralsl/cbesteticaintegralsl' },
  { rubro: 'Ferretería minorista y mayorista', telefono: '2664-872717', direccion: 'Maipú 1368, San Luis (a metros de Av. España)', redes: 'https://www.instagram.com/verkarsanluis/' },
  { rubro: 'Marmolería', telefono: '2664-367776', direccion: 'Ruta 3 Km 1 - Local 1 - ZAC', redes: 'https://www.instagram.com/lospicapiedras.srl' },
  { rubro: 'Asesoramiento empresarial-legal de empresas familiares', telefono: '2664-489066', direccion: '25 de mayo 567', redes: 'https://www.instagram.com/camargo.consultoralegal' },
  { rubro: 'Marroquinería y accesorios de moda', telefono: '2664-695888', direccion: 'Rivadavia 636 / Belgrano 856 / Belgrano 877 / Junín 798', redes: 'https://www.instagram.com/hi_carteras_mochilas_valijas' },
  { rubro: 'Pollería - producción de alimentos', telefono: '2665-297814', direccion: 'Mitre 795', redes: 'https://www.instagram.com/polleria_don_jorge/' },
  { rubro: 'Muebles de hierro', telefono: '2664-732157', direccion: 'Ruta 7 km 192', redes: 'https://www.instagram.com/fp_studiosl/' },
  { rubro: 'Productor Asesor de Seguros – Matrícula SSN 50806', telefono: '2664-333760', direccion: 'Paseo los Quebrachos local 3 (San Luis) / Balcarce 552 (Villa Mercedes)', redes: 'https://landings.mapfre.com.ar/oficina/?oficina=villamercedes' },
  { rubro: 'Insumos Agropecuarios y Jardinería Integral', telefono: '2664-349119', direccion: 'Martin de Loyola 779 local 1', redes: 'https://www.instagram.com/semillasdayenu_s.a.s/' },
  { rubro: 'Comidas', telefono: '2664-544730', direccion: '-', redes: 'https://www.instagram.com/origen.yogur/' },
  { rubro: 'Transporte', telefono: '0810-122-0060', direccion: 'Ruta 7 Km 791', redes: 'https://www.translibertador.com' },
  { rubro: 'Venta de ropa', telefono: '2664-961716', direccion: '-', redes: 'https://www.instagram.com/banna.sl/' }
]

const CompreCausay = () => (
  <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="text-center mb-12 border-b border-green-500"> <h1 className="text-3xl font-light mb-4">Compre Causay</h1> <p>Dentro de nuestro Programa de Extensión a la Comunidad pusimos en marcha el proyecto <strong>Compre Causay</strong>, una iniciativa de colaboración y beneficios para fortalecer los lazos entre la escuela y las familias.</p> </div>
    <div className="mx-auto  text-center">
      <p className="mt-4 text-base leading-7 text-gray-600">
        El objetivo es generar una red de apoyo mutuo dentro de nuestra comunidad educativa,
        brindando descuentos y promociones especiales para las familias, y mayor visibilidad para
        emprendimientos y comercios que forman parte de la escuela.
      </p>
    </div>
    <div>
      <p className="text-center text-gray-600"> A continuación, te presentamos la lista de comercios que forman parte de esta iniciativa. <br /> ¡Te invitamos a aprovechar estos beneficios y apoyar a los comercios locales que forman parte de nuestro programa Compre Causay! </p>
    </div>

    {/* Mobile cards */}
    <div className="mt-10 grid gap-4 md:hidden">
      {commerces.map((commerce, index) => (
        <article
          key={`${commerce.rubro}-${index}`}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900">{commerce.rubro}</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>
              <span className="block font-medium text-gray-800">Teléfono</span>
              {commerce.telefono}
            </p>

            <p>
              <span className="block font-medium text-gray-800">Dirección</span>
              {commerce.direccion}
            </p>

            <p>
              <span className="block font-medium text-gray-800">Web / redes</span>
              <Link
                to={commerce.redes}
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-green-700 underline underline-offset-4 hover:text-green-800"
              >
                Ver enlace
              </Link>
            </p>
          </div>
        </article>
      ))}
    </div>

    {/* Desktop table */}
    <div className="mt-12 hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:block">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-5 py-4 text-left font-semibold">Rubro / Actividad</th>
              <th className="px-5 py-4 text-left font-semibold">Teléfono</th>
              <th className="px-5 py-4 text-left font-semibold">Dirección</th>
              <th className="px-5 py-4 text-left font-semibold">Redes / Web</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {commerces.map((commerce, index) => (
              <tr
                key={`${commerce.rubro}-${index}`}
                className="transition hover:bg-green-50/70"
              >
                <td className="px-5 py-4 font-medium text-gray-900">{commerce.rubro}</td>
                <td className="whitespace-nowrap px-5 py-4 text-gray-600">{commerce.telefono}</td>
                <td className="px-5 py-4 text-gray-600">{commerce.direccion}</td>
                <td className="px-5 py-4">
                  <Link
                    to={commerce.redes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline underline-offset-4 hover:text-green-900"
                  >
                    Ver enlace
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

export default CompreCausay