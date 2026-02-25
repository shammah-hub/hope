'use client';

import { useState, useEffect } from 'react';
import { 
  Heart, Users, Globe, TrendingUp, ArrowRight, Menu, X,
  BookOpen, Stethoscope, Sprout, Award, Quote, ChevronRight,
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Sophisticated Pattern Background */}
        <div className="absolute inset-0 bg-neutral-50">
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Organic flowing shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-5">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <path d="M 0,250 Q 125,100 250,250 T 500,250" 
                    stroke="#0F4C3A" 
                    strokeWidth="2" 
                    fill="none" 
                    className="animate-draw"/>
              <path d="M 0,300 Q 125,150 250,300 T 500,300" 
                    stroke="#0F4C3A" 
                    strokeWidth="1.5" 
                    fill="none" 
                    className="animate-draw-delay"/>
            </svg>
          </div>
          
          {/* Photo circles with NGO imagery - replaced decorative circles */}
          {/* Children learning - Education */}
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-90 animate-float">
            <div className="w-full h-full bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-20 h-20 text-white opacity-40">
                <path d="M 30,60 L 30,80 L 70,80 L 70,60 M 50,30 L 50,60 M 35,45 L 65,45" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="20" r="8" fill="currentColor"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-light tracking-wider opacity-80">EDUCATION</span>
              </div>
            </div>
          </div>
          
          {/* Healthcare workers - Medical care */}
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-90 animate-float-delay">
            <div className="w-full h-full bg-gradient-to-br from-[#1A5744] to-[#0F4C3A] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-white opacity-40">
                <rect x="42" y="30" width="16" height="40" fill="currentColor" rx="2"/>
                <rect x="30" y="42" width="40" height="16" fill="currentColor" rx="2"/>
                <path d="M 35,65 Q 50,75 65,65" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-light tracking-wider opacity-80">HEALTH</span>
              </div>
            </div>
          </div>
          
          {/* Community gathering - Empowerment */}
          <div className="absolute bottom-32 left-1/4 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-90 animate-float-slow">
            <div className="w-full h-full bg-gradient-to-br from-[#0F4C3A] via-[#1A5744] to-[#0F4C3A] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-white opacity-40">
                <circle cx="35" cy="35" r="6" fill="currentColor"/>
                <circle cx="65" cy="35" r="6" fill="currentColor"/>
                <circle cx="50" cy="50" r="6" fill="currentColor"/>
                <circle cx="35" cy="65" r="6" fill="currentColor"/>
                <circle cx="65" cy="65" r="6" fill="currentColor"/>
                <line x1="35" y1="35" x2="50" y2="50" stroke="currentColor" strokeWidth="2"/>
                <line x1="65" y1="35" x2="50" y2="50" stroke="currentColor" strokeWidth="2"/>
                <line x1="50" y1="50" x2="35" y2="65" stroke="currentColor" strokeWidth="2"/>
                <line x1="50" y1="50" x2="65" y2="65" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-light tracking-wider opacity-80">COMMUNITY</span>
              </div>
            </div>
          </div>
          
          {/* Agricultural worker - Farming */}
          <div className="absolute bottom-40 right-1/4 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-90 animate-float-delay">
            <div className="w-full h-full bg-gradient-to-br from-[#1A5744] to-[#0F4C3A] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-18 h-18 text-white opacity-40">
                <ellipse cx="50" cy="70" rx="20" ry="5" fill="currentColor" opacity="0.5"/>
                <path d="M 50,70 Q 50,50 45,35 Q 42,25 35,20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <path d="M 50,70 Q 50,45 55,30 Q 58,20 65,15" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <ellipse cx="35" cy="20" rx="6" ry="10" fill="currentColor" opacity="0.7" transform="rotate(-30 35 20)"/>
                <ellipse cx="65" cy="15" rx="6" ry="10" fill="currentColor" opacity="0.7" transform="rotate(30 65 15)"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-light tracking-wider opacity-80">FARMING</span>
              </div>
            </div>
          </div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#0F4C3A]/5"></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <div className="mb-12 opacity-0 animate-fadeIn">
            <div className="inline-block px-4 py-1 border border-neutral-300 text-xs text-neutral-600 tracking-widest font-light mb-16">
              ESTABLISHED 2008
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 leading-none tracking-tight text-[#0F4C3A] opacity-0 animate-fadeIn"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                animationDelay: '200ms'
              }}>
            Transforming Lives,
            <br />
            Building Futures
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 mb-16 max-w-2xl mx-auto leading-relaxed font-light opacity-0 animate-fadeIn"
             style={{ animationDelay: '400ms' }}>
            Creating sustainable change through education, healthcare, 
            and community empowerment across the globe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 opacity-0 animate-fadeIn"
               style={{ animationDelay: '600ms' }}>
            <button className="group px-8 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-500 flex items-center">
              Make an Impact
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
            </button>
            <button className="px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500">
              Learn More
            </button>
          </div>

          {/* Minimal Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 opacity-0 animate-fadeIn"
               style={{ animationDelay: '800ms' }}>
            {[
              { number: '50,000+', label: 'Lives Impacted' },
              { number: '120+', label: 'Communities' },
              { number: '$2.5M', label: 'Annual Funding' },
              { number: '500+', label: 'Volunteers' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-light text-[#0F4C3A] mb-2"
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

        {/* Decorative line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-neutral-300" />
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-xs text-neutral-500 tracking-widest uppercase mb-8 font-light">
                Our Mission
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Building sustainable futures through community-led solutions
              </h2>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light">
                <p>
                  We believe lasting change comes from within communities. Our mission is to empower 
                  individuals with the tools, resources, and support they need to create their own 
                  sustainable futures.
                </p>
                <p>
                  Through strategic partnerships and evidence-based programs, we address the root 
                  causes of poverty by focusing on education access, healthcare delivery, and 
                  economic opportunity creation.
                </p>
              </div>
              
              <button className="mt-12 text-sm text-[#0F4C3A] font-light tracking-wide flex items-center group">
                Read Full Mission
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-neutral-100 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-16 h-16 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Globe className="w-8 h-8 text-[#0F4C3A]/60" />
                  </div>
                  <div className="text-7xl font-light mb-4 text-[#0F4C3A]"
                       style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    93%
                  </div>
                  <div className="text-sm text-neutral-500 tracking-wider uppercase font-light">
                    Community Sustainability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
              Measurable Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Creating Lasting Change
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Education Access',
                stat: '12,000+',
                description: 'Children now attending school with full scholarships and ongoing support',
              },
              {
                title: 'Healthcare Reach',
                stat: '25,000+',
                description: 'Patients receiving care through mobile clinics and health centers',
              },
              {
                title: 'Economic Growth',
                stat: '3,500+',
                description: 'Families building sustainable businesses through training and support',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-light mb-4 text-[#0F4C3A]"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {item.stat}
                </div>
                <h3 className="text-lg mb-4 text-[#0F4C3A] font-light tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional metrics */}
          <div className="mt-24 pt-12 border-t border-neutral-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-light text-[#0F4C3A] mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  98%
                </div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase font-light">
                  Donor Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-[#0F4C3A] mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  45
                </div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase font-light">
                  Countries Served
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-[#0F4C3A] mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  15+
                </div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase font-light">
                  Years of Impact
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-[#0F4C3A] mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  92¢
                </div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase font-light">
                  To Programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Our Programs
            </h2>
          </div>

          <div className="space-y-24">
            {[
              {
                icon: BookOpen,
                title: 'Education First',
                description: 'Building schools, training teachers, and providing scholarships to ensure every child has access to quality education.',
                highlights: ['50 Schools Built', '200 Teachers Trained', '5,000 Scholarships']
              },
              {
                icon: Stethoscope,
                title: 'Health & Wellness',
                description: 'Mobile clinics, maternal care programs, and disease prevention initiatives bringing healthcare to remote communities.',
                highlights: ['10 Mobile Clinics', '15,000 Check-ups', '95% Vaccination']
              },
              {
                icon: Sprout,
                title: 'Sustainable Agriculture',
                description: 'Training farmers in modern techniques, providing seeds and tools, and creating market access for rural communities.',
                highlights: ['2,000 Farmers', '30% Yield Increase', '100+ Cooperatives']
              },
            ].map((program, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mb-8">
                    <program.icon className="w-6 h-6 text-[#0F4C3A]/60" />
                  </div>
                  <h3 className="text-3xl font-light mb-6 text-[#0F4C3A]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed font-light">
                    {program.description}
                  </p>
                  <div className="space-y-3">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm text-neutral-500 font-light">
                        <div className="w-1 h-1 bg-[#0F4C3A]/40 rounded-full mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={idx % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="aspect-square bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center p-12 relative overflow-hidden">
                    {/* Pattern background */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    
                    {/* Illustration based on program type */}
                    {idx === 0 && (
                      /* Education Illustration */
                      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
                        {/* Book */}
                        <rect x="60" y="80" width="80" height="60" fill="#0F4C3A" opacity="0.15" rx="4"/>
                        <rect x="50" y="70" width="80" height="60" fill="#0F4C3A" opacity="0.25" rx="4"/>
                        <rect x="40" y="60" width="80" height="60" fill="#0F4C3A" opacity="0.4" rx="4"/>
                        <line x1="80" y1="60" x2="80" y2="120" stroke="#0F4C3A" strokeWidth="2" opacity="0.6"/>
                        {/* Graduation cap */}
                        <polygon points="100,45 130,55 100,65 70,55" fill="#0F4C3A" opacity="0.3"/>
                        <rect x="95" y="45" width="10" height="20" fill="#0F4C3A" opacity="0.3"/>
                        {/* Decorative elements */}
                        <circle cx="150" cy="90" r="3" fill="#0F4C3A" opacity="0.2"/>
                        <circle cx="160" cy="110" r="2" fill="#0F4C3A" opacity="0.2"/>
                        <circle cx="30" cy="100" r="4" fill="#0F4C3A" opacity="0.2"/>
                      </svg>
                    )}
                    
                    {idx === 1 && (
                      /* Healthcare Illustration */
                      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
                        {/* Medical cross */}
                        <rect x="85" y="60" width="30" height="80" fill="#0F4C3A" opacity="0.3" rx="4"/>
                        <rect x="60" y="85" width="80" height="30" fill="#0F4C3A" opacity="0.3" rx="4"/>
                        {/* Heart monitor line */}
                        <path d="M 30,100 L 60,100 L 70,85 L 80,115 L 90,100 L 170,100" 
                              stroke="#0F4C3A" 
                              strokeWidth="3" 
                              fill="none" 
                              opacity="0.25"/>
                        {/* Pulse circles */}
                        <circle cx="100" cy="100" r="35" fill="none" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                        <circle cx="100" cy="100" r="45" fill="none" stroke="#0F4C3A" strokeWidth="1" opacity="0.1"/>
                        {/* Decorative medical elements */}
                        <circle cx="150" cy="70" r="3" fill="#0F4C3A" opacity="0.2"/>
                        <circle cx="40" cy="130" r="4" fill="#0F4C3A" opacity="0.2"/>
                      </svg>
                    )}
                    
                    {idx === 2 && (
                      /* Agriculture Illustration */
                      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
                        {/* Plant sprout */}
                        <ellipse cx="100" cy="130" rx="40" ry="10" fill="#0F4C3A" opacity="0.15"/>
                        <path d="M 100,130 Q 100,100 90,80 Q 85,70 75,65" 
                              stroke="#0F4C3A" 
                              strokeWidth="3" 
                              fill="none" 
                              opacity="0.3"/>
                        <path d="M 100,130 Q 100,90 110,70 Q 115,60 125,55" 
                              stroke="#0F4C3A" 
                              strokeWidth="3" 
                              fill="none" 
                              opacity="0.3"/>
                        {/* Leaves */}
                        <ellipse cx="75" cy="65" rx="12" ry="20" fill="#0F4C3A" opacity="0.25" transform="rotate(-30 75 65)"/>
                        <ellipse cx="125" cy="55" rx="12" ry="20" fill="#0F4C3A" opacity="0.25" transform="rotate(30 125 55)"/>
                        <ellipse cx="90" cy="85" rx="10" ry="16" fill="#0F4C3A" opacity="0.2" transform="rotate(-45 90 85)"/>
                        <ellipse cx="110" cy="75" rx="10" ry="16" fill="#0F4C3A" opacity="0.2" transform="rotate(45 110 75)"/>
                        {/* Sun */}
                        <circle cx="150" cy="50" r="15" fill="#0F4C3A" opacity="0.15"/>
                        <line x1="150" y1="30" x2="150" y2="35" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                        <line x1="150" y1="65" x2="150" y2="70" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                        <line x1="170" y1="50" x2="165" y2="50" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                        <line x1="135" y1="50" x2="130" y2="50" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
                        {/* Decorative seeds/dots */}
                        <circle cx="40" cy="120" r="3" fill="#0F4C3A" opacity="0.2"/>
                        <circle cx="160" cy="130" r="4" fill="#0F4C3A" opacity="0.2"/>
                        <circle cx="50" cy="100" r="2" fill="#0F4C3A" opacity="0.2"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="stories" className="py-32 bg-[#0F4C3A] text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs text-[#A8D5BA] tracking-widest uppercase mb-6 font-light">
              Community Voices
            </div>
            <h2 className="text-4xl md:text-5xl font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Stories of Change
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                quote: "Thanks to the scholarship program, I'm the first in my family to attend university. Now I'm studying to become a teacher to give back to my community.",
                name: "Amara Johnson",
                role: "Scholarship Recipient",
                location: "Kenya"
              },
              {
                quote: "The mobile health clinic saved my daughter's life. Before, the nearest hospital was 3 days away. Now we have regular check-ups and access to medicine.",
                name: "Maria Santos",
                role: "Community Member",
                location: "Philippines"
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="border border-[#1A5744] p-12">
                <Quote className="w-8 h-8 text-[#A8D5BA]/40 mb-8" />
                <p className="text-lg mb-12 leading-relaxed font-light text-[#E8F5E9]">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-light mb-1">{testimonial.name}</div>
                  <div className="text-xs text-[#A8D5BA] tracking-wider font-light">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-6 h-6 text-[#0F4C3A]/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#0F4C3A]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Be Part of the Solution
          </h2>
          <p className="text-lg text-neutral-600 mb-12 font-light leading-relaxed">
            Every contribution creates ripples of change that transform entire communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-500">
              Donate Monthly
            </button>
            <button className="px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes draw {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-draw {
          stroke-dasharray: 1000;
          animation: draw 20s ease-in-out infinite;
        }
        
        .animate-draw-delay {
          stroke-dasharray: 1000;
          animation: draw 25s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}