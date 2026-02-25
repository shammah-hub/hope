'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, Users, DollarSign, Briefcase, Gift,
  Calendar, Clock, MapPin, Mail, Phone, Globe, CheckCircle,
  Share2, MessageCircle, TrendingUp, Target, Handshake, Award,
  BookOpen, Stethoscope, Sprout, Building, GraduationCap, Home
} from 'lucide-react';
import Link from 'next/link';

export default function GetInvolvedPage() {
  const [donationType, setDonationType] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(50);

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
              GET INVOLVED
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Be the Change
              <br />
              You Wish to See
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              There are many meaningful ways to support our mission—from monthly giving 
              to volunteering, corporate partnerships to advocacy.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'Active Volunteers' },
              { number: '2,000+', label: 'Monthly Donors' },
              { number: '50+', label: 'Corporate Partners' },
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
      </section>

      {/* Ways to Get Involved - Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Ways to Make an Impact
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Choose the option that fits your passion and capacity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Donate',
                description: 'Make a one-time or recurring contribution to support our programs',
                link: '#donate'
              },
              {
                icon: Users,
                title: 'Volunteer',
                description: 'Share your time and skills to directly serve communities',
                link: '#volunteer'
              },
              {
                icon: Briefcase,
                title: 'Corporate Partnership',
                description: 'Align your business with social impact and community development',
                link: '#corporate'
              },
              {
                icon: Share2,
                title: 'Advocate',
                description: 'Spread awareness and amplify our mission on social media',
                link: '#advocate'
              },
            ].map((way, idx) => (
              <a 
                key={idx}
                href={way.link}
                className="group bg-neutral-50 p-8 rounded-lg border border-neutral-200 hover:border-[#0F4C3A]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0F4C3A]/5 transition-all">
                  <way.icon className="w-6 h-6 text-[#0F4C3A]/60" />
                </div>
                <h3 className="text-xl font-light mb-3 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {way.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-4">
                  {way.description}
                </p>
                <div className="flex items-center text-sm text-[#0F4C3A] font-light group-hover:translate-x-1 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
                Make a Donation
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Your Gift Creates
                <br />
                Lasting Change
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light mb-8">
                Every donation directly supports our education, healthcare, and economic development 
                programs. 92 cents of every dollar goes directly to program services.
              </p>

              {/* Impact Examples */}
              <div className="space-y-4 mb-8">
                {[
                  { amount: '$25', impact: 'Provides school supplies for 5 students for one month' },
                  { amount: '$50', impact: 'Funds healthcare visits for 10 community members' },
                  { amount: '$100', impact: 'Supports microfinance training for 3 entrepreneurs' },
                  { amount: '$250', impact: 'Sponsors one student\'s education for an entire year' },
                ].map((example, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#0F4C3A]/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#0F4C3A]/10">
                      <span className="text-sm font-light text-[#0F4C3A]">
                        {example.amount}
                      </span>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-sm text-neutral-600 font-light">
                        {example.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200">
                <CheckCircle className="w-5 h-5 text-[#0F4C3A] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-neutral-600 font-light">
                  <strong className="text-[#0F4C3A]">Tax Deductible:</strong> All donations are tax-deductible. 
                  You'll receive a receipt immediately via email.
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <div className="bg-white p-10 rounded-lg border border-neutral-200">
              <div className="mb-8">
                <label className="text-sm text-neutral-600 mb-4 block font-light tracking-wide">
                  DONATION TYPE
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                      donationType === 'monthly'
                        ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setDonationType('onetime')}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                      donationType === 'onetime'
                        ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    One-Time
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <label className="text-sm text-neutral-600 mb-4 block font-light tracking-wide">
                  SELECT AMOUNT
                </label>
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-3 px-4 rounded-lg border-2 text-sm font-light transition-all ${
                        selectedAmount === amount
                          ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Custom amount"
                  className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]"
                />
              </div>

              <div className="mb-8">
                <label className="text-sm text-neutral-600 mb-4 block font-light tracking-wide">
                  DESIGNATE YOUR GIFT (OPTIONAL)
                </label>
                <select className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]">
                  <option>Where needed most</option>
                  <option>Education Programs</option>
                  <option>Healthcare Initiatives</option>
                  <option>Economic Development</option>
                  <option>Emergency Relief</option>
                </select>
              </div>

              <button className="w-full py-4 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-300 rounded-lg flex items-center justify-center group">
                {donationType === 'monthly' ? 'Start Monthly Giving' : 'Make a Donation'}
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-neutral-500 text-center mt-4 font-light">
                🔒 Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
              Volunteer Opportunities
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Share Your Skills & Time
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Whether you have a few hours a month or want to commit long-term, we have opportunities 
              that match your skills and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: GraduationCap,
                title: 'Education Mentor',
                time: '4-6 hours/month',
                location: 'Remote or On-site',
                description: 'Tutor students, help with homework, or teach specialized skills',
              },
              {
                icon: Stethoscope,
                title: 'Healthcare Support',
                time: '8-12 hours/month',
                location: 'On-site',
                description: 'Assist in mobile clinics, health education, or administrative support',
              },
              {
                icon: Briefcase,
                title: 'Business Advisor',
                time: 'Flexible',
                location: 'Remote',
                description: 'Mentor entrepreneurs, provide business consulting, or financial training',
              },
              {
                icon: MessageCircle,
                title: 'Communications',
                time: '3-5 hours/month',
                location: 'Remote',
                description: 'Help with social media, content creation, or community outreach',
              },
              {
                icon: Target,
                title: 'Fundraising',
                time: 'Flexible',
                location: 'Remote or On-site',
                description: 'Organize fundraising events or help with donor outreach campaigns',
              },
              {
                icon: Building,
                title: 'Field Volunteer',
                time: '1-3 months',
                location: 'International',
                description: 'Work directly in communities on education, health, or development projects',
              },
            ].map((opportunity, idx) => (
              <div key={idx} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 hover:border-[#0F4C3A]/30 transition-all hover:shadow-lg">
                <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mb-6">
                  <opportunity.icon className="w-6 h-6 text-[#0F4C3A]/60" />
                </div>
                <h3 className="text-xl font-light mb-4 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {opportunity.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-neutral-500 font-light">
                    <Clock className="w-3 h-3 mr-2" />
                    {opportunity.time}
                  </div>
                  <div className="flex items-center text-xs text-neutral-500 font-light">
                    <MapPin className="w-3 h-3 mr-2" />
                    {opportunity.location}
                  </div>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                  {opportunity.description}
                </p>
                <button className="text-sm text-[#0F4C3A] font-light flex items-center group">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500">
              View All Volunteer Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section id="corporate" className="py-24 bg-[#0F4C3A]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-[#A8D5BA] tracking-widest uppercase mb-6 font-light">
              Corporate Partnerships
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Partner for Positive Impact
            </h2>
            <p className="text-lg text-[#E8F5E9] max-w-3xl mx-auto leading-relaxed font-light">
              Align your company's values with meaningful social impact through strategic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Handshake,
                title: 'Cause Marketing',
                description: 'Align your brand with our mission through co-branded campaigns and initiatives',
              },
              {
                icon: Gift,
                title: 'Corporate Giving',
                description: 'Establish employee matching programs, workplace giving, or direct corporate donations',
              },
              {
                icon: Users,
                title: 'Employee Engagement',
                description: 'Volunteer days, skill-based volunteering, and team-building service projects',
              },
            ].map((option, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mb-6">
                  <option.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-xl font-light mb-4 text-white"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {option.title}
                </h3>
                <p className="text-sm text-[#E8F5E9] leading-relaxed font-light">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-light mb-6 text-white"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Benefits of Partnership
                </h3>
                <div className="space-y-3">
                  {[
                    'Enhanced brand reputation and employee morale',
                    'Measurable social impact with detailed reporting',
                    'Co-branded marketing and PR opportunities',
                    'Tax benefits for corporate charitable giving',
                    'Access to our global network and expertise',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#A8D5BA] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#E8F5E9] font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 text-white"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Current Partners
                </h3>
                <p className="text-sm text-[#E8F5E9] font-light mb-6">
                  We're proud to work with leading organizations across technology, finance, healthcare, and retail sectors.
                </p>
                <button className="px-8 py-3 bg-white text-[#0F4C3A] text-sm font-light tracking-wide hover:bg-neutral-100 transition-all duration-300 rounded-lg flex items-center group">
                  Download Partnership Guide
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section id="advocate" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">
              Other Ways to Help
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Every Action Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Share2,
                title: 'Spread the Word',
                description: 'Follow us on social media and share our stories with your network. Help us reach more people who want to make a difference.',
                action: 'Follow Us',
              },
              {
                icon: Calendar,
                title: 'Host a Fundraiser',
                description: 'Organize a birthday fundraiser, charity run, or community event. We provide all the tools and support you need.',
                action: 'Get Started',
              },
              {
                icon: Gift,
                title: 'Legacy Giving',
                description: 'Include Hope Foundation in your will or estate plan. Create a lasting legacy that supports communities for generations.',
                action: 'Learn More',
              },
              {
                icon: Award,
                title: 'In-Kind Donations',
                description: 'Donate goods, services, or professional expertise. From medical supplies to legal counsel, we accept various forms of support.',
                action: 'See Needs',
              },
            ].map((way, idx) => (
              <div key={idx} className="flex gap-6 p-8 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <way.icon className="w-6 h-6 text-[#0F4C3A]/60" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-3 text-[#0F4C3A]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {way.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light mb-4">
                    {way.description}
                  </p>
                  <button className="text-sm text-[#0F4C3A] font-light flex items-center group">
                    {way.action}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="w-12 h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-6 h-6 text-[#0F4C3A]/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#0F4C3A]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Have Questions?
          </h2>
          <p className="text-lg text-neutral-600 mb-12 font-light leading-relaxed">
            Our team is here to help you find the best way to get involved and make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="mailto:partnerships@hopefoundation.org" className="flex items-center justify-center gap-3 px-8 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-300 rounded-lg">
              <Mail className="w-4 h-4" />
              partnerships@hopefoundation.org
            </a>
            <a href="tel:+15551234567" className="flex items-center justify-center gap-3 px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500 rounded-lg">
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </a>
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