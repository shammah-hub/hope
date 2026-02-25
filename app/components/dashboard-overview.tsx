'use client';

import { 
  DollarSign, Users, FolderKanban, TrendingUp, 
  ArrowUp, ArrowDown, Heart, Globe, Calendar,
} from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    {
      name: 'Total Donations',
      value: '$248,532',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      name: 'Active Projects',
      value: '47',
      change: '+3',
      trend: 'up',
      icon: FolderKanban,
      color: 'blue'
    },
    {
      name: 'Volunteers',
      value: '1,248',
      change: '+24',
      trend: 'up',
      icon: Users,
      color: 'violet'
    },
    {
      name: 'Beneficiaries',
      value: '35,420',
      change: '+8.2%',
      trend: 'up',
      icon: Heart,
      color: 'rose'
    },
  ];

  const recentDonations = [
    { name: 'Sarah Johnson', amount: '$5,000', type: 'Monthly', time: '2 hours ago', status: 'completed' },
    { name: 'Microsoft Corp', amount: '$25,000', type: 'One-time', time: '5 hours ago', status: 'completed' },
    { name: 'John Doe', amount: '$150', type: 'Monthly', time: '1 day ago', status: 'completed' },
    { name: 'Jane Smith', amount: '$500', type: 'One-time', time: '1 day ago', status: 'pending' },
    { name: 'David Chen', amount: '$100', type: 'Monthly', time: '2 days ago', status: 'completed' },
  ];

  const projectsStatus = [
    { name: 'Rural Education Initiative', progress: 75, status: 'On Track', location: 'Kenya' },
    { name: 'Clean Water Access', progress: 60, status: 'On Track', location: 'Ghana' },
    { name: 'Mobile Health Clinics', progress: 85, status: 'Ahead', location: 'Philippines' },
    { name: 'Agricultural Training', progress: 45, status: 'Delayed', location: 'Peru' },
  ];

  const activities = [
    { action: 'New volunteer application', user: 'Maria Garcia', time: '10 minutes ago', type: 'volunteer' },
    { action: 'Project update posted', user: 'James Okonkwo', time: '1 hour ago', type: 'project' },
    { action: 'Monthly donation received', user: 'Sarah Johnson', time: '2 hours ago', type: 'donation' },
    { action: 'New blog post published', user: 'Lisa Washington', time: '4 hours ago', type: 'content' },
    { action: 'Partnership agreement signed', user: 'Thomas Anderson', time: '1 day ago', type: 'partner' },
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-light text-neutral-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Dashboard Overview
        </h1>
        <p className="text-neutral-600 font-light">Welcome back! Here's what's happening with your organization.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className={`flex items-center text-sm font-light ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-light text-neutral-900 mb-1">{stat.value}</p>
            <p className="text-sm font-light text-neutral-600">{stat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Recent Donations */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-neutral-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-light text-neutral-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Recent Donations
            </h2>
            <button className="text-sm font-light text-[#0F4C3A] hover:text-[#1A5744]">View All</button>
          </div>
          <div className="space-y-4">
            {recentDonations.map((donation, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-[#0F4C3A]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{donation.name}</p>
                    <p className="text-xs font-light text-neutral-500">{donation.type} • {donation.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-neutral-900">{donation.amount}</p>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-light ${
                    donation.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {donation.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6">
          <h2 className="text-xl font-light text-neutral-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Quick Stats
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-light text-neutral-600">Monthly Goal</span>
                <span className="text-sm font-medium text-neutral-900">$250K / $300K</span>
              </div>
              <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#0F4C3A] rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-light text-neutral-600">Countries Active</span>
              </div>
              <p className="text-2xl font-light text-neutral-900">45</p>
            </div>
            <div className="pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-light text-neutral-600">Active Volunteers</span>
              </div>
              <p className="text-2xl font-light text-neutral-900">1,248</p>
            </div>
            <div className="pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-light text-neutral-600">Lives Impacted</span>
              </div>
              <p className="text-2xl font-light text-neutral-900">35,420</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Status */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6">
          <h2 className="text-xl font-light text-neutral-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Active Projects
          </h2>
          <div className="space-y-6">
            {projectsStatus.map((project, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{project.name}</p>
                    <p className="text-xs font-light text-neutral-500">{project.location}</p>
                  </div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-light ${
                    project.status === 'On Track' ? 'bg-emerald-100 text-emerald-700' :
                    project.status === 'Ahead' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0F4C3A] rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
                </div>
                <p className="text-xs font-light text-neutral-500 mt-1">{project.progress}% complete</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6">
          <h2 className="text-xl font-light text-neutral-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Recent Activity
          </h2>
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${
                  activity.type === 'donation' ? 'bg-emerald-500' :
                  activity.type === 'volunteer' ? 'bg-blue-500' :
                  activity.type === 'project' ? 'bg-violet-500' :
                  activity.type === 'partner' ? 'bg-rose-500' :
                  'bg-neutral-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-900">{activity.action}</p>
                  <p className="text-xs font-light text-neutral-500">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}