
import React, { useState, useEffect } from "react";
import { Investment } from "@/entities/Investment";
import { User } from "@/entities/User";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, IndianRupee, Calendar, Building, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [investments, setInvestments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUserInvestments();
  }, []);

  const loadUserInvestments = async () => {
    try {
      const user = await User.me();
      setCurrentUser(user);
      
      const allInvestments = await Investment.list();
      const userInvestments = allInvestments.filter(inv => inv.user_email === user.email);
      setInvestments(userInvestments);
    } catch (error) {
      // User not logged in, redirect to login
      await User.loginWithRedirect(window.location.href);
    }
    setIsLoading(false);
  };

  const getTotalInvested = () => {
    return investments.reduce((total, inv) => total + inv.amount_invested, 0);
  };

  const getTotalEstocks = () => {
    return investments.reduce((total, inv) => total + inv.estocks_purchased, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Investment <span className="text-blue-900">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600">
            Welcome back, {currentUser?.full_name}! Track your real estate investments here.
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IndianRupee className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ₹{getTotalInvested().toLocaleString()}
                </h3>
                <p className="text-gray-600">Total Invested</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTotalEstocks()}
                </h3>
                <p className="text-gray-600">Total Estocks Owned</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {investments.length}
                </h3>
                <p className="text-gray-600">Active Projects</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Investment List */}
        {investments.length > 0 ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Investments</h2>
            
            {investments.map((investment, index) => (
              <motion.div
                key={investment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {investment.project_title}
                          {investment.project_id === "demo-project" && (
                            <Badge className="ml-2 bg-gold-600 text-white">DEMO</Badge>
                          )}
                        </h3>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Estocks Owned</p>
                            <p className="font-semibold text-gray-900">{investment.estocks_purchased}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Amount Invested</p>
                            <p className="font-semibold text-gray-900">₹{investment.amount_invested.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Investment Date</p>
                            <p className="font-semibold text-gray-900">
                              {new Date(investment.investment_date).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Status</p>
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Performance
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Building className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Investments Yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start your real estate investment journey today. Browse our available projects and make your first investment.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800">
              <ArrowUpRight className="w-5 h-5 mr-2" />
              Explore Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

