'use client';

import { useState } from 'react';
import { FileText, Plus, Search, Image, Video, FileEdit, Eye, Trash2, TrendingUp } from 'lucide-react';
import NewContentModal from '@/app/components/NewContentModal';

export default function ContentPage() {
  const [showModal, setShowModal] = useState(false);

  const content = [
    { id: 1, title: 'How Education Transformed Rural Kenya', type: 'Blog Post', status: 'published', author: 'Lisa Washington', date: '2026-02-10', views: 1243 },
    { id: 2, title: 'Annual Impact Report 2025', type: 'Report', status: 'published', author: 'Sarah Mitchell', date: '2026-01-15', views: 3521 },
    { id: 3, title: 'Mobile Health Clinics Video', type: 'Video', status: 'draft', author: 'Marketing Team', date: '2026-02-14', views: 0 },
    { id: 4, title: 'Clean Water Success Stories', type: 'Case Study', status: 'published', author: 'James Okonkwo', date: '2026-01-28', views: 892 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {showModal && <NewContentModal onClose={() => setShowModal(false)} />}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-1 sm:mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Content Management
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light">Manage blog posts, reports, and media</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="self-start sm:self-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-all flex items-center gap-2 shadow-lg"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" /> New Content
        </button>
      </div>

      {/* Stats — 2 cols mobile, 4 cols md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {[
          { label: 'Total Posts', value: '128', icon: FileText, color: 'blue' },
          { label: 'Published', value: '94', icon: Eye, color: 'emerald' },
          { label: 'Drafts', value: '34', icon: FileEdit, color: 'yellow' },
          { label: 'Total Views', value: '45.2K', icon: TrendingUp, color: 'violet' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-6">
            <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center mb-3 sm:mb-4`}>
              <stat.icon className={`w-4 h-4 sm:w-6 sm:h-6 text-${stat.color}-600`} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {stat.value}
            </h3>
            <p className="text-xs sm:text-sm font-light text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content list */}
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">

        {/* Search + filter */}
        <div className="p-4 sm:p-6 border-b border-neutral-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]"
              />
            </div>
            <select className="px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg text-sm font-light bg-white">
              <option>All Types</option>
              <option>Blog Posts</option>
              <option>Reports</option>
              <option>Videos</option>
            </select>
          </div>
        </div>

        {/* Content cards */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {content.map((item) => (
            <div key={item.id} className="border border-neutral-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 sm:gap-4">

                {/* Thumbnail — smaller on mobile */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] flex items-center justify-center flex-shrink-0">
                  {item.type === 'Video'
                    ? <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    : item.type === 'Report'
                    ? <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    : <Image className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                </div>

                {/* Content info + actions */}
                <div className="flex-1 min-w-0">
                  {/* Title row with action buttons */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-lg font-medium text-neutral-900 leading-snug">{item.title}</h3>
                    {/* Actions — always visible, compact on mobile */}
                    <div className="flex gap-1 flex-shrink-0">
                      <button className="p-1.5 sm:p-2 hover:bg-neutral-100 rounded-lg" aria-label="View">
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 hover:bg-neutral-100 rounded-lg" aria-label="Edit">
                        <FileEdit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 hover:bg-red-50 rounded-lg" aria-label="Delete">
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
                      </button>
                    </div>
                  </div>

                  {/* Meta — wrap gracefully on mobile */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-neutral-600">
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium ${item.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {item.status}
                    </span>
                    <span className="text-neutral-500">{item.type}</span>
                    <span className="text-neutral-300 hidden sm:inline">·</span>
                    <span className="text-neutral-500 truncate max-w-[120px] sm:max-w-none">{item.author}</span>
                    <span className="text-neutral-300 hidden sm:inline">·</span>
                    <span className="text-neutral-500">{item.date}</span>
                  </div>

                  {/* Views */}
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs sm:text-sm text-neutral-500">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{item.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}