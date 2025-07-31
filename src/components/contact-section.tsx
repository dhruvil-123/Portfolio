import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      // Send via EmailJS
      const emailJSParams = {
        to_name: "Dhruvil Dhanani",
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        project_type: data.projectType || "General Inquiry",
        message: data.message,
        reply_to: data.email,
      };

      await emailjs.send(
        'service_9zl8buj',
        'template_xxuci1x',
        emailJSParams,
        'jxI4DyBdaAtwRnZwM6wCH'
      );

      // Also save to database
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 1 hour!",
      });
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dhruvildhanani8639@gmail.com",
      link: "mailto:dhruvildhanani8639@gmail.com",
      color: "bg-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-8160695327",
      link: "tel:+918160695327",
      color: "bg-purple-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Globally (Remote)",
      color: "bg-green-600"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 1 hour guaranteed",
      color: "bg-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something <span className="ai-gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to transform your ideas into powerful mobile applications? Get in touch and let's discuss your project requirements and timeline.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-white to-gray-50 modern-shadow hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 ai-gradient rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">Name *</Label>
                      <Input 
                        id="name"
                        type="text" 
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email *</Label>
                      <Input 
                        id="email"
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone Number</Label>
                      <Input 
                        id="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType" className="text-sm font-medium text-gray-700 mb-2">Project Type *</Label>
                      <select 
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => handleInputChange("projectType", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Backend Development">Backend Development</option>
                        <option value="MVP Development">MVP Development</option>
                        <option value="Technical Consulting">Technical Consulting</option>
                        <option value="App Maintenance">App Maintenance</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Project Details *</Label>
                    <Textarea 
                      id="message"
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                      placeholder="Tell me about your project and revenue goals..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full ai-gradient text-white py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Futuristic AI technology interface with global network connections and smart algorithms" 
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div 
                    key={info.title}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`${info.color} text-white p-3 rounded-full`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white modern-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-xl font-bold mb-2">🚀 Free Consultation Available!</h4>
              <p className="text-blue-100 mb-4">Get expert advice on your mobile app project. I offer free 30-minute consultation calls to discuss your requirements and provide actionable insights.</p>
              <div className="flex space-x-4">
                <Button 
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300"
                >
                  <a href="tel:+918160695327">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                   className="bg-white text-blue-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
                >
                  <a href="mailto:dhruvildhanani8639@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Email Me
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
