import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { Calendar, ArrowLeft, Download, ExternalLink, Youtube } from "lucide-react"

type ExternalLinkItem = { label?: string; url: string }
type MediaItem =
  | { type: "youtube"; id: string; title?: string }
  | { type: "facebook"; url: string; title?: string }


interface NewsData {
  id: number
  title: string
  subtitle: string
  date: string
  category: string
  image: string
  docFile: string
  htmlContent: string
  externalLinks?: ExternalLinkItem[]
  media: MediaItem[]
}

function domainFromUrl(u: string) {
  try {
    return new URL(u).hostname.replace(/^www\./, "")
  } catch {
    return u
  }
}

const NewsPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [news, setNews] = useState<NewsData | null>(null)
  const [error, setError] = useState(false)

  const navigate = useNavigate();


  useEffect(() => {
    if (!slug) return

    fetch(`/press/${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Archivo no encontrado")
        return res.json()
      })
      .then((data) => setNews(data))
      .catch(() => setError(true))
  }, [slug])

  const mediaItems = useMemo(() => news?.media || [], [news])

  const hasMedia = mediaItems.length > 0

  type YoutubeMedia = Extract<MediaItem, { type: "youtube" }>
  type FacebookMedia = Extract<MediaItem, { type: "facebook" }>

  const isYoutube = (m: MediaItem): m is YoutubeMedia => m.type === "youtube"
  const isFacebook = (m: MediaItem): m is FacebookMedia => m.type === "facebook"

  const youTubeItems = useMemo(() => mediaItems.filter(isYoutube), [mediaItems])
  const facebookItems = useMemo(() => mediaItems.filter(isFacebook), [mediaItems])


  if (error) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger mb-3">Noticia no encontrada</h3>
        <div className="d-flex">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-outline-success mb-3 d-flex flex-row align-items-center"
          >
            <ArrowLeft size={18} className="me-2" />
            Volver
          </button>
        </div>
      </div>
    )
  }

  if (!news) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">Cargando noticia...</p>
      </div>
    )
  }

  function parseLocalDate(isoDate: string) {
    const [year, month, day] = isoDate.split("-").map(Number)
    return new Date(year, month - 1, day)
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <div className="d-flex">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-outline-success mb-3 d-flex flex-row align-items-center"
          >
            <ArrowLeft size={18} className="me-2" />
            Volver
          </button>
        </div>

        <h1 className="fw-bold">{news.title}</h1>
        <h4 className="text-muted mb-3">{news.subtitle}</h4>

        <div className="d-flex align-items-center gap-3 text-muted mb-3">
          <span className="badge bg-success">{news.category}</span>
          <div className="d-flex align-items-center gap-2">
            <Calendar size={18} />
            <span className="small">
              {parseLocalDate(news.date).toLocaleDateString("es-AR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-4 overflow-hidden shadow-lg mb-4">
        <img
          src={news.image}
          alt={news.title}
          className="w-100"
        />
      </div>

      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: news.htmlContent }}
      />

      {/* Media (YouTube) opcional */}
      {hasMedia && (
        <section className="mt-5">
          <h5 className="fw-bold d-flex align-items-center gap-2 mb-3">
            <Youtube size={20} />
            Media
          </h5>

          <div className="row g-4">
            {/* YouTube */}
            {youTubeItems.map((vid: any, i) => (
              <div className="col-12 col-md-6" key={`${vid.id}-${i}`}>
                <div className="ratio ratio-16x9 rounded-4 shadow">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}?rel=0`}
                    title={vid.title || `video-${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-4"
                  />
                </div>
                {vid.title && <p className="mt-2 text-muted small">{vid.title}</p>}
              </div>
            ))}

            {/* Facebook */}
            {facebookItems.map((fb, i) => (
              <div className="col-12" key={i}>
                <div className="ratio ratio-16x9 rounded-4 shadow mb-2">
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(fb.url)}&show_text=false&width=1280`}
                    title={fb.title || `facebook-${i + 1}`}
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <a className="btn btn-outline-success" href={fb.url} target="_blank" rel="noreferrer">
                  Ver en Facebook
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Enlaces externos (opcional) */}
      {!!news.externalLinks?.length && (
        <section className="mt-5">
          <h5 className="fw-bold d-flex align-items-center gap-2 mb-3">
            <ExternalLink size={20} />
            Enlaces externos
          </h5>

          <ul className="list-unstyled">
            {news.externalLinks!.map((lnk, i) => (
              <li key={`${lnk.url}-${i}`} className="mb-2">
                <a
                  href={lnk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-success"
                >
                  {lnk.label || domainFromUrl(lnk.url)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {news.docFile && <div className="mt-5 d-flex">
        <a href={news.docFile} download className="btn btn-success d-flex align-items-center">
          <Download size={18} className="me-2" />
          Descargar gacetilla
        </a>
      </div>}
    </div>
  )
}

export default NewsPage
