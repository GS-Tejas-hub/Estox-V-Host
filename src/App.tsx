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
import { createPageUrl } from './utils';

export default function App(): JSX.Element {
  return (
    <Layout currentPageName="App">
      <Routes>
        <Route path={createPageUrl('Home')} element={<Home />} />
        <Route path={createPageUrl('Projects')} element={<Projects />} />
        <Route path={createPageUrl('Portfolio')} element={<Portfolio />} />
        <Route path={createPageUrl('About')} element={<About />} />
        <Route path={createPageUrl('Contact')} element={<Contact />} />
        <Route path={createPageUrl('HowItWorks')} element={<HowItWorks />} />
        <Route path={createPageUrl('Legal')} element={<Legal />} />
        <Route path="/" element={<Navigate to={createPageUrl('Home')} replace />} />
        <Route path="*" element={<Navigate to={createPageUrl('Home')} replace />} />
      </Routes>
    </Layout>
  );
}


