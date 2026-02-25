'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, DollarSign, Calendar, Gift, TrendingUp,
  CheckCircle, CreditCard, Globe, Shield, Users, Target,
  Star, Award, Lock, Download, Share2, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'monthly' | 'onetime'>('monthly');
  // Fix 1: number | null so setSelectedAmount(null) is valid
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('most-needed');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const donationAmounts: Record<'monthly' | 'onetime', number[]> = {
    monthly: [25, 50, 100, 250],
    onetime: [50, 100, 250, 500]
  };

  const impactExamples: Record<'monthly' | 'onetime', { amount: number; impact: string }[]> = {
    monthly: [
      { amount: 25, impact: 'Provides school supplies for 5 students for one month' },
      { amount: 50, impact: 'Funds healthcare visits for 10 community members monthly' },
      { amount: 100, impact: 'Supports microfinance training for 3 entrepreneurs each month' },
      { amount: 250, impact: "Sponsors one student's complete education for a full year" },
    ],
    onetime: [
      { amount: 50, impact: 'Provides clean water access for one family' },
      { amount: 100, impact: 'Equips a classroom with educational materials' },
      { amount: 250, impact: 'Funds mobile health clinic visit to a remote village' },
      { amount: 500, impact: 'Builds one well serving 100 households' },
    ]
  };

  const programs = [
    { id: 'most-needed', label: 'Where Most Needed', description: 'Maximum flexibility and impact' },
    { id: 'education', label: 'Education Programs', description: 'Schools, teachers, scholarships' },
    { id: 'health', label: 'Healthcare Initiatives', description: 'Medical care and health education' },
    { id: 'agriculture', label: 'Economic Development', description: 'Farming and microfinance' },
    { id: 'water', label: 'Water & Sanitation', description: 'Wells and clean water access' },
    { id: 'emergency', label: 'Emergency Relief', description: 'Rapid response to crises' },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null); // Fix 1: now valid since state is number | null
  };

  const getCurrentAmount = (): number | string => {
    return customAmount || selectedAmount || 0;
  };

  return (
    <div className="min-h-screen bg-neutral-50">

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4]">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-4 py-1 border border-[#0F4C3A]/30 bg-white/50 text-xs text-[#0F4C3A] tracking-widest font-light mb-6 sm:mb-8 rounded-full">
              MAKE A DONATION
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light mb-6 sm:mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your Gift
              <br />
              Creates Change
            </h1>
            <p className="text-base sm:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-light">
              Every donation directly supports communities building sustainable futures. 
              92 cents of every dollar goes to programs.
            </p>
          </div>

          {/* Trust Badges — scroll horizontally on small screens */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 items-center">
            {[
              { icon: Shield, label: 'Secure Donation', subtext: 'SSL Encrypted' },
              { icon: Award, label: '4-Star Rating', subtext: 'Charity Navigator' },
              { icon: CheckCircle, label: 'Tax Deductible', subtext: '501(c)(3)' },
              { icon: TrendingUp, label: '92¢ to Programs', subtext: 'Direct Impact' },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3 bg-white/70 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-lg border border-[#0F4C3A]/10">
                <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F4C3A] flex-shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-light text-[#0F4C3A]">{badge.label}</div>
                  <div className="text-xs text-neutral-500 font-light hidden sm:block">{badge.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">

            {/* Form Column */}
            <div>
              {/* Step 1 */}
              <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-6 sm:p-10 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0F4C3A] text-white rounded-full flex items-center justify-center text-base sm:text-lg font-light flex-shrink-0">1</div>
                  <h2 className="text-xl sm:text-2xl font-light text-[#0F4C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Your Donation</h2>
                </div>

                {/* Frequency Toggle */}
                <div className="mb-6 sm:mb-8">
                  <label className="block text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4 font-light tracking-wide">FREQUENCY</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { setDonationType('monthly'); setSelectedAmount(50); setCustomAmount(''); }}
                      className={`py-3 sm:py-4 px-4 sm:px-6 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${donationType === 'monthly' ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]' : 'border-neutral-200 text-neutral-600'}`}>
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2" />
                      Monthly Giving
                      <div className="text-xs opacity-60 mt-0.5 sm:mt-1">Sustaining Impact</div>
                    </button>
                    <button
                      onClick={() => { setDonationType('onetime'); setSelectedAmount(100); setCustomAmount(''); }}
                      className={`py-3 sm:py-4 px-4 sm:px-6 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${donationType === 'onetime' ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]' : 'border-neutral-200 text-neutral-600'}`}>
                      <Gift className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2" />
                      One-Time Gift
                      <div className="text-xs opacity-60 mt-0.5 sm:mt-1">Immediate Help</div>
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-6 sm:mb-8">
                  <label className="block text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4 font-light tracking-wide">DONATION AMOUNT</label>
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {donationAmounts[donationType].map((amount) => (
                      <button key={amount} onClick={() => handleAmountSelect(amount)}
                        className={`py-3 sm:py-4 px-2 sm:px-4 rounded-lg border-2 text-base sm:text-lg font-light transition-all ${selectedAmount === amount && !customAmount ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]' : 'border-neutral-200 text-neutral-600'}`}>
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
                    <input type="number" placeholder="Custom amount" value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-lg border-2 border-neutral-200 text-base sm:text-lg font-light focus:outline-none focus:border-[#0F4C3A]" />
                  </div>
                </div>

                {/* Program */}
                <div>
                  <label className="block text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4 font-light tracking-wide">DESIGNATE YOUR GIFT (OPTIONAL)</label>
                  <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full py-3 sm:py-4 px-4 rounded-lg border-2 border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A] bg-white">
                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>{program.label} — {program.description}</option>
                    ))}
                  </select>
                  <p className="text-xs text-neutral-500 mt-2 font-light">💡 We recommend "Where Most Needed" for maximum flexibility</p>
                </div>
              </div>

              {/* Step 2 — Payment */}
              <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-6 sm:p-10">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0F4C3A] text-white rounded-full flex items-center justify-center text-base sm:text-lg font-light flex-shrink-0">2</div>
                  <h2 className="text-xl sm:text-2xl font-light text-[#0F4C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Payment Method</h2>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input type="text" placeholder="First Name" className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
                    <input type="text" placeholder="Last Name" className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
                  <input type="text" placeholder="Card Number" className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <input type="text" placeholder="MM/YY" className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
                    <input type="text" placeholder="CVC" className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-sm font-light focus:outline-none focus:border-[#0F4C3A]" />
                  </div>
                </div>

                <button className="w-full py-4 bg-[#0F4C3A] text-white text-base sm:text-lg font-light tracking-wide hover:bg-[#1A5744] transition-all rounded-lg flex items-center justify-center group">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">Complete ${getCurrentAmount()} {donationType === 'monthly' ? 'Monthly' : ''} Donation</span>
                  <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center text-neutral-500 mt-4 font-light">🔒 Secure payment powered by Stripe</p>
              </div>
            </div>

            {/* Impact Summary — sticky on desktop, static card on mobile */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="bg-[#0F4C3A] text-white rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-light mb-5 sm:mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Your Impact</h3>
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <div className="flex justify-between pb-3 border-b border-white/20">
                    <span className="text-sm font-light opacity-90">Type</span>
                    <span className="text-sm">{donationType === 'monthly' ? 'Monthly' : 'One-Time'}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-white/20">
                    <span className="text-sm font-light opacity-90">Amount</span>
                    <span className="text-xl sm:text-2xl font-light">${getCurrentAmount()}</span>
                  </div>
                  {donationType === 'monthly' && (
                    <div className="flex justify-between pb-3 border-b border-white/20">
                      <span className="text-sm font-light opacity-90">Annual</span>
                      <span className="text-lg sm:text-xl font-light">
                        ${(Number(getCurrentAmount()) * 12).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="bg-white/10 rounded-lg p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-[#A8D5BA]" />
                    <div>
                      <div className="text-xs sm:text-sm font-light mb-2 text-[#A8D5BA]">What Your Gift Provides:</div>
                      <div className="text-xs sm:text-sm font-light leading-relaxed">
                        {impactExamples[donationType].find(e =>
                          e.amount === (customAmount ? parseInt(customAmount) : selectedAmount)
                        )?.impact || 'Your donation will support our most urgent needs and create sustainable change.'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-[#0F4C3A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Other Ways to Support
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: TrendingUp, title: 'Stock & Securities', description: 'Donate appreciated stock and avoid capital gains tax.', action: 'Learn More' },
              { icon: Gift, title: 'Legacy Giving', description: 'Include Hope Foundation in your estate plan.', action: 'Download Guide' },
              { icon: Users, title: 'Corporate Matching', description: 'Double your impact with employer matching.', action: 'Check Eligibility' },
            ].map((option, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0F4C3A]/10 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <option.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F4C3A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-light mb-3 text-[#0F4C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{option.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-5 sm:mb-6">{option.description}</p>
                <button className="text-sm text-[#0F4C3A] font-light flex items-center group">
                  {option.action}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F4C3A] text-[#A8D5BA] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center text-xs font-light">
          <p>© 2026 Hope Foundation. All rights reserved. • EIN: 12-3456789</p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}