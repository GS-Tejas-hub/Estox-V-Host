
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TrendingUp,
  Shield,
  MapPin,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Building,
  Home as HomeIcon,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Premium Commercial Complex - Baner",
      location: "Baner, Pune",
      type: "Commercial",
      roi: 18,
      rental_yield: 7.5,
      min_investment: 250000,
      funded: 78,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Luxury PG - Koramangala",
      location: "Koramangala, Bangalore",
      type: "PG",
      roi: 22,
      rental_yield: 12,
      min_investment: 150000,
      funded: 65,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Prime Land - Gurgaon",
      location: "Sector 82, Gurgaon",
      type: "Land",
      roi: 25,
      rental_yield: 0,
      min_investment: 10000,
      funded: 45,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      designation: "Software Engineer, Google",
      content: "Estox One made real estate investment accessible for me. Started with ₹2L and already seeing great returns!",
      rating: 5
    },
    {
      name: "Priya Patel",
      designation: "NRI Investor, USA",
      content: "Perfect platform for NRIs like me. Transparent, legal, and hassle-free investment process.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      designation: "Business Owner",
      content: "Diversified my portfolio with fractional real estate. The SPV structure gives me confidence.",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gold-600 text-gray-900 font-semibold px-4 py-2 hover:bg-black hover:text-gold-400 transition-colors duration-300">
              SEBI Compliant • SPV Protected • Legally Audited
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'}}>
              Trusted Investment.
              <br/>
              <span className="text-black">
                 Transparent Returns.
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Fractional Real Estate, Made Simple. Own premium properties with as little as ₹10K per sqft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to={createPageUrl("Projects")}>
                <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-gray-900 px-8 py-4 text-lg font-semibold">
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("HowItWorks")}>
                <Button variant="ghost" size="lg" className="bg-white/90 text-black hover:bg-white px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5 text-black" />
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Shield className="w-10 h-10 mx-auto text-gold-400 mb-2" />
                <div className="text-blue-100 font-semibold">100% Asset-Backed</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-10 h-10 mx-auto text-gold-400 mb-2" />
                <div className="text-blue-100 font-semibold">Expert Vetted Properties</div>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 mx-auto text-gold-400 mb-2" />
                <div className="text-blue-100 font-semibold">Transparent Ownership</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-10 h-10 mx-auto text-gold-400 mb-2" />
                <div className="text-blue-100 font-semibold">High-Growth Potential</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked premium properties with verified returns and legal compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-gold-600 text-gray-900 font-semibold">
                      {project.type}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                      {project.roi}% ROI
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rental Yield</span>
                        <span className="font-semibold text-green-600">{project.rental_yield}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Min Investment</span>
                        <span className="font-semibold">
                          ₹{project.min_investment >= 100000 ? 
                            `${(project.min_investment / 100000).toFixed(1)}L` : 
                            `${(project.min_investment / 1000).toFixed(0)}K`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Funded</span>
                        <span className="font-semibold text-blue-600">{project.funded}%</span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-gold-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.funded}%` }}
                      ></div>
                    </div>

                    <Link to={createPageUrl("Projects")}>
                      <Button className="w-full bg-blue-900 hover:bg-blue-800">
                        Invest Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Projects")}>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Trust & Legal Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your investments are protected by robust legal frameworks and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SPV Protection</h3>
              <p className="text-gray-600">
                Each investment is structured via a Special Purpose Vehicle (SPV), giving investors direct legal ownership of their share and protection against asset misuse.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">RERA Compliant</h3>
              <p className="text-gray-600">
                All real estate projects comply with RERA guidelines, ensuring accountability, transparency, and investor protection under Indian regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Audits</h3>
              <p className="text-gray-600">
                Every property undergoes rigorous legal due diligence by our partner law firms before being listed, so you can invest with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Investing in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From selection to ownership - your fractional real estate journey made simple
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Building,
                title: "Choose Project",
                description: "Browse verified properties with detailed ROI projections and legal documentation"
              },
              {
                step: "02",
                icon: Users,
                title: "Invest Fractionally",
                description: "Start with as low as ₹10K per sqft and own a percentage of premium real estate"
              },
              {
                step: "03",
                icon: Award,
                title: "Get Certificate",
                description: "Receive legal ownership certificate through our SPV structure"
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Earn Returns",
                description: "Enjoy rental income and capital appreciation on your investment"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center text-gray-900 text-sm font-bold">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gold-600"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("HowItWorks")}>
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Building Wealth, One Property at a Time
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our investors say about their fractional real estate journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

                    <div className="border-t pt-6">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.designation}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join other forward-thinking investors who have already started building their real estate portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Projects")}>
              <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-gray-900 px-8 py-4 text-lg font-semibold">
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button variant="ghost" size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-gold-100 { background-color: #fef3c7; }
        .bg-gold-600 { background-color: #d97706; }
        .bg-gold-700 { background-color: #b45309; }
        .text-gold-400 { color: #fbbf24; }
        .text-gold-500 { color: #f59e0b; }
        .text-gold-600 { color: #d97706; }
        .border-gold-600 { border-color: #d97706; }
        .hover\\:bg-gold-700:hover { background-color: #b45309; }
        .fill-current { fill: currentColor; }
      `}</style>
    </div>
  );
}
