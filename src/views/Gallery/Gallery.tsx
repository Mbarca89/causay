import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';

const Gallery: React.FC = () => {

    const galerias = [
        {
            id: '0',
            titulo: 'Imágenes'
        },
        {
            id: '2',
            titulo: 'Videos'
        },
    ];

    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className="container">
            <div className="flex border-b border-green-500 justify-content-center">
                {galerias.map((galeria, index) => (
                    <button
                    aria-label={galeria.titulo}
                        key={galeria.id}
                        className={`px-4 py-3 text-sm font-medium transition-colors ${activeTab === index
                            ? 'border-b-2 border-green-500 text-green-600'
                            : 'text-gray-600 hover:text-green-500'
                            }`}
                        style={{ backgroundColor: "transparent", border: "none" }}
                        onClick={() => {
                            setActiveTab(index);
                        }}
                    >
                        {galeria.titulo}
                    </button>
                ))}
            </div>
            <div className='container mt-3 mb-5'>
                {activeTab === 0 && (
                    <ImageGallery />
                )}
            </div>
            {activeTab === 1 && (
                <VideoGallery />
            )}
        </div>
    );
};

export default Gallery;