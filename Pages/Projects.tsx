
import React, { useState, useEffect, useCallback } from "react";
import { Project } from "@/entities/Project";
import { Investment } from "@/entities/Investment";
import { User } from "@/entities/User";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, TrendingUp, Home, Building, Briefcase, Users, Filter, Search, Plus, Minus, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("roi_desc");
  const [showInvestDialog, setShowInvestDialog] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [estocksCount, setEstocksCount] = useState(1); // Renamed conceptually to sqftCount in the UI, but variable name kept consistent for simplicity
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showFullTerms, setShowFullTerms] = useState(false);
  const [showFullPrivacy, setShowFullPrivacy] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    loadProjects();
    loadInvestments();
  }, []);

  const loadProjects = async () => {
    const data = await Project.list();
    // Update the first project's min investment to 10K if it exists
    if (data.length > 0) {
      data[0].min_investment = 10000;
    }
    setProjects(data);
  };

  const loadInvestments = async () => {
    const data = await Investment.list();
    setInvestments(data);
  };

  const getProjectInvestorCount = (projectId) => {
    return investments.filter(inv => inv.project_id === projectId).length;
  };

  const getProjectFundedPercentage = (projectId, maxInvestors) => {
    const investorCount = getProjectInvestorCount(projectId);
    return Math.round((investorCount / maxInvestors) * 100);
  };

  const filterAndSortProjects = useCallback(() => {
    let filtered = [...projects];

    // Add demo project at the beginning
    const demoProject = {
      id: "demo-project",
      title: "Demo Project - Premium Mall",
      location: "Electronic City, Bangalore",
      property_type: "Commercial",
      min_investment: 1000000, // 10L per sqft for demo
      expected_roi: 20,
      rental_yield: 8,
      total_value: 20000000, // 2 Cr
      image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
      status: "Open",
      description: "Experience our investment process with this demo project",
      highlights: ["Demo purpose only", "Learn the investment process", "Risk-free simulation"]
    };

    filtered.unshift(demoProject);

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by property type
    if (selectedType && selectedType !== "all") {
      filtered = filtered.filter(project => project.property_type === selectedType);
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "roi_desc":
          return (b.expected_roi || 0) - (a.expected_roi || 0);
        case "roi_asc":
          return (a.expected_roi || 0) - (b.expected_roi || 0);
        case "investment_asc":
          return (a.min_investment || 0) - (b.min_investment || 0);
        case "investment_desc":
          return (b.min_investment || 0) - (a.min_investment || 0);
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedType, sortBy]);

  useEffect(() => {
    filterAndSortProjects();
  }, [filterAndSortProjects]);

  const handleInvestClick = async (project) => {
    try {
      const user = await User.me();
      setCurrentUser(user);
      setSelectedProject(project);
      setShowTermsDialog(true);
    } catch (error) {
      // User not logged in, redirect to login
      await User.loginWithRedirect(window.location.href);
    }
  };

  const handleTermsAccepted = () => {
    if (termsAccepted && privacyAccepted) {
      setShowTermsDialog(false);
      setShowInvestDialog(true);
    }
  };

  const handleConfirmPayment = async () => {
    const investment = {
      project_id: selectedProject.id,
      user_email: currentUser.email,
      amount_invested: selectedProject.min_investment * estocksCount,
      estocks_purchased: estocksCount,
      project_title: selectedProject.title,
      investment_date: new Date().toISOString()
    };

    await Investment.create(investment);
    
    // Reload investments to update counts
    await loadInvestments();
    
    setShowInvestDialog(false);
    setShowSuccessDialog(true);
    setEstocksCount(1);
    setTermsAccepted(false);
    setPrivacyAccepted(false);
  };

  const getPropertyIcon = (type) => {
    switch (type) {
      case "Land": return Home;
      case "Commercial": return Building;
      case "PG": return Users;
      default: return Briefcase;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800";
      case "Funded": return "bg-blue-100 text-blue-800";
      case "Coming Soon": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatInvestmentValue = (value) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }
    return `₹${(value / 1000).toFixed(0)}K`;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Investment <span className="text-blue-900">Opportunities</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover handpicked premium properties with verified returns. Start your fractional real estate journey today.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
                <SelectItem value="PG">PG</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Rental">Rental</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <TrendingUp className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roi_desc">Highest ROI</SelectItem>
                <SelectItem value="roi_asc">Lowest ROI</SelectItem>
                <SelectItem value="investment_asc">Lowest Investment</SelectItem>
                <SelectItem value="investment_desc">Highest Investment</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {filteredProjects.length} Projects Found
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = getPropertyIcon(project.property_type);
            const maxInvestors = project.id === "demo-project" ? 20 : 200;
            const investorCount = getProjectInvestorCount(project.id);
            const fundedPercentage = getProjectFundedPercentage(project.id, maxInvestors);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group h-full">
                  {project.id === "demo-project" && (
                    <div className="bg-gold-600 text-center py-2">
                      <Badge className="bg-white text-gold-600 font-bold">DEMO PROJECT</Badge>
                    </div>
                  )}
                  
                  <div className="relative">
                    <img 
                      src={project.image_url || "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=500&fit=crop"} 
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`${getStatusColor(project.status)} font-semibold`}>
                        {project.status}
                      </Badge>
                      <Badge className="bg-gold-600 text-gray-900 font-semibold">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {project.property_type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                      {project.expected_roi}% ROI
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Funded ({investorCount}/{maxInvestors})</span>
                          <span>{fundedPercentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gold-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${fundedPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Expected ROI</span>
                        <span className="font-bold text-green-600">{project.expected_roi}%</span>
                      </div>
                      
                      {project.rental_yield > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Rental Yield</span>
                          <span className="font-semibold text-blue-600">{project.rental_yield}%</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Min Investment</span>
                        <span className="font-bold text-gray-900">{formatInvestmentValue(project.min_investment)}</span>
                      </div>

                      {project.total_value && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Value</span>
                          <span className="font-semibold">₹{(project.total_value / 10000000).toFixed(1)}Cr</span>
                        </div>
                      )}
                    </div>

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Highlights</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mr-2"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-blue-900 hover:bg-blue-800"
                        onClick={() => handleInvestClick(project)}
                        disabled={project.status === "Funded" || investorCount >= maxInvestors}
                      >
                        {project.status === "Funded" || investorCount >= maxInvestors ? "Fully Funded" : "Invest Now"}
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" className="flex-1" size="sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          Location
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Terms & Conditions Dialog */}
        <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Terms & Conditions and Privacy Policy</DialogTitle>
              <DialogDescription>
                Please read and accept our terms to continue with your investment.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Terms & Conditions */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Checkbox 
                    id="terms" 
                    checked={termsAccepted}
                    onCheckedChange={setTermsAccepted}
                  />
                  <label htmlFor="terms" className="text-sm font-medium">
                    I accept the Terms & Conditions
                  </label>
                </div>
                
                <div className={`text-sm text-gray-600 ${showFullTerms ? '' : 'max-h-32 overflow-hidden'}`}>
                  <h4 className="font-semibold mb-2">Terms and Conditions</h4>
                  <p className="mb-2">Last Updated: January 2025</p>
                  <p className="mb-4">Welcome to Estox One Infra Private Limited ("Estox One", "we", "our", "us"). By accessing or using our website (estox.in), mobile application, or our services (collectively, the "Platform"), you agree to comply with and be bound by the following Terms and Conditions ("Terms"). Please read them carefully.</p>
                  
                  {showFullTerms && (
                    <>
                      <h5 className="font-semibold mb-2">1. Eligibility</h5>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>You must be at least 18 years old and legally capable of entering into binding contracts.</li>
                        <li>By using our Platform, you confirm that all information you provide is true, accurate, and complete.</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">2. Nature of Services</h5>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Estox One Infra Private Limited is a real estate investment platform that enables users to participate in fractional ownership of real estate projects through Special Purpose Vehicles (SPVs).</li>
                        <li>We are not a stock exchange, securities trading platform, or financial advisor. Investments are subject to property market risks.</li>
                        <li>Estox One does not guarantee fixed returns, profits, or appreciation.</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">3. Investor Limitations</h5>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>In compliance with the Companies Act, 2013, each project offered by Estox One Infra Private Limited shall be limited to a maximum of 200 investors.</li>
                        <li>Investments are offered strictly on a private placement basis and are not a public offer of securities.</li>
                        <li>Estox One reserves the right to refuse or limit participation in any project to ensure compliance with applicable laws.</li>
                      </ul>
                    </>
                  )}
                </div>
                
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600"
                  onClick={() => setShowFullTerms(!showFullTerms)}
                >
                  {showFullTerms ? "Show Less" : "Read More"}
                </Button>
              </div>

              {/* Privacy Policy */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Checkbox 
                    id="privacy" 
                    checked={privacyAccepted}
                    onCheckedChange={setPrivacyAccepted}
                  />
                  <label htmlFor="privacy" className="text-sm font-medium">
                    I accept the Privacy Policy
                  </label>
                </div>
                
                <div className={`text-sm text-gray-600 ${showFullPrivacy ? '' : 'max-h-32 overflow-hidden'}`}>
                  <h4 className="font-semibold mb-2">Privacy Policy</h4>
                  <p className="mb-4">Estox One Infra Private Limited ("Estox One", "we", "our", "us") respects your privacy and is committed to protecting your personal data.</p>
                  
                  {showFullPrivacy && (
                    <>
                      <h5 className="font-semibold mb-2">1. Information We Collect</h5>
                      <p className="mb-4">We may collect your name, email, phone number, and usage data when you interact with our Platform.</p>
                      
                      <h5 className="font-semibold mb-2">2. How We Use Your Information</h5>
                      <p className="mb-4">Your data is used to provide our services, communicate with you, comply with legal obligations, and improve our Platform.</p>
                      
                      <h5 className="font-semibold mb-2">3. Sharing of Information</h5>
                      <p className="mb-4">We do not sell or share your personal information with third parties, except as required by law or for providing our services.</p>
                    </>
                  )}
                </div>
                
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600"
                  onClick={() => setShowFullPrivacy(!showFullPrivacy)}
                >
                  {showFullPrivacy ? "Show Less" : "Read More"}
                </Button>
              </div>
              
              <Button 
                className="w-full bg-blue-900 hover:bg-blue-800"
                onClick={handleTermsAccepted}
                disabled={!termsAccepted || !privacyAccepted}
              >
                Continue to Investment
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Investment Dialog */}
        <Dialog open={showInvestDialog} onOpenChange={setShowInvestDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Invest in {selectedProject?.title}</DialogTitle>
              <DialogDescription>
                {selectedProject?.id === "demo-project" ? "Demo investment - no real money involved" : "Choose your investment amount"}
              </DialogDescription>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ₹{selectedProject.min_investment.toLocaleString()} per sqft
                  </h3>
                  <p className="text-gray-600">Minimum investment per sqft</p>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Number of sqft
                  </label>
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setEstocksCount(Math.max(1, estocksCount - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
                      {estocksCount}
                    </span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setEstocksCount(estocksCount + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Investment:</span>
                    <span className="text-blue-900">
                      ₹{(selectedProject.min_investment * estocksCount).toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-blue-900 hover:bg-blue-800"
                  onClick={handleConfirmPayment}
                >
                  {selectedProject.id === "demo-project" ? "Confirm Demo Payment" : "Confirm Payment"}
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader className="items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <DialogTitle className="text-2xl">Payment Successful!</DialogTitle>
              <DialogDescription>
                Your investment in '{selectedProject?.title}' has been recorded.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <Link to={createPageUrl("Portfolio")}>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowSuccessDialog(false)}
              >
                Continue Browsing
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Building className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedType("all");
            }} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're constantly adding new premium properties. Join our waitlist to get notified about upcoming opportunities that match your investment criteria.
          </p>
          <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-gray-900 font-semibold">
            Join Investment Waitlist
          </Button>
        </div>
      </div>

      <style jsx>{`
        .bg-gold-600 { background-color: #d97706; }
        .bg-gold-700 { background-color: #b45309; }
        .text-gold-600 { color: #d97706; }
        .hover\\:bg-gold-700:hover { background-color: #b45309; }
      `}</style>
    </div>
  );
}
