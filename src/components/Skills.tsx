import { Database, Code, BarChart3, Server, Monitor, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Monitor className="h-6 w-6" style={{ color: 'oklch(63.7% 0.237 25.331)' }} />,
      skills: [
        { name: 'React', level: 88 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML5/CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" style={{ color: 'oklch(63.7% 0.237 25.331)' }} />,
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Postman', level: 88 }
      ]
    },
    {
      title: 'Database & Data Tools',
      icon: <Database className="h-6 w-6" style={{ color: 'oklch(63.7% 0.237 25.331)' }} />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'R Studio', level: 80 },
        { name: 'Advanced Excel', level: 95 },
        { name: 'Python (Data Analysis)', level: 85 }
      ]
    },
    {
      title: 'Data Visualization & BI',
      icon: <BarChart3 className="h-6 w-6" style={{ color: 'oklch(63.7% 0.237 25.331)' }} />,
      skills: [
        { name: 'Power BI', level: 90 },
        { name: 'Tableau', level: 85 }
      ]
    },
    {
      title: 'Statistical & Research Tools',
      icon: <Brain className="h-6 w-6" style={{ color: 'oklch(63.7% 0.237 25.331)' }} />,
      skills: [
        { name: 'NVivo', level: 95 },
        { name: 'MAXQDA', level: 92 },
        { name: 'STATA', level: 78 },
        { name: 'SPSS', level: 82 },
        { name: 'Statistical Analysis', level: 88 }
      ]
    },
    {
      title: 'Additional Skills',
      icon: <Code className="h-6 w-6" style={{ color: 'oklch(63.7% 0.237 25.331)' }} />,
      skills: [
        { name: 'Process Improvement', level: 85 },
        { name: 'Report Writing', level: 90 },
        { name: 'Stakeholder Communication', level: 88 },
        { name: 'Requirements Gathering', level: 85 },
        { name: 'Business Analysis', level: 82 },
        { name: 'Financial Modeling', level: 85 },
        { name: 'Market Research', level: 80 }
      ]
    }
  ];

  const interests = [
    { 
      name: 'Machine Learning', 
      description: 'Building intelligent systems and predictive models',
      gradient: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'Deep Learning', 
      description: 'Neural networks and AI model development',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Computer Vision', 
      description: 'Image processing and visual recognition systems',
      gradient: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Full-Stack Development', 
      description: 'End-to-end web application development',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Data Engineering', 
      description: 'Building robust data pipelines and infrastructure',
      gradient: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'Business Intelligence', 
      description: 'Transforming data into actionable business insights',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full-stack development and data analysis expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 lg:p-8 shadow-sm border dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium" style={{ color: 'oklch(63.7% 0.237 25.331)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: 'oklch(63.7% 0.237 25.331)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Interest with Hover Effects */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 lg:p-8 shadow-sm border dark:border-gray-700">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-r ${interest.gradient} text-white rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <h4 className="font-semibold text-base mb-1">{interest.name}</h4>
                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    {interest.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path Section - Optimized for dark/light mode */}
        <div 
          className="mt-8 rounded-lg p-6 lg:p-8 text-center shadow-lg border border-gray-200 dark:border-gray-600"
          style={{ backgroundColor: 'oklch(63.7% 0.237 25.331)' }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white drop-shadow-md">
            Current Learning Path
          </h3>
          <p className="text-lg mb-6 text-white/95 drop-shadow-sm">
            Expanding expertise in MERN Stack Development
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['MongoDB', 'Express.js', 'React', 'Node.js'].map((tech) => (
              <span 
                key={tech}
                className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/40 transition-all duration-200 text-white border border-white/40 shadow-sm hover:shadow-md transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;