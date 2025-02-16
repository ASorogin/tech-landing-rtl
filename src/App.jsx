// src/App.jsx
import { Helmet } from 'react-helmet';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TechCapabilities from './components/sections/TechCapabilities';
import GallerySection from './components/sections/GallerySection';
import SocialProof from './components/sections/SocialProof';
import ContactStrip from './components/ContactStrip';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Helmet>
        <html lang="he" dir="rtl" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#222831" />
        <title>Tap3D - פתרונות טכנולוגיים בתלת מימד</title>
      </Helmet>
      <div className="min-h-screen bg-background font-assistant text-primary-dark flex flex-col">
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <TechCapabilities />
          <GallerySection />
          <SocialProof />
        </main>
        <ContactStrip />
        <Footer />
      </div>
    </>
  );
}

export default App;