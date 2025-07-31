import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingUp, DollarSign, Users } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: "Ankit Sharma",
      position: "Building Audiobulb",
      avatar: "A",
      avatarColor: "bg-blue-600",
      rating: 5,
      text: "Dhruvil is an exceptional developer with outstanding skills and professionalism. His dedication to delivering high-quality work is truly commendable. If you're looking for a reliable and talented developer, Dhruvil is the person to work with!",
      metric: { icon: TrendingUp, value: "100%", label: "Client Satisfaction" }
    },
    {
      name: "Mark Thompson",
      position: "CTO, RetailPro",
      avatar: "M",
      avatarColor: "bg-purple-600",
      rating: 5,
      text: "Outstanding work! The AI-powered features Dhruvil developed for our e-commerce app resulted in a 250% increase in sales conversion and generated an additional $2M in revenue within 6 months. Exceptional ROI!",
      metric: { icon: DollarSign, value: "$2M+", label: "Additional Revenue" }
    },
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "S",
      avatarColor: "bg-green-600",
      rating: 5,
      text: "Dhruvil's AI expertise didn't just transform our mobile app – it transformed our business. The intelligent features he implemented increased user engagement by 300% and our monthly recurring revenue by 250%. Best investment we've made!",
      metric: { icon: Users, value: "300%", label: "User Engagement" }
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client <span className="ai-gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it - here's what clients say about the revenue impact of working with me
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full modern-shadow hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <testimonial.metric.icon className="h-4 w-4 mr-1" />
                      <span className="font-bold text-green-600">{testimonial.metric.value}</span>
                      <span className="ml-1">{testimonial.metric.label}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
