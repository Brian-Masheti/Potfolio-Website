
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Services',
      id: 'services',
      dropdown: [
        { name: 'Data Analysis', id: 'data-analysis' },
        { name: 'Software Engineering', id: 'software-engineering' },
        { name: 'Customer Service', id: 'customer-service' },
      ],
    },
    { name: 'Skills', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Book Consultation', id: 'booking' },
    { name: 'Contact', id: 'contact' }
  ];

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  let dropdownTimeout: NodeJS.Timeout;

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => setServicesDropdownOpen(false), 120);
  };

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false); // Auto-close mobile menu
    
    // Update URL for deep linking
    window.history.pushState({}, '', `/#${sectionId}`);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''}` }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center h-10 w-10 p-0 bg-transparent border-none focus:outline-none"
              aria-label="Home"
            >
              {theme === 'dark' ? (
                <img
                  src="/images/logo1.png"
                  alt="Logo Dark"
                  className="h-10 w-10 object-contain transition-all duration-200"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))' }}
                />
              ) : (
                <img
                  src="/images/logo.png"
                  alt="Logo Light"
                  className="h-10 w-10 object-contain transition-all duration-200"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))' }}
                />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      onClick={() => setServicesDropdownOpen((open) => !open)}
                      className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                        currentSection === item.id
                          ? 'text-orange-600 dark:text-orange-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={servicesDropdownOpen}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {servicesDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 z-50 animate-fade-in"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              handleNavClick(sub.id);
                              setServicesDropdownOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-400"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      currentSection === item.id
                        ? 'text-orange-600 dark:text-orange-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" onClick={(e) => e.stopPropagation()}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => setServicesDropdownOpen((open) => !open)}
                      className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors flex items-center gap-1 ${
                        currentSection === item.id
                          ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={servicesDropdownOpen}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 z-50 animate-fade-in">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              handleNavClick(sub.id);
                              setServicesDropdownOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-400"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                      currentSection === item.id
                        ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
