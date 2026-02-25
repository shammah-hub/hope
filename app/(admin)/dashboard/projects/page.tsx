'use client';

import { useState } from 'react';
import { 
  FolderKanban, Search, Filter, Plus, MapPin,
  TrendingUp, Users, DollarSign, MoreVertical, Eye, Edit
} from 'lucide-react';
import NewProjectModal from '@/app/components/NewProjectModal';

export default function ProjectsPage() {
  const [view, setView] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const projects = [
    { id: 1, name: 'Rural Education Initiative', location: 'Kisumu County, Kenya', status: 'active', progress: 75, budget: 250000, beneficiaries: 1200, category: 'Education', team: 8 },
    { id: 2, name: 'Clean Water Access', location: 'Northern Ghana', status: 'active', progress: 60, budget: 200000, beneficiaries: 2500, category: 'Water & Sanitation', team: 6 },
    { id: 3, name: 'Mobile Health Clinics', location: 'Mindanao, Philippines', status: 'active', progress: 85, budget: 180000, beneficiaries: 8500, category: 'Healthcare', team: 12 },
    { id: 4, name: 'Sustainable Agriculture', location: 'Amazon Basin, Peru', status: 'delayed', progress: 45, budget: 120000, beneficiaries: 450, category: 'Agriculture', team: 5 },
    { id: 5, name: 'Youth Skills Training', location: 'Lagos, Nigeria', status: 'active', progress: 90, budget: 95000, beneficiaries: 320, category: 'Education', team: 7 },
    { id: 6, name: 'Women Empowerment', location: 'Rajasthan, India', status: 'completed', progress: 100, budget: 75000, beneficiaries: 850, category: 'Economic Development', team: 4 },
  ];

  const stats = [
    { label: 'Active Projects', value: '47', icon: FolderKanban, color: 'blue' },
    { label: 'Total Beneficiaries', value: '35,420', icon: Users, color: 'emerald' },
    { label: 'Total Budget', value: '$2.1M', icon: DollarSign, color: 'violet' },
    { label: 'Completion Rate', value: '93%', icon: TrendingUp, color: 'rose' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Modal */}
      {showModal && <NewProjectModal onClose={() => setShowModal(false)} />}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light text-neutral-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Projects Management
          </h1>
          <p className="text-neutral-600 font-light">Monitor and manage all projects across 45 countries</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-all flex items-center gap-2 shadow-lg shadow-[#0F4C3A]/20"
        >
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all">
            <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
            </div>
            <h3 className="text-3xl font-light text-neutral-900 mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {stat.value}
            </h3>
            <p className="text-sm font-light text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input type="text" placeholder="Search projects..." className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <select value={filter} onChange={e => setFilter(e.target.value)} className="flex-1 lg:flex-none px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A]">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="delayed">Delayed</option>
            </select>
            <button className="flex-1 lg:flex-none px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light hover:bg-neutral-50 flex items-center gap-2 justify-center">
              <Filter className="w-4 h-4" /> More Filters
            </button>
            <div className="hidden lg:flex items-center gap-2 border border-neutral-300 rounded-lg p-1">
              <button onClick={() => setView('grid')} className={`px-3 py-1.5 rounded text-sm font-light transition-colors ${view === 'grid' ? 'bg-[#0F4C3A] text-white' : 'text-neutral-600'}`}>Grid</button>
              <button onClick={() => setView('list')} className={`px-3 py-1.5 rounded text-sm font-light transition-colors ${view === 'list' ? 'bg-[#0F4C3A] text-white' : 'text-neutral-600'}`}>List</button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all">
            <div className="h-48 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'active' ? 'bg-emerald-500 text-white' : project.status === 'completed' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white'}`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-light">{project.category}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light text-neutral-900 mb-2 line-clamp-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{project.name}</h3>
              <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                <MapPin className="w-4 h-4" /><span className="font-light">{project.location}</span>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-light text-neutral-600">Progress</span>
                  <span className="font-medium text-neutral-900">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0F4C3A] rounded-full" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-neutral-100">
                <div>
                  <p className="text-xs text-neutral-500 mb-1 font-light">Budget</p>
                  <p className="text-sm font-semibold text-neutral-900">${project.budget / 1000}K</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1 font-light">Beneficiaries</p>
                  <p className="text-sm font-semibold text-neutral-900">{project.beneficiaries.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span className="text-sm font-light text-neutral-600">{project.team} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"><Eye className="w-4 h-4 text-neutral-600" /></button>
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"><Edit className="w-4 h-4 text-neutral-600" /></button>
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"><MoreVertical className="w-4 h-4 text-neutral-600" /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}