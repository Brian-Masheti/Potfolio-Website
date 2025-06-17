
import { Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

const Footer = ({ onSectionChange }: FooterProps) => {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Book Consultation', id: 'booking' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Brian Masheti</h3>
            <p className="text-gray-400">Data Analyst | Developer</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => onSectionChange(link.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://github.com/Brian-Masheti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/brian-masheti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61554448543753"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Meta (Facebook)"
              >
                <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M20 36C29.3888 36 37 28.3888 37 19C37 9.61116 29.3888 2 20 2C10.6112 2 3 9.61116 3 19C3 28.3888 10.6112 36 20 36Z" fill="#0866FF"/>
                    <path d="M22.5 20.5H25L25.5 17.5H22.5V15.75C22.5 14.96 22.5 14.5 23.5 14.5H25.5V12H23.5C21.0147 12 20.5 13.3431 20.5 15.25V17.5H18.5V20.5H20.5V28H22.5V20.5Z" fill="white"/>
                  </g>
                </svg>
              </a>
              <a
                href="https://x.com/brian_mashetti12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1199.61 21.5H973.09L600.5 505.5L227.91 21.5H1.39L489.5 630.5L1.39 1205.5H227.91L600.5 721.5L973.09 1205.5H1199.61L711.5 630.5L1199.61 21.5ZM1017.5 1115.5H927.5L600.5 684.5L273.5 1115.5H183.5L600.5 573.5L1017.5 1115.5Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Brian Masheti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
