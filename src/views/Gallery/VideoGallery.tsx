import React from "react";

const videos = [
  { id: "m65E6jKhjE4", title: "Centro Educativo Causay / Acto fin de año 2016" },
  { id: "PNV1urh8bcs", title: "Centro Educativo Causay / Acto de fin de año 2010" },
  { id: "Tj1LpC7vYEA", title: "Centro Educativo Causay / Institucional año 2011" },
];

const VideoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map((video, i) => (
        <div key={i} className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
