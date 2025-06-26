import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ArrowLeft, CheckCircle, Calendar, Users, TrendingUp, Award, Phone, FileText, Globe, Building } from 'lucide-react';

interface CustomerServiceProps {
  onSectionChange: (section: string) => void;
}

const CustomerService = ({ onSectionChange }: CustomerServiceProps) => {
  const serviceProjects = [
    {
      title: 'Virtual Assistant & Data Analyst',
      company: 'UpWork',
      description: 'Provided comprehensive virtual assistance and data analysis services.',
      icon: <Globe className="h-8 w-8" style={{ color: 'oklch(62.3% 0.214 259.815)' }} />,
      details: {
        skills: ['Report Writing', 'Data Analysis', 'Excel Optimization', 'Xero Management', 'File Management'],
        impact: 'Reduced administrative delays',
        highlights: [
          'Submitted weekly reports',
          'Conducted data analysis and created detailed reports',
          'Developed and optimized Excel and Google Sheets formulas',
          'Managed files using Dropbox for seamless collaboration',
          'Used Xero for financial data management',
          'Supported home loans, debt consolidation, and insurance tasks'
        ]
      }
    },
    {
      title: 'Call Center Operations',
      company: 'CCI Kenya, Nairobi',
      description: 'Managed customer communications and resolved inquiries with excellence.',
      icon: <Phone className="h-8 w-8" style={{ color: 'oklch(62.3% 0.214 259.815)' }} />,
      details: {
        skills: ['Customer Service', 'CRM Management', 'Problem Resolution', 'Product Knowledge'],
        impact: 'Enhanced customer satisfaction',
        highlights: [
          'Managed inbound and outbound calls effectively',
          'Addressed customer inquiries and resolved complaints',
          'Provided comprehensive product information and troubleshooting',
          'Handled escalation for complex issues professionally',
          'Logged customer interactions accurately in CRM system',
          'Ensured timely follow-ups for customer satisfaction'
        ]
      }
    },
    {
      title: 'Virtual Assistant & Administrative Support',
      company: 'Freelancer.com',
      description: 'Provided administrative support for elderly care organization with precision.',
      icon: <Users className="h-8 w-8" style={{ color: 'oklch(62.3% 0.214 259.815)' }} />,
      details: {
        skills: ['Administrative Support', 'Schedule Coordination', 'Email Management', 'Travel Planning'],
        impact: 'Streamlined operations',
        highlights: [
          'Drafted professional correspondence for organization',
          'Coordinated schedules for elderly care services',
          'Organized client appointments with attention to detail',
          'Maintained detailed records and documentation',
          'Managed email communications efficiently',
          'Supported travel planning and coordination with service providers'
        ]
      }
    },
    {
      title: 'Assistant Project Coordinator',
      company: 'Silvertech Networks Limited',
      description: 'Coordinated project activities and facilitated team communication.',
      icon: <Building className="h-8 w-8" style={{ color: 'oklch(62.3% 0.214 259.815)' }} />,
      details: {
        skills: ['Project Coordination', 'Team Communication', 'Resource Management', 'Task Management'],
        impact: 'Improved project efficiency',
        highlights: [
          'Delivered detailed progress reports to stakeholders',
          'Facilitated effective communication between teams',
          'Coordinated tools and resources for timely task completion',
          'Maintained schedules and monitored project deadlines',
          'Used task management tools for project tracking',
          'Ensured seamless workflow and resource allocation'
        ]
      }
    }
  ];

  const keyAchievements = [
    {
      metric: '20%',
      description: 'Office Efficiency Improvement',
      detail: 'Streamlined scheduling and appointment coordination'
    },
    {
      metric: '100%',
      description: 'Data Entry Accuracy',
      detail: 'Maintained perfect accuracy in digital record management'
    },
    {
      metric: '85%',
      description: 'Conflict Reduction',
      detail: 'Reduced scheduling conflicts through improved processes'
    },
    {
      metric: '2+',
      description: 'Years Experience',
      detail: 'Virtual assistance and administrative support'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Service & Administrative Excellence
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real projects and achievements in virtual assistance, customer service, and administrative support
          </p>
        </div>

        {/* Professional Summary moved here */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Professional Summary
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto">
            Detail-oriented Administrative Assistant with over two years of experience in virtual assistance, 
            data analysis, and administrative support. Skilled in report writing, scheduling, data management, 
            and spreadsheet optimization using Excel and Google Sheets. Experienced in handling administrative 
            tasks, coordinating appointments, and managing digital records efficiently. Adept at multitasking, 
            ensuring accuracy, and meeting deadlines in remote work environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {serviceProjects.map((project, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
                    <CardDescription className="dark:text-gray-300 font-medium text-sm" style={{ color: 'oklch(62.3% 0.214 259.815)' }}>
                      {project.company}
                    </CardDescription>
                    <CardDescription className="dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="inline-flex items-center px-3 py-1 text-white text-sm rounded-full" style={{ backgroundColor: 'oklch(62.3% 0.214 259.815)' }}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      {project.details.impact}
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              
              <HoverCardContent className="w-96 p-4" side="top">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm font-medium mb-2" style={{ color: 'oklch(62.3% 0.214 259.815)' }}>
                      {project.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <Award className="mr-2 h-4 w-4" />
                    Status: {project.details.impact}
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <Users className="mr-2 h-4 w-4" />
                      Key Skills:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.details.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 text-white text-xs rounded-full"
                          style={{ backgroundColor: 'oklch(62.3% 0.214 259.815)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Key Responsibilities:
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.details.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="mr-2" style={{ color: 'oklch(62.3% 0.214 259.815)' }}>•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Key Achievements moved to the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {keyAchievements.map((achievement, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold mb-1" style={{ color: 'oklch(62.3% 0.214 259.815)' }}>
                {achievement.metric}
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                {achievement.description}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {achievement.detail}
              </div>
            </div>
          ))}
        </div>

              </div>
    </section>
  );
};

export default CustomerService;