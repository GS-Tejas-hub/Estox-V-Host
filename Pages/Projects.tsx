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
import { MapPin, TrendingUp, Home, Building, Briefcase, Users, Filter, Search, Plus, Minus, CheckCircle, ArrowRight, Edit2, Trash2 } from "lucide-react";
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
  const [estocksCount, setEstocksCount] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showFullTerms, setShowFullTerms] = useState(false);
  const [showFullPrivacy, setShowFullPrivacy] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    id: '',
    title: '',
    location: '',
    property_type: 'Commercial',
    min_investment: '',
    expected_roi: '',
    rental_yield: '',
    total_value: '',
    image_url: '',
    status: 'Open',
    description: '',
    highlights: ''
  });

  useEffect(() => {
    loadProjects();
    loadInvestments();
    checkUserRole();
  }, []);

  const checkUserRole = async () => {
    const user = await User.me();
    if (user) {
      setCurrentUser(user);
      setIsAdmin(user.role === 'admin');
    }
  };

  const loadProjects = async () => {
    const data = await Project.list();
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

    const demoProject = {
      id: "demo-project",
      title: "Demo Project - Premium Mall",
      location: "Electronic City, Bangalore",
      property_type: "Commercial",
      min_investment: 1000000,
      expected_roi: 20,
      rental_yield: 8,
      total_value: 20000000,
      image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
      status: "Open",
      description: "Experience our investment process with this demo project",
      highlights: ["Demo purpose only", "Learn the investment process", "Risk-free simulation"]
    };
    filtered.unshift(demoProject);

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType && selectedType !== "all") {
      filtered = filtered.filter(project => project.property_type === selectedType);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "roi_desc": return (b.expected_roi || 0) - (a.expected_roi || 0);
        case "roi_asc": return (a.expected_roi || 0) - (b.expected_roi || 0);
        case "investment_asc": return (a.min_investment || 0) - (b.min_investment || 0);
        case "investment_desc": return (b.min_investment || 0) - (a.min_investment || 0);
        default: return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedType, sortBy]);

  useEffect(() => {
    filterAndSortProjects();
  }, [filterAndSortProjects]);

  const handleInvestClick = async (project) => {
    const user = await User.me();
    if (!user) {
      window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
      return;
    }
    setCurrentUser(user);
    setSelectedProject(project);
    setShowTermsDialog(true);
  };

  const handleTermsAccepted = () => {
    if (termsAccepted && privacyAccepted) {
      setShowTermsDialog(false);
      setShowInvestDialog(true);
    }
  };

  const handleConfirmPayment = async () => {
    const user = await User.me();
    if (!user) {
      window.location.href = '/login';
      return;
    }

    const investment = {
      project_id: selectedProject.id,
      user_email: user.email,
      amount_invested: selectedProject.min_investment * estocksCount,
      estocks_purchased: estocksCount,
      project_title: selectedProject.title,
      investment_date: new Date().toISOString()
    };

    console.log('[Investment] Creating investment:', investment);
    const result = await Investment.create(investment);
    console.log('[Investment] Created result:', result);

    await loadInvestments();

    setShowInvestDialog(false);
    setShowSuccessDialog(true);
    setEstocksCount(1);
    setTermsAccepted(false);
    setPrivacyAccepted(false);
  };

  // Admin Functions
  const handleAddProject = () => {
    setEditingProject(null);
    setProjectForm({
      id: `p-${Date.now()}`,
      title: '',
      location: '',
      property_type: 'Commercial',
      min_investment: '',
      expected_roi: '',
      rental_yield: '',
      total_value: '',
      image_url: '',
      status: 'Open',
      description: '',
      highlights: ''
    });
    setShowProjectDialog(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setProjectForm({
      id: project.id,
      title: project.title,
      location: project.location,
      property_type: project.property_type,
      min_investment: project.min_investment?.toString() || '',
      expected_roi: project.expected_roi?.toString() || '',
      rental_yield: project.rental_yield?.toString() || '',
      total_value: project.total_value?.toString() || '',
      image_url: project.image_url || '',
      status: project.status || 'Open',
      description: project.description || '',
      highlights: Array.isArray(project.highlights) ? project.highlights.join('\n') : ''
    });
    setShowProjectDialog(true);
  };

  const handleDeleteProject = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    const success = await Project.delete(projectId);
    if (success) {
      await loadProjects();
      alert('Project deleted successfully!');
    } else {
      alert('Failed to delete project');
    }
  };

  const handleSaveProject = async () => {
    const projectData = {
      id: projectForm.id,
      title: projectForm.title,
      location: projectForm.location,
      property_type: projectForm.property_type,
      min_investment: parseFloat(projectForm.min_investment),
      expected_roi: parseFloat(projectForm.expected_roi) || 0,
      rental_yield: parseFloat(projectForm.rental_yield) || 0,
      total_value: parseFloat(projectForm.total_value) || 0,
      image_url: projectForm.image_url,
      status: projectForm.status,
      description: projectForm.description,
      highlights: projectForm.highlights ? projectForm.highlights.split('\n').filter(h => h.trim()) : []
    };

    let success;
    if (editingProject) {
      success = await Project.update(projectForm.id, projectData);
    } else {
      success = await Project.create(projectData);
    }

    if (success) {
      await loadProjects();
      setShowProjectDialog(false);
      alert(editingProject ? 'Project updated successfully!' : 'Project created successfully!');
    } else {
      alert('Failed to save project');
    }
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
  };

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

          {/* Admin Add Project Button */}
          {isAdmin && (
            <div className="mt-6">
              <Button
                onClick={handleAddProject}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Project
              </Button>
            </div>
          )}
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
                        <span className="text-sm text-gray-600">Expected ROI</span>
                        <span className="font-bold text-green-600">{project.expected_roi}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Rental Yield</span>
                        <span className="font-bold text-blue-600">{project.rental_yield}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Min Investment</span>
                        <span className="font-bold text-gray-900">{formatInvestmentValue(project.min_investment)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Value</span>
                        <span className="font-bold text-gray-900">{formatInvestmentValue(project.total_value)}</span>
                      </div>
                    </div>

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Key Highlights</p>
                        <ul className="text-xs text-gray-600 space-y-1">
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

                      {/* Admin Controls */}
                      {isAdmin && project.id !== "demo-project" && (
                        <div className="flex gap-2 mt-2">
                          <Button
                            variant="outline"
                            className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50"
                            size="sm"
                            onClick={() => handleEditProject(project)}
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 border-red-500 text-red-600 hover:bg-red-50"
                            size="sm"
                            onClick={() => handleDeleteProject(project.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Terms Dialog */}
        <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Terms & Conditions</DialogTitle>
              <DialogTitle className="text-2xl font-bold">Complete Your Investment</DialogTitle>
              <DialogDescription>
                {selectedProject?.title}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  How many sqft do you want to invest in?
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setEstocksCount(Math.max(1, estocksCount - 1))}
                    disabled={estocksCount <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    value={estocksCount}
                    onChange={(e) => setEstocksCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="text-center w-20"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setEstocksCount(estocksCount + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per sqft:</span>
                  <span className="font-bold">{formatInvestmentValue(selectedProject?.min_investment || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-bold">{estocksCount} sqft</span>
                </div>
                <div className="h-px bg-gray-300 my-2"></div>
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total Amount:</span>
                  <span className="font-bold text-blue-900">
                    {formatInvestmentValue((selectedProject?.min_investment || 0) * estocksCount)}
                  </span>
                </div>
              </div>

              <Button
                className="w-full bg-blue-900 hover:bg-blue-800 h-12 text-lg"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="max-w-md">
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <DialogTitle className="text-2xl font-bold mb-2">Payment Successful!</DialogTitle>
              <DialogDescription className="text-gray-600 mb-6">
                Your investment in {selectedProject?.title} has been recorded.
              </DialogDescription>
              <div className="space-y-3">
                <Link to={createPageUrl('Portfolio')}>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    View Portfolio <ArrowRight className="w-4 h-4 ml-2" />
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
            </div>
          </DialogContent>
        </Dialog>

        {/* Admin Project Dialog */}
        <Dialog open={showProjectDialog} onOpenChange={setShowProjectDialog}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </DialogTitle>
              <DialogDescription>
                {editingProject ? 'Update project details' : 'Create a new investment opportunity'}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">Project Title *</label>
                <Input
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  placeholder="Premium Commercial Complex - Baner"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <Input
                  value={projectForm.location}
                  onChange={(e) => setProjectForm({ ...projectForm, location: e.target.value })}
                  placeholder="Baner, Pune"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Property Type *</label>
                <Select value={projectForm.property_type} onValueChange={(value) => setProjectForm({ ...projectForm, property_type: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Land">Land</SelectItem>
                    <SelectItem value="PG">PG</SelectItem>
                    <SelectItem value="Rental">Rental</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Min Investment (₹) *</label>
                <Input
                  type="number"
                  value={projectForm.min_investment}
                  onChange={(e) => setProjectForm({ ...projectForm, min_investment: e.target.value })}
                  placeholder="10000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Expected ROI (%)</label>
                <Input
                  type="number"
                  step="0.1"
                  value={projectForm.expected_roi}
                  onChange={(e) => setProjectForm({ ...projectForm, expected_roi: e.target.value })}
                  placeholder="18"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rental Yield (%)</label>
                <Input
                  type="number"
                  step="0.1"
                  value={projectForm.rental_yield}
                  onChange={(e) => setProjectForm({ ...projectForm, rental_yield: e.target.value })}
                  placeholder="7.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Total Value (₹)</label>
                <Input
                  type="number"
                  value={projectForm.total_value}
                  onChange={(e) => setProjectForm({ ...projectForm, total_value: e.target.value })}
                  placeholder="50000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <Select value={projectForm.status} onValueChange={(value) => setProjectForm({ ...projectForm, status: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Funded">Funded</SelectItem>
                    <SelectItem value="Coming Soon">Coming Soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <Input
                  value={projectForm.image_url}
                  onChange={(e) => setProjectForm({ ...projectForm, image_url: e.target.value })}
                  placeholder="https://images.unsplash.com/photo-..."
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">Description</label>
                <Input
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  placeholder="Brief description of the project"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">Highlights (one per line)</label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={3}
                  value={projectForm.highlights}
                  onChange={(e) => setProjectForm({ ...projectForm, highlights: e.target.value })}
                  placeholder="Metro connectivity planned&#13;&#10;Rapid infrastructure development"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={handleSaveProject}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {editingProject ? 'Update Project' : 'Create Project'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowProjectDialog(false)}
                className="px-6"
              >
                Cancel
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
