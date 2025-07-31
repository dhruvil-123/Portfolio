import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import profileImage from "@assets/profile_1753937760510.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-cyan-100/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3e%3cg fill='%234f46e5' fill-opacity='0.05'%3e%3ccircle cx='30' cy='30' r='2'/%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI-Powered <span className="ai-gradient-text">Full Stack</span>{" "}
              Mobile Developer
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With <strong>4+ years of experience</strong>, I create intelligent
              mobile applications that leverage cutting-edge AI technology to
              solve real-world problems and{" "}
              <strong>drive business growth</strong>.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="ai-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Hire Me Now
              </Button>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-bold text-sm text-gray-600">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-bold">+91-8160695327</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>Available</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Remote/Global</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-green-600" />
                <span>Response: 1hr</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img
                src={profileImage}
                alt="Dhruvil Dhanani - Professional AI Developer Portrait"
                className="w-80 h-80 rounded-full object-cover shadow-2xl animate-float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Available for Hire!
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 ai-gradient text-white px-4 py-2 rounded-full font-semibold"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                4+ Years Experience
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
