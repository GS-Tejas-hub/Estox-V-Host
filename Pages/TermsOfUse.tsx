import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TermsOfUse() {
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
                            Legal Document
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Terms of <span style={{ color: '#fbbf24' }}>Use</span>
                        </h1>
                        <p className="text-xl text-blue-100">
                            Please read these terms carefully before using our platform
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <Card className="border-0 shadow-xl">
                        <CardContent className="p-8 md:p-12">
                            <div className="prose prose-lg max-w-none">
                                {/* Header Info */}
                                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                    <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> [Insert Date]</p>
                                    <p className="text-sm text-gray-600 mb-2"><strong>Website:</strong> www.estox.in / Estox One App</p>
                                </div>

                                {/* Section 1 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                    Introduction
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    These Terms of Use govern your access to and usage of the Estox One website, mobile application and related services ("Platform"). By accessing or using the Platform, you agree to comply with these Terms of Use along with our Privacy Policy, Cookie Policy, Investor Agreement and other legal documents applicable to usage and investment.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    If you do not agree to these Terms, you should discontinue use immediately.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    The Platform is operated by <strong>ESTOX ONE INDIA PRIVATE LIMITED</strong>, CIN: U68100KA2025PTC212678, registered under the Companies Act, 2013 (India) with its registered office located at:
                                </p>
                                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                    <p className="text-gray-700 text-sm">
                                        No. 39, K No. 138/4, Airport Road, Segehalli, KR Puram, Bhattarahalli, Bangalore North, Bangalore – 560049, Karnataka, India.
                                    </p>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Email:</strong> estoxone.infra@gmail.com
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        <strong>Website:</strong> www.estox.in
                                    </p>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Estox One enables fractional real estate investment through structured models including SPVs, revenue-sharing or equity-linked structures as applicable. We do not guarantee returns, appreciation or liquidity.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    We may update or modify these Terms at any time. Continued use implies acceptance of such updates.
                                </p>

                                {/* Section 2 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                                    Eligibility & Registration
                                </h2>
                                <p className="text-gray-700 mb-4">To access the Platform, you must:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Be at least 18 years of age.</li>
                                    <li>Have full legal capacity to enter binding contracts.</li>
                                    <li>Be an Indian resident/NRI permitted under FEMA compliance.</li>
                                </ul>
                                <p className="text-gray-700 mb-4">To use investment services, you must:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Complete KYC/AML verification (PAN, Aadhaar, Address Proof, Banking details).</li>
                                    <li>Provide accurate, truthful information.</li>
                                    <li>Understand and accept investment risk disclosures.</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    We may reject any application at our discretion.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    You are solely responsible for maintaining confidentiality of your account login. All activities made through your account are deemed yours.
                                </p>

                                {/* Section 3 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                                    Platform Nature & Disclaimer
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Estox One is a fractional real estate investment facilitation platform, not a bank, financial advisor, broker, portfolio manager, or deposit-taking entity.
                                </p>
                                <p className="text-gray-700 mb-4">We do not promise or guarantee:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Fixed or assured returns</li>
                                    <li>Capital safety or guaranteed appreciation</li>
                                    <li>Rental yield certainty</li>
                                    <li>Exit/liquidity at a specific time</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Content on the Platform is informational only. Real estate investments carry risk due to market, regulatory, operational, taxation and macroeconomic factors.
                                </p>
                                <p className="text-gray-700 mb-4 font-semibold">
                                    You are strongly advised to consult independent financial, legal and tax professionals before investing.
                                </p>
                                <p className="text-gray-700 mb-4 italic">
                                    Past performance is not indicative of future returns.
                                </p>

                                {/* Section 4 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                                    Prohibited Use
                                </h2>
                                <p className="text-gray-700 mb-4">You agree NOT to:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Use the Platform for unlawful, fraudulent or malicious purposes.</li>
                                    <li>Upload false, misleading or defamatory material.</li>
                                    <li>Attempt to hack, manipulate or disrupt platform security.</li>
                                    <li>Run bots, scrapers or automated data extraction tools without permission.</li>
                                    <li>Upload malware, viruses or harmful executable code.</li>
                                    <li>Impersonate another person or violate privacy laws.</li>
                                    <li>Engage in activities related to money laundering or illegal financial conduct.</li>
                                </ul>
                                <p className="text-gray-700 mb-4 font-semibold">
                                    Non-compliance will lead to suspension/termination and may involve legal reporting.
                                </p>

                                {/* Section 5 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
                                    Investment Risk Warning
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Property-related data, projected returns, rental yields, appreciation forecasts are indicative estimates, not commitments.
                                </p>
                                <p className="text-gray-700 mb-4">Investment involves risks including:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Liquidity constraints</li>
                                    <li>Regulatory changes (RERA, taxation, land compliance)</li>
                                    <li>Market fluctuations</li>
                                    <li>Operational risks in SPVs/projects</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Investors may experience loss of capital. You acknowledge responsibility for investment decisions.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    We do not act as your investment advisor unless explicitly contracted.
                                </p>

                                {/* Section 6 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">6</span>
                                    Intellectual Property
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    All IP assets on the Platform including text, interface, graphics, technology, trademarks belong to ESTOX ONE INDIA PRIVATE LIMITED.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Users may not copy, reproduce, reverse engineer, distribute or modify content without written approval.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Data uploaded by users (property documents, images etc.) remains owned by them, but users grant Estox One a perpetual license to use the data for operational and legal purposes.
                                </p>

                                {/* Section 7 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">7</span>
                                    User Obligations
                                </h2>
                                <p className="text-gray-700 mb-4">Users must ensure:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>All data submitted is accurate.</li>
                                    <li>No impersonation or false documentation.</li>
                                    <li>Compliance with IT Act 2000, Digital Personal Data Protection Act 2023, RERA, FEMA, Income Tax Act, Companies Act.</li>
                                    <li>No property listed violates ownership/title or court restrictions.</li>
                                </ul>

                                {/* Section 8 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">8</span>
                                    Confidentiality
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Users and investors agree to maintain confidentiality of business plans, investment documents, financial data, and privileged information received through the Platform, except where disclosure is legally mandatory.
                                </p>

                                {/* Section 9 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">9</span>
                                    Limitation of Liability
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Platform usage is at your own risk.
                                </p>
                                <p className="text-gray-700 mb-4">To the maximum extent permissible under Indian law:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Estox One will not be liable for financial loss from investment decisions.</li>
                                    <li>We are not responsible for downtime, cyberattacks, or third-party integration failures.</li>
                                    <li>Our total aggregate liability under these terms is limited to INR 50,000.</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    We do not exclude liability for fraud, wilful misconduct, or injury caused by negligence.
                                </p>

                                {/* Section 10 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">10</span>
                                    Suspension & Termination
                                </h2>
                                <p className="text-gray-700 mb-4">The Company may suspend or terminate access if:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Terms are violated</li>
                                    <li>Suspicious activity is detected</li>
                                    <li>Legal/regulatory compliance requires it</li>
                                    <li>User misuses or damages platform integrity</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Post termination, users must cease platform access. Confidentiality and legal liabilities survive termination.
                                </p>

                                {/* Section 11 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">11</span>
                                    Governing Law & Dispute Resolution
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    These Terms are governed by laws of India.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    <strong>Jurisdiction:</strong> Courts of Bangalore, Karnataka
                                </p>
                                <p className="text-gray-700 mb-2">Dispute resolution method:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Arbitration under Arbitration & Conciliation Act, 1996</li>
                                    <li>Single arbitrator mutually appointed</li>
                                    <li>Venue: Bangalore</li>
                                    <li>Language: English</li>
                                </ul>

                                {/* Section 12 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">12</span>
                                    Communication
                                </h2>
                                <p className="text-gray-700 mb-4">Official communication shall be through:</p>
                                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                    <p className="text-gray-700 text-sm"><strong>Email:</strong> estoxone.infra@gmail.com</p>
                                    <p className="text-gray-700 text-sm"><strong>Website:</strong> www.estox.in</p>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Registered Office:</strong><br />
                                        No. 39, K No. 138/4, Airport Road, Segehalli, KR Puram, Bhattarahalli, Bangalore North, Bangalore – 560049, Karnataka
                                    </p>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Notices sent to registered email are deemed delivered.
                                </p>

                                {/* Section 13 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">13</span>
                                    Amendments
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We may revise Terms anytime. Updates will be published on the Platform. Continued use implies acceptance of revised Terms.
                                </p>

                                {/* End */}
                                <div className="border-t-2 border-gray-200 pt-8 mt-8">
                                    <p className="text-center text-gray-500 font-semibold">End of Terms of Use</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
