'use client';

import { useState } from 'react';
import { Handshake, Search, Plus, Building2, DollarSign, Calendar, MoreVertical } from 'lucide-react';
import NewPartnerModal from '@/app/components/NewPartnerModal';

export default function PartnersPage() {
  const [showModal, setShowModal] = useState(false);

  const partners = [
    { id: 1, name: 'Microsoft Corporation', type: 'Corporate', status: 'active', contribution: 125000, since: '2020-03-15', contact: 'giving@microsoft.com', projects: 5, logo: 'MS' },
    { id: 2, name: 'Gates Foundation', type: 'Foundation', status: 'active', contribution: 500000, since: '2018-06-20', contact: 'partnerships@gatesfoundation.org', projects: 12, logo: 'GF' },
    { id: 3, name: 'Google.org', type: 'Corporate', status: 'active', contribution: 250000, since: '2019-01-10', contact: 'impact@google.org', projects: 8, logo: 'GO' },
    { id: 4, name: 'Local Community Trust', type: 'Community', status: 'active', contribution: 45000, since: '2021-09-05', contact: 'info@lctrust.org', projects: 3, logo: 'LCT' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {showModal && <NewPartnerModal onClose={() => setShowModal(false)} />}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light text-neutral-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Partners & Sponsors</h1>
          <p className="text-neutral-600 font-light">Manage partnerships and sponsorships</p>
        </div>
        <button onClick={() => setShowModal(true)} className="px-6 py-3 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-all flex items-center gap-2 shadow-lg">
          <Plus className="w-5 h-5" /> New Partner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Partners', value: '47', icon: Handshake },
          { label: 'Active Partnerships', value: '38', icon: Building2 },
          { label: 'Total Contributions', value: '$3.2M', icon: DollarSign },
          { label: 'Avg. Partnership', value: '3.2 years', icon: Calendar },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <stat.icon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-3xl font-light text-neutral-900 mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{stat.value}</h3>
            <p className="text-sm font-light text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        <div className="p-6 border-b border-neutral-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input type="text" placeholder="Search partners..." className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-6">
            {partners.map((partner) => (
              <div key={partner.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] flex items-center justify-center text-white text-xl font-bold">{partner.logo}</div>
                    <div>
                      <h3 className="text-xl font-light text-neutral-900 mb-1">{partner.name}</h3>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">{partner.type}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-neutral-100 rounded-lg"><MoreVertical className="w-4 h-4" /></button>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Total Contribution</p>
                    <p className="text-lg font-semibold text-neutral-900">${partner.contribution / 1000}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Projects</p>
                    <p className="text-lg font-semibold text-neutral-900">{partner.projects}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Partner Since</p>
                    <p className="text-lg font-semibold text-neutral-900">{new Date(partner.since).getFullYear()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Contact</p>
                    <p className="text-sm text-neutral-900 truncate">{partner.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}