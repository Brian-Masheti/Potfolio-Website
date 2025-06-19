import { useState } from 'react';
import { ExternalLink, GraduationCap, Award, Calendar, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  const [openDetail, setOpenDetail] = useState<number | null>(null);
  const [hoveredDetail, setHoveredDetail] = useState<number | null>(null);
  const [popoverHover, setPopoverHover] = useState<number | null>(null);

  const education = [
    {
      institution: 'Power Learn Project (PLP)',
      degree: 'Full Stack Developer (MERN Specialization)',
      period: 'February 2025 – Ongoing',
      status: 'current',
      mern: true
    },
    {
      institution: 'Taita Taveta University',
      location: 'Voi, Kenya',
      degree: 'Bachelor of Science in Statistics',
      period: 'September 2017 – September 2022',
      status: 'completed'
    }
  ];

  const certifications = [
    {
      name: 'Virtual Assistant Course',
      provider: 'ALX Africa',
      year: '2024'
    },
    {
      name: 'Business Intelligence & Data Analyst (BIDA®)',
      provider: 'Corporate Finance Institute',
      year: '2023'
    },
    {
      name: 'Financial Modelling & Valuation Analyst (FMVA®)',
      provider: 'Corporate Finance Institute',
      year: '2022'
    },
    {
      name: 'Data Analysis in Excel',
      provider: 'Corporate Finance Institute',
      year: '2022'
    }
  ];

  // Helper to determine if device is mobile (simple check)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // For desktop: keep details open if mouse is over card or popover
  const isDesktopDetailOpen = (index: number) => {
    return hoveredDetail === index || popoverHover === index;
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Transforming Data into Digital Solutions | Full-Stack Developer & Analytics Expert
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  <strong>Dynamic Full-Stack Developer and Data Analytics Specialist</strong> with 3+ years of proven expertise in transforming complex business challenges into scalable digital solutions. I bridge the gap between data science and modern web development, delivering measurable results that drive business growth.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  <strong>Technical Excellence:</strong> Proficient in the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack development, combined with advanced analytics using SQL, Python, R, and Power BI. My unique blend of statistical background and modern development skills enables me to create data-driven applications that solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  <strong>Business Impact:</strong> Specialized in financial modeling, business intelligence, and process optimization. I excel at stakeholder communication, requirements gathering, and translating complex technical concepts into actionable business insights that drive strategic decision-making.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  <strong>Client-Focused Approach:</strong> Whether building responsive web applications, conducting deep-dive data analysis, or providing strategic consulting, I deliver solutions that are not only technically sound but also aligned with business objectives and user needs.
                </p>
              </div>

              {/* Achievements Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-6">
                <div className="flex items-center gap-2 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-4 py-2 rounded-full font-semibold shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" /></svg>
                  100+ Projects Completed
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2 rounded-full font-semibold shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0a9 9 0 0118 0z" /></svg>
                  3+ Years of Experience
                </div>
              </div>

              <hr className="border-orange-500 dark:border-orange-400" />
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Mission & Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  <strong>Mission:</strong> To empower businesses of all sizes with cutting-edge technology solutions and data-driven insights that are both affordable and accessible, fostering growth and innovation in the digital economy.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  <strong>Vision:</strong> To be a leading technology consultant and full-stack developer by 2030, recognized for bridging the gap between advanced analytics and intuitive web experiences that drive meaningful business transformation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 animate-spin" style={{ animation: 'spin 4s linear infinite' }}></div>
              
              {/* Inner rotating ring */}
              <div className="absolute inset-2 w-60 h-60 sm:w-76 sm:h-76 lg:w-92 lg:h-92 rounded-full border-4 border-transparent bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 animate-spin" style={{ animation: 'spin 6s linear infinite reverse' }}></div>
              
              {/* Avatar container */}
              <div className="relative z-10 m-2">
                <Avatar className="w-60 h-60 sm:w-76 sm:h-76 lg:w-92 lg:h-92 shadow-2xl ring-4 ring-white dark:ring-gray-800">
                  <AvatarImage 
                    src="/images/img.png"
                    alt="About Me"
                    className="object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                    BM
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const isOpen = openDetail === index;
              const isHovered = hoveredDetail === index;
              const isPopover = popoverHover === index;
              const showDesktopPopover = isHovered || isPopover;
              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 group relative overflow-visible cursor-pointer`}
                  tabIndex={0}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setOpenDetail(isOpen ? null : index);
                    }
                  }}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 768) {
                      setHoveredDetail(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 768) {
                      // Only close if not hovering popover
                      setTimeout(() => {
                        if (popoverHover !== index) setHoveredDetail(null);
                      }, 50);
                    }
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-6 w-6 text-orange-500" />
                      <CardTitle className="text-lg dark:text-white">{edu.institution}</CardTitle>
                    </div>
                    {edu.location && (
                      <CardDescription className="dark:text-gray-300">{edu.location}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                      {edu.status === 'current' && (
                        <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full text-xs">
                          Ongoing
                        </span>
                      )}
                    </div>
                    {/* MERN Stack Creative Section */}
                    {edu.mern && (
                      <div>
                        <div className="relative w-full h-40 sm:h-48 mb-2 rounded-lg overflow-hidden">
                          <img src="/images/mern.avif" alt="MERN Stack Class" className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-900" style={{objectPosition: 'center'}} />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-xs font-semibold">See what I'm learning!</span>
                          </div>
                        </div>
                        {/* Details overlay: mobile (openDetail), desktop (hoveredDetail or popoverHover) */}
                        {/* Mobile overlay */}
                        <div className={`mt-2 text-sm text-gray-700 dark:text-gray-200 fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}
                          style={{borderRadius: isOpen ? '12px' : undefined}}>
                          <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 relative">
                            <button
                              className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={e => { e.stopPropagation(); setOpenDetail(null); }}
                              aria-label="Close"
                            >
                              <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                            </button>
                            <b>Full-Stack Web Development – MERN Stack</b><br />
                            Mastering the complete lifecycle of modern web apps: <b>MongoDB</b> (data modeling), <b>Express.js</b> (APIs), <b>React.js</b> (UI/UX), <b>Node.js</b> (backend), <b>Socket.io</b> (real-time), <b>DevOps</b> (deployment).
                            <ul className="list-disc pl-5 mt-2">
                              <li>Hands-on projects: e-commerce, real-time tools</li>
                              <li>Secure authentication, API integration, CI/CD</li>
                              <li>Capstone: Build and present a full-scale MERN app</li>
                            </ul>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-2">Gaining practical experience with the latest in full-stack development.</span>
                          </div>
                        </div>
                        {/* Desktop floating card */}
                        <div
                          className={`hidden md:block absolute left-1/2 top-full z-30 w-[420px] max-w-lg -translate-x-1/2 mt-2 pointer-events-auto ${showDesktopPopover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                          style={{filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.15))'}}
                          onMouseEnter={() => setPopoverHover(index)}
                          onMouseLeave={() => setPopoverHover(null)}
                          role="dialog" aria-modal="true" aria-label="MERN Stack Details"
                        >
                          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-base">
                            <b>Full-Stack Web Development – MERN Stack</b><br />
                            Mastering the complete lifecycle of modern web apps: <b>MongoDB</b> (data modeling), <b>Express.js</b> (APIs), <b>React.js</b> (UI/UX), <b>Node.js</b> (backend), <b>Socket.io</b> (real-time), <b>DevOps</b> (deployment).
                            <ul className="list-disc pl-5 mt-2">
                              <li>Hands-on projects: e-commerce, real-time tools</li>
                              <li>Secure authentication, API integration, CI/CD</li>
                              <li>Capstone: Build and present a full-scale MERN app</li>
                            </ul>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-2">Gaining practical experience with the latest in full-stack development.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Taita Taveta University Details on Hover/Click */}
                    {edu.institution === 'Taita Taveta University' && (
                      <>
                        {/* Mobile overlay */}
                        <div className={`mt-2 text-sm text-gray-700 dark:text-gray-200 fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}
                          style={{borderRadius: isOpen ? '12px' : undefined}}>
                          <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 relative">
                            <button
                              className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={e => { e.stopPropagation(); setOpenDetail(null); }}
                              aria-label="Close"
                            >
                              <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                            </button>
                            <b>BSc. in Statistics, Taita Taveta University</b><br />
                            Graduated with a strong foundation in both quantitative analysis and data-driven decision-making. I have applied my academic training to real-world scenarios and now produce professional, insight-driven reports based on the data I collect and analyze.
                            <ul className="list-disc pl-5 mt-2">
                              <li><b>Data Analysis & Reporting:</b> Experienced in analyzing data and writing actionable reports for real-world projects.</li>
                              <li><b>Statistical Tools:</b> Skilled in <b>R</b>, <b>SPSS</b>, <b>STATA</b>, and <b>Excel</b> for quantitative analysis.</li>
                              <li><b>Qualitative Analysis:</b> Proficient in <b>NVivo</b> for coding and analyzing interviews and qualitative data.</li>
                              <li><b>Data Collection:</b> Hands-on experience with <b>KoboToolbox/ODK</b> and <b>Qualtrics</b> for digital survey design and field data collection.</li>
                              <li><b>Statistical Modeling:</b> Knowledgeable in regression, time series, probability, and inferential statistics.</li>
                              <li><b>Research Methods:</b> Able to design, execute, and report on academic and applied research projects.</li>
                            </ul>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-2">Professional, insight-driven reporting based on real-world data.</span>
                          </div>
                        </div>
                        {/* Desktop floating card */}
                        <div
                          className={`hidden md:block absolute left-1/2 top-full z-30 w-[420px] max-w-lg -translate-x-1/2 mt-2 pointer-events-auto ${showDesktopPopover ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                          style={{filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.15))'}}
                          onMouseEnter={() => setPopoverHover(index)}
                          onMouseLeave={() => setPopoverHover(null)}
                          role="dialog" aria-modal="true" aria-label="Taita Taveta University Details"
                        >
                          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-base">
                            <b>Academic Background – BSc. in Statistics, Taita Taveta University</b><br />
                            Graduated with a strong foundation in both quantitative analysis and data-driven decision-making. I have applied my academic training to real-world scenarios and now produce professional, insight-driven reports based on the data I collect and analyze.
                            <ul className="list-disc pl-5 mt-2">
                              <li><b>Data Analysis & Reporting:</b> Experienced in analyzing data and writing actionable reports for real-world projects.</li>
                              <li><b>Statistical Tools:</b> Skilled in <b>R</b>, <b>SPSS</b>, <b>STATA</b>, and <b>Excel</b> for quantitative analysis.</li>
                              <li><b>Qualitative Analysis:</b> Proficient in <b>NVivo</b> for coding and analyzing interviews and qualitative data.</li>
                              <li><b>Data Collection:</b> Hands-on experience with <b>KoboToolbox/ODK</b> and <b>Qualtrics</b> for digital survey design and field data collection.</li>
                              <li><b>Statistical Modeling:</b> Knowledgeable in regression, time series, probability, and inferential statistics.</li>
                              <li><b>Research Methods:</b> Able to design, execute, and report on academic and applied research projects.</li>
                            </ul>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-2">Professional, insight-driven reporting based on real-world data.</span>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 px-6 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white w-full sm:w-auto text-center">
              Certifications
            </h3>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto text-sm sm:text-base border-orange-500 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
            >
              <a 
                href="https://www.credential.net/profile/brianmasheti/wallet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View All Certificates
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
                onMouseEnter={() => {
                  setPopoverHover(null);
                  setHoveredDetail(null);
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-6 w-6 text-orange-500" />
                    <CardTitle className="text-lg dark:text-white">{cert.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.provider}</p>
                  <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                    {cert.year}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
