// src/components/sections/HeroSection.jsx
import logo from '../../assets/images/logo.PNG?url';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] bg-primary-dark text-background flex items-center relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 bg-primary-dark">
        <div className="absolute inset-0 opacity-30 animate-gradient"
          style={{
            background: `linear-gradient(135deg, 
              #222831 25%, 
              #00ADB5 50%, 
              #393E46 75%
            )`,
            backgroundSize: '400% 400%',
          }}
        />
        
        {/* Tech grid overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 173, 181, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 173, 181, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-primary-light/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="md:order-2 flex justify-center mb-8 md:mb-0">
            <img 
              src={logo} 
              alt="TAP3D Logo" 
              className="w-64 h-auto object-contain" 
            />
          </div>
          
          {/* Text Section */}
          <div className="md:order-1 flex flex-col gap-8 max-w-2xl">
            <h1 className="text-6xl font-bold">
            <span className="text-accent block mt-2">Tap3D,</span>
             נגיעה אחת, אינסוף אפשרויות – פתרונות טכנולוגיים בתלת-ממד 
              <span className="text-accent block mt-2">לעסק שלך!</span>
            </h1>
            <p className="text-xl text-background/90">
            אנחנו מספקים עיצוב מחזיקי מפתחות חכמים בהתאמה אישית, תגים חכמים לדלפקים, פתיחת תפריטים במסעדות והנגשת דפי אינטרנט למבוגרים המתקשים עם טכנולוגיה – הכל בלחיצה אחת באמצעות NFC, לחיבור קל, מהיר ונגיש לעולם הדיגיטלי.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="mailto:Tap3D@outlook.co.il" 
                className="bg-accent hover:bg-accent/90 text-background px-8 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                צור קשר עכשיו
              </a>
              <a 
                href="#gallery" 
                className="border border-background hover:bg-background/10 text-background px-8 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                גלריה
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;