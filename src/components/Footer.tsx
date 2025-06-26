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
    <footer className="bg-gray-900 dark:bg-black text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 mt-auto pb-20 sm:pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Brian Masheti</h3>
            <p className="text-gray-400">Data Analyst | Developer</p>
            <p className="text-gray-400 text-sm mt-1">Nairobi, Kenya</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
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
          
          <div className="text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
              <div className="flex justify-center space-x-4 mb-2">
                <a 
                  href="https://github.com/Brian-Masheti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors hover:underline"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/brian-masheti/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors hover:underline"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61554448543753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors hover:underline"
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
                  className="text-gray-400 hover:text-orange-500 transition-colors hover:underline"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1199.61 21.5H973.09L600.5 505.5L227.91 21.5H1.39L489.5 630.5L1.39 1205.5H227.91L600.5 721.5L973.09 1205.5H1199.61L711.5 630.5L1199.61 21.5ZM1017.5 1115.5H927.5L600.5 684.5L273.5 1115.5H183.5L600.5 573.5L1017.5 1115.5Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://discord.com/users/1029123917928992861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors hover:underline"
                  aria-label="Discord"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-xs">Let's connect!</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Brian Masheti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;