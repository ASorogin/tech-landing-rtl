import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "המוצר חסך לי כל כך הרבה אנרגיה וזמן עם לקוחות, הם מצמידים את הטלפון וישר נמצאים אצלי בעמוד האינסטגרם או בקביעת תורים, הלקוחות ממש מתלהבים מהגאדגט. ממליץ עליהם מאוד , שירות מעולה",
      author: "אלון וויגה",
      position: "בעלים של אקדמיית AV SATRS"
    },
    {
      quote: "איזה כיף כל השבת ויום ראשון חשבתי על זה אתה לא מבין איך אני שמח",
      author: "ליאל כהן",
      position: "מנהל מספרת barbershop cohen"
    },
    {
      quote: "המון תודה, שירות מעולה עיצבו לי מחזיק מפתחות בצורה של רכב עם הלוגו שלי. ממליץ מאוד!!",
      author: "ברוך אזולאי",
      position: "מנכל Uleasing"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary-dark mb-12">לקוחות ממליצים</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Slider container */}
          <div 
            className="overflow-hidden rounded-lg shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${100 * currentIndex}%)` }} // RTL adjustment
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-8 bg-white"
                >
                  <p className="text-xl text-primary-dark/90 mb-6">״{testimonial.quote}״</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-primary-dark">{testimonial.author}</p>
                    <p className="text-sm text-primary-dark/70">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-primary-dark text-background p-2 rounded-full shadow-lg hover:bg-accent transition-colors"
            aria-label="הלקוח הקודם"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-primary-dark text-background p-2 rounded-full shadow-lg hover:bg-accent transition-colors"
            aria-label="הלקוח הבא"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-primary-dark/30'
                }`}
                aria-label={`עבור להמלצה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;