import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CookieNotice() {
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
                            Cookie <span style={{ color: '#fbbf24' }}>Notice</span>
                        </h1>
                        <p className="text-xl text-blue-100">
                            How we use cookies and similar technologies on our platform
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
                                    <p className="text-sm text-gray-600 mb-2">
                                        Our website, <strong>www.estox.in</strong>, is operated by <strong>ESTOX ONE INDIA PRIVATE LIMITED</strong>.
                                    </p>
                                    <p className="text-sm text-gray-600 mb-2">
                                        Where we use "we", "our" or "us" in this notice, we mean ESTOX ONE INDIA PRIVATE LIMITED unless we say otherwise.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Where we use "our site" in this notice, we mean www.estox.in.
                                    </p>
                                </div>

                                {/* What are cookies */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What are cookies?</h2>
                                <p className="text-gray-700 mb-4">
                                    Cookies are text files containing small amounts of information which are downloaded to your device when you visit our site. Our site recognises those cookies on each subsequent visit, enabling our site to recognise you.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Unless you have adjusted your browser settings to refuse cookies (and details of how to do this are signposted at the end of this notice), our site will set cookies as soon as you visit our site.
                                </p>

                                {/* How and why we use cookies */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How and why we use cookies</h2>
                                <p className="text-gray-700 mb-4">We use cookies on our site to:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Recognise you whenever you visit our site</li>
                                    <li>Remember the notifications you've seen so that we don't show them to you again</li>
                                    <li>Allow you to navigate between pages efficiently</li>
                                    <li>Measure how you use our site so it can be updated and improved to give you the best possible experience on our site</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    The information we obtain from our use of cookies will not usually contain information from which you can easily be identified, such as your name. However, we do collect some personal data relating to your computer or other electronic devices, such as your IP address, your browser, and/or other internet log information.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    In most cases, we will need your consent in order to use cookies on our site. The exception to this is where the cookie is essential in order for us to provide you with a service you have requested.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    When you open our site in your browser a cookie pop up message will be displayed and this will ask you for your consent for non-essential cookies to be placed on your device. If you do not click to accept cookies but you continue to use our site without disabling cookies, we will consider this to mean that you accept our use of these non-essential cookies. A record of your acceptance will be stored in a functional cookie for 30 days, after which the cookie will expire and the cookie pop-up message will be displayed again.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    You may withdraw your consent or acceptance at any time by following the instructions for disabling cookies, signposted at the end of this Cookie Notice.
                                </p>

                                {/* Essential Cookies */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Cookies</h2>
                                <p className="text-gray-700 mb-4">
                                    These cookies are essential in order to enable you to move around our site and use its features, such as accessing secure areas of our site. Without these cookies, the services you have asked for cannot be provided.
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">EstoxSession</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Tracks user's session to maintain progress through the website; not personally identifiable.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">__estoxcpv</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Records the cookie consent preferences of visitors.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">__estoxuix</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Assigns a random ID number to each visitor for policy consent and cookie preferences.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">__estoxtpl</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Records the policies that visitors consent to.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">__estoxhasjs</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Checks if browser JavaScript is enabled to function accordingly.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Essential Third Party Cookies */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Third Party Cookies</h2>
                                <p className="text-gray-700 mb-4">
                                    Third parties' cookies are used to provide important functionality to our site, as well as collecting anonymous user data for analysis.
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">SID, HSID</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Contains signed and encrypted records of a user's Google account ID and sign-in time; helps block attacks and form tampering.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">NID</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Remembers recent searches and interactions with ads and visits to advertisers; used to customize ads on Google.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">IDE</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Stored under doubleclick.net domain; used for serving advertising across the web.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">AID, DSID, TAID</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Links user activity across devices if signed into a Google Account.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">3rdparty</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Set by LiveChat Inc. to enable live text-based conversations with visitors.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Functional Cookies */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Functional Cookies</h2>
                                <p className="text-gray-700 mb-4">
                                    These non-essential cookies allow our site to remember the choices you make. The information these cookies collect may be anonymized and they cannot track your browsing activity on other sites.
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">COOKIE_LAW_CONSENT</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Remembers acceptance of cookie use on the site; prevents repeat cookie consent pop-ups.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">30 days</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">_estoxlgndet</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Stored upon registration or login; logs user browsing with details like User ID, Name, Email, and Phone number.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">_estoxlang</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Retains the last language selection made by the user.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">_estoxcurr</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Retains the last currency selection made by the user.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Up to 2 years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Third-Party Performance Cookies */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Performance Cookies</h2>
                                <p className="text-gray-700 mb-4">
                                    These non-essential cookies collect information about how visitors use our site, for instance, which pages visitors go to most often, and if they get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works.
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">SID, HSID</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Contains signed and encrypted records of a user's Google account ID and sign-in time, protecting against attacks and form data theft.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">NID</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Remembers recent searches and interactions with ads, plus visits to an advertiser's site, to provide personalized ads on Google.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">IDE</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Stored under the doubleclick.net domain for advertising purposes across the web.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">ANID, DSID, FLC, AID, TAID, exchange_uid</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Used by Google and its entities, like YouTube, to display relevant ads.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">End of browser session</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-700 font-mono">APISID, HSID, NID, PREF, SAPISID, SID, SSID</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Utilized by Google reCAPTCHA to verify that the user is not a robot and supports the enforcement of Google's privacy policy.</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Up to 2 years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Where to find more information */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where to find more information</h2>
                                <p className="text-gray-700 mb-4">
                                    You can control whether to accept cookies or not. If you decide to not accept cookies, some features and services on our websites will not function properly.
                                </p>
                                <p className="text-gray-700 mb-4">If you would prefer not to accept cookies you can either:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Change your browser settings to notify you when you receive a cookie, which lets you choose whether or not to accept it; or</li>
                                    <li>Set your browser to automatically not accept any cookies.</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    For more information on how we handle personal information please refer to our <Link to="/privacy-policy" className="text-blue-900 underline">Privacy Policy</Link>.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    If you have any further questions, comments or requests regarding our Cookie Notice or how we use cookies on our site, please contact us at <strong>estoxone.infra@gmail.com</strong>.
                                </p>

                                {/* End */}
                                <div className="border-t-2 border-gray-200 pt-8 mt-8">
                                    <p className="text-center text-gray-500 font-semibold">End of Cookie Notice</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
