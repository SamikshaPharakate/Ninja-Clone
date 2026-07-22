import React from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import AIFeatures from '../components/AIFeatures';
import CoursesSection from '../components/CoursesSection';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import Mentors from '../components/Mentors';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <AIFeatures />
      <CoursesSection />
      <StatsSection />
      <Testimonials />
      <Mentors />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
