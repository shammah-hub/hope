
'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, Briefcase, Handshake, TrendingUp,
  Users, Globe, Award, CheckCircle, Star, Target,
  DollarSign, Gift, Calendar, Mail, Download
} from 'lucide-react';
import Link from 'next/link';

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState('corporate');

  const partnershipTypes = [
    {
      id: 'corporate',
      title: 'Corporate Partnerships',
      icon: Briefcase,
      description: 'Strategic collaborations with businesses committed to social impact'
    },
    {
      id: 'foundations',
      title: 'Foundation Partners',
      icon: Award,
      description: 'Philanthropic organizations supporting our mission and programs'
    },
    {
      id: 'government',
      title: 'Government & Institutions',
      icon: Globe,
      description: 'Public sector partnerships enabling large-scale impact'
    }
  ];

  const corporatePartners = [
    {
      name: 'Global Tech Corp',
      type: 'Technology Partner',
      since: '2020',
      contribution: 'Digital infrastructure & employee volunteering',
      impact: '500+ employees volunteered, $2M in-kind technology support',
      logo: 'GT'
    },
    {
      name: 'United Financial Group',
      type: 'Platinum Partner',
      since: '2018',
      contribution: 'Financial literacy programs & matching gifts',
      impact: '$5M raised through employee matching, 2,000 people trained',
      logo: 'UF'
    },
    {
      name: 'Health Systems International',
      type: 'Healthcare Partner',
      since: '2019',
      contribution: 'Medical supplies & professional training',
      impact: '$3M medical equipment donated, 150 health workers trained',
      logo: 'HS'
    },
    {
      name: 'Green Energy Solutions',
      type: 'Sustainability Partner',
      since: '2021',
      contribution: 'Solar infrastructure & clean energy access',
      impact: '25 communities powered, 10,000 households served',
      logo: 'GE'
    }
  ];

  const foundationPartners = [
    {
      name: 'Global Development Foundation',
      focus: 'Education & Economic Development',
      funding: '$1.2M',
      projects: 'Rural schools & microfinance programs',
      logo: 'GD'
    },
    {
      name: 'Health Access Initiative',
      focus: 'Healthcare & Maternal Health',
      funding: '$800K',
      projects: 'Mobile clinics & maternal care',
      logo: 'HA'
    },
    {
      name: 'Community Futures Fund',
      focus: 'Water & Infrastructure',
      funding: '$950K',
      projects: 'Clean water & sanitation facilities',
      logo: 'CF'
    }
  ];

  const governmentPartners = [
    {
      name: 'United Nations Development Programme',
      type: 'UN Agency',
      collaboration: 'Education & sustainable development programs',
      logo: 'UN'
    },
    {
      name: 'USAID',
      type: 'Government Agency',
      collaboration: 'Healthcare delivery & emergency response',
      logo: 'US'
    },
    {
      name: 'European Union Humanitarian Aid',
      type: 'International Organization',
      collaboration: 'Water infrastructure & community resilience',
      logo: 'EU'
    }
  ];

  const partnershipModels = [
    {
      icon: Gift,
      title: 'Cause Marketing',
      description: 'Co-branded campaigns that drive awareness and sales while supporting our mission',
      examples: ['Product donations', 'Percentage of sales', 'Limited edition products']
    },
    {
      icon: Users,
      title: 'Employee Engagement',
      description: 'Programs that inspire and mobilize your workforce for social good',
      examples: ['Volunteer days', 'Skills-based volunteering', 'Team-building service projects']
    },
    {
      icon: DollarSign,
      title: 'Corporate Giving',
      description: 'Financial support through grants, matching gifts, or sponsorships',
      examples: ['Annual grants', 'Employee matching', 'Event sponsorships']
    },
    {
      icon: Handshake,
      title: 'Pro Bono Services',
      description: 'In-kind contributions of professional expertise and services',
      examples: ['Legal counsel', 'Marketing support', 'Technology consulting']
    }
  ];

  const benefits = [
    'Enhanced brand reputation and employee morale',
    'Measurable social impact with detailed reporting',
    'Co-branded marketing and PR opportunities',
    'Tax benefits for corporate charitable giving',
    'Access to our global network and expertise',
    'Employee engagement and retention boost',
    'Quarterly impact reports and site visits',
    'Recognition across our communications channels'
  ];

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
              OUR PARTNERS
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Together We
              <br />
              Create Impact
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Strategic partnerships amplify our reach and deepen our impact. 
              Join leading organizations making a difference.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Active Partners' },
              { number: '$15M', label: 'Partnership Value' },
              { number: '20K', label: 'Employee Volunteers' },
              { number: '15', label: 'Countries Reached' },
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

      {/* Partnership Types Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {partnershipTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-lg border-2 transition-all ${
                  activeTab === type.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                <type.icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-light">{type.title}</div>
                  <div className="text-xs opacity-60">{type.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Corporate Partners */}
          {activeTab === 'corporate' && (
            <div className="grid md:grid-cols-2 gap-8">
              {corporatePartners.map((partner, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-lg border border-neutral-200 p-8 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-lg flex items-center justify-center text-white text-xl font-light"
                         style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {partner.logo}
                    </div>
                    <span className="px-3 py-1 bg-[#0F4C3A]/10 text-[#0F4C3A] text-xs font-light rounded-full">
                      Since {partner.since}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light mb-2 text-[#0F4C3A]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {partner.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4 font-light tracking-wider uppercase">
                    {partner.type}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-xs text-neutral-500 mb-2 font-light tracking-wider uppercase">Contribution</h4>
                    <p className="text-sm text-neutral-600 font-light">{partner.contribution}</p>
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <h4 className="text-xs text-neutral-500 mb-2 font-light tracking-wider uppercase">Impact</h4>
                    <p className="text-sm text-neutral-600 font-light">{partner.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Foundation Partners */}
          {activeTab === 'foundations' && (
            <div className="grid md:grid-cols-3 gap-8">
              {foundationPartners.map((partner, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-lg border border-neutral-200 p-8 text-center hover:shadow-lg transition-all">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-6"
                       style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {partner.logo}
                  </div>
                  <h3 className="text-xl font-light mb-4 text-[#0F4C3A]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {partner.name}
                  </h3>
                  <div className="space-y-3 text-left">
                    <div>
                      <h4 className="text-xs text-neutral-500 mb-1 font-light tracking-wider uppercase">Focus Area</h4>
                      <p className="text-sm text-neutral-600 font-light">{partner.focus}</p>
                    </div>
                    <div>
                      <h4 className="text-xs text-neutral-500 mb-1 font-light tracking-wider uppercase">Funding</h4>
                      <p className="text-sm text-neutral-600 font-light">{partner.funding}</p>
                    </div>
                    <div>
                      <h4 className="text-xs text-neutral-500 mb-1 font-light tracking-wider uppercase">Projects</h4>
                      <p className="text-sm text-neutral-600 font-light">{partner.projects}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Government Partners */}
          {activeTab === 'government' && (
            <div className="grid md:grid-cols-3 gap-8">
              {governmentPartners.map((partner, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-lg border border-neutral-200 p-8 text-center hover:shadow-lg transition-all">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-6"
                       style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {partner.logo}
                  </div>
                  <h3 className="text-xl font-light mb-2 text-[#0F4C3A]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {partner.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-4 font-light tracking-wider uppercase">
                    {partner.type}
                  </p>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {partner.collaboration}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Partnership Models
            </h2>
            <p className="text-neutral-600 font-light max-w-2xl mx-auto">
              Flexible collaboration options tailored to your organization's goals and capacity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipModels.map((model, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-neutral-200 p-8">
                <div className="w-12 h-12 bg-[#0F4C3A]/10 rounded-full flex items-center justify-center mb-6">
                  <model.icon className="w-6 h-6 text-[#0F4C3A]" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {model.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                  {model.description}
                </p>
                <div>
                  <h4 className="text-xs text-neutral-500 mb-3 font-light tracking-wider uppercase">Examples</h4>
                  <ul className="space-y-2">
                    {model.examples.map((example, i) => (
                      <li key={i} className="flex items-center text-sm text-neutral-600 font-light">
                        <CheckCircle className="w-4 h-4 text-[#0F4C3A]/40 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-[#0F4C3A] mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Benefits of Partnership
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                Partnering with Hope Foundation goes beyond corporate social responsibility. 
                It's an investment in meaningful impact, employee engagement, and brand alignment with purpose.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#0F4C3A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600 font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0F4C3A] rounded-lg p-10 text-white">
              <h3 className="text-3xl font-light mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Ready to Partner?
              </h3>
              <p className="text-[#E8F5E9] font-light mb-8">
                Let's explore how your organization can create lasting impact alongside Hope Foundation.
              </p>
              <div className="space-y-4">
                <a href="mailto:partnerships@hopefoundation.org" 
                   className="flex items-center gap-3 text-[#E8F5E9] hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  partnerships@hopefoundation.org
                </a>
                <a href="tel:+15551234567" 
                   className="flex items-center gap-3 text-[#E8F5E9] hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <button className="w-full py-3 bg-white text-[#0F4C3A] rounded-lg hover:bg-neutral-100 transition-all font-light flex items-center justify-center group">
                  <Download className="w-5 h-5 mr-2" />
                  Download Partnership Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}