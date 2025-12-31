import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
                            Privacy <span style={{ color: '#fbbf24' }}>Policy</span>
                        </h1>
                        <p className="text-xl text-blue-100">
                            How we collect, use, and protect your personal information
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
                                    <p className="text-sm text-gray-600 mb-2"><strong>Company:</strong> ESTOX ONE INDIA PRIVATE LIMITED</p>
                                    <p className="text-sm text-gray-600 mb-2"><strong>CIN:</strong> U68100KA2025PTC212678</p>
                                    <p className="text-sm text-gray-600 mb-2"><strong>Registered Office:</strong> No. 39, K No. 138/4, Airport Road, Segehalli, KR Puram, Bhattarahalli, Bangalore North, Bangalore – 560049, Karnataka, India</p>
                                    <p className="text-sm text-gray-600 mb-2"><strong>Email:</strong> estoxone.infra@gmail.com</p>
                                    <p className="text-sm text-gray-600"><strong>Website:</strong> www.estox.in</p>
                                </div>

                                {/* Section 1 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                    Introduction
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Estox One India Private Limited ("Estox One", "we", "us", "our") is committed to protecting the privacy and security of user information. This Privacy Policy explains how we collect, use, store, protect and disclose personal data obtained through:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Our website and web portals linked to this policy</li>
                                    <li>Our mobile application and digital platform</li>
                                    <li>Investment onboarding processes, sign-up pages, dashboards and forms</li>
                                    <li>Any transactional or communication interface you engage with</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Personal information refers to data that identifies or relates to an identifiable individual such as name, contact number, Aadhaar, PAN, financial details, KYC data, usage logs, cookies and device identifiers.
                                </p>
                                <p className="text-gray-700 mb-4 font-semibold">
                                    By using the Estox One platform, registering or investing through us, you consent to the terms of this Privacy Policy and Terms of Use.
                                </p>

                                {/* Section 2 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                                    Why This Policy Exists
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    India's Digital Personal Data Protection Act 2023, Information Technology Act 2000 and associated rules mandate lawful, transparent, and secure processing of personal data. We follow these obligations and ensure:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Fair and lawful data collection</li>
                                    <li>Purpose-limited use</li>
                                    <li>Secure storage and access control</li>
                                    <li>User rights and consent compliance</li>
                                    <li>Minimal data collected only as required for operations</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Information typically collected includes name, address, email, mobile number, KYC documents, bank details, and automatic device data through website analytics and cookies.
                                </p>

                                {/* Section 3 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                                    How We Collect Personal Data
                                </h2>
                                <p className="text-gray-700 mb-4">We collect data in the following ways:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>When you register or create an account on our platform</li>
                                    <li>While completing KYC/AML verification</li>
                                    <li>When you invest in properties or participate in offers</li>
                                    <li>Through communication, customer support, chat or email</li>
                                    <li>Automatically when using website/app through cookies and tracking</li>
                                    <li>When you interact with features such as payments, withdrawals, exit windows</li>
                                    <li>Usage data such as IP address, device type, browser version, session logs, clickstream, user actions</li>
                                </ul>
                                <p className="text-gray-700 mb-4">Automatic data includes (but is not limited to):</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>IP address and geolocation</li>
                                    <li>Device OS, model, identifiers</li>
                                    <li>App activity, session duration, page interactions</li>
                                    <li>Referrer URL, timestamps and analytics metrics</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Refer to our <Link to="/cookie-notice" className="text-blue-900 underline">Cookie Policy</Link> for more information.
                                </p>

                                {/* Section 4 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                                    How We Use Your Personal Data
                                </h2>
                                <p className="text-gray-700 mb-4">We process personal data for the following purposes:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Identity verification, KYC, AML, compliance screening</li>
                                    <li>Investor onboarding and suitability assessment</li>
                                    <li>Account creation, login authentication & user profile maintenance</li>
                                    <li>Facilitating investment transactions and SPV-based ownership</li>
                                    <li>Processing payments, fund transfers, distribution payouts</li>
                                    <li>Providing customer support and communication</li>
                                    <li>Compliance with Indian regulatory bodies (RERA, MCA, Income Tax, FIU-IND etc.)</li>
                                    <li>Fraud monitoring, risk prevention, security management</li>
                                    <li>Improving platform performance via analytics</li>
                                    <li>Sending notifications, updates, and service-related alerts</li>
                                    <li>Marketing communication (only with consent or opt-in)</li>
                                    <li>Legal, accounting, auditing, and dispute resolution purposes</li>
                                    <li>Research, product improvement and business intelligence</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Data used for statistics or analytics is anonymised whenever possible.
                                </p>

                                {/* Section 5 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
                                    Data Protection & Security Measures
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We store data using security-controlled infrastructure and encryption safeguards. Measures include:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>SSL/TLS encryption for data transmission</li>
                                    <li>Secure access controls and authentication layers</li>
                                    <li>Restricted internal data access on a need-to-know basis</li>
                                    <li>Regular audit of systems and storage architecture</li>
                                    <li>Third-party service providers bound by confidentiality and compliance</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Despite protections, internet transmission carries inherent risk. Users are advised to safeguard their login details and devices.
                                </p>
                                <p className="text-gray-700 mb-4">You can enhance your security by:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Using strong passwords and changing them periodically</li>
                                    <li>Logging out after sessions</li>
                                    <li>Avoiding public networks for financial transactions</li>
                                    <li>Keeping device OS and antivirus updated</li>
                                </ul>

                                {/* Section 6 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">6</span>
                                    Data Retention
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We retain personal data only as required for lawful and operational purposes.
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Financial and tax-related data is stored as per statutory retention period</li>
                                    <li>KYC/identity information retained while account is active and up to 7 years post-closure</li>
                                    <li>Data may remain archived for audit and legal reference</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Once no longer required, data is securely deleted or anonymised.
                                </p>

                                {/* Section 7 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">7</span>
                                    Sharing of Personal Data
                                </h2>
                                <p className="text-gray-700 mb-4">We may share data with:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>KYC/AML verification partners</li>
                                    <li>Payment gateways and banking institutions</li>
                                    <li>Regulatory and law enforcement authorities if legally required</li>
                                    <li>Hosting/cloud service providers</li>
                                    <li>Technology & analytics partners (for performance and UX improvements)</li>
                                    <li>Operational contractors involved in service execution</li>
                                    <li>Potential buyers/investors in case of business acquisition/restructuring</li>
                                    <li>Legal advisors for dispute or compliance matters</li>
                                </ul>
                                <p className="text-gray-700 mb-4 font-semibold">
                                    We do not sell personal data.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    All third-party entities must follow equivalent data protection standards.
                                </p>

                                {/* Section 8 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">8</span>
                                    Withdrawal of Consent & Marketing Opt-Out
                                </h2>
                                <p className="text-gray-700 mb-4">You may withdraw consent at any time via:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Email:</strong> estoxone.infra@gmail.com</li>
                                    <li><strong>Account settings:</strong> opt-out of communications</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    Withdrawal may impact service accessibility (e.g., investments require KYC).
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Marketing emails can be unsubscribed via "Unsubscribe" link at the bottom of emails.
                                </p>

                                {/* Section 9 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">9</span>
                                    Profiling & Automated Processing
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We may use analytics to enhance user experience, investment performance reporting and behaviour insights.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    We do not make automated investment decisions without human oversight.
                                </p>

                                {/* Section 10 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">10</span>
                                    Monitoring & Compliance
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Communications with Estox One may be recorded for regulatory compliance, quality checks, fraud prevention or audit trails, as permitted under Indian law.
                                </p>

                                {/* Section 11 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">11</span>
                                    User Rights Under Indian Law
                                </h2>
                                <p className="text-gray-700 mb-4">You have rights to:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Access your personal data</li>
                                    <li>Request correction or updates</li>
                                    <li>Request deletion (subject to legal retention limits)</li>
                                    <li>Withdraw consent for specific processing</li>
                                    <li>Request data portability (where applicable)</li>
                                    <li>Object to marketing communication</li>
                                    <li>Lodge complaints regarding misuse</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    You may exercise rights by contacting us at: <strong>estoxone.infra@gmail.com</strong>
                                </p>
                                <p className="text-gray-700 mb-4">
                                    We may request verification documents before executing requests.
                                </p>

                                {/* Section 12 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">12</span>
                                    Third-Party Links
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Our platform may contain links to external sites. We are not responsible for their privacy practices or content.
                                </p>

                                {/* Section 13 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">13</span>
                                    Personal & Sensitive Data Collected via Mobile App
                                </h2>
                                <p className="text-gray-700 mb-4">We may collect:</p>

                                <h4 className="font-semibold text-gray-900 mt-4 mb-2">KYC Images & Documents</h4>
                                <p className="text-gray-700 mb-4">
                                    Aadhaar, PAN, ID photos, selfies for identity verification. Used for investor onboarding as per RBI/AML/KYC compliance.
                                </p>

                                <h4 className="font-semibold text-gray-900 mt-4 mb-2">Device Information</h4>
                                <p className="text-gray-700 mb-4">
                                    Device model, ID, OS version. Used for security, fraud control, feature optimisation and notifications.
                                </p>

                                <h4 className="font-semibold text-gray-900 mt-4 mb-2">Payment Information</h4>
                                <p className="text-gray-700 mb-4">
                                    UPI details, Bank details, transaction logs. Processed via authorized gateways – Estox One does not store card details.
                                </p>

                                <h4 className="font-semibold text-gray-900 mt-4 mb-2">Analytics</h4>
                                <p className="text-gray-700 mb-4">
                                    Usage behaviour data, engagement events. Used to improve platform interface and performance.
                                </p>

                                <p className="text-gray-700 mb-4 font-semibold">
                                    All data transferred is encrypted via HTTPS or equivalent secure protocol.
                                </p>

                                {/* Section 14 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">14</span>
                                    Social Media
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We operate official pages for communication, marketing, engagement and support. Posts by third-parties are not endorsed by us.
                                </p>

                                {/* Section 15 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">15</span>
                                    Data Storage & International Transfers
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Data may be stored or processed in India. In some cases, secure server infrastructure or backups may involve cross-border storage adhering to:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>DPDP Act 2023 compliance</li>
                                    <li>Secure lawful transfer protocols</li>
                                    <li>Contractual data protection clauses with vendors</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    You consent to such processing for service delivery.
                                </p>

                                {/* Section 16 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">16</span>
                                    Changes to this Privacy Policy
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We may update this Privacy Policy from time to time. Updated versions will be posted on the website/app. Continued use implies acceptance.
                                </p>

                                {/* Section 17 */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm mr-3">17</span>
                                    Contact Us
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    For requests, queries or complaints relating to privacy/data handling, contact:
                                </p>
                                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                    <p className="text-gray-700 font-semibold">ESTOX ONE INDIA PRIVATE LIMITED</p>
                                    <p className="text-gray-700 text-sm mt-2"><strong>Email:</strong> estoxone.infra@gmail.com</p>
                                    <p className="text-gray-700 text-sm"><strong>Website:</strong> www.estox.in</p>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Registered Address:</strong><br />
                                        No. 39, K No. 138/4, Airport Road, Segehalli, KR Puram, Bhattarahalli, Bangalore North, Bangalore – 560049, Karnataka, India
                                    </p>
                                </div>

                                {/* End */}
                                <div className="border-t-2 border-gray-200 pt-8 mt-8">
                                    <p className="text-center text-gray-500 font-semibold">End of Privacy Policy</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
