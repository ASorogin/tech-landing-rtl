// src/components/sections/AboutSection.jsx
const AboutSection = () => {
    return (
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-dark mb-12">מי אנחנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-primary-dark/90">
                אנחנו צוות של מומחי טכנולוגיה שמתמחים בפיתוח פתרונות מותאמים אישית לעסקים
              </p>
              <p className="text-lg text-primary-dark/90">
                הניסיון שלנו מאפשר לנו להבין את האתגרים העסקיים שלך ולספק פתרונות שמתאימים בדיוק לצרכים שלך
              </p>
            </div>
            <div className="bg-primary-light/10 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">הערכים שלנו</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>חדשנות ויצירתיות</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>מקצועיות ואמינות</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>שירות אישי ומותאם</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;