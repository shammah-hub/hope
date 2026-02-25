'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, MapPin, Clock, Briefcase, Users,
  Globe, TrendingUp, Award, BookOpen, Coffee, Laptop,
  Home, Zap, CheckCircle, Search, Filter, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    { id: 'all', label: 'All Positions' },
    { id: 'programs', label: 'Programs & Operations' },
    { id: 'development', label: 'Development & Fundraising' },
    { id: 'communications', label: 'Communications & Marketing' },
    { id: 'admin', label: 'Administration & Finance' },
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Program Manager - Education',
      department: 'programs',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      remote: false,
      level: 'Senior',
      posted: '2 days ago',
      description: 'Lead our education programs across East Africa, managing a team of 8 field coordinators and overseeing projects in 15 communities.',
      responsibilities: [
        'Oversee implementation of education programs across Kenya, Tanzania, and Uganda',
        'Manage team of field coordinators and partner organizations',
        'Develop program strategies and annual work plans',
        'Monitor program quality and impact through M&E systems',
      ],
      qualifications: [
        '7+ years in international development, 3+ in education programs',
        'Master\'s degree in Education, International Development, or related field',
        'Experience managing multi-country programs and teams',
        'Fluency in English and Swahili required',
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Major Gifts Officer',
      department: 'development',
      location: 'New York, NY',
      type: 'Full-time',
      remote: 'Hybrid',
      level: 'Mid-level',
      posted: '5 days ago',
      description: 'Build and steward relationships with major donors ($25K+) to support our global programs through personalized engagement.',
      responsibilities: [
        'Manage portfolio of 100-125 major donors and prospects',
        'Develop cultivation and solicitation strategies for 5-6 figure gifts',
        'Coordinate site visits and impact reporting for donors',
        'Collaborate with programs team on funding proposals',
      ],
      qualifications: [
        '5+ years in nonprofit fundraising with major gifts experience',
        'Proven track record of securing 6-figure gifts',
        'Excellent relationship management and communication skills',
        'Bachelor\'s degree required',
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'communications',
      location: 'Remote',
      type: 'Full-time',
      remote: true,
      level: 'Mid-level',
      posted: '1 week ago',
      description: 'Drive online engagement and fundraising through strategic digital campaigns across social media, email, and web platforms.',
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media presence across platforms',
        'Create compelling content highlighting program impact',
        'Analyze metrics and optimize campaign performance',
      ],
      qualifications: [
        '3+ years digital marketing experience, nonprofit preferred',
        'Proficiency in social media management tools and Google Analytics',
        'Strong writing and visual storytelling skills',
        'Experience with email marketing platforms (Mailchimp, etc.)',
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Finance Manager',
      department: 'admin',
      location: 'New York, NY',
      type: 'Full-time',
      remote: 'Hybrid',
      level: 'Mid-level',
      posted: '3 days ago',
      description: 'Oversee financial operations including budgeting, reporting, grants management, and compliance for $2.5M annual budget.',
      responsibilities: [
        'Manage accounting operations and financial reporting',
        'Oversee grant budgets and compliance',
        'Lead annual audit process',
        'Supervise finance coordinator',
      ],
      qualifications: [
        '5+ years accounting/finance experience, nonprofit required',
        'CPA or equivalent certification preferred',
        'Experience with grants management and compliance',
        'Proficiency in QuickBooks and Excel',
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Healthcare Program Coordinator',
      department: 'programs',
      location: 'Manila, Philippines',
      type: 'Full-time',
      remote: false,
      level: 'Entry-level',
      posted: '1 week ago',
      description: 'Support implementation of mobile health clinic programs in island communities, coordinating logistics and community partnerships.',
      responsibilities: [
        'Coordinate mobile clinic schedules and logistics',
        'Build relationships with community health workers',
        'Collect and report program data',
        'Support health education initiatives',
      ],
      qualifications: [
        '2+ years in healthcare or community development',
        'Bachelor\'s degree in Public Health or related field',
        'Fluency in Tagalog and English',
        'Ability to travel to remote communities',
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Grants Writer',
      department: 'development',
      location: 'Remote',
      type: 'Full-time',
      remote: true,
      level: 'Mid-level',
      posted: '2 weeks ago',
      description: 'Research funding opportunities and write compelling grant proposals to secure foundation and government funding.',
      responsibilities: [
        'Research and identify grant opportunities',
        'Write letters of inquiry and full proposals',
        'Manage grant calendar and deadlines',
        'Collaborate with programs team on proposal narratives',
      ],
      qualifications: [
        '3+ years grant writing experience with proven success',
        'Excellent research and writing skills',
        'Knowledge of foundation and government funding landscape',
        'Bachelor\'s degree required',
      ],
      featured: false
    },
  ];

  const filteredPositions = openPositions.filter(position => {
    const deptMatch = activeFilter === 'all' || position.department === activeFilter;
    const searchMatch = searchQuery === '' || 
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.description.toLowerCase().includes(searchQuery.toLowerCase());
    return deptMatch && searchMatch;
  });

  const benefits = [
    {
      icon: Heart,
      title: 'Comprehensive Health',
      description: 'Medical, dental, vision coverage for you and your family'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote options'
    },
    {
      icon: Zap,
      title: 'Professional Growth',
      description: 'Annual training budget and career development support'
    },
    {
      icon: Globe,
      title: 'Global Experience',
      description: 'Opportunities for international travel and field work'
    },
    {
      icon: Coffee,
      title: 'Generous Time Off',
      description: '20 days PTO, 10 holidays, plus volunteer days'
    },
    {
      icon: Laptop,
      title: 'Remote-Friendly',
      description: 'Equipment and stipend for home office setup'
    },
  ];

  const values = [
    {
      title: 'Community-Led',
      description: 'We believe communities know their needs best and lead their own development'
    },
    {
      title: 'Collaborative',
      description: 'We work in partnership with local organizations, governments, and communities'
    },
    {
      title: 'Accountable',
      description: 'We measure impact rigorously and report transparently to all stakeholders'
    },
    {
      title: 'Inclusive',
      description: 'We value diverse perspectives and create space for all voices to be heard'
    },
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
              JOIN OUR TEAM
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Work That
              <br />
              Matters
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Join a team of passionate professionals creating sustainable change 
              in communities around the world
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#positions" className="px-8 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-300 rounded-lg">
              View Open Positions
            </a>
            <a href="#culture" className="px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500 rounded-lg">
              Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section id="culture" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Our Culture & Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              We're a mission-driven organization where every person contributes to creating lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, idx) => (
              <div key={idx} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                <h3 className="text-xl font-light mb-3 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Employee Testimonial */}
          <div className="bg-[#E8F5E9] p-12 rounded-lg">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center text-white text-3xl font-light flex-shrink-0"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  A
                </div>
                <div>
                  <p className="text-lg text-neutral-700 leading-relaxed font-light italic mb-6">
                    "Working at Hope Foundation isn't just a job—it's a calling. Every day I see the direct impact of our work on real people's lives. The team is brilliant, supportive, and deeply committed to our mission. I've grown both professionally and personally in ways I never imagined."
                  </p>
                  <div>
                    <div className="font-light text-[#0F4C3A]">Amara Johnson</div>
                    <div className="text-sm text-neutral-500 font-light">Senior Program Manager, 4 years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Benefits & Perks
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              We invest in our team's well-being and professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-neutral-200 text-center">
                <div className="w-14 h-14 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-7 h-7 text-[#0F4C3A]/60" />
                </div>
                <h3 className="text-lg font-light mb-3 text-[#0F4C3A]"
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

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Open Positions
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed font-light mb-8">
              Explore opportunities to join our team
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
                />
              </div>
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-all group">
                <div className="p-8">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="flex-1">
                      {position.featured && (
                        <div className="inline-block px-3 py-1 bg-[#0F4C3A] text-white text-xs font-light tracking-wide rounded-full mb-3">
                          Featured Position
                        </div>
                      )}
                      <h3 className="text-2xl font-light mb-3 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 font-light mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {departments.find(d => d.id === position.department)?.label}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        {position.remote && (
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            {position.remote === true ? 'Remote' : position.remote}
                          </div>
                        )}
                      </div>
                      <p className="text-neutral-600 leading-relaxed font-light mb-6">
                        {position.description}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-neutral-400 font-light mb-2">Posted</div>
                      <div className="text-sm text-neutral-600 font-light">{position.posted}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all rounded-lg flex items-center">
                      View Details & Apply
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                    <button className="px-6 py-2 border border-neutral-300 text-neutral-600 hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all text-sm font-light rounded-lg">
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h3 className="text-2xl font-light mb-4 text-neutral-600"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                No positions found
              </h3>
              <p className="text-neutral-500 font-light mb-6">
                Try adjusting your search or check back soon for new opportunities
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                className="text-sm text-[#0F4C3A] font-light"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Application Process
            </h2>
            <p className="text-lg text-[#E8F5E9] max-w-3xl mx-auto leading-relaxed font-light">
              Here's what to expect when you apply
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your resume and cover letter through our portal' },
              { step: '2', title: 'Initial Review', description: 'Our team reviews applications within 2 weeks' },
              { step: '3', title: 'Interviews', description: '2-3 rounds with team members and leadership' },
              { step: '4', title: 'Offer & Onboarding', description: 'Welcome to the team! We\'ll get you started' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-light"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-light mb-3 text-white"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#E8F5E9] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
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