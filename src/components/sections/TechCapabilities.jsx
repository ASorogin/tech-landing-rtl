// src/components/sections/TechCapabilities.jsx
import { Boxes, Accessibility, Lightbulb } from 'lucide-react';

const TechCapabilities = () => {
  const capabilities = [
    {
      icon: <Boxes className="w-8 h-8" />,
      title: 'עיצוב תלת מימד',
      description: 'נהפוך את הלוגו שלכם למוצר פיזי חכם'
    },
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: 'נגישות',
      description: 'בעזרת המוצרים שלנו ננגיש לכל אחד את אתרי האינטרנט שלכם'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'פתרונות יצרתיים',
      description: 'שירותי ענן מתקדמים להתייעלות וחיסכון'
    }
  ];

  return (
    <section className="py-20 bg-primary-light text-background" id="capabilities">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">היכולות שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="p-6 bg-primary-dark rounded-lg hover:bg-accent transition-colors duration-300"
            >
              <div className="mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
              <p className="text-background/80">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCapabilities;