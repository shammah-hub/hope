'use client';

import { useState } from 'react';
import { 
  Users, Search, Filter, UserPlus, Mail, Phone,
  MapPin, Clock, MoreVertical, Award, TrendingUp, MessageSquare
} from 'lucide-react';
import AddVolunteerModal from '@/app/components/AddVolunteerModal';

export default function VolunteersPage() {
  const [showModal, setShowModal] = useState(false);

  const stats = [
    { label: 'Total Volunteers', value: '1,248', change: '+24 this month', icon: Users },
    { label: 'Active This Month', value: '856', change: '+12%', icon: TrendingUp },
    { label: 'Total Hours', value: '12,450', change: '+8.5%', icon: Clock },
    { label: 'Pending Applications', value: '34', change: '18 new today', icon: Award },
  ];

  const volunteers = [
    { id: 1, name: 'Maria Garcia', email: 'maria.g@email.com', phone: '+1 (555) 123-4567', location: 'New York, USA', skills: ['Teaching', 'Community Outreach'], status: 'active', hoursLogged: 145, joinedDate: '2023-06-15', projects: 3 },
    { id: 2, name: 'James Wilson', email: 'j.wilson@email.com', phone: '+1 (555) 234-5678', location: 'London, UK', skills: ['Healthcare', 'Medical Training'], status: 'active', hoursLogged: 230, joinedDate: '2022-03-20', projects: 5 },
    { id: 3, name: 'Aisha Mohammed', email: 'aisha.m@email.com', phone: '+234 801 234 5678', location: 'Lagos, Nigeria', skills: ['Agriculture', 'Project Management'], status: 'active', hoursLogged: 189, joinedDate: '2023-01-10', projects: 4 },
    { id: 4, name: 'Carlos Rodriguez', email: 'carlos.r@email.com', phone: '+51 987 654 321', location: 'Lima, Peru', skills: ['Construction', 'Engineering'], status: 'inactive', hoursLogged: 76, joinedDate: '2023-09-05', projects: 2 },
    { id: 5, name: 'Priya Sharma', email: 'priya.s@email.com', phone: '+91 98765 43210', location: 'Mumbai, India', skills: ['Education', 'Technology'], status: 'active', hoursLogged: 312, joinedDate: '2021-11-12', projects: 7 },
    { id: 6, name: 'David Kim', email: 'david.k@email.com', phone: '+82 10-1234-5678', location: 'Seoul, South Korea', skills: ['Marketing', 'Communications'], status: 'pending', hoursLogged: 0, joinedDate: '2026-02-10', projects: 0 },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {showModal && <AddVolunteerModal onClose={() => setShowModal(false)} />}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light text-neutral-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Volunteers Management
          </h1>
          <p className="text-neutral-600 font-light">Manage volunteer applications, assignments, and hours</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-all flex items-center gap-2 shadow-lg"
        >
          <UserPlus className="w-5 h-5" />
          Add Volunteer
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-neutral-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {stat.value}
                </h3>
                <p className="text-xs font-light text-neutral-500">{stat.change}</p>
              </div>
            </div>
            <p className="text-sm font-light text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-neutral-200 bg-neutral-50/50">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input type="text" placeholder="Search volunteers..."
                className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
            </div>
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <select className="flex-1 lg:flex-none px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
              <button className="flex-1 lg:flex-none px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light hover:bg-neutral-50 flex items-center gap-2 justify-center">
                <Filter className="w-4 h-4" /> Filters
              </button>
            </div>
          </div>
        </div>

        {/* Volunteers Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {volunteers.map((volunteer) => (
              <div key={volunteer.id} className="border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] flex items-center justify-center text-white text-lg font-medium">
                      {volunteer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900">{volunteer.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        volunteer.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                        volunteer.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-neutral-100 text-neutral-700'
                      }`}>
                        {volunteer.status}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-neutral-600" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Mail className="w-4 h-4" /><span className="font-light">{volunteer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Phone className="w-4 h-4" /><span className="font-light">{volunteer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4" /><span className="font-light">{volunteer.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-neutral-500 mb-2 font-light">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-light">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1 font-light">Hours</p>
                    <p className="text-sm font-semibold text-neutral-900">{volunteer.hoursLogged}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1 font-light">Projects</p>
                    <p className="text-sm font-semibold text-neutral-900">{volunteer.projects}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1 font-light">Joined</p>
                    <p className="text-sm font-semibold text-neutral-900">{new Date(volunteer.joinedDate).getFullYear()}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg text-sm font-light hover:bg-neutral-50 flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message
                  </button>
                  <button className="flex-1 px-4 py-2 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}