import { Link, useNavigate } from 'react-router-dom'


const CompreCausayBanner = () => {
  const navigate = useNavigate()
  return (
    <section className="cc-banner" onClick={() => navigate('/compre-causay')}>
      <Link to={"/compre-causay"}>
      <img src="/images/compre-causay.webp" alt="" />
      </Link>
    </section>
  )
}

export default CompreCausayBanner
