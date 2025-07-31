import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@assets/image_1753980208763.png";
import profileImage from "@assets/profile_1753937760510.png";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="ai-gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate AI-powered full stack mobile app developer dedicated to creating intelligent solutions that transform businesses
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={aboutImage}
              alt="Advanced AI Solutions - Intelligent mobile app development with revenue-focused results" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Transforming Ideas into Revenue-Generating Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 4 years of hands-on experience in AI-powered mobile app development, my focus is not just delivering lines of code – I create 
              <strong> revenue-focused AI applications</strong> that leverage machine learning, natural language processing, and advanced AI algorithms 
              to deliver measurable business results and exceptional ROI for my clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My expertise spans across full-stack development, from crafting intuitive mobile interfaces to building 
              robust backend systems integrated with cutting-edge AI technologies. I help businesses transform their operations with intelligent solutions that 
              <strong>automate processes, reduce costs, and significantly boost revenue streams</strong> rather than just technical implementations.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Revenue-Focused Projects</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">40+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </motion.div>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              className="ai-gradient text-white px-8 py-3 font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Boost Your Revenue
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
