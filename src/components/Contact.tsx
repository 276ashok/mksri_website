import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MapPin, Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { API_BASE_URL } from '@/lib/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields (Full Name, Email, Message).",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=quote_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          service_type: formData.subject, // Map subject to service_type
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully. We will get back to you shortly.",
        duration: 5000,
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });

    } catch (error: any) {
      console.error('Error sending contact message:', error);
      toast({
        title: "Error",
        description: `There was a problem sending your message: ${error.message}. Please try again.`,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">We’re here to help you start your construction or surveying journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-brand-gray text-sm font-bold mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-brand-dark leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Your Full Name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-brand-gray text-sm font-bold mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-brand-dark leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-brand-gray text-sm font-bold mb-2">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-brand-dark leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-brand-gray text-sm font-bold mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-brand-dark leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option>General Inquiry</option>
                  <option>Construction Quote</option>
                  <option>Survey Request</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-brand-gray text-sm font-bold mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-brand-dark leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button 
                  className="bg-brand-orange hover:bg-brand-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Company Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-brand-dark mb-4">Contact Information</h3>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-brand-orange mr-2" />
                <p className="text-brand-gray">
                  MK Srinidhi Surveyors and Builders Pvt. Ltd.<br />
                  53f3, Mitta Office Street,<br />
                  Krishnapuram, Kadayanallur,<br />
                  Tenkasi District - 627759,<br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-brand-orange mr-2" />
                <p className="text-brand-gray">info@mksribuilders.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
