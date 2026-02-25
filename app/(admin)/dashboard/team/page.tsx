'use client';

import { useState } from 'react';
import { Users, Mail, Phone, MapPin, UserPlus, Crown, Shield } from 'lucide-react';
import InviteMemberModal from '@/app/components/InviteMemberModal';

export default function TeamPage() {
  const [showModal, setShowModal] = useState(false);

  const team = [
    { id: 1, name: 'Sarah Mitchell', role: 'Executive Director', email: 's.mitchell@hopefoundation.org', phone: '+1 555-0101', location: 'New York, USA', permissions: 'Admin', avatar: 'SM' },
    { id: 2, name: 'James Okonkwo', role: 'Director of Programs', email: 'j.okonkwo@hopefoundation.org', phone: '+254 712 345 678', location: 'Nairobi, Kenya', permissions: 'Admin', avatar: 'JO' },
    { id: 3, name: 'Maria Rodriguez', role: 'Healthcare Director', email: 'm.rodriguez@hopefoundation.org', phone: '+63 917 123 4567', location: 'Manila, Philippines', permissions: 'Manager', avatar: 'MR' },
    { id: 4, name: 'David Chen', role: 'Chief Financial Officer', email: 'd.chen@hopefoundation.org', phone: '+1 555-0102', location: 'New York, USA', permissions: 'Admin', avatar: 'DC' },
    { id: 5, name: 'Lisa Washington', role: 'Communications Director', email: 'l.washington@hopefoundation.org', phone: '+1 555-0103', location: 'New York, USA', permissions: 'Manager', avatar: 'LW' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {showModal && <InviteMemberModal onClose={() => setShowModal(false)} />}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light text-neutral-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Team Management</h1>
          <p className="text-neutral-600 font-light">Manage team members and permissions</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] flex items-center gap-2 shadow-lg"
        >
          <UserPlus className="w-5 h-5" /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Team Members', value: '24', icon: Users },
          { label: 'Administrators', value: '4', icon: Crown },
          { label: 'Managers', value: '12', icon: Shield },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
              <stat.icon className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-3xl font-light text-neutral-900 mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{stat.value}</h3>
            <p className="text-sm font-light text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        <div className="p-6">
          <div className="grid gap-6">
            {team.map((member) => (
              <div key={member.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] flex items-center justify-center text-white text-xl font-medium">
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-neutral-900 mb-1">{member.name}</h3>
                      <p className="text-sm text-neutral-600 mb-3">{member.role}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          <Mail className="w-4 h-4" />{member.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          <Phone className="w-4 h-4" />{member.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          <MapPin className="w-4 h-4" />{member.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      member.permissions === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {member.permissions}
                    </span>
                    <button className="text-sm text-[#0F4C3A] hover:underline">Edit Permissions</button>
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