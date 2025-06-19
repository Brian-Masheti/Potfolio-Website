
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Sending message...');

    // Initialize EmailJS with your public key
    emailjs.init('XznZdfoTxtXcFDNb1');

    try {
      const response = await emailjs.send('service_6j4s8s4', 'template_lw7yq2x', {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        date: '', // Not applicable for contact form
        time: '', // Not applicable for contact form
        message: formData.message
      });
      
      console.log('EmailJS Success:', response);
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="https://wa.me/254741754002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 text-sm sm:text-base hover:text-orange-500 transition-colors flex items-center gap-1"
                >
                  +254 741 754 002
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="mailto:savatiabrian92@gmail.com"
                  className="text-gray-700 dark:text-gray-300 text-sm sm:text-base hover:text-orange-500 transition-colors"
                >
                  savatiabrian92@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <Card className="dark:bg-gray-700 dark:border-gray-600">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl dark:text-white">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="text-sm sm:text-base dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                  />
                  <Input 
                    name="email"
                    type="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="text-sm sm:text-base dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                  />
                  <Input 
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="text-sm sm:text-base dark:bg-gray-600 dark:border-gray-500 dark:text-white col-span-1 sm:col-span-2" 
                  />
                </div>
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="resize-none text-sm sm:text-base dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-sm sm:text-base bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitMessage && (
                  <p className={`text-sm text-center ${submitMessage.includes('success') ? 'text-green-600' : submitMessage.includes('Sending') ? 'text-blue-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
