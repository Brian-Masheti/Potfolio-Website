import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto text-center w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Client Testimonials
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          I'm currently compiling feedback from satisfied clients. Please check back soon for glowing reviews!
        </p>
        
        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Testimonials Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm actively working with clients and will be adding their feedback here soon. 
                In the meantime, feel free to reach out to discuss your project!
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>✨ Quality Work</span>
                <span>⏰ Timely Delivery</span>
                <span>🤝 Professional Service</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Placeholder for future testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 hidden">
          {/* Example Testimonial Card (will be uncommented and populated later) */}
          {/*
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"Brian did an amazing job on our project. Highly recommend!"</p>
            <div className="flex items-center justify-center">
              <img src="/images/placeholder-avatar.png" alt="Client testimonial avatar - Brian Masheti Portfolio" loading="lazy" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Client Name</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Company / Role</p>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;