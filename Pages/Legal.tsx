
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, Award, Users, Download, CheckCircle, Building, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function Legal() {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "RERA Compliance",
      description: "All projects are registered under Real Estate Regulatory Authority (RERA) for complete transparency and investor protection.",
      details: [
        "RERA registration certificates available",
        "Quarterly compliance reporting",
        "Standardized disclosure requirements",
        "Legal recourse for investors"
      ]
    },
    {
      icon: Building,
      title: "SPV Structure",
      description: "Special Purpose Vehicle ensures true ownership with clear legal title and asset protection for all investors.",
      details: [
        "Individual SPV for each property",
        "Pro-rata ownership certificates", 
        "Clear exit mechanisms defined",
        "Professional SPV management"
      ]
    },
    {
      icon: Scale,
      title: "Legal Documentation",
      description: "Comprehensive legal framework with detailed agreements, title verification, and due diligence reports.",
      details: [
        "Property title verification",
        "Legal due diligence reports",
        "Investment agreements",
        "Compliance certificates"
      ]
    },
    {
      icon: Award,
      title: "Regulatory Oversight",
      description: "Operating under strict regulatory guidelines with regular audits and compliance monitoring.",
      details: [
        "Annual statutory audits",
        "Quarterly compliance reviews",
        "Regulatory filing compliance",
        "Third-party verification"
      ]
    }
  ];

  const legalDocuments = [
    {
      title: "Investment Agreement Template",
      description: "Standard agreement template outlining investor rights, returns, and exit mechanisms",
      size: "2.5 MB",
      type: "PDF",
      downloadUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a5f3aacb05041249ddf1f0/4d7a52596_Investorsqftcertificate.pdf"
    },
    {
      title: "SPV Structure Overview", 
      description: "Detailed explanation of Special Purpose Vehicle structure and investor protections",
      size: "1.8 MB", 
      type: "PDF",
      downloadUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a5f3aacb05041249ddf1f0/9d9695877_Estox_SPV_Shareholding_and_Flow.pdf"
    },
    {
      title: "Legal Due Diligence Sample",
      description: "Sample legal due diligence report showing our property verification process",
      size: "3.1 MB",
      type: "PDF",
      downloadUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a5f3aacb05041249ddf1f0/584ed6ee7_mou.pdf"
    }
  ];

  const partners = [
    {
      name: "Devaraj B V & Co.",
      type: "Our CA", 
      description: "Independent audit and compliance verification services",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const riskDisclosures = [
    "Your investment is secured by the tangible real estate asset, providing a strong foundation for capital protection.",
    "Our SPV structure legally isolates each property, ensuring your investment is not affected by external financial factors.",
    "Returns are generated from pre-vetted rental agreements and projected capital appreciation based on expert analysis.",
    "All properties undergo rigorous legal and financial due diligence to ensure clear titles and eliminate potential liabilities.",
    "Estox One's expert management ensures properties are maintained and optimized for maximum return potential.",
    "Our transparent platform provides you with all the necessary documentation to make informed, confident investment decisions."
  ];

  const handleDownload = (url, fileName) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gold-600 text-gray-900 font-semibold px-4 py-2">
              RERA Compliant • Legally Protected • Audited
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Legal <span className="text-gold-400">Framework</span> & Compliance
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your investments are protected by robust legal structures and regulatory compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Strong Legal Foundations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every aspect of our platform is designed with investor protection and regulatory compliance at its core
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-blue-900" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPV Structure Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SPV Structure Protects You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the Special Purpose Vehicle model that ensures your ownership rights
            </p>
          </div>
