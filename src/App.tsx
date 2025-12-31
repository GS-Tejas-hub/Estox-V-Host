import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Portfolio from '../Pages/Portfolio';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import HowItWorks from '../Pages/HowItWorks';
import Legal from '../Pages/Legal';
import TermsOfUse from '../Pages/TermsOfUse';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import CookieNotice from '../Pages/CookieNotice';
import KeyRisks from '../Pages/KeyRisks';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import { createPageUrl } from './utils';

export default function App(): JSX.Element {
  return (
    <Routes>
      {/* Auth Routes - No Layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Public Routes - With Layout */}
      <Route path="/" element={<Layout currentPageName="App" />}>
        <Route index element={<Navigate to={createPageUrl('Home')} replace />} />
        <Route path={createPageUrl('Home')} element={<Home />} />
        <Route path={createPageUrl('Projects')} element={<Projects />} />
        <Route path={createPageUrl('Portfolio')} element={<Portfolio />} />
        <Route path={createPageUrl('About')} element={<About />} />
        <Route path={createPageUrl('Contact')} element={<Contact />} />
        <Route path={createPageUrl('HowItWorks')} element={<HowItWorks />} />
        <Route path={createPageUrl('Legal')} element={<Legal />} />
        <Route path={createPageUrl('TermsOfUse')} element={<TermsOfUse />} />
        <Route path={createPageUrl('PrivacyPolicy')} element={<PrivacyPolicy />} />
        <Route path={createPageUrl('CookieNotice')} element={<CookieNotice />} />
        <Route path={createPageUrl('KeyRisks')} element={<KeyRisks />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to={createPageUrl('Home')} replace />} />
    </Routes>
  );
}


