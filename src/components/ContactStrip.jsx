// src/components/ContactStrip.jsx
import { MessageCircle, Phone, Instagram, Mail } from 'lucide-react';

const ContactStrip = () => {
  const contactMethods = [
    {
      id: 'whatsapp',
      icon: <MessageCircle size={24} />,
      href: 'https://wa.me/0506378303',
      ariaLabel: 'פתח WhatsApp',
      target: '_blank'
    },
    {
      id: 'phone',
      icon: <Phone size={24} />,
      href: 'tel:0506378303',
      ariaLabel: 'התקשר אלינו'
    },
    {
      id: 'instagram',
      icon: <Instagram size={24} />,
      href: 'https://instagram.com/tap3d.il',
      ariaLabel: 'עקוב אחרינו באינסטגרם',
      target: '_blank'
    },
    {
      id: 'email',
      icon: <Mail size={24} />,
      href: 'mailto:Tap3D@outlook.co.il',
      ariaLabel: 'שלח לנו מייל'
    }
  ];

  return (
    <div 
      className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-background/90 backdrop-blur-sm p-2 rounded-lg shadow-lg z-50"
      role="region"
      aria-label="אפשרויות יצירת קשר"
    >
      <div className="flex flex-col gap-2">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.href}
            target={method.target}
            rel={method.target === '_blank' ? 'noopener noreferrer' : undefined}
            aria-label={method.ariaLabel}
          >
            <div className="p-2 rounded-lg bg-primary-dark text-background hover:bg-accent transition-colors duration-300">
              {method.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactStrip;