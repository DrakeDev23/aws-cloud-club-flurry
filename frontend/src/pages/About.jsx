import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParallaxClouds from '../components/ParallaxClouds';
import ScrollToTop from '../components/ScrollToTop';

import HeroSection from '../components/about/HeroSection';
import LegacySection from '../components/about/LegacySection';
import OfficesSection from '../components/about/OfficesSection';
import SkillBuilderSection from '../components/about/SkillBuilderSection';
import CTASection from '../components/about/CTASection';

export default function AboutPage() {
    return (
        <div
            className="min-h-screen relative"
            style={{ fontFamily: "'League Spartan', 'Inter', sans-serif", color: '#0d2845' }}
        >
            <ParallaxClouds />
            <Navbar />

            <main className="relative z-[1]">
                <HeroSection />
                <LegacySection />
                <OfficesSection />
                <SkillBuilderSection />
                <CTASection />
            </main>

            <Footer />
            <ScrollToTop />

            <style>{`
                .flip-card-wrapper {
                  perspective: 1000px;
                  height: 260px;
                }
                .flip-card {
                  width: 100%;
                  height: 100%;
                  position: relative;
                  transform-style: preserve-3d;
                  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .flip-card-wrapper:hover .flip-card {
                  transform: rotateY(180deg);
                }
                .flip-face {
                  position: absolute;
                  inset: 0;
                  backface-visibility: hidden;
                  -webkit-backface-visibility: hidden;
                  padding: 28px 24px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: center;
                }
                .flip-back {
                  transform: rotateY(180deg);
                }
                .legacy-mission-card {
                  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.45s ease;
                  border: 1px solid rgba(37,119,212,0.15) !important;
                }
                .legacy-mission-card:hover {
                  transform: translateY(-6px) scale(1.02);
                  box-shadow: 0 20px 50px rgba(37,119,212,0.2), 0 0 0 1px rgba(37,119,212,0.15);
                }
                .legacy-mission-glow {
                  position: absolute;
                  inset: 0;
                  background: radial-gradient(circle at 50% 0%, rgba(37,119,212,0.12) 0%, transparent 70%);
                  opacity: 0;
                  transition: opacity 0.45s ease;
                  z-index: 1;
                }
                .legacy-mission-card:hover .legacy-mission-glow {
                  opacity: 1;
                }
                .legacy-mission-icon {
                  width: 44px;
                  height: 44px;
                  border-radius: 12px;
                  background: rgba(37,119,212,0.1);
                  color: #2577d4;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: 16px;
                  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), background 0.45s ease;
                }
                .legacy-mission-card:hover .legacy-mission-icon {
                  transform: scale(1.15) rotate(-8deg);
                  background: rgba(37,119,212,0.18);
                }
                @keyframes mascot-float {
                  0%, 100% { transform: translateX(-50%) translateY(0); }
                  50%       { transform: translateX(-50%) translateY(-10px); }
                }
                @keyframes mascot-float-hero {
                  0%, 100% { transform: translateY(0); }
                  50%       { transform: translateY(-14px); }
                }
                @keyframes shimmer-bg {
                  0%   { background-position: 0% 50%; }
                  50%  { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
}