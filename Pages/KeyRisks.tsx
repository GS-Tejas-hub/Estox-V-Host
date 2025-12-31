import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, TrendingUp, Home, ArrowLeft, ArrowRight, ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

type RiskCategory = 'properties' | 'funds' | 'estox-one' | null;

export default function KeyRisks() {
    const [expandedCategory, setExpandedCategory] = useState<RiskCategory>(null);

    const categories = [
        {
            id: 'properties' as RiskCategory,
            icon: Building,
            title: 'Properties',
            subtitle: 'KEY RISKS DISCLOSURE',
            description: 'Fractional Real Estate Investment Risks',
        },
        {
            id: 'funds' as RiskCategory,
            icon: TrendingUp,
            title: 'Funds',
            subtitle: 'KEY RISKS – FUNDS',
            description: 'Investment Fund Related Risks',
        },
        {
            id: 'estox-one' as RiskCategory,
            icon: Home,
            title: 'Estox One',
            subtitle: 'KEY RISKS – ESTOX ONE',
            description: 'India Fractional Real Estate Platform Risks',
        },
    ];

    const toggleCategory = (id: RiskCategory) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="mb-6 text-gray-900 font-semibold px-4 py-2" style={{ backgroundColor: '#d97706' }}>
                            Important Disclosure
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Key <span style={{ color: '#fbbf24' }}>Risks</span>
                        </h1>
                        <p className="text-xl text-blue-100">
                            This document must be read carefully before investing through Estox One
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Warning Banner */}
            <div className="bg-amber-50 border-b border-amber-200">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                        Real estate investments offered through ESTOX ONE INDIA PRIVATE LIMITED involve risk, including potential loss of capital. By investing, you acknowledge, understand and accept the risks described below.
                    </p>
                </div>
            </div>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    {/* Category Cards */}
                    <div className="space-y-4">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${expandedCategory === category.id
                                        ? 'border-blue-500 shadow-lg'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${expandedCategory === category.id
                                                    ? 'bg-blue-900'
                                                    : 'bg-blue-100'
                                                    }`}>
                                                    <category.icon className={`w-8 h-8 ${expandedCategory === category.id
                                                        ? 'text-white'
                                                        : 'text-blue-900'
                                                        }`} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                                                    <p className="text-sm text-gray-600">{category.description}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                {expandedCategory === category.id ? (
                                                    <ChevronUp className="w-6 h-6 text-gray-400" />
                                                ) : (
                                                    <ArrowRight className="w-6 h-6 text-gray-400" />
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {expandedCategory === category.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card className="border-2 border-t-0 border-blue-500 rounded-t-none">
                                                <CardContent className="p-8">
                                                    {category.id === 'properties' && <PropertiesRisks />}
                                                    {category.id === 'funds' && <FundsRisks />}
                                                    {category.id === 'estox-one' && <EstoxOneRisks />}
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// Properties Risks Component
function PropertiesRisks() {
    return (
        <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">KEY RISKS DISCLOSURE</h2>
            <p className="text-sm text-gray-500 italic mb-6">
                (This document must be read carefully before investing through Estox One)
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. No Guarantee of Returns</h3>
            <p className="text-gray-700 mb-4">
                Past or projected performance does not guarantee future results. Any appreciation forecasts, rental yield projections or expected returns displayed on the platform are illustrative estimates only. Actual results may differ due to market, economic and operational conditions.
            </p>
            <p className="text-gray-700 mb-4">
                Your capital is at risk, and you may lose some or all of the invested amount. Real estate may depreciate in value or properties may be sold at a loss. Rental income may fluctuate or be delayed.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Investment Term & Liquidity Risk</h3>
            <p className="text-gray-700 mb-4">
                Investments on Estox One are typically structured for a recommended holding period of 3–7 years based on project strategy (rental, development or resale based).
            </p>
            <p className="text-gray-700 mb-4">
                Fractional units are not listed on stock exchanges, and there is no assured exit before completion of the investment term.
            </p>
            <p className="text-gray-700 mb-4">
                Estox One may provide internal resale/Exit Window mechanisms, subject to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Availability of interested buyers</li>
                <li>Regulatory permissions</li>
                <li>Platform liquidity conditions</li>
                <li>Management discretion</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">
                Exit Windows, if offered, do not guarantee sale of your units. This investment should be considered illiquid, and you should invest only if you are prepared to hold for the full recommended duration.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Property, Market & Operational Risks</h3>
            <p className="text-gray-700 mb-4">Real estate investments are subject to risks including:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Market downturns and price volatility</li>
                <li>Rental vacancy or tenant default</li>
                <li>Delay in possession or construction timelines</li>
                <li>Legal disputes related to land/title/RERA</li>
                <li>Regulatory or tax policy changes</li>
                <li>Cost escalations in renovation or property maintenance</li>
                <li>Natural calamities impacting asset value or operations</li>
            </ul>
            <p className="text-gray-700 mb-4">
                SPV performance is dependent on market conditions. Projected outcomes may not materialize.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. SPV & Ownership Structure Risk</h3>
            <p className="text-gray-700 mb-4">
                Investors through Estox One do not directly own the underlying property, but hold fractional economic rights through Special Purpose Vehicles (SPVs), LLPs or equivalent legal entities, as applicable per deal structure.
            </p>
            <p className="text-gray-700 mb-4">Risks include:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>SPV operational delays</li>
                <li>Lower than expected rental distribution</li>
                <li>Difficulty in achieving sale at projected valuation</li>
                <li>Decision-making dependent on collective investor voting mechanisms</li>
            </ul>
            <p className="text-gray-700 mb-4">
                If the Company or SPV faces dissolution or operational failure, there may be delays, legal processes, or loss of invested capital.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. No Financial/Investment Advice</h3>
            <p className="text-gray-700 mb-4">
                Estox One is not a SEBI-registered investment advisor, portfolio manager or broker. We do not provide investment, tax, legal or financial advice.
            </p>
            <p className="text-gray-700 mb-4">Investors must:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Conduct their own due diligence</li>
                <li>Evaluate risk appetite and suitability</li>
                <li>Seek independent financial/legal consultation before investing</li>
            </ul>
            <p className="text-gray-700 mb-4">
                Information and analytics on the platform may rely on third-party data, which although verified to a reasonable extent, cannot be assured for accuracy or completeness.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Borrowed Funds Risk</h3>
            <p className="text-gray-700 mb-4">
                Using loans, credit or borrowed funds to invest increases risk. If the project underperforms or the asset value declines, you may still need to repay debt obligations regardless of investment results.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">7. Fix & Flip / Development Projects – Additional Risk Note</h3>
            <p className="text-gray-700 mb-4">
                Certain projects involving renovation, development or fix-and-flip models may carry higher return potential but also higher uncertainty due to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Construction and renovation delays</li>
                <li>Approval or permit dependencies</li>
                <li>Cost escalation in materials/labour</li>
                <li>Contractor inefficiencies</li>
                <li>Timeline overruns impacting ROI</li>
            </ul>
            <p className="text-gray-700 mb-4">
                Estox One will attempt to manage these risks and provide updates to investors, but returns are not guaranteed.
            </p>
            <p className="text-gray-700 mb-4">
                Insurance may be secured for property and site operations; however, all uncovered risks will be borne by investors collectively through the SPV.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">8. Regulatory and Legal Risks</h3>
            <p className="text-gray-700 mb-4">
                Indian real estate is governed by laws including RERA, Transfer of Property Act, Stamp Duty Act, Income Tax Act, FEMA (for NRIs), Companies Act, Arbitration Act, State land laws, and local municipal regulations. Any changes in policy or law may impact returns, taxation, or sale timelines.
            </p>
            <p className="text-gray-700 mb-4">
                Disputes, title claims, encroachments or litigation may delay exit or reduce valuation.
            </p>
        </div>
    );
}

// Funds Risks Component
function FundsRisks() {
    return (
        <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">KEY RISKS – FUNDS</h2>
            <p className="text-sm text-gray-500 italic mb-6">
                ESTOX ONE INDIA PRIVATE LIMITED
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">No Guarantee</h3>
            <p className="text-gray-700 mb-4">
                Past performance is not indicative of future results. Any expected rental yield, forecasted appreciation, or projected return displayed on the Estox One platform is for informational and illustrative purposes only. Actual performance may differ based on market conditions, regulatory developments, operational outcomes, and economic factors.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
                Your capital is at risk and is not guaranteed. You may lose a portion or the entirety of your invested funds. If the property or asset owned by the SPV is sold at a valuation lower than expected, investors may realize a loss.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Term and Liquidity</h3>
            <p className="text-gray-700 mb-4">
                Investments offered through Estox One are structured for medium-to-long term holding periods, generally ranging from 3 to 7 years, depending on the asset strategy. These are private fractional real estate units and not listed on any stock exchange or public market, therefore liquidity is limited.
            </p>
            <p className="text-gray-700 mb-4">
                Estox One may, at its discretion, offer an internal Exit/Resale Window where investors can list their holdings for transfer to new investors. Exit opportunities, if facilitated:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Are not guaranteed</li>
                <li>Depend on buyer availability and demand</li>
                <li>May only open at predefined intervals (subject to platform policy)</li>
                <li>May not result in sale within the listing period</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">
                An investor must be willing to hold the investment for the recommended term. Even if an Exit Window is available, there is no certainty that you will be able to liquidate or exit your position early.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Risk Warning</h3>
            <p className="text-gray-700 mb-4">
                Investment in Indian real estate through fractional ownership is speculative in nature. Investors on Estox One do not directly own the underlying property, but instead hold fractional economic rights through a Special Purpose Vehicle (SPV), LLP or similar legal structure formed for the asset.
            </p>
            <p className="text-gray-700 mb-4">Key risks include:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Market value may fluctuate, resulting in capital loss</li>
                <li>Rental income may be delayed, reduced, or vacancy-led interruptions may occur</li>
                <li>Sale of the property at the end of the term may take longer than anticipated</li>
                <li>Regulatory changes, RERA compliance issues, title disputes or taxation revisions may impact outcomes</li>
                <li>Limited buyer pool may delay exit or affect valuation during resale</li>
            </ul>
            <p className="text-gray-700 mb-4">
                Investments offered via Estox One differ substantially from direct freehold ownership, REIT units, mutual funds, shares, or government securities. If Estox One or the corresponding SPV ceases operations or undergoes restructuring, investors may face delays, administrative processes, or potential loss.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
                Investing with borrowed capital or loans increases risk. If the asset underperforms, you are still obligated to repay your lender irrespective of investment returns.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">No Advice</h3>
            <p className="text-gray-700 mb-4">
                Estox One operates as a fractional real estate investment platform, structuring and administering SPVs/LLPs that hold property interests on behalf of investors. Estox One is not a SEBI-registered financial advisor, analyst, broker, or portfolio manager and does not provide investment, legal, tax, financial, or real estate advice.
            </p>
            <p className="text-gray-700 mb-4">
                Investors are responsible for conducting independent evaluation and due diligence of each investment opportunity. You are strongly recommended to seek professional advice from a qualified financial advisor, legal consultant or tax professional before investing.
            </p>
            <p className="text-gray-700 mb-4">
                Estox One may use information from third-party sources deemed reasonably reliable; however, we do not guarantee completeness, accuracy or future reliability of such data.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Investor Confirmation</h3>
            <p className="text-gray-700 mb-4">By investing through Estox One, you acknowledge and accept:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Investments involve financial risk and potential loss of capital.</li>
                <li>Returns are not assured or guaranteed.</li>
                <li>Liquidity is limited and exit may not be possible on demand.</li>
                <li>You have read and understood the risk factors independently.</li>
                <li>You agree to make decisions based on your own assessment and/or external advice.</li>
            </ul>
        </div>
    );
}

// Estox One Risks Component
function EstoxOneRisks() {
    return (
        <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">KEY RISKS – ESTOX ONE</h2>
            <p className="text-sm text-gray-500 italic mb-6">
                India Fractional Real Estate
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">No Guarantee</h3>
            <p className="text-gray-700 mb-4">
                Past performance does not guarantee future performance. Any historical returns, rental yields or appreciation projections presented on the Estox One platform are indicative and not assured. Real estate market conditions, regulatory changes and operational factors may impact returns.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
                Your capital is at risk and is not guaranteed. In adverse circumstances, the underlying property/asset may be sold at a lower valuation, resulting in partial or total loss of invested capital.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Term and Liquidity</h3>
            <p className="text-gray-700 mb-4">
                Investments offered by Estox One are intended to be held until the completion of the recommended investment period, generally between 3–7 years, depending on property strategy, market dynamics and exit planning.
            </p>
            <p className="text-gray-700 mb-4">
                Fractional holdings are not listed on stock exchanges or public investment markets. Estox One may provide an Exit/Resale Window allowing investors to sell holdings to other investors on the platform, subject to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Window availability at scheduled intervals</li>
                <li>Buyer demand and platform liquidity</li>
                <li>Completion of compliance checks and transfer procedures</li>
                <li>Company discretion and operational feasibility</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">
                Exit is not guaranteed, and investors must be willing to hold for the full recommended term. Even when Exit Window is available, a sale may not occur if no buyer is found.
            </p>
            <p className="text-gray-700 mb-4 italic">
                This investment should be treated as illiquid.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Risk Warning</h3>
            <p className="text-gray-700 mb-4">
                Investment through Estox One is speculative in nature. Investors do not directly own the physical property, but hold economic/ownership rights via Special Purpose Vehicles (SPVs), LLPs or structured entities in compliance with Indian regulations.
            </p>
            <p className="text-gray-700 mb-4">Associated risks include, but are not limited to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Market volatility, price correction or recession</li>
                <li>Delay or fluctuation in rental distribution</li>
                <li>Tenant default, vacancy or rent renegotiation</li>
                <li>Legal/title disputes or regulatory restrictions (RERA, municipal, land laws)</li>
                <li>Taxation policy changes impacting returns</li>
                <li>Liquidity challenges during resale or end-of-term exit</li>
                <li>Delay in asset sale or lower-than-expected valuation at exit</li>
                <li>Operational failure of SPV or platform-related business disruptions</li>
            </ul>
            <p className="text-gray-700 mb-4">
                Fractional investments are materially different from direct property purchase, REIT units, mutual funds or stock investments. In the unlikely event Estox One or the SPV ceases operations, investors may face delays, costs, and risks associated with liquidation processes.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
                Using borrowed funds/loans to invest increases financial risk. Regardless of asset performance, debt repayment obligations remain.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">No Advice</h3>
            <p className="text-gray-700 mb-4">
                Estox One functions as a technology-based real estate investment facilitation platform enabling fractional participation through legally structured SPVs/LLPs. Estox One is not a SEBI-registered investment advisor, wealth manager, broker or property consultant, and does not provide investment or financial advice.
            </p>
            <p className="text-gray-700 mb-4">
                Investors must conduct independent research and due diligence before investing. Consultation with a professional financial advisor, legal expert or tax consultant is strongly recommended.
            </p>
            <p className="text-gray-700 mb-4">
                Data and analytics displayed may be sourced from third parties considered reliable, but accuracy and completeness cannot be guaranteed.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Investor Acknowledgement</h3>
            <p className="text-gray-700 mb-4">By investing using Estox One, the investor confirms that:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Investment returns are uncertain and capital risk is understood.</li>
                <li>Liquidity is limited; early exit is not guaranteed.</li>
                <li>The investor is financially capable of bearing losses.</li>
                <li>The decision is self-assessed and/or made after external advisory.</li>
                <li>All risk disclosures have been read and accepted voluntarily.</li>
            </ul>
        </div>
    );
}
