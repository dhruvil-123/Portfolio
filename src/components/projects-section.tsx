import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, TrendingUp, DollarSign, Users } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const projects = [
    {
      title: "AI-Enhanced Dating Application",
      description: "Revolutionary dating platform with AI-powered matching algorithms, intelligent conversation starters, and ML-based compatibility scoring. Features video/audio calls, live streaming, digital wallet, agency management, and comprehensive admin panel for optimal user engagement and monetization.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "AI-powered dating mobile app with video calls and smart matching algorithms",
      technologies: ["React Native", "AI Matching", "WebRTC", "Payment Gateway", "Live Streaming"],
      metrics: [
        { icon: Users, value: "85%", label: "Match Success Rate" },
        { icon: DollarSign, value: "320%", label: "User Engagement" }
      ]
    },
    {
      title: "Audiobulb - AI Music Distribution Platform",
      description: "Innovative music distribution platform powered by AI analytics and smart recommendation engine. Distributes to 80+ streaming platforms including Spotify, Apple Music, JioSaavn with intelligent metadata optimization, audience analytics, and AI-driven marketing insights for independent musicians.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "AI-powered music distribution platform interface with analytics dashboard",
      technologies: ["Flutter", "AI Analytics", "Music Recognition", "Cloud Distribution", "ML Insights"],
      metrics: [
        { icon: TrendingUp, value: "80+", label: "Platforms" },
        { icon: Users, value: "Free", label: "For Artists" }
      ]
    },
    {
      title: "Enjoy With English - AI Language Learning",
      description: "Intelligent English learning app with AI-powered speech recognition, personalized learning paths, and adaptive assessment algorithms. Features voice analysis, conversation AI, smart pronunciation feedback, and ML-driven progress tracking for accelerated language mastery.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "AI-powered English learning mobile app with speech recognition and personalized lessons",
      technologies: ["React Native", "Voice Recognition AI", "NLP", "Machine Learning", "Speech Analytics"],
      metrics: [
        { icon: TrendingUp, value: "95%", label: "Speaking Improvement" },
        { icon: Users, value: "Free", label: "Premium Access" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Revenue-Generating <span className="ai-gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of AI-powered mobile applications that have delivered measurable business results and transformed client revenues
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden modern-shadow hover-lift">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-4">
                      {project.metrics.map((metric, metricIndex) => {
                        const IconComponent = metric.icon;
                        return (
                          <div key={metricIndex} className="flex items-center text-white text-sm">
                            <IconComponent className="h-4 w-4 mr-1" />
                            <span className="font-bold">{metric.value}</span>
                            <span className="ml-1 opacity-80">{metric.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Discuss Similar Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={() => scrollToSection("contact")}
            className="ai-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Revenue Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
