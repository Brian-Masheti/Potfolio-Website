import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Eye, Calendar } from 'lucide-react';

const Resume = () => {
  const downloadLinks = [
    {
      label: 'Download PDF',
      icon: <FileText className="w-4 h-4" />,
      url: 'https://docs.google.com/document/d/1g67a1fhE_TdhCVJZ7I9NjZUc9Cggv_RQ6Sa79Ht7FnI/export?format=pdf',
      filename: 'Brian_Masheti_Resume.pdf',
      description: 'Standard PDF format'
    },
    {
      label: 'Download Word',
      icon: <FileText className="w-4 h-4" />,
      url: 'https://docs.google.com/document/d/1g67a1fhE_TdhCVJZ7I9NjZUc9Cggv_RQ6Sa79Ht7FnI/export?format=docx',
      filename: 'Brian_Masheti_Resume.docx',
      description: 'Microsoft Word format'
    },
    {
      label: 'View Online',
      icon: <Eye className="w-4 h-4" />,
      url: 'https://docs.google.com/document/d/1g67a1fhE_TdhCVJZ7I9NjZUc9Cggv_RQ6Sa79Ht7FnI/edit?usp=sharing',
      description: 'View in Google Docs'
    }
  ];

  const highlights = [
    {
      category: 'Technical Skills',
      items: ['Python', 'JavaScript/TypeScript', 'React', 'SQL', 'Power BI', 'Tableau']
    },
    {
      category: 'Experience',
      items: ['Data Analysis & Visualization', 'Full-Stack Development', 'Business Intelligence', 'Customer Service Excellence']
    },
    {
      category: 'Education',
      items: ['Data Analytics Certification', 'Software Engineering Background', 'Business Analysis Training']
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my latest resume or view it online. Always up-to-date with my current skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Download Section */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center justify-center gap-2">
                <Download className="w-6 h-6" />
                Download Resume
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Get the latest version of my resume
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {downloadLinks.map((link, index) => (
                <div key={index} className="space-y-2">
                  {link.url.includes('export') ? (
                    <a href={link.url} download={link.filename}>
                      <Button 
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white justify-start"
                        size="lg"
                      >
                        {link.icon}
                        {link.label}
                      </Button>
                    </a>
                  ) : (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white justify-start"
                        size="lg"
                      >
                        {link.icon}
                        {link.label}
                      </Button>
                    </a>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    {link.description}
                  </p>
                </div>
              ))}
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mt-6">
                <div className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
                      Always Current
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      This resume is automatically updated whenever I make changes to ensure you always get the latest version.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Highlights */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white">
                Resume Highlights
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Key skills and experience overview
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {highlights.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                      {section.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {section.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-lg mb-6 text-orange-100">
                Download my resume and let's discuss how I can help bring your projects to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://docs.google.com/document/d/1g67a1fhE_TdhCVJZ7I9NjZUc9Cggv_RQ6Sa79Ht7FnI/export?format=pdf" download="Brian_Masheti_Resume.pdf">
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Get My Resume
                  </Button>
                </a>
                <a href="https://docs.google.com/document/d/1g67a1fhE_TdhCVJZ7I9NjZUc9Cggv_RQ6Sa79Ht7FnI/export?format=docx" download="Brian_Masheti_Resume.docx">
                  <Button 
                    size="lg" 
                    className="bg-gray-800 text-white hover:bg-gray-900 border-2 border-gray-800 hover:border-gray-900 w-full sm:w-auto"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Get Word Version
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
