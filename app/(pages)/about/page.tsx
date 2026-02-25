'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, Target, Eye, Award, Users, Globe, TrendingUp,
  Linkedin, Mail, Quote, ChevronRight, CheckCircle, Calendar,
  BookOpen, Lightbulb, Shield, Handshake
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(2024);

  return (
    <div className="min-h-screen bg-neutral-50">
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 border border-neutral-300 text-xs text-neutral-600 tracking-widest font-light mb-8">
              ABOUT US
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Building a Better
              <br />
              World Together
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Since 2008, we've been empowering communities worldwide through sustainable 
              education, healthcare, and economic development programs.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '15+', label: 'Years of Impact' },
              { number: '45', label: 'Countries Served' },
              { number: '50K+', label: 'Lives Changed' },
              { number: '98%', label: 'Program Success' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-lg border border-neutral-200">
                <div className="text-4xl font-light text-[#0F4C3A] mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                It Started with a Simple Belief
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light">
                <p>
                  In 2008, a small group of educators and healthcare professionals came together 
                  with a shared vision: every person, regardless of where they're born, deserves 
                  access to quality education, healthcare, and economic opportunity.
                </p>
                <p>
                  What began as a single school in rural Kenya has grown into a global network 
                  of programs spanning 45 countries. But our mission remains the same—empowering 
                  communities to create their own sustainable futures.
                </p>
                <p>
                  Today, we work alongside local leaders, teachers, healthcare workers, and 
                  entrepreneurs to build solutions that last for generations. Because real 
                  change doesn't come from outside—it comes from within.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Illustration of people/community */}
                <svg viewBox="0 0 200 250" className="w-full h-full relative z-10">
                  {/* Community gathering illustration */}
                  <circle cx="100" cy="60" r="20" fill="#0F4C3A" opacity="0.2"/>
                  <circle cx="60" cy="110" r="18" fill="#0F4C3A" opacity="0.25"/>
                  <circle cx="140" cy="110" r="18" fill="#0F4C3A" opacity="0.25"/>
                  <circle cx="80" cy="160" r="16" fill="#0F4C3A" opacity="0.3"/>
                  <circle cx="120" cy="160" r="16" fill="#0F4C3A" opacity="0.3"/>
                  <circle cx="100" cy="200" r="15" fill="#0F4C3A" opacity="0.35"/>
                  
                  {/* Connection lines */}
                  <line x1="100" y1="80" x2="60" y2="92" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                  <line x1="100" y1="80" x2="140" y2="92" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                  <line x1="60" y1="128" x2="80" y2="144" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                  <line x1="140" y1="128" x2="120" y2="144" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                  <line x1="80" y1="176" x2="100" y2="185" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                  <line x1="120" y1="176" x2="100" y2="185" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                  
                  {/* Decorative heart at center */}
                  <path d="M 100,125 L 110,115 Q 115,110 115,105 Q 115,95 105,95 Q 100,95 100,100 Q 100,95 95,95 Q 85,95 85,105 Q 85,110 90,115 Z" 
                        fill="#0F4C3A" opacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To empower underserved communities worldwide through sustainable education, healthcare, and economic development programs that create lasting positive change.'
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description: 'A world where every person has access to the resources and opportunities they need to build a healthy, prosperous, and dignified life for themselves and their families.'
              },
              {
                icon: Award,
                title: 'Our Values',
                description: 'Integrity, sustainability, community-led solutions, transparency, collaboration, and unwavering commitment to human dignity and equality.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-lg border border-neutral-200">
                <div className="w-14 h-14 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#0F4C3A]/60" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Our Approach to Change
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              We believe in community-led, sustainable solutions that create lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Users,
                title: 'Community Partnership',
                description: 'We work alongside local leaders and community members, ensuring programs are designed and led by those who know their needs best.'
              },
              {
                icon: Lightbulb,
                title: 'Evidence-Based Programs',
                description: 'Every initiative is grounded in research and proven methodologies, with continuous monitoring and evaluation to ensure effectiveness.'
              },
              {
                icon: TrendingUp,
                title: 'Sustainable Impact',
                description: 'We focus on long-term solutions that continue thriving after our direct involvement ends, creating generational change.'
              },
              {
                icon: Shield,
                title: 'Transparency & Accountability',
                description: 'We maintain the highest standards of financial transparency and program accountability, publishing annual impact reports.'
              },
            ].map((approach, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <approach.icon className="w-6 h-6 text-[#0F4C3A]/60" />
                </div>
                <div>
                  <h3 className="text-xl font-light mb-3 text-[#0F4C3A]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {approach.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed font-light">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-[#A8D5BA] tracking-widest uppercase mb-6 font-light">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Milestones of Impact
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                year: '2008',
                title: 'Foundation Established',
                description: 'Hope Foundation was founded with the opening of our first school in rural Kenya, serving 150 students.'
              },
              {
                year: '2012',
                title: 'Healthcare Initiative Launched',
                description: 'Launched our first mobile health clinic, bringing medical care to remote communities in East Africa.'
              },
              {
                year: '2015',
                title: 'Global Expansion',
                description: 'Expanded operations to 15 countries across Africa, Asia, and Latin America, impacting 10,000+ lives.'
              },
              {
                year: '2018',
                title: 'Economic Empowerment',
                description: 'Started microfinance and agricultural training programs, helping 2,000 families start sustainable businesses.'
              },
              {
                year: '2021',
                title: 'Innovation in Education',
                description: 'Introduced digital learning platforms, reaching students in areas with limited infrastructure.'
              },
              {
                year: '2024',
                title: 'Reaching 50,000 Lives',
                description: 'Celebrating our milestone of directly impacting over 50,000 individuals across 45 countries.'
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center bg-white/5">
                    <span className="text-xl font-light text-white"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-4 border-b border-white/10 pb-8">
                  <h3 className="text-2xl font-light mb-3 text-white"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-[#E8F5E9] leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Dedicated leaders with decades of combined experience in international development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Dr. Sarah Mitchell',
                role: 'Executive Director',
                bio: '15+ years in international development and education policy',
                initial: 'S'
              },
              {
                name: 'James Okonkwo',
                role: 'Director of Programs',
                bio: 'Former UN humanitarian coordinator with expertise in community development',
                initial: 'J'
              },
              {
                name: 'Maria Rodriguez',
                role: 'Director of Healthcare',
                bio: 'Public health physician specializing in rural healthcare delivery',
                initial: 'M'
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-light"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {member.initial}
                </div>
                <h3 className="text-xl font-light mb-2 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {member.name}
                </h3>
                <div className="text-sm text-neutral-500 mb-4 tracking-wider uppercase font-light">
                  {member.role}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3 mt-6">
                  <a href="#" className="w-8 h-8 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] transition-colors">
                    <Linkedin className="w-4 h-4 text-neutral-400 hover:text-[#0F4C3A]" />
                  </a>
                  <a href="#" className="w-8 h-8 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] transition-colors">
                    <Mail className="w-4 h-4 text-neutral-400 hover:text-[#0F4C3A]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Recognition */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
              Partnerships
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Working Together for Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-10 rounded-lg border border-neutral-200">
              <Handshake className="w-10 h-10 text-[#0F4C3A]/40 mb-6" />
              <h3 className="text-2xl font-light mb-4 text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Strategic Partners
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light mb-6">
                We collaborate with UN agencies, local governments, universities, and NGOs to maximize our reach and effectiveness.
              </p>
              <div className="space-y-2">
                {['United Nations Development Programme', 'World Health Organization', 'Local Community Organizations', 'International Universities'].map((partner, idx) => (
                  <div key={idx} className="flex items-center text-sm text-neutral-500 font-light">
                    <CheckCircle className="w-4 h-4 text-[#0F4C3A]/40 mr-3" />
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg border border-neutral-200">
              <Award className="w-10 h-10 text-[#0F4C3A]/40 mb-6" />
              <h3 className="text-2xl font-light mb-4 text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Recognition & Awards
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light mb-6">
                Our commitment to excellence and transparency has been recognized by leading organizations worldwide.
              </p>
              <div className="space-y-2">
                {['Charity Navigator 4-Star Rating', 'GiveWell Top Charity', 'UN Sustainable Development Goals Award', 'Better Business Bureau Accredited'].map((award, idx) => (
                  <div key={idx} className="flex items-center text-sm text-neutral-500 font-light">
                    <CheckCircle className="w-4 h-4 text-[#0F4C3A]/40 mr-3" />
                    {award}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-6 h-6 text-[#0F4C3A]/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#0F4C3A]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Join Our Mission
          </h2>
          <p className="text-lg text-neutral-600 mb-12 font-light leading-relaxed">
            Whether through donations, volunteering, or partnerships, there are many ways 
            to be part of creating lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-500 flex items-center justify-center group">
              Support Our Work
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}