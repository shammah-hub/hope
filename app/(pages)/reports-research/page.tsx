'use client';

import { useState } from 'react';
import { 
  Heart, Download, FileText, BarChart, TrendingUp, Calendar,
  Eye, ExternalLink, Filter, Search, Award, Globe,
  Users, DollarSign, BookOpen, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function ResearchReportsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Reports' },
    { id: 'annual', label: 'Annual Reports' },
    { id: 'financial', label: 'Financial Statements' },
    { id: 'impact', label: 'Impact Evaluations' },
    { id: 'research', label: 'Research Studies' },
    { id: 'policy', label: 'Policy Briefs' },
  ];

  const reports = [
    {
      id: 1,
      title: '2025 Annual Impact Report',
      category: 'annual',
      year: 2025,
      date: 'December 2025',
      pages: 48,
      size: '12 MB',
      description: 'Comprehensive overview of our global programs, financial performance, and community impact across 45 countries.',
      highlights: ['50,000 lives impacted', '40% program expansion', '15 new partnerships', '98% donor satisfaction'],
      type: 'PDF',
      featured: true
    },
    {
      id: 2,
      title: 'Audited Financial Statements 2025',
      category: 'financial',
      year: 2025,
      date: 'January 2026',
      pages: 32,
      size: '4 MB',
      description: 'Third-party audited financial statements showing revenue, expenses, and asset allocation with full transparency.',
      highlights: ['$2.5M revenue', '92% to programs', 'Clean audit opinion', 'Strong reserves'],
      type: 'PDF',
      featured: false
    },
    {
      id: 3,
      title: 'Education Program Impact Evaluation',
      category: 'impact',
      year: 2025,
      date: 'November 2025',
      pages: 64,
      size: '8 MB',
      description: 'Independent evaluation of education programs in East Africa measuring literacy improvements and school enrollment rates.',
      highlights: ['12,000 students', '35% literacy increase', '95% retention rate', '50 schools'],
      type: 'PDF',
      featured: true
    },
    {
      id: 4,
      title: 'Sustainable Agriculture Research Study',
      category: 'research',
      year: 2024,
      date: 'September 2024',
      pages: 92,
      size: '15 MB',
      description: 'Longitudinal study examining the economic and environmental impact of sustainable farming techniques in Peru.',
      highlights: ['450 farmers', '30% yield increase', '40% income growth', '3-year study'],
      type: 'PDF',
      featured: false
    },
    {
      id: 5,
      title: 'Healthcare Access Policy Brief',
      category: 'policy',
      year: 2024,
      date: 'August 2024',
      pages: 16,
      size: '2 MB',
      description: 'Policy recommendations for expanding rural healthcare access based on lessons from mobile clinic programs.',
      highlights: ['25,000 patients', '10 clinics', '95% vaccination', 'Policy framework'],
      type: 'PDF',
      featured: false
    },
    {
      id: 6,
      title: '2024 Annual Impact Report',
      category: 'annual',
      year: 2024,
      date: 'December 2024',
      pages: 44,
      size: '11 MB',
      description: 'Complete review of programs, finances, and achievements from 2024 with detailed impact metrics.',
      highlights: ['42,000 beneficiaries', '$2.1M raised', '12 countries', '4-star rating'],
      type: 'PDF',
      featured: false
    },
  ];

  const filteredReports = reports.filter(report => {
    const categoryMatch = activeCategory === 'all' || report.category === activeCategory;
    const searchMatch = searchQuery === '' || 
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredReports = reports.filter(r => r.featured);

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
              RESEARCH & REPORTS
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Transparency
              <br />
              Through Data
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Access our annual reports, financial statements, impact evaluations, and research studies
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search reports and publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: '4-Star Rating', value: 'Charity Navigator' },
              { icon: Award, label: 'Platinum Seal', value: 'GuideStar' },
              { icon: BarChart, label: '92¢', value: 'To Programs' },
              { icon: CheckCircle, label: 'Clean Audit', value: 'Every Year' },
            ].map((metric, idx) => (
              <div key={idx} className="text-center p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <metric.icon className="w-8 h-8 text-[#0F4C3A] mx-auto mb-4" />
                <div className="text-2xl font-light text-[#0F4C3A] mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {metric.label}
                </div>
                <div className="text-xs text-neutral-500 tracking-wider uppercase font-light">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      {activeCategory === 'all' && searchQuery === '' && (
        <section className="py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-light text-[#0F4C3A] mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Featured Reports
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredReports.map((report) => (
                <div key={report.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all group">
                  <div className="aspect-video bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    <FileText className="w-24 h-24 text-[#0F4C3A]/40 relative z-10" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#0F4C3A] text-white text-xs font-light tracking-wide rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs text-[#0F4C3A] font-light tracking-wider uppercase">
                        {categories.find(c => c.id === report.category)?.label}
                      </span>
                      <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                      <span className="text-xs text-neutral-500 font-light">{report.date}</span>
                    </div>
                    <h3 className="text-2xl font-light mb-4 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {report.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                      {report.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {report.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs text-neutral-600 font-light">
                          <CheckCircle className="w-3 h-3 text-[#0F4C3A]/40 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                      <div className="flex items-center gap-4 text-xs text-neutral-500 font-light">
                        <span>{report.pages} pages</span>
                        <span>{report.size}</span>
                      </div>
                      <button className="px-6 py-2 bg-[#0F4C3A] text-white text-sm font-light rounded-lg hover:bg-[#1A5744] transition-all flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
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
            <span className="text-sm text-neutral-600 font-light tracking-wide">FILTER BY TYPE</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                  activeCategory === category.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          {filteredReports.length > 0 ? (
            <div className="space-y-6">
              {filteredReports.map((report) => (
                <div key={report.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-all group">
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 p-8">
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] rounded-lg flex items-center justify-center">
                      <FileText className="w-16 h-16 text-[#0F4C3A]/40" />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-[#0F4C3A]/10 text-[#0F4C3A] text-xs font-light tracking-wide rounded-full">
                          {categories.find(c => c.id === report.category)?.label}
                        </span>
                        <span className="text-xs text-neutral-500 font-light">{report.date}</span>
                      </div>
                      <h3 className="text-2xl font-light mb-3 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {report.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                        {report.description}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {report.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-xs text-neutral-600 font-light">
                            <div className="w-1.5 h-1.5 bg-[#0F4C3A] rounded-full mr-2"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-xs text-neutral-500 font-light">
                          <span className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            {report.pages} pages
                          </span>
                          <span>{report.size}</span>
                          <span>{report.type}</span>
                        </div>
                        <div className="flex gap-3">
                          <button className="px-6 py-2 border border-neutral-300 text-neutral-600 hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all text-sm font-light rounded-lg flex items-center">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </button>
                          <button className="px-6 py-2 bg-[#0F4C3A] text-white text-sm font-light rounded-lg hover:bg-[#1A5744] transition-all flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
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
                No reports found
              </h3>
              <p className="text-neutral-500 font-light">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Third-Party Ratings */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Independent Ratings & Recognition
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our commitment to transparency and excellence has been recognized by leading charity evaluators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Charity Navigator',
                rating: '4-Star Rating',
                description: 'Highest rating for financial health, accountability, and transparency',
                link: '#'
              },
              {
                name: 'GuideStar',
                rating: 'Platinum Seal',
                description: 'Recognized for exceptional commitment to transparency and impact reporting',
                link: '#'
              },
              {
                name: 'Better Business Bureau',
                rating: 'Accredited Charity',
                description: 'Meets all 20 Standards for Charity Accountability',
                link: '#'
              },
            ].map((rating, idx) => (
              <div key={idx} className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 text-center">
                <Award className="w-12 h-12 text-[#0F4C3A] mx-auto mb-6" />
                <h3 className="text-xl font-light mb-2 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {rating.name}
                </h3>
                <div className="text-sm text-neutral-600 font-medium mb-4">
                  {rating.rating}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                  {rating.description}
                </p>
                <a href={rating.link} className="text-sm text-[#0F4C3A] font-light flex items-center justify-center">
                  View Profile
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
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