'use client';

import { useState } from 'react';
import { 
  Heart, Mail, Linkedin, Twitter, MapPin, Briefcase,
  Users, Globe, Target, Award, GraduationCap, Filter,
  ChevronRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Team Members', count: 24 },
    { id: 'leadership', label: 'Executive Leadership', count: 4 },
    { id: 'programs', label: 'Programs & Operations', count: 8 },
    { id: 'development', label: 'Development & Partnerships', count: 5 },
    { id: 'communications', label: 'Communications', count: 4 },
    { id: 'finance', label: 'Finance & Administration', count: 3 },
  ];

  const team = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      role: 'Executive Director & Co-Founder',
      department: 'leadership',
      location: 'New York, USA',
      bio: 'Sarah has 20+ years of experience in international development and education policy. She previously served as Regional Director for UNICEF East Africa and holds a PhD in Development Economics from Oxford.',
      expertise: ['Strategic Leadership', 'Education Policy', 'International Development', 'Fundraising'],
      languages: ['English', 'French', 'Swahili'],
      email: 's.mitchell@hopefoundation.org',
      linkedin: '#',
      twitter: '#',
      education: 'PhD Development Economics, Oxford University',
      image: 'S',
      featured: true
    },
    {
      id: 2,
      name: 'James Okonkwo',
      role: 'Director of Programs',
      department: 'leadership',
      location: 'Nairobi, Kenya',
      bio: 'James brings 15 years of humanitarian experience, including roles with UNDP and Oxfam. He specializes in community-led development and has overseen programs across 30+ countries in Africa and Asia.',
      expertise: ['Program Management', 'Community Development', 'M&E', 'Capacity Building'],
      languages: ['English', 'Igbo', 'French', 'Swahili'],
      email: 'j.okonkwo@hopefoundation.org',
      linkedin: '#',
      twitter: '#',
      education: 'MSc International Development, LSE',
      image: 'J',
      featured: true
    },
    {
      id: 3,
      name: 'Dr. Maria Rodriguez',
      role: 'Director of Healthcare Programs',
      department: 'leadership',
      location: 'Manila, Philippines',
      bio: 'Maria is a public health physician with expertise in maternal and child health. She has designed and implemented healthcare programs in underserved communities across Southeast Asia for over 12 years.',
      expertise: ['Public Health', 'Maternal Health', 'Healthcare Systems', 'Medical Training'],
      languages: ['English', 'Spanish', 'Tagalog'],
      email: 'm.rodriguez@hopefoundation.org',
      linkedin: '#',
      twitter: '#',
      education: 'MD & MPH, University of the Philippines',
      image: 'M',
      featured: true
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'Chief Financial Officer',
      department: 'leadership',
      location: 'New York, USA',
      bio: 'David has 18 years of nonprofit financial management experience. Previously CFO at Save the Children USA, he ensures financial integrity and sustainable growth for Hope Foundation.',
      expertise: ['Financial Management', 'Nonprofit Accounting', 'Audit & Compliance', 'Strategic Planning'],
      languages: ['English', 'Mandarin'],
      email: 'd.chen@hopefoundation.org',
      linkedin: '#',
      education: 'MBA Finance, Wharton School',
      image: 'D',
      featured: true
    },
    {
      id: 5,
      name: 'Amara Nwosu',
      role: 'Regional Program Manager, East Africa',
      department: 'programs',
      location: 'Nairobi, Kenya',
      bio: 'Amara manages education and water programs across Kenya, Tanzania, and Uganda. She has 10 years of grassroots development experience and strong community relationships.',
      expertise: ['Education Programs', 'Water & Sanitation', 'Community Engagement', 'Project Management'],
      languages: ['English', 'Swahili', 'Kikuyu'],
      email: 'a.nwosu@hopefoundation.org',
      linkedin: '#',
      education: 'MA Development Studies, Nairobi University',
      image: 'A',
      featured: false
    },
    {
      id: 6,
      name: 'Carlos Mendoza',
      role: 'Regional Program Manager, Latin America',
      department: 'programs',
      location: 'Lima, Peru',
      bio: 'Carlos leads agricultural and economic development programs in Peru, Ecuador, and Bolivia. His expertise in sustainable agriculture has transformed hundreds of farming communities.',
      expertise: ['Agriculture', 'Sustainable Development', 'Cooperative Development', 'Rural Economics'],
      languages: ['Spanish', 'English', 'Quechua'],
      email: 'c.mendoza@hopefoundation.org',
      linkedin: '#',
      education: 'MS Agricultural Economics, Cornell University',
      image: 'C',
      featured: false
    },
    {
      id: 7,
      name: 'Priya Sharma',
      role: 'Regional Program Manager, South Asia',
      department: 'programs',
      location: 'New Delhi, India',
      bio: 'Priya oversees education technology and girl\'s education programs in India, Bangladesh, and Nepal. She pioneered our digital learning initiative reaching 5,000+ students.',
      expertise: ['Education Technology', 'Girls Education', 'Digital Literacy', 'Gender Equality'],
      languages: ['Hindi', 'English', 'Bengali'],
      email: 'p.sharma@hopefoundation.org',
      linkedin: '#',
      education: 'MA Education, Delhi University',
      image: 'P',
      featured: false
    },
    {
      id: 8,
      name: 'Michael O\'Brien',
      role: 'Monitoring & Evaluation Manager',
      department: 'programs',
      location: 'Remote',
      bio: 'Michael designs and implements M&E frameworks across all programs. His data-driven approach ensures we measure what matters and continuously improve our impact.',
      expertise: ['M&E Framework', 'Data Analysis', 'Impact Measurement', 'Reporting'],
      languages: ['English', 'French'],
      email: 'm.obrien@hopefoundation.org',
      linkedin: '#',
      education: 'MSc Statistics, Stanford University',
      image: 'M',
      featured: false
    },
    {
      id: 9,
      name: 'Jennifer Park',
      role: 'Director of Development',
      department: 'development',
      location: 'San Francisco, USA',
      bio: 'Jennifer leads fundraising strategy and donor relations. She has raised over $50M for nonprofit causes and specializes in major gifts and foundation partnerships.',
      expertise: ['Major Gifts', 'Foundation Relations', 'Fundraising Strategy', 'Donor Engagement'],
      languages: ['English', 'Korean'],
      email: 'j.park@hopefoundation.org',
      linkedin: '#',
      education: 'BA Political Science, UC Berkeley',
      image: 'J',
      featured: false
    },
    {
      id: 10,
      name: 'Thomas Anderson',
      role: 'Corporate Partnerships Manager',
      department: 'development',
      location: 'New York, USA',
      bio: 'Thomas develops strategic partnerships with corporations, managing cause marketing campaigns and employee engagement programs with Fortune 500 companies.',
      expertise: ['Corporate Partnerships', 'Cause Marketing', 'CSR Programs', 'Sponsorships'],
      languages: ['English', 'German'],
      email: 't.anderson@hopefoundation.org',
      linkedin: '#',
      education: 'MBA Marketing, Columbia Business School',
      image: 'T',
      featured: false
    },
    {
      id: 11,
      name: 'Lisa Washington',
      role: 'Communications Director',
      department: 'communications',
      location: 'New York, USA',
      bio: 'Lisa shapes our brand narrative and oversees all communications. Previously at National Geographic, she brings award-winning storytelling to nonprofit communications.',
      expertise: ['Strategic Communications', 'Brand Management', 'Content Strategy', 'Media Relations'],
      languages: ['English', 'Spanish'],
      email: 'l.washington@hopefoundation.org',
      linkedin: '#',
      twitter: '#',
      education: 'MA Journalism, Northwestern University',
      image: 'L',
      featured: false
    },
    {
      id: 12,
      name: 'Rachel Kim',
      role: 'Digital Marketing Manager',
      department: 'communications',
      location: 'Remote',
      bio: 'Rachel manages our digital presence across all platforms. Her campaigns have grown our online community by 300% and significantly increased digital fundraising.',
      expertise: ['Digital Marketing', 'Social Media', 'Email Campaigns', 'Analytics'],
      languages: ['English', 'Korean'],
      email: 'r.kim@hopefoundation.org',
      linkedin: '#',
      education: 'BS Marketing, NYU',
      image: 'R',
      featured: false
    },
  ];

  const filteredTeam = team.filter(member => 
    activeDepartment === 'all' || member.department === activeDepartment
  );

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
              OUR TEAM
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Meet the People
              <br />
              Behind the Mission
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our diverse team of passionate professionals brings decades of experience 
              in international development, program management, and community empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '40+', label: 'Team Members Globally', icon: Users },
              { number: '15', label: 'Countries Represented', icon: Globe },
              { number: '25', label: 'Languages Spoken', icon: GraduationCap },
              { number: '200+', label: 'Years Combined Experience', icon: Award },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <stat.icon className="w-8 h-8 text-[#0F4C3A] mx-auto mb-4" />
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

      {/* Department Filter */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-neutral-400" />
            <span className="text-sm text-neutral-600 font-light tracking-wide">FILTER BY DEPARTMENT</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                  activeDepartment === dept.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {dept.label}
                <span className="ml-2 text-xs opacity-60">({dept.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member) => (
              <div key={member.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all group">
                {/* Member Header */}
                <div className="aspect-square bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center text-white text-5xl font-light relative z-10"
                       style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {member.image}
                  </div>
                  {member.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#0F4C3A] text-white text-xs font-light tracking-wide rounded-full">
                      Leadership
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2 text-[#0F4C3A]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 font-light">
                    {member.role}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-light">
                    <MapPin className="w-3 h-3" />
                    {member.location}
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6 line-clamp-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-neutral-100 text-xs text-neutral-600 font-light rounded">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="mb-6 pb-6 border-b border-neutral-100">
                    <div className="text-xs text-neutral-500 mb-2 font-light tracking-wider uppercase">Languages</div>
                    <div className="text-sm text-neutral-600 font-light">
                      {member.languages.join(', ')}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a href={`mailto:${member.email}`} className="w-8 h-8 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] transition-colors">
                        <Mail className="w-4 h-4 text-neutral-400 hover:text-[#0F4C3A]" />
                      </a>
                      <a href={member.linkedin} className="w-8 h-8 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] transition-colors">
                        <Linkedin className="w-4 h-4 text-neutral-400 hover:text-[#0F4C3A]" />
                      </a>
                      {member.twitter && (
                        <a href={member.twitter} className="w-8 h-8 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] transition-colors">
                          <Twitter className="w-4 h-4 text-neutral-400 hover:text-[#0F4C3A]" />
                        </a>
                      )}
                    </div>
                    <button className="text-sm text-[#0F4C3A] font-light flex items-center group/btn">
                      View Profile
                      <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Briefcase className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Join Our Team
          </h2>
          <p className="text-lg text-[#E8F5E9] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            We're always looking for passionate professionals who want to make a difference. 
            Explore career opportunities with Hope Foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#0F4C3A] text-sm font-light tracking-wide hover:bg-neutral-100 transition-all duration-300 rounded-lg flex items-center justify-center">
              View Open Positions
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>
            <button className="px-8 py-3 border border-white/20 text-white text-sm font-light tracking-wide hover:bg-white/10 transition-all duration-300 rounded-lg">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F4C3A] text-[#A8D5BA] py-16 border-t border-[#1A5744]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#0F4C3A]" fill="currentColor" />
                </div>
                <span className="text-sm font-light text-white tracking-wide"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Hope Foundation
                </span>
              </div>
              <p className="text-xs leading-relaxed font-light">
                Creating sustainable change through community empowerment.
              </p>
            </div>
            <div>
              <h4 className="text-xs text-white mb-4 tracking-widest uppercase font-light">Quick Links</h4>
              <div className="space-y-2 text-xs">
                <Link href="/" className="block hover:text-white transition-colors font-light">Home</Link>
                <Link href="/about" className="block hover:text-white transition-colors font-light">About</Link>
                <Link href="/team" className="block hover:text-white transition-colors font-light">Team</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs text-white mb-4 tracking-widest uppercase font-light">Careers</h4>
              <div className="space-y-2 text-xs">
                <a href="#" className="block hover:text-white transition-colors font-light">Open Positions</a>
                <a href="#" className="block hover:text-white transition-colors font-light">Internships</a>
                <a href="#" className="block hover:text-white transition-colors font-light">Culture & Benefits</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs text-white mb-4 tracking-widest uppercase font-light">Newsletter</h4>
              <div className="flex border-b border-[#1A5744]">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-transparent py-2 text-xs focus:outline-none font-light placeholder-[#A8D5BA]/50"
                />
                <button className="text-xs hover:text-white transition-colors">→</button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1A5744] pt-8 text-center text-xs font-light">
            <p>© 2026 Hope Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}