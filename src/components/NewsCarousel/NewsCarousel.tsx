import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import "./NewsCarousel.css"
import { useNavigate } from "react-router-dom"

interface NewsItem {
  id: number
  title: string
  description: string
  date: string
  category: string
  image: string
  link: string
}

const NewsCarousel = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/press/index.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        setNewsItems(sorted.slice(0, 4))
      })
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  if (newsItems.length === 0) {
    return (
      <div className="news-carousel-container py-5 text-center">
        <p className="text-muted">Cargando noticias...</p>
      </div>
    )
  }

  const currentNews = newsItems[currentIndex]

  function parseLocalDate(isoDate: string) {
    const [year, month, day] = isoDate.split("-").map(Number)
    return new Date(year, month - 1, day)
  }

  return (
    <div className="news-carousel-container py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Novedades</h2>
          <p className="text-muted">
            Mantente informado sobre las últimas actividades y eventos de nuestra comunidad educativa
          </p>
        </div>

        <div
          className="position-relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="row align-items-center g-4"
            >
              {/* Image Section */}
              <div className="col-lg-6">
                <div className="news-image-wrapper rounded-4 overflow-hidden shadow-lg">
                  <img
                    src={currentNews.image || "/placeholder.svg"}
                    alt={currentNews.title}
                    className="w-100 h-100 object-fit-cover"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-6">
                <div className="news-content p-4" style={{ minHeight: "400px" }}>
                  <span className="badge bg-success mb-3 px-3 py-2">{currentNews.category}</span>

                  <h3 className="fw-bold mb-3">{currentNews.title}</h3>

                  <p className="text-muted mb-4 lead">{currentNews.description}</p>

                  <div className="d-flex align-items-center gap-4 text-muted mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={18} />
                      <span className="small">
                        {parseLocalDate(currentNews.date).toLocaleDateString("es-AR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <button onClick={()=> navigate(currentNews.link)} className="btn btn-success px-4 py-2">Leer más</button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button onClick={handlePrev} className="carousel-nav-btn carousel-nav-prev" aria-label="Noticia anterior">
            <ChevronLeft size={24} />
          </button>

          <button onClick={handleNext} className="carousel-nav-btn carousel-nav-next" aria-label="Siguiente noticia">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`Ir a noticia ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsCarousel
