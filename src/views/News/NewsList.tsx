import { Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface NewsItem {
    id: number
    title: string
    description: string
    date: string
    category: string
    image: string
    link: string
}

const NewsList = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([])

    useEffect(() => {
        fetch("/press/index.json")
            .then((res) => res.json())
            .then((data) => {
                const sorted = data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                setNewsItems(sorted)
            })
    }, [])

    function parseLocalDate(isoDate: string) {
        const [year, month, day] = isoDate.split("-").map(Number)
        return new Date(year, month - 1, day) // mes base 0
    }

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4 text-center">Noticias</h2>
            <div className="row g-4">
                {newsItems.map((item) => (
                    <div key={item.id} className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img-top"
                                style={{ aspectRatio: "16/9", objectFit: "cover" }}
                            />
                            <div className="card-body justify-content-between d-flex flex-column align-items-start">
                                <span className="badge bg-success mb-2">{item.category}</span>
                                <h5 className="card-title">{item.title}</h5>
                                <div className="d-flex align-items-center gap-2">
                                    <Calendar size={18} />
                                    <span className="small">
                                        {parseLocalDate(item.date).toLocaleDateString("es-AR", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                                <p className="text-secondary">{item.description}</p>
                                <Link to={item.link} className="btn btn-outline-success mt-2">
                                    Leer más
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsList
