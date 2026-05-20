import { useNavigate } from 'react-router-dom'
import './CompreCausayBanner.css'

const CompreCausayBanner = () => {
  const navigate = useNavigate()
  return (
    <section className="cc-banner" onClick={() => navigate('/compre-causay')}>
      <div className="cc-banner-left"><p>Apoyá a nuestra comunidad,</p><p>ganamos todos.</p></div>
      <div className="cc-banner-center">Compre Causay</div>
      <div className="cc-banner-right"><div>Descuentos especiales</div><div>Comercios de nuestra comunidad</div></div>
    </section>
  )
}

export default CompreCausayBanner
