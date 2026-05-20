import './CompreCausay.css'

const commerces = [
  { rubro: 'Seguros', telefono: '2664220160', direccion: 'Av. Sarmiento 1364', redes: 'GARCIA MELITA JUAN JOSE' },
  { rubro: 'Distribución y comercialización de agua envasada y hielo', telefono: '2664200074', direccion: 'Almirante Brown 904 (esquina Estado de Israel)', redes: 'Instagram: @elhielodelrocksl' },
  { rubro: 'Seguros de todo tipo', telefono: '3515493535', direccion: 'branalli@lasegunda.com.ar', redes: 'Barbararanallilasegunda' },
  { rubro: 'Metalúrgica', telefono: '2664878412', direccion: 'Europa 2010', redes: 'Tf.metalurgica_sl' },
  { rubro: 'Servicios Estética', telefono: '2664579424', direccion: 'Lavalle 822 local 1', redes: 'embellecenter' },
  { rubro: 'Agencia de viajes', telefono: '2664587446', direccion: 'Ayacucho 827', redes: '@flipa.travel' },
  { rubro: 'Estética y venta de productos cosméticos', telefono: '2664850446', direccion: 'Junín 713', redes: '@cbesteticaintegralsl' },
  { rubro: 'Ferretería minorista y mayorista', telefono: '2664872717', direccion: 'Maipú 1368, San Luis (a metros de Av. España)', redes: 'Instagram: @verkarsanluis | Facebook: VerkarSanLuis' },
  { rubro: 'Marmolería', telefono: '2664367776', direccion: 'Ruta 3 Km 1 - Local 1 - ZAC', redes: 'https://www.instagram.com/lospicapiedras.srl' },
  { rubro: 'Asesoramiento empresarial-legal de empresas familiares', telefono: '2664489066', direccion: '25 de mayo 567', redes: 'https://www.instagram.com/camargo.consultoralegal | https://camargoasociados.com/' },
  { rubro: 'Marroquinería y accesorios de moda', telefono: '2664695888', direccion: 'Rivadavia 636 / Belgrano 856 / Belgrano 877 / Junín 798', redes: 'https://www.instagram.com/hi_carteras_mochilas_valijas' },
  { rubro: 'Pollería - producción de alimentos', telefono: '2665297814', direccion: 'Mitre 795', redes: 'https://www.instagram.com/polleria_don_jorge/' },
  { rubro: 'Muebles de hierro', telefono: '2664732157', direccion: 'Ruta 7 km 192', redes: '@fp_studiosl (Instagram)' },
  { rubro: 'Productor Asesor de Seguros – Matrícula SSN 50806', telefono: '2664333760', direccion: 'Paseo los Quebrachos local 3 (San Luis) / Balcarce 552 (Villa Mercedes)', redes: 'https://landings.mapfre.com.ar/oficina/?oficina=villamercedes' },
  { rubro: 'Insumos Agropecuarios y Jardinería Integral', telefono: '2664349119', direccion: 'Martin de Loyola 779 local 1', redes: 'Instagram: Semillas dayenu' },
  { rubro: 'Comidas', telefono: '2664544730', direccion: '-', redes: 'Origen.yogur (Instagram)' },
  { rubro: 'Transporte', telefono: '0810-122-0060', direccion: 'Ruta 7 Km 791', redes: 'www.translibertador.com' },
  { rubro: 'Venta de ropa', telefono: '2664961716', direccion: '-', redes: 'instagram banna.sl' },
]

const CompreCausay = () => (
  <section className="compre-causay-section">
    <div className="compre-causay-title">Compre Causay</div>
    <p>Dentro de nuestro Programa de Extensión a la Comunidad pusimos en marcha el proyecto <strong>Compre Causay</strong>, una iniciativa de colaboración y beneficios para fortalecer los lazos entre la escuela y las familias.</p>
    <p>El objetivo es generar una red de apoyo mutuo dentro de nuestra comunidad educativa, brindando beneficios concretos para todos: descuentos y promociones especiales para las familias, y mayor visibilidad para emprendimientos y comercios que forman parte de la escuela.</p>
    <div className="compre-causay-table-wrapper">
      <table className="compre-causay-table">
        <thead><tr><th>Rubro / Actividad principal</th><th>Teléfono de contacto</th><th>Dirección del comercio</th><th>Redes sociales o página web</th></tr></thead>
        <tbody>{commerces.map((commerce, index) => (<tr key={`${commerce.rubro}-${index}`}><td>{commerce.rubro}</td><td>{commerce.telefono}</td><td>{commerce.direccion}</td><td>{commerce.redes}</td></tr>))}</tbody>
      </table>
    </div>
  </section>
)

export default CompreCausay
