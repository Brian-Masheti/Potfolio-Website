
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Code, BarChart3, Users, Lightbulb } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero = ({ onSectionChange }: HeroProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    { text: 'And I deliver data-driven solutions', color: 'text-black dark:text-white' },
    { text: 'And I create powerful visualizations', color: 'text-orange-700 dark:text-orange-300' },
    { text: 'And I build scalable applications', color: 'text-black dark:text-white' },
    { text: 'And I develop full-stack solutions', color: 'text-orange-700 dark:text-orange-300' }
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex].text;
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "MERN stack applications that scale with your business"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Custom dashboards and reporting solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Consulting",
      description: "Strategic guidance for your digital transformation"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-red-300 via-orange-300 to-yellow-200 dark:from-red-900 dark:via-orange-900 dark:to-yellow-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
            <p className="text-lg sm:text-xl mb-2">Hello, My name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Brian Masheti,
            </h1>
            <div className="text-2xl sm:text-3xl mb-8 h-16 flex items-center justify-center">
              <span className={`border-r-2 border-gray-900 dark:border-white animate-pulse ${texts[currentIndex].color}`}>
                {currentText}
              </span>
            </div>
            
            {/* Welcome Message */}
            <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-900/20 dark:border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Welcome, Future Partner! 🚀
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-800 dark:text-white/90">
                Ready to transform your business with cutting-edge technology? I specialize in creating 
                <span className="font-semibold text-orange-800 dark:text-yellow-200"> data-driven solutions</span> and 
                <span className="font-semibold text-orange-800 dark:text-yellow-200"> full-stack applications</span> that 
                drive real results. Whether you need powerful analytics, custom web applications, 
                or strategic insights, I'm here to turn your vision into reality.
              </p>
              <div className="text-lg text-gray-800 dark:text-white/80">
                <strong className="text-orange-800 dark:text-yellow-200">Let's build something amazing together!</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-base px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white transform hover:scale-105 transition-all duration-300"
                onClick={() => onSectionChange('contact')}
              >
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-3 border-2 border-gray-900 dark:border-white bg-transparent text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-orange-600 transition-all duration-300"
                asChild
              >
                <a 
                  href="https://docs.google.com/document/d/1g67a1fhE_TdhCVJZ7I9NjZUc9Cggv_RQ6Sa79Ht7FnI/export?format=pdf" 
                  download="Brian_Masheti_Resume.pdf"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-900/20 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-orange-700 dark:text-yellow-200 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-800 dark:text-white/80 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-800 dark:text-white/90 text-lg mb-4">
            Ready to discuss your next project?
          </p>
          <Button 
            variant="outline"
            className="border-2 border-orange-700 dark:border-yellow-200 text-orange-700 dark:text-yellow-200 hover:bg-orange-700 dark:hover:bg-yellow-200 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
            onClick={() => onSectionChange('services')}
          >
            Explore My Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
