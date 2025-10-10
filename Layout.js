
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: createPageUrl("Home") },
    { name: "How It Works", href: createPageUrl("HowItWorks") },
    { name: "Projects", href: createPageUrl("Projects") },
    { name: "Portfolio", href: createPageUrl("Portfolio") },
    { name: "About", href: createPageUrl("About") },
    { name: "Legal", href: createPageUrl("Legal") },
    { name: "Contact", href: createPageUrl("Contact") }
  ];

  // Scroll to top when navigating
  const handleNavClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2" onClick={handleNavClick}>
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0e2693ff7_image15.png" alt="Estox One Logo" className="h-12" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`text-sm font-medium transition-colors hover:text-blue-900 ${
                    location.pathname === item.href 
                      ? 'text-blue-900 border-b-2 border-gold-500' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="https://wa.me/+918105520382" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <Link to={createPageUrl("Projects")} onClick={handleNavClick}>
                <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
                  Start Investing
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button onClick={() => setIsMobileMenuOpen(true)} variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to={createPageUrl("Home")} onClick={handleNavClick}>
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0e2693ff7_image15.png" alt="Estox One Logo" className="h-10" />
              </Link>
              <Button onClick={() => setIsMobileMenuOpen(false)} variant="ghost" size="icon">
                <X className="w-6 h-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className="text-2xl font-medium text-gray-800 hover:text-blue-900"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t">
              <Link to={createPageUrl("Projects")} onClick={handleNavClick}>
                  <Button size="lg" className="w-full bg-blue-900 hover:bg-blue-800 text-white mb-4">
                    Start Investing
                  </Button>
              </Link>
              <a href="https://wa.me/+918105520382" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bb08c4794_image13.png" alt="Estox One Logo" className="h-16" />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Estox One Infra Private Limited facilitates real estate projects on a private placement basis. Each project is limited to a maximum of 200 investors in compliance with the Companies Act, 2013. Estox One Infra Private Limited is not a SEBI-registered investment advisor, broker, or stock exchange. Investments in real estate involve risks, and past performance does not guarantee future results.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/estox-one/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      onClick={handleNavClick}
                      className="text-gray-400 hover:text-gold-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 81055 20382</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>estoxone.infra@gmail.com</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="font-medium mb-2">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <Button className="bg-gold-600 hover:bg-gold-700 px-4 py-2 text-sm whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Estox One. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-gold-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gold-400 text-sm">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gold-400 text-sm">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .text-gold-400 { color: #fbbf24; }
        .text-gold-500 { color: #f59e0b; }
        .text-gold-600 { color: #d97706; }
        .bg-gold-500 { background-color: #f59e0b; }
        .bg-gold-600 { background-color: #d97706; }
        .bg-gold-700 { background-color: #b45309; }
        .border-gold-500 { border-color: #f59e0b; }
        .hover\\:bg-gold-700:hover { background-color: #b45309; }
        .hover\\:text-gold-400:hover { color: #fbbf24; }
        .focus\\:ring-gold-500:focus { --tw-ring-color: #f59e0b; }
      `}</style>
    </div>
  );
}
