'use client';

import { useState } from 'react';
import { 
  Heart, Download, FileText, BookOpen, Video, Image,
  Link as LinkIcon, Wrench, GraduationCap, Users, Globe,
  Briefcase, Search, Filter, ExternalLink, Play,
  CheckCircle, ArrowRight, Folder, Archive
} from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: Folder },
    { id: 'toolkits', label: 'Toolkits & Guides', icon: Wrench },
    { id: 'educational', label: 'Educational Materials', icon: GraduationCap },
    { id: 'media', label: 'Media & Graphics', icon: Image },
    { id: 'videos', label: 'Videos & Webinars', icon: Video },
    { id: 'templates', label: 'Templates & Forms', icon: FileText },
  ];

  const resources = [
    {
      id: 1,
      title: 'Community Development Toolkit',
      category: 'toolkits',
      type: 'PDF Guide',
      size: '8.5 MB',
      pages: 64,
      description: 'Comprehensive guide for planning and implementing community-led development projects with step-by-step frameworks.',
      topics: ['Project Planning', 'Community Engagement', 'Monitoring & Evaluation', 'Sustainability'],
      downloadCount: 2341,
      lastUpdated: 'January 2026',
      featured: true
    },
    {
      id: 2,
      title: 'Fundraising Best Practices Guide',
      category: 'toolkits',
      type: 'PDF Guide',
      size: '4.2 MB',
      pages: 48,
      description: 'Essential strategies for nonprofit fundraising including donor cultivation, campaign planning, and digital fundraising.',
      topics: ['Donor Relations', 'Campaign Strategy', 'Digital Fundraising', 'Grant Writing'],
      downloadCount: 1876,
      lastUpdated: 'December 2025',
      featured: true
    },
    {
      id: 3,
      title: 'Impact Storytelling Workshop',
      category: 'videos',
      type: 'Video Series',
      duration: '2.5 hours',
      description: 'Learn how to collect, craft, and share compelling impact stories that engage donors and demonstrate program effectiveness.',
      topics: ['Story Collection', 'Visual Storytelling', 'Data Visualization', 'Ethics'],
      viewCount: 4521,
      lastUpdated: 'November 2025',
      featured: true
    },
    {
      id: 4,
      title: 'SDG Alignment Framework',
      category: 'educational',
      type: 'Interactive Guide',
      size: '2.1 MB',
      description: 'Framework for aligning your programs with UN Sustainable Development Goals and measuring contribution to global targets.',
      topics: ['SDGs', 'Impact Measurement', 'Reporting Standards', 'Global Goals'],
      downloadCount: 1523,
      lastUpdated: 'October 2025',
      featured: false
    },
    {
      id: 5,
      title: 'Volunteer Management Templates',
      category: 'templates',
      type: 'Excel/Word Pack',
      size: '1.8 MB',
      description: 'Complete set of templates for volunteer recruitment, onboarding, tracking hours, and recognition programs.',
      topics: ['Volunteer Forms', 'Tracking Sheets', 'Certificates', 'Evaluations'],
      downloadCount: 3102,
      lastUpdated: 'September 2025',
      featured: false
    },
    {
      id: 6,
      title: 'Program Photos & Graphics Library',
      category: 'media',
      type: 'ZIP Archive',
      size: '125 MB',
      description: 'High-resolution photos from our programs, infographics, and customizable graphics for presentations and reports.',
      topics: ['Photos', 'Infographics', 'Icons', 'Presentations'],
      downloadCount: 892,
      lastUpdated: 'February 2026',
      featured: false
    },
    {
      id: 7,
      title: 'Monitoring & Evaluation Framework',
      category: 'toolkits',
      type: 'PDF Guide',
      size: '6.3 MB',
      pages: 52,
      description: 'Practical framework for designing M&E systems, selecting indicators, collecting data, and reporting on outcomes.',
      topics: ['Indicators', 'Data Collection', 'Analysis', 'Reporting'],
      downloadCount: 1654,
      lastUpdated: 'August 2025',
      featured: false
    },
    {
      id: 8,
      title: 'Grant Proposal Template Pack',
      category: 'templates',
      type: 'Word Documents',
      size: '950 KB',
      description: 'Professional grant proposal templates with sample language, budget formats, and logic model examples.',
      topics: ['Proposal Writing', 'Budget Templates', 'Logic Models', 'Cover Letters'],
      downloadCount: 2876,
      lastUpdated: 'January 2026',
      featured: false
    },
    {
      id: 9,
      title: 'Introduction to Impact Measurement',
      category: 'educational',
      type: 'Online Course',
      duration: '4 weeks',
      description: 'Self-paced course covering theory of change, outcome measurement, data collection methods, and impact reporting.',
      topics: ['Theory of Change', 'Outcomes', 'Data Methods', 'Reporting'],
      enrollCount: 1247,
      lastUpdated: 'November 2025',
      featured: false
    },
    {
      id: 10,
      title: 'Community Needs Assessment Guide',
      category: 'toolkits',
      type: 'PDF Guide',
      size: '5.7 MB',
      pages: 44,
      description: 'Step-by-step methodology for conducting participatory community assessments and prioritizing interventions.',
      topics: ['Assessment Tools', 'Participation', 'Data Analysis', 'Prioritization'],
      downloadCount: 1432,
      lastUpdated: 'July 2025',
      featured: false
    },
    {
      id: 11,
      title: 'Social Media Toolkit for Nonprofits',
      category: 'media',
      type: 'PDF + Templates',
      size: '12 MB',
      description: 'Complete social media strategy guide with post templates, content calendars, and image sizing guides.',
      topics: ['Strategy', 'Content Planning', 'Templates', 'Best Practices'],
      downloadCount: 2156,
      lastUpdated: 'December 2025',
      featured: false
    },
    {
      id: 12,
      title: 'Annual Report Design Templates',
      category: 'templates',
      type: 'InDesign/Canva',
      size: '45 MB',
      description: 'Professional annual report templates with multiple layouts, color schemes, and customizable sections.',
      topics: ['Report Design', 'Layouts', 'Infographics', 'Typography'],
      downloadCount: 967,
      lastUpdated: 'October 2025',
      featured: false
    },
  ];

  const filteredResources = resources.filter(resource => {
    const categoryMatch = activeCategory === 'all' || resource.category === activeCategory;
    const searchMatch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredResources = resources.filter(r => r.featured);

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
              RESOURCE CENTER
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Tools & Resources
              <br />
              for Impact
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Free toolkits, guides, templates, and educational materials to strengthen your nonprofit work
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search resources by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Free Resources', icon: Archive },
              { number: '15K+', label: 'Downloads', icon: Download },
              { number: '12', label: 'Video Tutorials', icon: Video },
              { number: '100%', label: 'Free Access', icon: CheckCircle },
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

      {/* Featured Resources */}
      {activeCategory === 'all' && searchQuery === '' && (
        <section className="py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-light text-[#0F4C3A] mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Featured Resources
              </h2>
              <p className="text-neutral-600 font-light">
                Most popular and recently updated materials
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all group">
                  <div className="aspect-video bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    {resource.category === 'videos' ? (
                      <Play className="w-16 h-16 text-[#0F4C3A]/40 relative z-10" />
                    ) : (
                      <BookOpen className="w-16 h-16 text-[#0F4C3A]/40 relative z-10" />
                    )}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#0F4C3A] text-white text-xs font-light tracking-wide rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-[#0F4C3A] font-light tracking-wider uppercase">
                        {categories.find(c => c.id === resource.category)?.label}
                      </span>
                      <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                      <span className="text-xs text-neutral-500 font-light">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-light mb-3 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {resource.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light mb-4">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-neutral-100 text-xs text-neutral-600 font-light rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="text-xs text-neutral-500 font-light">
                        {resource.downloadCount || resource.viewCount || resource.enrollCount} {resource.category === 'videos' ? 'views' : resource.category === 'educational' ? 'enrolled' : 'downloads'}
                      </div>
                      <button className="text-sm text-[#0F4C3A] font-light flex items-center group/btn">
                        {resource.category === 'videos' ? 'Watch' : 'Download'}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-white border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-6">
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

      {/* Resources Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-all group">
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    {resource.category === 'videos' ? (
                      <Video className="w-12 h-12 text-[#0F4C3A]/40 relative z-10" />
                    ) : resource.category === 'media' ? (
                      <Image className="w-12 h-12 text-[#0F4C3A]/40 relative z-10" />
                    ) : (
                      <FileText className="w-12 h-12 text-[#0F4C3A]/40 relative z-10" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-[#0F4C3A] font-light tracking-wider uppercase">
                        {categories.find(c => c.id === resource.category)?.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-light mb-3 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors line-clamp-2"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {resource.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.topics.slice(0, 2).map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-neutral-100 text-xs text-neutral-600 font-light rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="text-xs text-neutral-500 font-light">
                        {resource.type} • {resource.size || resource.duration}
                      </div>
                      <button className="p-2 hover:bg-neutral-100 rounded transition-colors">
                        <Download className="w-4 h-4 text-[#0F4C3A]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h3 className="text-2xl font-light mb-4 text-neutral-600"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                No resources found
              </h3>
              <p className="text-neutral-500 font-light mb-6">
                Try adjusting your search or filters
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-sm text-[#0F4C3A] font-light flex items-center justify-center mx-auto"
              >
                Clear all filters
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Resource Request CTA */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Can't Find What You Need?
          </h2>
          <p className="text-lg text-[#E8F5E9] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            We're constantly adding new resources. Let us know what tools or guides 
            would be helpful for your work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#0F4C3A] text-sm font-light tracking-wide hover:bg-neutral-100 transition-all duration-300 rounded-lg flex items-center justify-center">
              Request a Resource
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-8 py-3 border border-white/20 text-white text-sm font-light tracking-wide hover:bg-white/10 transition-all duration-300 rounded-lg">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}