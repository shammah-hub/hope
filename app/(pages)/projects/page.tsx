'use client';

import { JSX, useState } from 'react';
import { 
  Heart, ArrowRight, MapPin, Users, Calendar, TrendingUp,
  BookOpen, Stethoscope, Sprout, Home, Droplet, Zap,
  CheckCircle, Target, Globe, DollarSign, Clock, Share2,
  Eye, Download, ExternalLink, Filter
} from 'lucide-react';
import Link from 'next/link';

type ImageType = 'education' | 'health' | 'agriculture' | 'water';

interface Project {
  id: number;
  title: string;
  category: string;
  region: string;
  location: string;
  status: string;
  completion: number;
  budget: number;
  raised: number;
  startDate: string;
  endDate: string;
  description: string;
  impact: string[];
  image: ImageType;
  students?: number;
  beneficiaries?: number;
  farmers?: number;
  households?: number;
  mothers?: number;
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRegion, setActiveRegion] = useState('all');

  const categories = [
    { id: 'all', label: 'All Programs', icon: Globe },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'health', label: 'Healthcare', icon: Stethoscope },
    { id: 'agriculture', label: 'Agriculture', icon: Sprout },
    { id: 'infrastructure', label: 'Infrastructure', icon: Home },
    { id: 'water', label: 'Water & Sanitation', icon: Droplet },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Schools for Rural Communities',
      category: 'education',
      region: 'East Africa',
      location: 'Kisumu, Kenya',
      status: 'active',
      completion: 75,
      students: 1200,
      budget: 250000,
      raised: 187500,
      startDate: 'Jan 2023',
      endDate: 'Dec 2025',
      description: 'Building and equipping 15 primary schools in underserved rural areas, providing quality education to over 1,200 students.',
      impact: ['15 schools built', '1,200 students enrolled', '60 teachers trained'],
      image: 'education',
    },
    {
      id: 2,
      title: 'Mobile Health Clinics Initiative',
      category: 'health',
      region: 'Southeast Asia',
      location: 'Mindanao, Philippines',
      status: 'active',
      completion: 60,
      beneficiaries: 8500,
      budget: 180000,
      raised: 108000,
      startDate: 'Mar 2023',
      endDate: 'Mar 2026',
      description: 'Operating 5 mobile health clinics providing primary healthcare, maternal care, and vaccinations to remote island communities.',
      impact: ['8,500 patients served', '95% vaccination rate', '10 health workers trained'],
      image: 'health',
    },
    {
      id: 3,
      title: 'Sustainable Farming Training',
      category: 'agriculture',
      region: 'South America',
      location: 'Amazon Basin, Peru',
      status: 'active',
      completion: 45,
      farmers: 450,
      budget: 120000,
      raised: 54000,
      startDate: 'Jun 2024',
      endDate: 'Jun 2027',
      description: 'Training smallholder farmers in sustainable agriculture techniques, providing seeds, tools, and market access for organic produce.',
      impact: ['450 farmers trained', '30% yield increase', '5 cooperatives formed'],
      image: 'agriculture',
    },
    {
      id: 4,
      title: 'Clean Water Access Project',
      category: 'water',
      region: 'West Africa',
      location: 'Northern Ghana',
      status: 'active',
      completion: 85,
      households: 2500,
      budget: 200000,
      raised: 170000,
      startDate: 'Sep 2022',
      endDate: 'Jun 2025',
      description: 'Installing 25 water wells and building sanitation facilities to provide clean drinking water to 2,500 rural households.',
      impact: ['25 wells installed', '2,500 households served', '80% reduction in waterborne illness'],
      image: 'water',
    },
    {
      id: 5,
      title: 'Digital Learning Centers',
      category: 'education',
      region: 'South Asia',
      location: 'Rural India',
      status: 'planning',
      completion: 15,
      students: 800,
      budget: 150000,
      raised: 22500,
      startDate: 'Jan 2025',
      endDate: 'Dec 2027',
      description: 'Establishing technology-equipped learning centers in 10 villages, providing digital literacy and STEM education to youth.',
      impact: ['10 centers planned', '800 students expected', '40 computers donated'],
      image: 'education',
    },
    {
      id: 6,
      title: 'Maternal Health Program',
      category: 'health',
      region: 'East Africa',
      location: 'Tanzania',
      status: 'completed',
      completion: 100,
      mothers: 1200,
      budget: 95000,
      raised: 95000,
      startDate: 'Mar 2021',
      endDate: 'Dec 2023',
      description: 'Comprehensive maternal health program providing prenatal care, safe deliveries, and postnatal support for mothers in rural areas.',
      impact: ['1,200 safe deliveries', '15 midwives trained', '90% reduced mortality'],
      image: 'health',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = activeCategory === 'all' || project.category === activeCategory;
    const regionMatch = activeRegion === 'all' || project.region === activeRegion;
    return categoryMatch && regionMatch;
  });

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'active': return 'bg-[#0F4C3A] text-white';
      case 'completed': return 'bg-neutral-500 text-white';
      case 'planning': return 'bg-neutral-300 text-neutral-700';
      default: return 'bg-neutral-200 text-neutral-600';
    }
  };

  const getProjectIllustration = (imageType: ImageType): JSX.Element => {
    const illustrations: Record<ImageType, JSX.Element> = {
      education: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="60" y="80" width="80" height="60" fill="#0F4C3A" opacity="0.15" rx="4"/>
          <rect x="50" y="70" width="80" height="60" fill="#0F4C3A" opacity="0.25" rx="4"/>
          <rect x="40" y="60" width="80" height="60" fill="#0F4C3A" opacity="0.4" rx="4"/>
          <line x1="80" y1="60" x2="80" y2="120" stroke="#0F4C3A" strokeWidth="2" opacity="0.6"/>
          <polygon points="100,45 130,55 100,65 70,55" fill="#0F4C3A" opacity="0.3"/>
          <rect x="95" y="45" width="10" height="20" fill="#0F4C3A" opacity="0.3"/>
          <circle cx="150" cy="90" r="3" fill="#0F4C3A" opacity="0.2"/>
          <circle cx="160" cy="110" r="2" fill="#0F4C3A" opacity="0.2"/>
          <circle cx="30" cy="100" r="4" fill="#0F4C3A" opacity="0.2"/>
        </svg>
      ),
      health: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="85" y="60" width="30" height="80" fill="#0F4C3A" opacity="0.3" rx="4"/>
          <rect x="60" y="85" width="80" height="30" fill="#0F4C3A" opacity="0.3" rx="4"/>
          <path d="M 30,100 L 60,100 L 70,85 L 80,115 L 90,100 L 170,100"
                stroke="#0F4C3A" strokeWidth="3" fill="none" opacity="0.25"/>
          <circle cx="100" cy="100" r="35" fill="none" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
          <circle cx="100" cy="100" r="45" fill="none" stroke="#0F4C3A" strokeWidth="1" opacity="0.1"/>
          <circle cx="150" cy="70" r="3" fill="#0F4C3A" opacity="0.2"/>
          <circle cx="40" cy="130" r="4" fill="#0F4C3A" opacity="0.2"/>
        </svg>
      ),
      agriculture: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="130" rx="40" ry="10" fill="#0F4C3A" opacity="0.15"/>
          <path d="M 100,130 Q 100,100 90,80 Q 85,70 75,65" stroke="#0F4C3A" strokeWidth="3" fill="none" opacity="0.3"/>
          <path d="M 100,130 Q 100,90 110,70 Q 115,60 125,55" stroke="#0F4C3A" strokeWidth="3" fill="none" opacity="0.3"/>
          <ellipse cx="75" cy="65" rx="12" ry="20" fill="#0F4C3A" opacity="0.25" transform="rotate(-30 75 65)"/>
          <ellipse cx="125" cy="55" rx="12" ry="20" fill="#0F4C3A" opacity="0.25" transform="rotate(30 125 55)"/>
          <ellipse cx="90" cy="85" rx="10" ry="16" fill="#0F4C3A" opacity="0.2" transform="rotate(-45 90 85)"/>
          <ellipse cx="110" cy="75" rx="10" ry="16" fill="#0F4C3A" opacity="0.2" transform="rotate(45 110 75)"/>
          <circle cx="150" cy="50" r="15" fill="#0F4C3A" opacity="0.15"/>
          <line x1="150" y1="30" x2="150" y2="35" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
          <line x1="150" y1="65" x2="150" y2="70" stroke="#0F4C3A" strokeWidth="2" opacity="0.15"/>
        </svg>
      ),
      water: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 100,50 Q 80,80 80,100 Q 80,130 100,130 Q 120,130 120,100 Q 120,80 100,50 Z"
                fill="#0F4C3A" opacity="0.2"/>
          <path d="M 100,60 Q 85,85 85,100 Q 85,120 100,120 Q 115,120 115,100 Q 115,85 100,60 Z"
                fill="#0F4C3A" opacity="0.15"/>
          <circle cx="65" cy="90" r="8" fill="#0F4C3A" opacity="0.1"/>
          <circle cx="135" cy="95" r="6" fill="#0F4C3A" opacity="0.1"/>
          <circle cx="100" cy="150" r="4" fill="#0F4C3A" opacity="0.15"/>
          <circle cx="90" cy="160" r="3" fill="#0F4C3A" opacity="0.15"/>
          <circle cx="110" cy="155" r="3" fill="#0F4C3A" opacity="0.15"/>
          <path d="M 40,120 Q 50,115 60,120" stroke="#0F4C3A" strokeWidth="2" fill="none" opacity="0.15"/>
          <path d="M 140,110 Q 150,105 160,110" stroke="#0F4C3A" strokeWidth="2" fill="none" opacity="0.15"/>
        </svg>
      ),
    };
    return illustrations[imageType];
  };

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
              OUR PROJECTS
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Programs Making
              <br />
              a Difference
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our active projects creating sustainable impact in communities around the world
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '47', label: 'Active Projects' },
              { number: '12', label: 'Countries' },
              { number: '35K+', label: 'Beneficiaries' },
              { number: '$2.1M', label: 'Current Funding' },
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

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="w-5 h-5 text-neutral-400" />
            <span className="text-sm text-neutral-600 font-light tracking-wide">FILTER BY CATEGORY</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                  activeCategory === category.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Project Image/Illustration */}
                <div className="aspect-[16/9] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center p-12 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  {getProjectIllustration(project.image)}

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-light tracking-wide ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Location & Category */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                    <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                    <div className="text-xs text-neutral-500 font-light tracking-wider uppercase">
                      {project.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light mb-4 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Impact Points */}
                  <div className="space-y-2 mb-6">
                    {project.impact.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600 font-light">
                        <CheckCircle className="w-4 h-4 text-[#0F4C3A]/40 flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  {project.status !== 'completed' && (
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-neutral-500 font-light tracking-wider uppercase">
                          Project Progress
                        </span>
                        <span className="text-sm text-[#0F4C3A] font-light">
                          {project.completion}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0F4C3A] rounded-full transition-all duration-500"
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Funding Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-neutral-500 font-light tracking-wider uppercase">
                        Funding
                      </span>
                      <span className="text-sm text-neutral-600 font-light">
                        ${(project.raised / 1000).toFixed(0)}K / ${(project.budget / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0F4C3A] to-[#1A5744] rounded-full transition-all duration-500"
                        style={{ width: `${(project.raised / project.budget) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-neutral-100">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                      <Calendar className="w-4 h-4" />
                      {project.startDate} - {project.endDate}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                      <Users className="w-4 h-4" />
                      {project.students ?? project.beneficiaries ?? project.farmers ?? project.households ?? project.mothers} People
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-300 rounded-lg flex items-center justify-center group/btn">
                      Support This Project
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-4 py-3 border border-neutral-300 text-neutral-600 hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all duration-300 rounded-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-3 border border-neutral-300 text-neutral-600 hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all duration-300 rounded-lg">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-2 border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-neutral-600"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                No projects found
              </h3>
              <p className="text-neutral-500 font-light">
                Try adjusting your filters to see more projects
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-[#A8D5BA] tracking-widest uppercase mb-6 font-light">
              Collective Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Creating Change Together
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, number: '15K+', label: 'Students Educated' },
              { icon: Stethoscope, number: '25K+', label: 'Patients Treated' },
              { icon: Sprout, number: '3,500+', label: 'Farmers Supported' },
              { icon: Droplet, number: '10K+', label: 'Water Access' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <div className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-7 h-7 text-white/80" />
                </div>
                <div className="text-4xl font-light text-white mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-[#E8F5E9] font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white text-[#0F4C3A] text-sm font-light tracking-wide hover:bg-neutral-100 transition-all duration-300 rounded-lg inline-flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download Impact Report 2024
            </button>
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
            Start Your Own Campaign
          </h2>
          <p className="text-lg text-neutral-600 mb-12 font-light leading-relaxed">
            Have a project idea? We support community-led initiatives that align with our mission.
            Submit your proposal to bring positive change to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-500 flex items-center justify-center group">
              Submit a Project Proposal
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500">
              View Guidelines
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