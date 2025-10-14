import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Calendar, ArrowLeft, Download } from "lucide-react"

interface NewsData {
    id: number
    title: string
    subtitle: string
    date: string
    category: string
    image: string
    docFile: string
    htmlContent: string
    media: string[]
}

const NewsPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const [news, setNews] = useState<NewsData | null>(null)
    const [error, setError] = useState(false)

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

    if (error) {
        return (
            <div className="container py-5 text-center">
                <h3 className="text-danger mb-3">Noticia no encontrada</h3>
                <div className="d-flex">
                    <Link to="/noticias" className="btn btn-outline-success mb-3 d-flex flex-row align-items-center">
                        <ArrowLeft size={18} className="me-2" />
                        Volver a todas las noticias
                    </Link>
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
                    <Link to="/noticias" className="btn btn-outline-success mb-3 d-flex flex-row align-items-center">
                        <ArrowLeft size={18} className="me-2" />
                        Volver a todas las noticias
                    </Link>
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

            <div className="mt-5 d-flex">
                <a href={news.docFile} download className="btn btn-success d-flex align-items-center">
                    <Download size={18} className="me-2" />
                    Descargar gacetilla
                </a>
            </div>
        </div>
    )
}

export default NewsPage
