
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Code, Users } from 'lucide-react';

interface ServicesProps {
  onSectionChange: (section: string) => void;
}

const Services = ({ onSectionChange }: ServicesProps) => {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-500" />,
      title: 'Data Analysis',
      description: 'Transforming data into insights with Power BI, Tableau, Python, and SQL.',
      page: 'data-analysis'
    },
    {
      icon: <Code className="h-12 w-12 text-orange-500" />,
      title: 'Software Engineering',
      description: 'Building robust applications with MERN stack and full-stack development.',
      page: 'software-engineering'
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: 'Customer Service',
      description: 'Enhancing support through scheduling and data management.',
      page: 'customer-service'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for your data and development needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl sm:text-2xl dark:text-white">{service.title}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={() => onSectionChange(service.page)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
