// src/components/Footer.jsx
const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-primary-dark text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-background/90">
                © {currentYear} Tap3D. כל הזכויות שמורות
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-background/90">
              <span>פותח על ידי</span>
              <a 
                href="https://github.com/asorogin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Alon Sorogin
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;