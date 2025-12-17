import { useState } from "react";

const videos = [
    { id: "XHvO23Iya9Q", title: "Profes y alumnos del taller de folklore del Causay en Gracias por Estar" },
    { id: "YTDX9xBJXLU", title: "Liliana Freysz y Rosa Pereyra, integrantes del club de abuelos del Causay en Gracias por Estar" },
    { id: "hFPGxaRYMsw", title: "¡Celebremos juntos! Cumplimos nuestro 40 Aniversario!" },
    { id: "bxNeby3md3M", title: "Bienvenidos a Causay / Recorrido virtual" },
    { id: "n3ssF6iz3yI", title: "Acto artístico 2019 / Centro Educativo Causay" },
    { id: "qOYeWYK3SZ8", title: "Entrevista a Silvina Lemme/ Exalumna de Causay / Promoción 1997 /Centro Educativo Causay" },
    { id: "PBjV1UBbEDY", title: "Entrevista a Candela Algozino / Exalumna de Causay / Promoción 2018 /Centro Educativo Causay" },
    { id: "4azmJdTPzgE", title: "Entrevista a Natalia Landart / Exalumna de Causay / Promoción 1996 /Centro Educativo Causay" },
    { id: "rWVhtPztu5M", title: "Entrevista a Pablo Meirovich / Exalumno de Causay / Promoción 1994 /Centro Educativo Causay" },
    { id: "zd4DZjjNBEg", title: "Entrevista a Natalia Calviño / Exalumna de Causay / Promoción 1992 /Centro Educativo Causay" },
    { id: "6HUqd80nsHE", title: "Entrevista a Juan Pablo Algozino / Exalumno de Causay / Promoción 1993 /Centro Educativo Causay" },
    { id: "gZJ2G1TdLjU", title: "Clase abierta de Yoga / Yoga / Centro Educativo Causay" },
    { id: "TAOEPHGLsZM", title: "Fusionarte / Jornada de la Expresión / Acto artístico / Centro Educativo Causay" },
    { id: "uPx4sxKu3RI", title: "Arte en movimiento / Centro Educativo Causay" },
    { id: "xbtiirbfK9g", title: "Alimentacion Inteligente / Centro Educativo Causay" },
    { id: "RfKQT2YghLg", title: "Centro Educativo Causay / 30 años Causay" },
    { id: "haYdlLu-UlM", title: "Centro Educativo Causay / 35 años" },
    { id: "1jTefjSBx-g", title: "Centro Educativo Causay / Somos energía y evolución" },
    { id: "oV3pow6cNfA", title: "Centro Educativo Causay / Tranquilidad" },
    { id: "SDF5GtttusA", title: "Centro Educativo Causay / Perseverancia" },
    { id: "CC6ftl9fcIA", title: "Centro Educativo Causay / Salud" },
    { id: "jSiRosljjr8", title: "Centro Educativo Causay / Solidaridad" },
    { id: "wNS6bTg6qk4", title: "Centro Educativo Causay / Contacto" },
    { id: "4UwsqHBAMTQ", title: "Centro Educativo Causay / Confianza" },
    { id: "yY_KA_Q0_Hs", title: "Centro Educativo Causay / Comunicación" },
    { id: "85lC1a5dIEg", title: "Centro Educativo Causay / Respeto" },
    { id: "vCB_KCLOFLw", title: "Centro Educativo Causay / Educación Secundaria" },
    { id: "xQeSNSwuJmM", title: "Centro Educativo Causay / Educación Primaria" },
    { id: "uBAfJeGkAkg", title: "Centro Educativo Causay / Educación Inicial" },
    { id: "SPcBhES80fo", title: "Centro Educativo Causay / Reciclamodas 2011" },
    { id: "jU2aBz3wPd8", title: "Centro Educativo Causay / Programa Transversal Yoga" },
    { id: "JyXDjc6agbI", title: "Centro Educativo Causay / Yoga" },
    { id: "Tj1LpC7vYEA", title: "Centro Educativo Causay / Institucional año 2011" },
    { id: "PNV1urh8bcs", title: "Centro Educativo Causay / Acto de fin de año 2010" },
    { id: "m65E6jKhjE4", title: "Centro Educativo Causay / Acto fin de año 2016" },
];

const VideoGallery = () => {
    const [activeVideo, setActiveVideo] = useState(videos[0]);
    const [autoPlay, setAutoPlay] = useState(false);

    const handleVideoChange = (video: typeof activeVideo) => {
        setActiveVideo(video);
        setAutoPlay(true); // activa autoplay al hacer clic
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Visor principal */}
            <div className="w-full aspect-video">
                <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=${autoPlay ? 1 : 0}&rel=0`}
                    title={activeVideo.title}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-md w-full h-full"
                />
            </div>

            {/* Miniaturas con título */}
            <div className="flex gap-4 overflow-x-auto pb-2 mt-2 mb-5">
                {videos.map((video, i) => (
                    <div
                        key={i}
                        className={`flex-shrink-0 w-40 cursor-pointer transition duration-200 opacity-80 hover:opacity-100 ${activeVideo.id === video.id
                                    ? "opacity-100"
                                    : ""
                                }`}
                        onClick={() => handleVideoChange(video)}
                    >
                        <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className={`mt-1 rounded-md w-full aspect-video object-cover  ${activeVideo.id === video.id
                                    ? "ring-2 ring-green-500 scale-105"
                                    : ""
                                }`}
                        />
                        <p className={`text-sm text-center mt-1 ${activeVideo.id === video.id
                                    ? "text-dark"
                                    : ""
                                }`}>{video.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
