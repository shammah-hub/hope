'use client';

import { useState } from 'react';
import { Mail, Send, Users, TrendingUp, Plus, Search, Eye } from 'lucide-react';
import NewCampaignModal from '@/app/components/NewCampaignModal';

export default function CommunicationsPage() {
  const [showModal, setShowModal] = useState(false);

  const campaigns = [
    { id: 1, name: 'Monthly Newsletter - February', recipients: 12450, sent: '2026-02-01', opens: 67, clicks: 23, status: 'sent' },
    { id: 2, name: 'Year-End Impact Report', recipients: 15200, sent: '2026-01-15', opens: 82, clicks: 45, status: 'sent' },
    { id: 3, name: 'Volunteer Recruitment Drive', recipients: 8500, sent: null, opens: 0, clicks: 0, status: 'draft' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {showModal && <NewCampaignModal onClose={() => setShowModal(false)} />}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-1 sm:mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Communications
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light">Manage email campaigns and newsletters</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="self-start sm:self-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] flex items-center gap-2 shadow-lg"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" /> New Campaign
        </button>
      </div>

      {/* Stats — 2 cols on mobile, 4 on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {[
          { label: 'Total Subscribers', value: '15,240', icon: Users },
          { label: 'Campaigns Sent', value: '128', icon: Send },
          { label: 'Avg Open Rate', value: '72%', icon: Eye },
          { label: 'Avg Click Rate', value: '34%', icon: TrendingUp },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-6">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-3 sm:mb-4">
              <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {stat.value}
            </h3>
            <p className="text-xs sm:text-sm font-light text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Campaigns table / cards */}
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        {/* Search */}
        <div className="p-4 sm:p-6 border-b border-neutral-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]"
            />
          </div>
        </div>

        {/* Desktop table — hidden on mobile */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase">Campaign</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase">Recipients</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase">Sent Date</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase">Open Rate</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase">Click Rate</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase">Status</th>
                <th className="text-right py-4 px-6 text-xs font-medium text-neutral-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-4 px-6 font-medium text-neutral-900">{campaign.name}</td>
                  <td className="py-4 px-6 text-neutral-600">{campaign.recipients.toLocaleString()}</td>
                  <td className="py-4 px-6 text-neutral-600">{campaign.sent || '—'}</td>
                  <td className="py-4 px-6 text-neutral-600">{campaign.opens}%</td>
                  <td className="py-4 px-6 text-neutral-600">{campaign.clicks}%</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${campaign.status === 'sent' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-3 py-1 text-sm text-[#0F4C3A] hover:bg-[#0F4C3A]/5 rounded">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards — shown only on mobile */}
        <div className="sm:hidden divide-y divide-neutral-100">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-4 space-y-3">
              {/* Name + status row */}
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-neutral-900 leading-snug">{campaign.name}</p>
                <span className={`flex-shrink-0 px-2 py-0.5 rounded text-xs font-medium ${campaign.status === 'sent' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {campaign.status}
                </span>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-neutral-400 uppercase tracking-wide text-[10px]">Recipients</span>
                  <p className="text-neutral-700 font-medium mt-0.5">{campaign.recipients.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wide text-[10px]">Sent Date</span>
                  <p className="text-neutral-700 font-medium mt-0.5">{campaign.sent || '—'}</p>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wide text-[10px]">Open Rate</span>
                  <p className="text-neutral-700 font-medium mt-0.5">{campaign.opens}%</p>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wide text-[10px]">Click Rate</span>
                  <p className="text-neutral-700 font-medium mt-0.5">{campaign.clicks}%</p>
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-end">
                <button className="px-3 py-1.5 text-sm text-[#0F4C3A] hover:bg-[#0F4C3A]/5 rounded border border-[#0F4C3A]/20">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}