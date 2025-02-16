// src/components/sections/GallerySection.jsx
import { useState } from 'react';
import instegramAndTikTok from '../../assets/images/instegramAndTikTok.png';
import facebookTag from '../../assets/images/facebookTag.jpeg';
import royBarber from '../../assets/images/royBarber.jpeg';
import symonsTag from '../../assets/images/symonsTag.jpeg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: instegramAndTikTok,
      alt: "תגיות אינסטגרם וטיקטוק",
      title: "רשתות חברתיות"
    },
    {
      id: 2,
      src: facebookTag,
      alt: "תגיות פייסבוק",
      title: "תגיות פייסבוק"
    },
    {
      id: 3,
      src: royBarber,
      alt: "תג לעסק",
      title: "תג לעסק"
    },
    {
      id: 4,
      src: symonsTag,
      alt: "תג הנצחה",
      title: "תג הנצחה"
    }
  ];

  return (
    <section className="py-20 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary-dark mb-12">גלריה</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="relative rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-primary-dark py-2 px-4 rounded-b-lg">
                <h3 className="text-background text-lg font-medium text-center">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-primary-dark/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-10 left-0 text-background text-xl"
              aria-label="סגור"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-background text-center mt-4 text-xl">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;