import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ArrowLeft, Image, ExternalLink, Calendar, Code, TrendingUp, X } from 'lucide-react';

interface DataAnalysisProps {
  onSectionChange: (section: string) => void;
}

const DataAnalysis = ({ onSectionChange }: DataAnalysisProps) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // List of all project details
  const projects = [
    {
      title: 'Power BI Dashboards',
      description: 'Interactive dashboards for sales data analysis, providing actionable insights through visualizations.',
      type: 'images',
      link: '#',
      details: {
        tools: ['Power BI', 'DAX', 'Power Query', 'Excel'],
        duration: '2 Weeks',
        highlights: [
          'Created interactive sales performance dashboards',
          'Implemented real-time data refresh capabilities',
          'Designed KPI tracking with drill-down functionality',
          'Automated monthly reporting processes'
        ],
        images: [
          '/images/powerbi.png',
          '/images/powerbi1.png',
          '/images/salespersons.png'
        ]
      }
    },
    {
      title: 'COVID-19 Global Data Tracker',
      description: 'A data analysis project visualizing global COVID-19 trends using Python, Pandas, and Plotly.',
      type: 'github',
      link: 'https://github.com/Brian-Masheti/Feb-2025-Python-Sessions.git',
      details: {
        tools: ['Python', 'Pandas', 'Plotly', 'Jupyter'],
        duration: '1 Week',
        highlights: [
          'Analyzed global COVID-19 data from multiple sources',
          'Created interactive visualizations with Plotly',
          'Implemented time-series analysis and forecasting',
          'Generated automated daily reports'
        ]
      }
    },
    {
      title: 'White Wine Quality Prediction',
      description: 'A machine learning project predicting white wine quality using Python and scikit-learn.',
      type: 'github',
      link: 'https://github.com/Brian-Masheti/White-Wine-Quality-Prediction.git',
      details: {
        tools: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        duration: '1 Week',
        highlights: [
          'Built ML models with 85% accuracy',
          'Performed feature engineering and selection',
          'Implemented cross-validation techniques',
          'Created comprehensive model evaluation metrics'
        ]
      }
    },
    {
      title: 'EDA on Client\'s Hiring Info',
      description: 'Exploratory data analysis on hiring data to uncover recruitment patterns.',
      type: 'github',
      link: 'https://github.com/Brian-Masheti/EDA-on-Client-s-Hiring-Info.git',
      details: {
        tools: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
        duration: '4 weeks',
        highlights: [
          'Analyzed hiring patterns across departments',
          'Identified key recruitment bottlenecks',
          'Created data-driven hiring recommendations',
          'Visualized diversity and inclusion metrics'
        ]
      }
    },
    {
      title: 'TAM UCI Analysis',
      description: 'Analysis of UCI datasets to extract actionable insights.',
      type: 'github',
      link: 'https://github.com/Brian-Masheti/TAM-UCI-Analysis.git',
      details: {
        tools: ['Python', 'Pandas', 'Numpy', 'Scikit-learn'],
        duration: '2 weeks',
        highlights: [
          'Performed comprehensive statistical analysis',
          'Applied multiple machine learning algorithms',
          'Generated predictive models with validation',
          'Created detailed analytical reports'
        ]
      }
    },
    {
      title: 'Stock Market Prediction using LSTM',
      description: 'A deep learning project predicting stock prices using LSTM models.',
      type: 'github',
      link: 'https://github.com/Brian-Masheti/Stock-Market-Prdiction-using-the-LSTM.git',
      details: {
        tools: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
        duration: '2 weeks',
        highlights: [
          'Implemented LSTM neural networks',
          'Achieved 78% prediction accuracy',
          'Processed historical stock data',
          'Created real-time prediction pipeline'
        ]
      }
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Data Analysis Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming data into insights with Power BI, Tableau, Python, and SQL
          </p>
        </div>

        {/* Project Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {projects.map((project, index) => (
            <Accordion type="single" collapsible key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow border border-gray-200 dark:border-gray-600">
              {/* Unique value for each item ensures independence */}
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-4">
                  <div className="flex flex-col items-start w-full">
                    <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{project.title}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{project.description}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  {/* Show images only if available */}
                  {project.details.images && (
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {project.details.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} preview ${imgIndex + 1}`}
                          className="w-full h-24 object-cover rounded-md border cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => setModalImage(img)}
                        />
                      ))}
                    </div>
                  )}

                  {/* Duration */}
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    Duration: {project.details.duration}
                  </div>

                  {/* Tools used */}
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

                  {/* Highlights */}
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

                  {/* Button: Either View Images or GitHub */}
                  {project.type === 'images' ? (
                    <Button variant="outline" size="sm" className="w-full mt-4" disabled>
                      <Image className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project on GitHub
                      </a>
                    </Button>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

              </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setModalImage(null)}>
          <div className="relative max-w-full max-h-full p-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setModalImage(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>
            <img
              src={modalImage}
              alt="Enlarged preview"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-900"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DataAnalysis;