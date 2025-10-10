import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, TrendingUp, Shield, Building, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Every investment is backed by comprehensive legal documentation and regulatory compliance."
    },
    {
      icon: Users,
      title: "Investor-First Approach",
      description: "We prioritize investor interests in every decision, from property selection to returns distribution."
    },
    {
      icon: Award,
      title: "Excellence in Execution",
      description: "Rigorous due diligence and professional management ensure optimal investment outcomes."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Building long-term wealth through carefully selected properties with strong appreciation potential."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472355-b33ff0c44a43?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gold-600 text-gray-900 font-semibold px-4 py-2">
              Democratizing Real Estate Investment
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-gold-400">Estox One</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pioneering fractional real estate investment in India with trust, transparency, and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-900 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                To democratize real estate investment by enabling fractional ownership in prime properties, 
                making wealth creation accessible to every Indian investor regardless of their capital size.
              </p>
              
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-gold-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                To become India's most trusted fractional real estate investment platform, 
                creating a new asset class that delivers consistent returns while maintaining 
                the highest standards of legal compliance and investor protection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-600">Active Investors</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-gold-600 mb-2">₹50Cr+</div>
                <div className="text-gray-600">Assets Under Management</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">18%</div>
                <div className="text-gray-600">Average Returns</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                <div className="text-gray-600">Live Projects</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Founder's Story</h2>
            <p className="text-xl text-gray-600">The vision behind democratizing real estate investment</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4467e6d68_PKEstox.jpg"
                    alt="Pratham Kolhar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pratham Kolhar</h3>
                  <p className="text-gold-600 font-semibold mb-6">Founder & CEO</p>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      "I'm Pratham Kolhar, a student pursuing B.tech at Dayananda Sagar Institutions, Entrepreneur and winner of the college youth ideathon hosted by IIT Delhi. I founded Estox One to make real estate investing as simple and exciting as buying stocks. My vision is to build a platform where anyone can own a piece of land or property and grow their wealth—one square foot at a time."
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="outline">B.Tech Student, DSI</Badge>
                    <Badge variant="outline">Entrepreneur</Badge>
                    <Badge variant="outline">Youth Ideathon Winner (IIT Delhi)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make for our investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .text-gold-400 { color: #fbbf24; }
        .text-gold-600 { color: #d97706; }
        .bg-gold-600 { background-color: #d97706; }
      `}</style>
    </div>
  );
}