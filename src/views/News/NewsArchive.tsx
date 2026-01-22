import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"

interface NewsItem {
  id: number
  title: string
  date: string
  category?: string
  link: string
}

const NewsArchive = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [q, setQ] = useState("")

  useEffect(() => {
    fetch("/press/index.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        setNewsItems(sorted)
      })
  }, [])

  function parseLocalDate(isoDate: string) {
    const [year, month, day] = isoDate.split("-").map(Number)
    return new Date(year, month - 1, day)
  }

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return newsItems

    return newsItems.filter((n) => {
      const haystack = [
        n.title,
        n.date, // permite buscar "2026-01" o "2026"
        n.category ?? "",
      ]
        .join(" ")
        .toLowerCase()

      return haystack.includes(query)
    })
  }, [newsItems, q])

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
        <h2 className="fw-bold m-0">Ediciones anteriores</h2>
        <Link to="/noticias" className="btn btn-outline-success">
          Volver
        </Link>
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          placeholder='Buscar por título, año (ej: "2025"), mes (ej: "2026-01") o categoría...'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="text-secondary small mt-2">
          Mostrando <b>{filtered.length}</b> de <b>{newsItems.length}</b>
        </div>
      </div>

      <div className="list-group shadow-sm">
        {filtered.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3"
          >
            <span className="badge bg-secondary flex-shrink-0">
              {parseLocalDate(item.date).toLocaleDateString("es-AR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>

            <span className="fw-semibold">{item.title}</span>

            {item.category && (
              <span className="badge bg-success ms-auto d-none d-md-inline">
                {item.category}
              </span>
            )}
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="list-group-item py-4 text-center text-secondary">
            No se encontraron noticias con “{q}”.
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsArchive
