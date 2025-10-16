
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Building, 
  Users, 
  Award, 
  TrendingUp, 
  FileText, 
  Shield, 
  CreditCard, 
  PieChart,
  ArrowRight,
  CheckCircle,
  Home,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Building,
      title: "Browse & Select",
      description: "Explore our curated portfolio of verified premium properties with detailed ROI projections, legal documentation, and market analysis.",
      details: [
        "View property images and videos",
        "Analyze expected returns and rental yields",
        "Review location advantages and growth potential",
        "Download legal documents and due diligence reports"
      ]
    },
    {
      step: "02", 
      icon: CreditCard,
      title: "Invest Your Amount",
      description: "Start with as low as ₹1.5 Lakhs and own a fractional share of premium real estate through our secure payment gateway.",
      details: [
        "Choose your investment amount",
        "Secure payment through trusted gateways",
        "Get instant investment confirmation",
        "No hidden fees or charges"
      ]
    },
    {
      step: "03",
      icon: FileText,
      title: "Legal Documentation",
      description: "Receive comprehensive legal ownership documents through our Special Purpose Vehicle (SPV) structure ensuring complete transparency.",
      details: [
        "SPV ownership certificate",
        "Property share allocation document", 
        "Legal compliance certificates",
        "Investment agreement copy"
      ]
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Earn Returns",
      description: "Enjoy passive income through rental yields and capital appreciation, with transparent tracking and regular payouts.",
      details: [
        "Monthly/Quarterly rental distributions",
        "Capital appreciation on property value",
        "Transparent return tracking dashboard",
        "Option to exit through resale marketplace"
      ]
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: "Low Entry Barrier",
      description: "Start real estate investment with just ₹1.5-3 Lakhs instead of crores",
      highlight: "₹1.5L Minimum"
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification", 
      description: "Spread risk across different property types and locations",
      highlight: "4+ Property Types"
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "SPV structure ensures true ownership with legal recourse",
      highlight: "RERA Compliant"
    },
    {
      icon: TrendingUp,
      title: "Attractive Returns",
      description: "Target 15-25% IRR through rental income and appreciation",
      highlight: "15-25% IRR"
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "Expert property management and tenant relationships handled for you",
      highlight: "Hassle-Free"
    },
    {
      icon: Briefcase,
      title: "Liquidity Options",
      description: "Exit opportunities through our secondary marketplace",
      highlight: "Easy Exit"
    }
  ];

  const propertyTypes = [
    {
      type: "Premium Land",
      description: "High-growth potential plots in developing areas",
      minInvestment: "₹3L",
      expectedReturns: "20-25%",
      timeHorizon: "3-5 years",
      riskLevel: "Medium-High",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
    },
    {
      type: "Student PG",
      description: "High-occupancy student accommodations near universities",
      minInvestment: "₹1.5L", 
      expectedReturns: "18-22%",
      timeHorizon: "2-4 years",
      riskLevel: "Medium",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
    },
    {
      type: "Commercial Spaces",
      description: "Office complexes and retail spaces in prime locations",
      minInvestment: "₹2.5L",
      expectedReturns: "15-20%", 
      timeHorizon: "5-7 years",
      riskLevel: "Low-Medium",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
      type: "Rental Properties",
      description: "Residential properties with steady rental income",
      minInvestment: "₹2L",
      expectedReturns: "12-18%",
      timeHorizon: "3-5 years", 
      riskLevel: "Low",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop"
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
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gold-600 text-gray-900 font-semibold px-4 py-2">
              Simple • Transparent • Profitable
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How <span className="text-gold-400">Fractional Investment</span> Works
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your complete guide to building wealth through fractional real estate ownership
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Simple Steps to Start Investing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From selection to returns - your fractional real estate journey simplified
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <Card className="border-0 shadow-xl h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-gold-600 font-bold text-lg">Step {step.step}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                      
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1560472355-536de3962603' :
                        index === 1 ? '1563013544-824ae1b704d3' : 
                        index === 2 ? '1450101499163-c8848c66ca85' :
                        '1611974789855-9c2a0a7236a3'
                      }?w=800&h=600&fit=crop`}
                      alt={step.title}
                      className="rounded-xl shadow-2xl w-full h-80 object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fractional Real Estate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock the benefits of real estate investment without traditional barriers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 transition-colors">
                      <benefit.icon className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors" />
                    </div>
                    
                    <Badge className="mb-4 bg-gold-600 text-gray-900 font-semibold">
                      {benefit.highlight}
                    </Badge>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Property Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diversify across different property categories based on your risk appetite and investment goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {propertyTypes.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={property.image}
                      alt={property.type}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 font-semibold">
                        {property.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white font-semibold">
                        {property.expectedReturns}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{property.type}</h3>
                    <p className="text-gray-600 mb-6">{property.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Min Investment</div>
                        <div className="font-semibold text-blue-900">{property.minInvestment}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Expected Returns</div>
                        <div className="font-semibold text-green-600">{property.expectedReturns}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Time Horizon</div>
                        <div className="font-semibold">{property.timeHorizon}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Risk Level</div>
                        <div className={`${
                          property.riskLevel.includes('Low') ? 'text-green-600' :
                          property.riskLevel.includes('Medium') ? 'text-yellow-600' :
                          'text-red-600'
                        } font-semibold`}>
                          {property.riskLevel}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join 500+ investors who have already started building their real estate portfolio with Estox One
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Projects")}>
                <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-gray-900 px-8 py-4 text-lg font-semibold">
                  View Live Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .text-gold-400 { color: #fbbf24; }
        .text-gold-600 { color: #d97706; }
        .bg-gold-600 { background-color: #d97706; }
        .bg-gold-700 { background-color: #b45309; }
        .hover\\:bg-gold-700:hover { background-color: #b45309; }
      `}</style>
    </div>
  );
}
 