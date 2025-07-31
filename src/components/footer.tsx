import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "AI Mobile App Development",
    "Machine Learning Integration", 
    "Full Stack Development",
    "Revenue Optimization",
    "Business Intelligence",
    "AI Consulting"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold ai-gradient-text mb-4">
              Dhruvil Dhanani
            </div>
            <p className="text-gray-400 mb-4">
              AI-Powered Full Stack Mobile App Developer specializing in intelligent solutions that transform businesses and drive revenue growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:dhruvildhanani8639@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Email Dhruvil Dhanani"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+918160695327" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Call Dhruvil Dhanani"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <a href="#contact" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a 
                  href="mailto:dhruvildhanani8639@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  dhruvildhanani8639@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a 
                  href="tel:+918160695327"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91-8160695327
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Available Globally (Remote)</span>
              </div>
              <div className="flex items-center text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>Response within 1 hour</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Dhruvil Dhanani. All rights reserved. | AI-Powered Mobile App Developer | 
            <span className="text-green-400 ml-2">Building Revenue-Focused Solutions</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
