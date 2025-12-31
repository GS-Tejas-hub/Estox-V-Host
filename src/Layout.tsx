import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MessageCircle, Menu, X, Linkedin, Instagram, Youtube, Twitter, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "@/entities/User";

type LayoutProps = {
  children?: React.ReactNode;
  currentPageName?: string;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const currentUser = await User.me();
    setUser(currentUser);
  };

  const navigation = [
    { name: "Home", href: createPageUrl("Home") },
    { name: "How It Works", href: createPageUrl("HowItWorks") },
    { name: "Projects", href: createPageUrl("Projects") },
    { name: "Portfolio", href: createPageUrl("Portfolio") },
    { name: "About", href: createPageUrl("About") },
    { name: "Legal", href: createPageUrl("Legal") },
    { name: "Contact", href: createPageUrl("Contact") }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
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
                  className={`text-sm font-medium transition-colors hover:text-blue-900 ${location.pathname === item.href
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
              {user ? (
                <>
                  <span className="text-sm text-gray-700">
                    Hi, {user.full_name || user.email}!</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-500 text-red-600 hover:bg-red-50"
                    onClick={async () => {
                      await User.signOut();
                      setUser(null);
                    }}
                  >
                    <LogIn className="w-4 h-4 mr-2 rotate-180" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={handleNavClick}>
                    <Button variant="outline" size="sm" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={handleNavClick}>
                    <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
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

            <div className="mt-auto pt-8 border-t space-y-3">
              {user ? (
                <Link to="/dashboard" onClick={handleNavClick}>
                  <Button size="lg" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" onClick={handleNavClick}>
                    <Button variant="outline" size="lg" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
                      <LogIn className="w-5 h-5 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={handleNavClick}>
                    <Button size="lg" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                      <UserPlus className="w-5 h-5 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
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
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Top Legal Links Bar */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm">
                <span className="text-gray-400">© 2025 Estox One. All rights reserved.</span>
                <span className="text-gray-600 hidden md:inline">|</span>
                <Link to={createPageUrl('TermsOfUse')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
                <span className="text-gray-600 hidden md:inline">|</span>
                <Link to={createPageUrl('KeyRisks')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">Key Risks</Link>
                <span className="text-gray-600 hidden md:inline">|</span>
                <Link to={createPageUrl('PrivacyPolicy')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <span className="text-gray-600 hidden md:inline">|</span>
                <Link to={createPageUrl('CookieNotice')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">Cookie Notice</Link>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/estox-one/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/estox_one?igsh=ZThjb3dkd2o2aDFs&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bb08c4794_image13.png" alt="Estox One Logo" className="h-12" />
              </div>
              <p className="text-sm text-gray-400 mb-2 font-semibold">ESTOX ONE INDIA PRIVATE LIMITED</p>
              <p className="text-xs text-gray-500 mb-4">CIN: U68100KA2025PTC212678</p>

              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="flex items-center gap-1 px-3 py-1.5 border border-gray-700 rounded-full text-xs text-gray-300">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  RERA Compliant
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 border border-gray-700 rounded-full text-xs text-gray-300">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SPV Secured
                </div>
              </div>
            </div>

            {/* Column 2: Platform Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl('Projects')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('HowItWorks')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Portfolio')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl('About')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Contact')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Legal')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Legal & Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl('PrivacyPolicy')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('TermsOfUse')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('KeyRisks')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Risk Disclosure
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('CookieNotice')} onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors text-sm">
                    Cookie Notice
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Investment Disclaimer */}
          <div className="border-t border-gray-800 mt-10 pt-8">
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Investment Disclaimer – Estox One (India)</h4>
            <div className="text-xs text-gray-500 space-y-4">
              <p>
                All investments involve risk. Past performance is not a reliable indicator of future results or future performance. Returns, rental yields, appreciation projections and exit timelines shown on the platform are indicative only and not guaranteed.
              </p>
              <p>
                ESTOX ONE INDIA PRIVATE LIMITED is an Indian private limited company operating a technology platform that enables fractional participation in real estate through SPV/LLP structures. Estox One is not a SEBI-registered investment advisor, portfolio manager, broker or NBFC, and does not provide investment or financial advice. Investors must conduct their own due diligence and review Key Risks before investing.
              </p>
              <p>
                Investments made through Estox One are private, unlisted, and relatively illiquid in nature. Exit opportunities may depend on buyer interest, market conditions and company policies. Capital may be at risk, and investors may lose part or all of their investment.
              </p>
              <p>
                By using the Estox One platform (website and mobile app), you agree to abide by the <Link to={createPageUrl('TermsOfUse')} onClick={handleNavClick} className="text-blue-400 hover:underline">Terms of Use</Link>, <Link to={createPageUrl('PrivacyPolicy')} onClick={handleNavClick} className="text-blue-400 hover:underline">Privacy Policy</Link> and <Link to={createPageUrl('CookieNotice')} onClick={handleNavClick} className="text-blue-400 hover:underline">Cookie Notice</Link>. Please read all documents carefully before investing.
              </p>
              <p>
                Estox One may offer investment opportunities under Special Purpose Vehicle (SPV)/LLP structured real estate models, compliant with applicable Indian laws including Companies Act 2013, RERA regulations, FEMA (for NRI participation as applicable) and the Digital Personal Data Protection Act 2023.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="font-semibold text-gray-400">Registered Office:</p>
                <p>No. 39, K No. 138/4, Airport Road, Segehalli, KR Puram, Bhattarahalli, Bangalore North, Bangalore – 560049, Karnataka, India</p>
                <p className="mt-2">
                  <span className="font-semibold text-gray-400">Email:</span> estoxone.infra@gmail.com | <span className="font-semibold text-gray-400">Website:</span> www.estox.in
                </p>
              </div>
              <p className="mt-4 text-yellow-500/80 font-medium">
                We strongly recommend reading the <Link to={createPageUrl('KeyRisks')} onClick={handleNavClick} className="text-yellow-400 hover:underline">Key Risks Document</Link> before making an investment decision.
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-xs text-gray-500">
              © 2025 ESTOX ONE INDIA PRIVATE LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
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


