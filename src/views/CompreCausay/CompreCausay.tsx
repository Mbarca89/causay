import { Link } from 'react-router-dom'
import './CompreCausay.css'

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
  { rubro: 'Venta de ropa', telefono: '2664-961716', direccion: '-', redes: 'https://www.instagram.com/banna.sl/' },
]

const CompreCausay = () => (
  <section className="compre-causay-section">
    <div className="text-center mb-12 border-b border-green-500">
      <h1 className="text-3xl font-light mb-4">Compre Causay</h1>
      <p>Dentro de nuestro Programa de Extensión a la Comunidad pusimos en marcha el proyecto <strong>Compre Causay</strong>, una iniciativa de colaboración y beneficios para fortalecer los lazos entre la escuela y las familias.</p>
    </div>

    <p className="text-center">
      El objetivo es generar una red de apoyo mutuo dentro de nuestra comunidad educativa, brindando beneficios concretos para todos: descuentos y promociones especiales para las familias, y mayor visibilidad para emprendimientos y comercios que forman parte de la escuela.
    </p>
    <p className="text-center">
      A continuación, te presentamos la lista de comercios que forman parte de esta iniciativa.
      <br />
      ¡Te invitamos a aprovechar estos beneficios y apoyar a los comercios locales que forman parte de nuestro programa Compre Causay!
    </p>
    <div className="compre-causay-table-wrapper">
      <table className="compre-causay-table table-sm">
        <thead>
          <tr>
            <th>Rubro / Actividad </th>
            <th>Teléfono de contacto</th>
            <th>Dirección del comercio</th>
            <th>Redes sociales o página web</th>
          </tr>
        </thead>
        <tbody>
          {commerces.map((commerce, index) => (
            <tr key={`${commerce.rubro}-${index}`}>
              <td>{commerce.rubro}</td>
              <td>{commerce.telefono}</td>
              <td>{commerce.direccion}</td>
              <td><Link to={commerce.redes} target="_blank">
                {commerce.redes}
              </Link></td>
            </tr>
          ))}</tbody>
      </table>
    </div>
  </section>
)

export default CompreCausay
