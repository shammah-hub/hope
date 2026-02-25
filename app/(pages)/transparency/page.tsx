'use client';

import { useState } from 'react';
import { Heart, Download, FileText, BarChart, Shield, Award, DollarSign, CheckCircle, TrendingUp, Users, Target, Eye, PieChart } from 'lucide-react';
import Link from 'next/link';

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
     

      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-8 text-[#0F4C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Transparency & Accountability</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">Complete financial transparency and accountability in everything we do</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, number: '4-Star', label: 'Charity Navigator' },
              { icon: Shield, number: 'Platinum', label: 'GuideStar' },
              { icon: BarChart, number: '92¢', label: 'To Programs' },
              { icon: CheckCircle, number: 'Clean', label: 'Annual Audit' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-lg border border-neutral-200">
                <stat.icon className="w-10 h-10 text-[#0F4C3A] mx-auto mb-4" />
                <div className="text-3xl font-light text-[#0F4C3A] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{stat.number}</div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-light text-[#0F4C3A] mb-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Financial Overview 2025</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
              <h3 className="text-2xl font-light mb-6 text-[#0F4C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Revenue Sources</h3>
              <div className="space-y-4">
                {[
                  { label: 'Individual Donations', amount: '$1.2M', percentage: 48 },
                  { label: 'Foundation Grants', amount: '$750K', percentage: 30 },
                  { label: 'Corporate Partnerships', amount: '$400K', percentage: 16 },
                  { label: 'Government Grants', amount: '$150K', percentage: 6 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-light text-neutral-700">{item.label}</span>
                      <span className="text-sm font-light text-[#0F4C3A]">{item.amount}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0F4C3A]" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
              <h3 className="text-2xl font-light mb-6 text-[#0F4C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Expense Allocation</h3>
              <div className="space-y-4">
                {[
                  { label: 'Program Services', amount: '$2.3M', percentage: 92 },
                  { label: 'Fundraising', amount: '$125K', percentage: 5 },
                  { label: 'Administrative', amount: '$75K', percentage: 3 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-light text-neutral-700">{item.label}</span>
                      <span className="text-sm font-light text-[#0F4C3A]">{item.amount}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0F4C3A]" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-light text-[#0F4C3A] mb-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Available Documents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Annual Report 2025', type: 'PDF', size: '12 MB', pages: 48 },
              { title: 'Audited Financials 2025', type: 'PDF', size: '4 MB', pages: 32 },
              { title: 'IRS Form 990', type: 'PDF', size: '2 MB', pages: 24 },
              { title: 'Program Impact Report', type: 'PDF', size: '8 MB', pages: 64 },
              { title: 'Board Meeting Minutes', type: 'PDF', size: '1 MB', pages: 12 },
              { title: 'Compensation Policy', type: 'PDF', size: '500 KB', pages: 8 },
            ].map((doc, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all">
                <FileText className="w-12 h-12 text-[#0F4C3A]/40 mb-4" />
                <h3 className="text-lg font-light mb-2 text-[#0F4C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{doc.title}</h3>
                <div className="flex justify-between text-xs text-neutral-500 mb-4 font-light">
                  <span>{doc.type}</span>
                  <span>{doc.size}</span>
                  <span>{doc.pages} pages</span>
                </div>
                <button className="w-full py-2 border border-neutral-300 text-neutral-600 hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all text-sm font-light rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Shield className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl font-light mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our Commitment</h2>
          <p className="text-lg text-[#E8F5E9] font-light mb-8">We maintain the highest standards of transparency and make all governance and financial documents publicly available. Questions about our finances? Contact us anytime.</p>
          <a href="mailto:transparency@hopefoundation.org" className="inline-block px-8 py-3 bg-white text-[#0F4C3A] rounded-lg hover:bg-neutral-100 transition-all font-light">Contact Finance Team</a>
        </div>
      </section>


      <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');`}</style>
    </div>
  );
}