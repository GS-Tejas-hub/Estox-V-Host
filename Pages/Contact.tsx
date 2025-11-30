
import React, { useState } from "react";
import { Inquiry } from "@/entities/Inquiry";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investment_range: "",
    interest_area: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Inquiry.create({
        ...formData,
        source: "Website"
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our investment experts",
      value: "+91 81055 20382",
      action: "tel:+918105520382",
      available: "Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed responses to your queries",
      value: "estoxone.infra@gmail.com",
      action: "mailto:estoxone.infra@gmail.com",
      available: "24/7 Response"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support and property updates",
      value: "+91 81055 20382",
      action: "https://wa.me/+918105520382",
      available: "Instant Support"
    },
    {
      icon: MessageCircle,
      title: "Instagram",
      description: "Follow us for updates and insights",
      value: "@estox_one",
      action: "https://www.instagram.com/estox_one?igsh=ZThjb3dkd2o2aDFs&utm_source=ig_contact_invite",
      available: "Social"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a personal consultation",
      value: "Book 30-min slot",
      action: "#",
      available: "Video/In-person"
    }
  ];

  const officeInfo = {
    address: "627, 10th Main Rd, ITI Employees Layout, Annapurneshwari Nagar, Bengaluru, Karnataka 560056",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    closed: "Sunday: Closed"
  };

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "You can start investing with as low as ₹1.5 Lakhs, making premium real estate accessible to everyone."
    },
    {
      question: "How do I track my investment returns?",
      answer: "We provide quarterly reports and an online dashboard (coming soon) to track rental income and property appreciation."
    },
    {
      question: "Can NRIs invest through Estox One?",
      answer: "Yes, NRIs can invest subject to FEMA regulations. We handle all compliance requirements for NRI investors."
    },
    {
      question: "How long is the typical investment horizon?",
      answer: "Investment horizons typically range from 3-7 years depending on the property type and your investment goals."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 shadow-2xl max-w-md">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                We've received your inquiry and our investment expert will contact you within 24 hours.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    investment_range: "",
                    interest_area: "",
                    message: ""
                  });
                }}
                className="bg-blue-900 hover:bg-blue-800"
              >
                Submit Another Inquiry
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop')"
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text:white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gold-600 text-gray-900 font-semibold px-4 py-2">
              Expert Investment Guidance
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get in <span className="text-gold-400">Touch</span> With Us
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your fractional real estate investment journey? Our experts are here to guide you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx:auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <method.icon className="w-8 h-8 text-blue-900" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{method.description}</p>

                    <div className="mb-4">
                      <a
                        href={method.action}
                        target={method.action.startsWith('http') ? '_blank' : '_self'}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>

                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {method.available}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Start Your Investment Journey
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and our investment expert will contact you within 24 hours
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="investment_range">Investment Budget</Label>
                        <Select value={formData.investment_range} onValueChange={(value) => handleInputChange('investment_range', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1.5L - 5L">₹1.5L - ₹5L</SelectItem>
                            <SelectItem value="5L - 10L">₹5L - ₹10L</SelectItem>
                            <SelectItem value="10L - 25L">₹10L - ₹25L</SelectItem>
                            <SelectItem value="25L+">₹25L+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="interest_area">Area of Interest</Label>
                      <Select value={formData.interest_area} onValueChange={(value) => handleInputChange('interest_area', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Land">Land Investment</SelectItem>
                          <SelectItem value="PG">Student PG</SelectItem>
                          <SelectItem value="Rental">Rental Properties</SelectItem>
                          <SelectItem value="Commercial">Commercial Spaces</SelectItem>
                          <SelectItem value="All">All Property Types</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your investment goals or any specific questions..."
                        className="h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-900 hover:bg-blue-800 py-4 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info & Why Choose Us */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <MapPin className="w-5 h-5 mr-2" />
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">{officeInfo.address}</p>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        {officeInfo.hours}
                      </div>
                      <div className="text-sm text-gray-500">
                        {officeInfo.closed}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      View on Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Estox One?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-sm text-gray-700">RERA Compliant & Legally Protected</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-sm text-gray-700">18% Average Returns</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-purple-600 mr-3" />
                      <span className="text-sm text-gray-700">500+ Happy Investors</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick FAQs */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
                <p className="text-gray-600 text-center">Quick answers to common investor questions</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        .text-gold-400 { color: #fbbf24; }
        .bg-gold-600 { background-color: #d97706; }
      `}</style>
    </div>
  );
}
