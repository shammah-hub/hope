'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, Search, Calendar, User, Clock,
  BookOpen, Globe, Users, TrendingUp, Tag, Filter,
  ChevronRight, Share2, Bookmark
} from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts', count: 24 },
    { id: 'impact-stories', label: 'Impact Stories', count: 8 },
    { id: 'field-updates', label: 'Field Updates', count: 6 },
    { id: 'insights', label: 'Insights & Research', count: 5 },
    { id: 'community', label: 'Community Voices', count: 3 },
    { id: 'news', label: 'News & Events', count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How Education Transformed a Village in Rural Kenya',
      excerpt: "Meet the students, teachers, and families who partnered with us to build a sustainable education program that's changing lives for generations." ,
      category: 'impact-stories',
      author: 'Sarah Mitchell',
      date: 'February 1, 2026',
      readTime: '8 min read',
      image: 'education',
      featured: true,
      tags: ['Education', 'Kenya', 'Success Story']
    },
    {
      id: 2,
      title: 'Mobile Health Clinics: Reaching Remote Communities',
      excerpt: 'An inside look at our mobile health initiative bringing medical care to islands in the Philippines with limited infrastructure.',
      category: 'field-updates',
      author: 'Dr. Maria Rodriguez',
      date: 'January 28, 2026',
      readTime: '6 min read',
      image: 'health',
      featured: true,
      tags: ['Healthcare', 'Philippines', 'Innovation']
    },
    {
      id: 3,
      title: 'The Economics of Sustainable Agriculture',
      excerpt: 'New research shows how our farming training programs increase yields by 30% while protecting the environment.',
      category: 'insights',
      author: 'James Okonkwo',
      date: 'January 25, 2026',
      readTime: '10 min read',
      image: 'agriculture',
      featured: false,
      tags: ['Agriculture', 'Research', 'Sustainability']
    },
    {
      id: 4,
      title: 'Clean Water Changes Everything: A Mother\'s Story',
      excerpt: 'Grace shares how access to clean water in her village reduced illness by 80% and gave children time to attend school.',
      category: 'community',
      author: 'Grace Achieng',
      date: 'January 20, 2026',
      readTime: '5 min read',
      image: 'water',
      featured: false,
      tags: ['Water', 'Community', 'Testimonial']
    },
    {
      id: 5,
      title: 'Annual Impact Report 2025: Year in Review',
      excerpt: 'Discover the milestones, challenges, and achievements from a year of sustainable development across 45 countries.',
      category: 'news',
      author: 'Hope Foundation Team',
      date: 'January 15, 2026',
      readTime: '12 min read',
      image: 'report',
      featured: false,
      tags: ['Annual Report', 'Impact', 'Transparency']
    },
    {
      id: 6,
      title: 'Digital Learning in Rural India: Bridging the Gap',
      excerpt: 'How technology is opening doors for students in villages where traditional educational resources are scarce.',
      category: 'impact-stories',
      author: 'Sarah Mitchell',
      date: 'January 10, 2026',
      readTime: '7 min read',
      image: 'education',
      featured: false,
      tags: ['Education', 'Technology', 'India']
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = activeCategory === 'all' || post.category === activeCategory;
    const searchMatch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
              BLOG & STORIES
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Stories of Impact
              <br />
              & Inspiration
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Field updates, impact stories, research insights, and community voices from our global work
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'all' && searchQuery === '' && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-[#0F4C3A]" />
              <h2 className="text-2xl font-light text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Featured Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    <BookOpen className="w-16 h-16 text-[#0F4C3A]/40 relative z-10" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#0F4C3A] text-white text-xs font-light tracking-wide rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs text-[#0F4C3A] font-light tracking-wider uppercase">
                        {categories.find(c => c.id === post.category)?.label}
                      </span>
                      <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                      <span className="text-xs text-neutral-500 font-light">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-light mb-4 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="text-xs text-neutral-400 font-light">{post.date}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
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
                className={`px-6 py-3 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                  activeCategory === category.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                    <BookOpen className="w-12 h-12 text-[#0F4C3A]/40 relative z-10" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-[#0F4C3A] font-light tracking-wider uppercase">
                        {categories.find(c => c.id === post.category)?.label}
                      </span>
                      <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                      <span className="text-xs text-neutral-500 font-light flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-light mb-3 text-[#0F4C3A] group-hover:text-[#1A5744] transition-colors line-clamp-2"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-neutral-100 text-xs text-neutral-600 font-light rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-neutral-100 rounded transition-colors">
                          <Bookmark className="w-4 h-4 text-neutral-400" />
                        </button>
                        <button className="p-1.5 hover:bg-neutral-100 rounded transition-colors">
                          <Share2 className="w-4 h-4 text-neutral-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h3 className="text-2xl font-light mb-4 text-neutral-600"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                No articles found
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

          {filteredPosts.length > 0 && (
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border border-neutral-300 text-[#0F4C3A] text-sm font-light tracking-wide hover:border-[#0F4C3A] transition-all duration-500 rounded-lg">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Stay Updated
          </h2>
          <p className="text-lg text-[#E8F5E9] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Subscribe to receive our latest stories, field updates, and insights 
            delivered directly to your inbox every month.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-white/50 text-sm font-light focus:outline-none focus:border-white/40"
              />
              <button className="px-8 py-4 bg-white text-[#0F4C3A] rounded-r-lg hover:bg-neutral-100 transition-all font-light">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#A8D5BA] mt-4 font-light">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}