'use client';

import { useState } from 'react';
import { 
  Heart, Mail, Linkedin, Award, Target, Shield,
  Users, Globe, TrendingUp, CheckCircle, ExternalLink,
  FileText, Calendar, Briefcase
} from 'lucide-react';
import Link from 'next/link';

export default function LeadershipPage() {
  const executiveTeam = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Executive Director & Co-Founder',
      bio: 'Sarah has dedicated over 20 years to international development, with a focus on education policy and sustainable community programs. Prior to founding Hope Foundation, she served as Regional Director for UNICEF East Africa, where she oversaw education initiatives reaching 500,000 children across 12 countries.',
      expertise: ['Strategic Leadership', 'Education Policy', 'International Development', 'Organizational Growth'],
      achievements: [
        'Founded Hope Foundation in 2008, growing it to 45-country operation',
        'Raised $25M+ in funding from foundations and major donors',
        'Published researcher on community-led development models',
        'Advisor to UN Education Commission'
      ],
      education: 'PhD Development Economics, Oxford University; MA Education Policy, Harvard',
      previous: 'Regional Director, UNICEF East Africa; Policy Analyst, World Bank',
      image: 'S',
      email: 's.mitchell@hopefoundation.org',
      linkedin: '#'
    },
    {
      name: 'James Okonkwo',
      role: 'Director of Programs',
      bio: 'James brings 15 years of field experience in humanitarian work and development programs. His community-first approach has been instrumental in achieving our 93% program sustainability rate, ensuring communities continue thriving long after initial intervention.',
      expertise: ['Program Management', 'Community Development', 'Impact Measurement', 'Capacity Building'],
      achievements: [
        'Oversees 47 active programs across 12 countries',
        'Developed M&E framework now used by 15+ NGOs globally',
        'Led emergency response reaching 50,000 people in crisis',
        'Trained 500+ community leaders in project management'
      ],
      education: 'MSc International Development, LSE; BA Political Science, University of Ibadan',
      previous: 'Program Director, UNDP Kenya; Field Manager, Oxfam International',
      image: 'J',
      email: 'j.okonkwo@hopefoundation.org',
      linkedin: '#'
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Director of Healthcare Programs',
      bio: 'Maria is a public health physician specializing in maternal and child health in underserved communities. Her mobile health clinic model has become a best practice, reducing maternal mortality by 85% in program areas across Southeast Asia.',
      expertise: ['Public Health', 'Maternal & Child Health', 'Healthcare Systems', 'Medical Training'],
      achievements: [
        'Designed mobile health clinic model serving 25,000+ patients annually',
        'Zero maternal deaths in participating communities since 2022',
        'Trained 200+ community health workers across 8 countries',
        'Published 12 papers on rural healthcare delivery'
      ],
      education: 'MD & MPH, University of the Philippines; Fellowship in Global Health, Johns Hopkins',
      previous: 'Chief Medical Officer, Rural Health Initiative Philippines; WHO Consultant',
      image: 'M',
      email: 'm.rodriguez@hopefoundation.org',
      linkedin: '#'
    },
    {
      name: 'David Chen',
      role: 'Chief Financial Officer',
      bio: 'David ensures financial integrity, transparency, and sustainable growth. Under his leadership, Hope Foundation has maintained 4-star Charity Navigator ratings for 8 consecutive years and achieved a 92% program expense ratio.',
      expertise: ['Financial Management', 'Nonprofit Accounting', 'Audit & Compliance', 'Strategic Financial Planning'],
      achievements: [
        'Maintained 4-star Charity Navigator rating for 8 consecutive years',
        'Implemented financial systems achieving 98% audit compliance',
        'Managed organizational growth from $800K to $2.5M annual budget',
        'Established reserve fund ensuring 12-month operating security'
      ],
      education: 'MBA Finance, Wharton School; CPA; BA Economics, UC Berkeley',
      previous: 'CFO, Save the Children USA (Regional); Director of Finance, Red Cross',
      image: 'D',
      email: 'd.chen@hopefoundation.org',
      linkedin: '#'
    },
  ];

  const boardMembers = [
    {
      name: 'Ambassador Patricia Williams',
      role: 'Board Chair',
      affiliation: 'Former US Ambassador to Kenya',
      expertise: 'International Relations, Diplomacy, African Development',
      tenure: 'Board Member since 2010, Chair since 2018',
      image: 'PW'
    },
    {
      name: 'Dr. Robert Chang',
      role: 'Board Vice Chair',
      affiliation: 'Professor of Public Health, Stanford University',
      expertise: 'Global Health Systems, Healthcare Policy, Research',
      tenure: 'Board Member since 2012',
      image: 'RC'
    },
    {
      name: 'Linda Osei',
      role: 'Board Treasurer',
      affiliation: 'CFO, Tech for Good Initiative',
      expertise: 'Nonprofit Finance, Impact Investing, Technology',
      tenure: 'Board Member since 2015',
      image: 'LO'
    },
    {
      name: 'Michael Thompson',
      role: 'Board Secretary',
      affiliation: 'Partner, Thompson & Associates Law',
      expertise: 'Nonprofit Law, Governance, International Development Law',
      tenure: 'Board Member since 2016',
      image: 'MT'
    },
    {
      name: 'Fatima Hassan',
      role: 'Board Member',
      affiliation: 'CEO, Education for All Foundation',
      expertise: 'Education Policy, Girls\' Education, Nonprofit Leadership',
      tenure: 'Board Member since 2019',
      image: 'FH'
    },
    {
      name: 'James Martinez',
      role: 'Board Member',
      affiliation: 'Managing Director, Goldman Sachs',
      expertise: 'Finance, Strategic Planning, Corporate Partnerships',
      tenure: 'Board Member since 2020',
      image: 'JM'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Board Member',
      affiliation: 'Director, Gates Foundation (Education)',
      expertise: 'Education Technology, International Development, Innovation',
      tenure: 'Board Member since 2021',
      image: 'PP'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Board Member',
      affiliation: 'Former Minister of Agriculture, Peru',
      expertise: 'Agriculture Policy, Rural Development, Government Relations',
      tenure: 'Board Member since 2022',
      image: 'CM'
    },
  ];

  const advisoryCouncil = [
    { name: 'Dr. Amina Osman', specialty: 'Water & Sanitation Engineering', affiliation: 'MIT' },
    { name: 'Professor John Smith', specialty: 'Agricultural Economics', affiliation: 'Cornell University' },
    { name: 'Dr. Lakshmi Reddy', specialty: 'Education Technology', affiliation: 'IIT Delhi' },
    { name: 'Dr. François Dubois', specialty: 'Public Health Systems', affiliation: 'Sorbonne University' },
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
              LEADERSHIP & GOVERNANCE
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Guided by
              <br />
              Experience & Vision
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our leadership team and Board of Directors bring decades of expertise in international 
              development, ensuring strategic direction and accountability
            </p>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Integrity & Accountability',
                description: 'Independent oversight, annual audits, and transparent reporting to all stakeholders'
              },
              {
                icon: Target,
                title: 'Strategic Direction',
                description: 'Board-led strategic planning ensuring alignment with mission and sustainable growth'
              },
              {
                icon: Users,
                title: 'Diverse Expertise',
                description: 'Board members bring expertise in finance, law, development, health, and education'
              },
            ].map((principle, idx) => (
              <div key={idx} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 text-center">
                <div className="w-14 h-14 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-7 h-7 text-[#0F4C3A]/60" />
                </div>
                <h3 className="text-xl font-light mb-3 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {principle.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Executive Leadership Team
            </h2>
            <p className="text-neutral-600 font-light max-w-3xl">
              Our executive team oversees day-to-day operations, program implementation, 
              and organizational strategy.
            </p>
          </div>

          <div className="space-y-12">
            {executiveTeam.map((exec, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="grid lg:grid-cols-[300px_1fr] gap-8 p-10">
                  {/* Photo & Contact */}
                  <div>
                    <div className="aspect-square bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] rounded-lg flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 opacity-20 rounded-lg" style={{
                        backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}></div>
                      <div className="w-40 h-40 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center text-white text-6xl font-light relative z-10"
                           style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {exec.image}
                      </div>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <a href={`mailto:${exec.email}`} className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] transition-colors">
                        <Mail className="w-5 h-5 text-neutral-400 hover:text-[#0F4C3A]" />
                      </a>
                      <a href={exec.linkedin} className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] transition-colors">
                        <Linkedin className="w-5 h-5 text-neutral-400 hover:text-[#0F4C3A]" />
                      </a>
                    </div>
                  </div>

                  {/* Bio & Details */}
                  <div>
                    <h3 className="text-3xl font-light mb-2 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {exec.name}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-6 font-light">
                      {exec.role}
                    </p>

                    <p className="text-neutral-600 leading-relaxed font-light mb-6">
                      {exec.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-sm text-neutral-500 mb-3 font-light tracking-wider uppercase">
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exec.expertise.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 font-light rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm text-neutral-500 mb-3 font-light tracking-wider uppercase">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {exec.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#0F4C3A] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-600 font-light">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education & Experience */}
                    <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
                      <div>
                        <h4 className="text-xs text-neutral-500 mb-2 font-light tracking-wider uppercase">Education</h4>
                        <p className="text-sm text-neutral-600 font-light">{exec.education}</p>
                      </div>
                      <div>
                        <h4 className="text-xs text-neutral-500 mb-2 font-light tracking-wider uppercase">Previous Roles</h4>
                        <p className="text-sm text-neutral-600 font-light">{exec.previous}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Board of Directors
            </h2>
            <p className="text-neutral-600 font-light max-w-3xl">
              Our independent Board provides strategic oversight, ensures fiscal responsibility, 
              and guides organizational direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-lg border border-neutral-200 p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-4"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {member.image}
                </div>
                <h3 className="text-lg font-light mb-1 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {member.name}
                </h3>
                <p className="text-xs text-neutral-500 mb-3 font-light tracking-wider uppercase">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600 font-light mb-4">
                  {member.affiliation}
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs text-neutral-500 font-light mb-2">Expertise</p>
                  <p className="text-xs text-neutral-600 font-light mb-3">{member.expertise}</p>
                  <p className="text-xs text-neutral-400 font-light">{member.tenure}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-neutral-50 rounded-lg border border-neutral-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <FileText className="w-8 h-8 text-[#0F4C3A] mx-auto mb-4" />
                <h4 className="text-sm font-light mb-2 text-[#0F4C3A]">Board Meetings</h4>
                <p className="text-xs text-neutral-600 font-light">Quarterly meetings + annual retreat</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-[#0F4C3A] mx-auto mb-4" />
                <h4 className="text-sm font-light mb-2 text-[#0F4C3A]">Term Limits</h4>
                <p className="text-xs text-neutral-600 font-light">3-year terms, maximum 3 consecutive terms</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#0F4C3A] mx-auto mb-4" />
                <h4 className="text-sm font-light mb-2 text-[#0F4C3A]">Committees</h4>
                <p className="text-xs text-neutral-600 font-light">Finance, Programs, Governance, Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Council */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Technical Advisory Council
            </h2>
            <p className="text-neutral-600 font-light max-w-3xl">
              Leading academics and practitioners who provide technical expertise and program guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryCouncil.map((advisor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-light mb-2 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {advisor.name}
                </h4>
                <p className="text-sm text-neutral-600 font-light mb-2">{advisor.specialty}</p>
                <p className="text-xs text-neutral-400 font-light">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Documents */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FileText className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Governance & Transparency
          </h2>
          <p className="text-lg text-[#E8F5E9] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            We're committed to the highest standards of governance and accountability. 
            All governance documents are publicly available.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-light rounded-lg hover:bg-white/20 transition-all">
              Bylaws & Policies
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-light rounded-lg hover:bg-white/20 transition-all">
              Board Minutes
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-light rounded-lg hover:bg-white/20 transition-all">
              Annual Reports
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