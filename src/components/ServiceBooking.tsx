
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CalendarIcon, Clock, MessageSquare, Mail, User, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
emailjs.init('XznZdfoTxtXcFDNb1');

const ServiceBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const { toast } = useToast();

  const services = [
    'Data Analysis Consultation',
    'Software Development Project',
    'Customer Service Optimization',
    'Business Intelligence Setup',
    'General Consultation'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const validateEmail = (email: string) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // International format: starts with +, at least 10 digits
    return /^\+\d{10,}$/.test(phone);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'email') {
      setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address.' : '');
    }
    if (field === 'phone') {
      setPhoneError(value && !validatePhone(value) ? 'Please enter a valid international phone number (e.g. +254...).' : '');
    }
  };

  const sendWhatsAppNotification = (bookingDetails: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: bookingDetails.phone || '',
      });
    }
    const message = `New Appointment Booking:%0A%0AClient: ${bookingDetails.name}%0AEmail: ${bookingDetails.email}%0APhone: ${bookingDetails.phone}%0AService: ${bookingDetails.service}%0ADate: ${bookingDetails.date}%0ATime: ${bookingDetails.time}%0AMessage: ${bookingDetails.message}`;
    const whatsappUrl = `https://wa.me/254741754002?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const sendEmailNotification = async (bookingDetails: any) => {
    // Initialize EmailJS with your public key
    emailjs.init('XznZdfoTxtXcFDNb1');
    try {
      const response = await emailjs.send('service_6j4s8s4', 'template_lw7yq2x', {
        from_name: bookingDetails.name,
        from_email: bookingDetails.email,
        phone: bookingDetails.phone,
        service: bookingDetails.service,
        date: bookingDetails.date,
        time: bookingDetails.time,
        message: bookingDetails.message
      });
      console.log('EmailJS Success:', response);
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  const handleBookingSubmit = async () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a date and time.",
        variant: "destructive",
      });
      return;
    }
    if (emailError || phoneError) {
      toast({
        title: "Invalid Input",
        description: "Please correct the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const bookingDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      subject: formData.service, // Use service as subject
      date: format(selectedDate, 'PPP'),
      time: selectedTime,
      message: formData.message
    };

    try {
      if (contactMethod === 'whatsapp') {
        sendWhatsAppNotification(bookingDetails);
      } else {
        // Send notification to you
        await emailjs.send('service_6j4s8s4', 'template_lw7yq2x', {
          from_name: bookingDetails.name,
          reply_to: bookingDetails.email,
          from_email: bookingDetails.email,
          phone: bookingDetails.phone,
          subject: bookingDetails.subject,
          date: bookingDetails.date,
          time: bookingDetails.time,
          message: bookingDetails.message
        });
        // Send autoreply to client
        await emailjs.send('service_6j4s8s4', 'template_dckq64j', {
          from_name: bookingDetails.name,
          reply_to: bookingDetails.email,
          from_email: bookingDetails.email,
          phone: bookingDetails.phone,
          subject: bookingDetails.subject,
          date: bookingDetails.date,
          time: bookingDetails.time,
          message: bookingDetails.message
        });
      }

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_submit', {
          event_category: 'Booking',
          event_label: bookingDetails.service,
        });
      }
      toast({
        title: "Booking Submitted!",
        description: `Your appointment request has been sent. I'll confirm the booking shortly via ${contactMethod === 'whatsapp' ? 'WhatsApp' : 'email'}.`,
      });

      // Reset form
      setSelectedDate(undefined);
      setSelectedTime('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setContactMethod('whatsapp');

    } catch (error: any) {
      console.error('Booking submission error:', error);
      let description = "There was an issue submitting your booking. Please try again.";
      if (error?.text && typeof error.text === 'string') {
        if (error.text.includes('recipients address is empty')) {
          description = "The email address you entered is invalid or missing. Please check and try again.";
        } else if (error.text.includes('The public key is required')) {
          description = "Internal error: Email service misconfiguration. Please contact site admin.";
        } else if (error.text.includes('quota')) {
          description = "The booking system is temporarily unavailable due to email limits. Please try again later.";
        }
      }
      toast({
        title: "Error",
        description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Book a Consultation
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Schedule a consultation to discuss your project needs and how I can help bring your ideas to life.
          </p>
        </div>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <CalendarIcon className="w-6 h-6" />
              Schedule Your Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Calendar and Time */}
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Select Date *
                  </Label>
                  {/* Calendar Popover with controlled open state */}
                  <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                        onClick={() => setIsCalendarOpen(true)}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date);
                          if (date) setIsCalendarOpen(false);
                        }}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Select Time *
                  </Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    aria-label="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="mt-1 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    aria-label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-1 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  {emailError && <p className="text-red-600 text-xs mt-1">{emailError}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    aria-label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+254 xxx xxx xxx"
                    className="mt-1 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  {phoneError && <p className="text-red-600 text-xs mt-1">{phoneError}</p>}
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Service Type *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger aria-label="Service Type">
                  <SelectValue placeholder="Select the service you need" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service} aria-label={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Project Details
              </Label>
              <Textarea
                id="message"
                aria-label="Project Details"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell me about your project, goals, and any specific requirements..."
                className="mt-1 min-h-[100px] focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Contact Method Selection */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Contact Method *</label>
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="whatsapp"
                      checked={contactMethod === 'whatsapp'}
                      onChange={() => setContactMethod('whatsapp')}
                      className="accent-orange-600"
                    />
                    WhatsApp
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={contactMethod === 'email'}
                      onChange={() => setContactMethod('email')}
                      className="accent-orange-600"
                    />
                    Email
                  </label>
                </div>
                <Button
                  onClick={handleBookingSubmit}
                  aria-label="Book Appointment"
                  disabled={isSubmitting || !!emailError || !!phoneError}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 flex items-center justify-center focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  size="lg"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  ) : <CalendarIcon className="mr-2 h-4 w-4" />}
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </Button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="flex-1 h-12">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Quick WhatsApp
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Quick WhatsApp Contact</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      For immediate assistance or quick questions, reach out via WhatsApp:
                    </p>
                    <Button
                      onClick={() => window.open('https://wa.me/254741754002', '_blank')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Open WhatsApp Chat
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t">
              <p>I'll confirm your appointment within 24 hours via WhatsApp or email.</p>
              <p>Available Monday-Friday, 9:00 AM - 5:00 PM (EAT)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceBooking;
