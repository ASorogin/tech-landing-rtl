const SocialProof = () => {
    const testimonials = [
      {
        quote: " השירות שלכם ברמה הכי גבוהה שפגשתי אין אנשים שכל כך אכפת להם מהלקוחות שלהם היום",
        author: "רועי לוי",
        position: "מנהל מספרת roy levy barber"
      },
      {
        quote: "איזה כיף כל השבת ויום ראשון חשבתי על זה אתה לא מבין איך אני שמח",
        author: "ליאל כהן",
        position: "מנהל מספרת barbershop cohen"
      },
      {
        quote: "רציתי לאמר המון תודה, אני נדהם מהעלייה בלקוחות החוזרים מאז שהתחלתי לחלק את המחזיקי מפתחות לכל לקוח",
        author: "ברוך אזולאי",
        position: "מנהל Uleasing"
      }
    ];
  
    return (
      <section className="py-20 bg-background" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-dark mb-12">לקוחות ממליצים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <p className="text-lg text-primary-dark/90 mb-4">״{testimonial.quote}״</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-primary-dark">{testimonial.author}</p>
                  <p className="text-sm text-primary-dark/70">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SocialProof;