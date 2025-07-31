import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Smartphone, Server, Code, Database, Cloud, Zap, TrendingUp } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision", "NLP", "Revenue Optimization AI"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Cross-platform", "App Store Optimization"]
    },
    {
      icon: Server,
      title: "Backend & Infrastructure",
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS/GCP", "Scalable Architecture"]
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: ["Analytics Integration", "Revenue Tracking", "User Behavior Analysis", "A/B Testing", "Performance Metrics", "ROI Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My <span className="ai-gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and business-focused frameworks I use to build profitable AI-powered mobile applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full modern-shadow hover-lift">
                  <CardContent className="p-6">
                    <div className={`${category.color} text-3xl mb-4`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <ul className="space-y-2 text-gray-600">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
            Start Your Revenue-Focused Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
