import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ArrowLeft, ExternalLink, Calendar, Code, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface SoftwareEngineeringProps {
  onSectionChange: (section: string) => void;
}

const SoftwareEngineering = ({ onSectionChange }: SoftwareEngineeringProps) => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    {
      title: 'Brian Masheti Portfolio',
      description: 'A modern, responsive PWA portfolio website built with React, TypeScript, Vite, and Tailwind CSS.',
      githubLink: 'https://github.com/Brian-Masheti/Brian-Masheti-Portfolio',
      liveDemo: 'https://brian-masheti.netlify.app/',
      details: {
        tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA', 'Service Worker'],
        duration: '2 weeks (ongoing, continuously updated)',
        highlights: [
          'Installable PWA with offline support',
          'Modern UI/UX with dark/light mode',
          'Interactive chat and contact form',
          'Google Analytics integration',
          'Fully responsive and accessible',
          'Deployed on Netlify',
          'Continuously improved with new features'
        ]
      }
    },
    {
      title: 'Library Management System',
      description: 'A full-featured database management system for libraries built using MySQL.',
      githubLink: 'https://github.com/Brian-Masheti/Library-Management-System.git',
      details: {
        tools: ['MySQL', 'Database Design', 'SQL', 'ERD'],
        duration: '4 weeks',
        highlights: [
          'Designed comprehensive database schema',
          'Implemented book borrowing and return system',
          'Created user management functionality',
          'Built reporting and analytics features'
        ]
      }
    },
    {
      title: 'Daclin Store',
      description: 'A fully functional e-commerce web application with responsive design.',
      githubLink: 'https://github.com/Brian-Masheti/Web-Development-V2.git',
      liveDemo: 'https://plp-webtechnologies.github.io/feb-2025-final-project-and-deployment-Brian-Masheti/',
      details: {
        tools: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        duration: '4 weeks',
        highlights: [
          'Built responsive e-commerce interface',
          'Implemented shopping cart functionality',
          'Created product catalog with search',
          'Deployed live demo with GitHub Pages'
        ]
      }
    },
    {
      title: 'ShopEase',
      description: 'An e-commerce platform focusing on user-friendly shopping experiences with HTML, CSS, and JavaScript.',
      githubLink: 'https://github.com/Brian-Masheti/Web-Development-V2.git',
      details: {
        tools: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design'],
        duration: '1 weeks',
        highlights: [
          'Focused on user experience design',
          'Implemented modern UI components',
          'Created interactive shopping features',
          'Optimized for mobile devices'
        ]
      }
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Software Engineering Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building robust applications with MERN stack and full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <HoverCard open={openCards.includes(index)} onOpenChange={(open) => !open && setOpenCards(prev => prev.filter(i => i !== index))}>
                <HoverCardTrigger asChild>
                  <Card 
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600 hover:scale-105"
                    onClick={() => toggleCard(index)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                      {project.liveDemo && (
                        <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                
                <HoverCardContent className="w-96 p-4" side="top">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      Duration: {project.details.duration}
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <Code className="mr-2 h-4 w-4" />
                        Tools & Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.details.tools.map((tool, toolIndex) => (
                          <span 
                            key={toolIndex}
                            className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Key Highlights:
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.details.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => onSectionChange('services')}
            className="text-white hover:opacity-90"
            style={{ backgroundColor: 'oklch(54.1% 0.281 293.009)' }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareEngineering;