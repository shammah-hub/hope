'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, GraduationCap, Globe, Users, Calendar,
  Clock, MapPin, CheckCircle, Star, Award, BookOpen,
  Briefcase, Target, TrendingUp, Mail, Download
} from 'lucide-react';
import Link from 'next/link';

export default function InternshipsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Internships', count: 12 },
    { id: 'programs', label: 'Programs & Operations', count: 4 },
    { id: 'communications', label: 'Communications', count: 3 },
    { id: 'development', label: 'Development & Fundraising', count: 2 },
    { id: 'research', label: 'Research & M&E', count: 3 },
  ];

  const internships = [
    {
      id: 1,
      title: 'Program Management Intern',
      department: 'programs',
      location: 'Nairobi, Kenya',
      type: 'Field-Based',
      duration: '6 months',
      start: 'June 2026',
      deadline: 'March 15, 2026',
      stipend: '$800/month + housing',
      description: 'Support education and water programs in rural Kenya, assisting with community engagement, project monitoring, and impact evaluation.',
      responsibilities: [
        'Assist in day-to-day project implementation and coordination',
        'Conduct community needs assessments and beneficiary surveys',
        'Support monitoring and evaluation activities',
        'Prepare project reports and documentation'
      ],
      qualifications: [
        'Currently pursuing or recently completed degree in International Development, Social Sciences, or related field',
        'Strong interest in community development and social impact',
        'Excellent communication and interpersonal skills',
        'Proficiency in English; Swahili is a plus',
        'Ability to work in rural/remote settings'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Digital Marketing & Social Media Intern',
      department: 'communications',
      location: 'Remote',
      type: 'Virtual',
      duration: '4 months',
      start: 'May 2026',
      deadline: 'April 1, 2026',
      stipend: '$500/month',
      description: 'Create compelling content across social media platforms, manage campaigns, and analyze engagement metrics to amplify our impact stories.',
      responsibilities: [
        'Develop and schedule social media content across platforms',
        'Design graphics and visual content using Canva/Adobe Suite',
        'Monitor social media metrics and prepare performance reports',
        'Engage with online community and respond to inquiries'
      ],
      qualifications: [
        'Currently pursuing degree in Marketing, Communications, or related field',
        'Strong writing skills and creativity',
        'Proficiency with social media platforms and analytics tools',
        'Basic graphic design skills',
        'Self-motivated and able to work independently'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Grant Writing & Research Intern',
      department: 'development',
      location: 'New York, USA',
      type: 'Hybrid',
      duration: '5 months',
      start: 'June 2026',
      deadline: 'March 30, 2026',
      stipend: '$1,000/month',
      description: 'Research funding opportunities, draft grant proposals, and support donor communications to sustain and grow our programs.',
      responsibilities: [
        'Research and identify potential foundation and corporate funders',
        'Draft grant proposals and supporting documents',
        'Maintain grants database and calendar',
        'Assist with donor reports and acknowledgments'
      ],
      qualifications: [
        'Pursuing degree in Nonprofit Management, English, or related field',
        'Excellent research and writing abilities',
        'Strong attention to detail and organizational skills',
        'Interest in philanthropy and nonprofit fundraising',
        'Previous grant writing experience preferred but not required'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Impact Evaluation & Data Analysis Intern',
      department: 'research',
      location: 'Remote',
      type: 'Virtual',
      duration: '6 months',
      start: 'July 2026',
      deadline: 'April 15, 2026',
      stipend: '$700/month',
      description: 'Analyze program data, create visualizations, and contribute to impact reports demonstrating our measurable outcomes.',
      responsibilities: [
        'Clean and analyze program monitoring data',
        'Create data visualizations and dashboards',
        'Support preparation of impact reports and case studies',
        'Conduct literature reviews on best practices'
      ],
      qualifications: [
        'Pursuing degree in Statistics, Data Science, Economics, or related field',
        'Proficiency in Excel; experience with R, Python, or Stata preferred',
        'Strong analytical and problem-solving skills',
        'Ability to communicate data insights clearly',
        'Interest in international development and impact measurement'
      ],
      featured: false
    }
  ];

  const filteredInternships = internships.filter(
    intern => selectedDepartment === 'all' || intern.department === selectedDepartment
  );

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Structured training, mentorship from experienced professionals, and skill-building workshops'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with international team members, partners, and fellow interns from around the world'
    },
    {
      icon: Award,
      title: 'Real Impact',
      description: 'Contribute to meaningful projects creating tangible change in communities'
    },
    {
      icon: Briefcase,
      title: 'Career Pathway',
      description: 'Many interns transition to full-time roles; access to job opportunities in our network'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Former Program Intern → Program Officer',
      location: 'Philippines',
      quote: 'My internship in Manila gave me hands-on experience in community development that shaped my entire career. I\'m now leading programs I helped build as an intern.',
      image: 'S'
    },
    {
      name: 'James Kimani',
      role: 'Former Research Intern → M&E Manager',
      location: 'Kenya',
      quote: 'The mentorship and real-world experience I gained were invaluable. I learned how to translate data into actionable insights that improve program outcomes.',
      image: 'J'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
     
      {/* Hero */}
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
              INTERNSHIP PROGRAM
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Launch Your
              <br />
              Impact Career
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Gain real-world experience in international development while contributing 
              to programs creating sustainable change in communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '40+', label: 'Interns Annually' },
              { number: '15', label: 'Countries' },
              { number: '80%', label: 'Hire Rate' },
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

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Why Intern With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-[#0F4C3A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-7 h-7 text-[#0F4C3A]" />
                </div>
                <h3 className="text-xl font-light mb-3 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                  selectedDepartment === dept.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {dept.label} <span className="text-xs opacity-60">({dept.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Internships List */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-8">
            {filteredInternships.map((internship) => (
              <div key={internship.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      {internship.featured && (
                        <span className="inline-block px-3 py-1 bg-[#0F4C3A] text-white text-xs font-light tracking-wide rounded-full mb-4">
                          Featured
                        </span>
                      )}
                      <h3 className="text-3xl font-light mb-3 text-[#0F4C3A]"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {internship.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-600 font-light">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {internship.location} • {internship.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {internship.duration} • Starting {internship.start}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Apply by {internship.deadline}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-neutral-500 font-light mb-1">Stipend</div>
                      <div className="text-lg font-light text-[#0F4C3A]">{internship.stipend}</div>
                    </div>
                  </div>

                  <p className="text-neutral-600 leading-relaxed font-light mb-6">
                    {internship.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-sm font-light mb-4 text-[#0F4C3A] tracking-wide">RESPONSIBILITIES</h4>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-neutral-600 font-light">
                            <CheckCircle className="w-4 h-4 text-[#0F4C3A]/40 mr-2 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-light mb-4 text-[#0F4C3A] tracking-wide">QUALIFICATIONS</h4>
                      <ul className="space-y-2">
                        {internship.qualifications.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-neutral-600 font-light">
                            <Star className="w-4 h-4 text-[#0F4C3A]/40 mr-2 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[#0F4C3A] text-white rounded-lg hover:bg-[#1A5744] transition-all font-light flex items-center justify-center group">
                    Apply for this Position
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Intern Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((person, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0F4C3A] text-2xl font-light"
                       style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {person.image}
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white">{person.name}</h4>
                    <p className="text-sm text-[#E8F5E9] font-light">{person.role}</p>
                    <p className="text-xs text-[#A8D5BA] font-light">{person.location}</p>
                  </div>
                </div>
                <p className="text-[#E8F5E9] leading-relaxed font-light italic">
                  "{person.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light text-[#0F4C3A] mb-12"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            How to Apply
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { step: '1', title: 'Find Your Role', desc: 'Browse openings and find your fit' },
              { step: '2', title: 'Prepare Materials', desc: 'Resume, cover letter, references' },
              { step: '3', title: 'Submit Application', desc: 'Apply online with all documents' },
              { step: '4', title: 'Interview Process', desc: 'Initial screening + final interview' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="w-12 h-12 bg-[#0F4C3A] text-white rounded-full flex items-center justify-center text-xl font-light mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-sm font-light mb-2 text-[#0F4C3A]">{item.title}</h4>
                <p className="text-xs text-neutral-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-600 font-light mb-6">
            Questions about our internship program?
          </p>
          <a href="mailto:internships@hopefoundation.org" className="text-[#0F4C3A] font-light flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            internships@hopefoundation.org
          </a>
        </div>
      </section>

    

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}