'use client';

import { useState } from 'react';
import { 
  DollarSign, Search, Filter, Download, TrendingUp, 
  Calendar, User, CreditCard, CheckCircle, Clock,
  ArrowUpRight, ArrowDownRight, MoreVertical
} from 'lucide-react';

export default function DonationsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Revenue', value: '$248,532', change: '+12.5%', trend: 'up' },
    { label: 'Monthly Recurring', value: '$42,850', change: '+8.3%', trend: 'up' },
    { label: 'One-Time Gifts', value: '$205,682', change: '+15.2%', trend: 'up' },
    { label: 'Avg. Donation', value: '$127', change: '-2.1%', trend: 'down' },
  ];

  const recentDonations = [
    { 
      id: 1, 
      donor: 'Sarah Johnson', 
      email: 'sarah.j@email.com',
      amount: 5000, 
      type: 'Monthly', 
      date: '2026-02-15', 
      time: '2:45 PM',
      status: 'completed',
      method: 'Credit Card'
    },
    { 
      id: 2, 
      donor: 'Microsoft Corporation', 
      email: 'giving@microsoft.com',
      amount: 25000, 
      type: 'One-time', 
      date: '2026-02-15', 
      time: '11:20 AM',
      status: 'completed',
      method: 'Bank Transfer'
    },
    { 
      id: 3, 
      donor: 'John Doe', 
      email: 'john.doe@email.com',
      amount: 150, 
      type: 'Monthly', 
      date: '2026-02-14', 
      time: '4:15 PM',
      status: 'completed',
      method: 'PayPal'
    },
    { 
      id: 4, 
      donor: 'Jane Smith', 
      email: 'jane.smith@email.com',
      amount: 500, 
      type: 'One-time', 
      date: '2026-02-14', 
      time: '1:30 PM',
      status: 'pending',
      method: 'Credit Card'
    },
    { 
      id: 5, 
      donor: 'David Chen', 
      email: 'david.c@email.com',
      amount: 100, 
      type: 'Monthly', 
      date: '2026-02-13', 
      time: '9:00 AM',
      status: 'completed',
      method: 'Credit Card'
    },
    { 
      id: 6, 
      donor: 'Tech For Good Inc', 
      email: 'donations@techforgood.org',
      amount: 10000, 
      type: 'One-time', 
      date: '2026-02-13', 
      time: '3:45 PM',
      status: 'completed',
      method: 'Check'
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-light text-neutral-900 mb-2" 
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Donations Management
        </h1>
        <p className="text-neutral-600 font-light">
          Track and manage all donations in one place
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-light text-neutral-600">{stat.label}</span>
              {stat.trend === 'up' ? (
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-600" />
              )}
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-light text-neutral-900" 
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {stat.value}
              </h3>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-neutral-200 bg-neutral-50/50">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search donors, emails, amounts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
              />
            </div>

            {/* Filters & Actions */}
            <div className="flex items-center gap-3">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20 bg-white"
              >
                <option value="all">All Donations</option>
                <option value="monthly">Monthly</option>
                <option value="onetime">One-time</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>

              <button className="px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light hover:bg-neutral-50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </button>

              <button className="px-4 py-2.5 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Donor
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Method
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-right py-4 px-6 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {recentDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{donation.donor}</p>
                      <p className="text-xs text-neutral-500 font-light">{donation.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-neutral-900">
                      ${donation.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      donation.type === 'Monthly' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {donation.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm font-light text-neutral-600">{donation.method}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm text-neutral-900">{donation.date}</p>
                      <p className="text-xs text-neutral-500 font-light">{donation.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      donation.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {donation.status === 'completed' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {donation.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-neutral-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50/50">
          <div className="flex items-center justify-between">
            <p className="text-sm font-light text-neutral-600">
              Showing <span className="font-medium">1-6</span> of <span className="font-medium">247</span> donations
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-light hover:bg-white transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}