
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
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
