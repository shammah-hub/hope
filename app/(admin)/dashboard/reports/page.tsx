'use client';

import { BarChart3, Download, Calendar, TrendingUp, DollarSign, Users, FileText } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light text-neutral-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Reports & Analytics</h1>
          <p className="text-neutral-600 font-light">View comprehensive reports and analytics</p>
        </div>
        <button className="px-6 py-3 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] flex items-center gap-2">
          <Download className="w-5 h-5" />Export All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {[
          { title: 'Financial Report', desc: 'Revenue, expenses, and budgets', icon: DollarSign, color: 'emerald' },
          { title: 'Impact Report', desc: 'Beneficiaries and outcomes', icon: TrendingUp, color: 'blue' },
          { title: 'Volunteer Report', desc: 'Hours and contributions', icon: Users, color: 'violet' },
        ].map((report, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all cursor-pointer">
            <div className={`w-12 h-12 rounded-lg bg-${report.color}-100 flex items-center justify-center mb-4`}>
              <report.icon className={`w-6 h-6 text-${report.color}-600`} />
            </div>
            <h3 className="text-xl font-light text-neutral-900 mb-2">{report.title}</h3>
            <p className="text-sm text-neutral-600 font-light mb-4">{report.desc}</p>
            <button className="text-sm text-[#0F4C3A] font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Generate Report
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 p-8">
        <h2 className="text-2xl font-light text-neutral-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Recent Reports</h2>
        <div className="space-y-4">
          {[
            { name: 'Q4 2025 Financial Summary', date: '2026-01-05', type: 'Financial', size: '2.4 MB' },
            { name: 'Annual Impact Report 2025', date: '2026-01-15', type: 'Impact', size: '5.1 MB' },
            { name: 'Volunteer Hours Report - December', date: '2026-01-02', type: 'Volunteer', size: '890 KB' },
            { name: 'Donor Retention Analysis', date: '2025-12-20', type: 'Financial', size: '1.2 MB' },
          ].map((report, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{report.name}</p>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-light hover:bg-neutral-50 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}