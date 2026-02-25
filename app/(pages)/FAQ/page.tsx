'use client';

import { useState } from 'react';
import { 
  Heart, Search, ChevronDown, ChevronUp, HelpCircle,
  Mail, Phone, MessageCircle, BookOpen, DollarSign,
  Users, Globe, FileText, Shield
} from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'donations', label: 'Donations & Giving', icon: DollarSign },
    { id: 'programs', label: 'Programs & Impact', icon: Globe },
    { id: 'volunteer', label: 'Volunteering', icon: Users },
    { id: 'transparency', label: 'Transparency & Accountability', icon: Shield },
    { id: 'general', label: 'General', icon: BookOpen },
  ];

  var faqs = [
    {
      id: 1,
      category: 'donations',
      question: 'Are donations tax-deductible?',
      answer: 'Yes! Hope Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a tax receipt via email immediately after your donation, which you can use for tax filing purposes. Our EIN is 12-3456789.'
    },
    {
      id: 2,
      category: 'donations',
      question: 'How much of my donation goes directly to programs?',
      answer: '92 cents of every dollar donated goes directly to our program services. The remaining 8% covers essential administrative costs and fundraising expenses. We maintain financial transparency through annual third-party audits and publish detailed financial statements on our website.'
    },
    {
      id: 3,
      category: 'donations',
      question: 'Can I designate my donation to a specific program or region?',
      answer: 'Yes, you can designate your donation to specific programs (Education, Healthcare, or Economic Development) or regions during the checkout process. However, we encourage unrestricted donations to "where needed most" as this allows us to respond flexibly to urgent needs and allocate resources most effectively.'
    },
    {
      id: 4,
      category: 'donations',
      question: 'How can I track the impact of my donation?',
      answer: 'All donors receive quarterly impact reports via email showing how their contributions are being used. Monthly donors also get access to our donor portal where you can see real-time updates on funded projects, view photos and videos from the field, and read stories from beneficiaries.'
    },
    {
      id: 5,
      category: 'donations',
      question: 'Do you accept cryptocurrency or stock donations?',
      answer: 'Yes! We accept Bitcoin, Ethereum, and other major cryptocurrencies, as well as publicly traded stock donations. These types of donations can offer significant tax advantages. Please contact our development team at giving@hopefoundation.org for instructions on how to proceed.'
    },
    {
      id: 6,
      category: 'programs',
      question: 'In which countries do you operate?',
      answer: 'We currently operate programs in 45 countries across Africa, Asia, Latin America, and the Caribbean. Our largest operations are in Kenya, Tanzania, Philippines, India, Peru, Ghana, and Honduras. We work in partnership with local organizations and community leaders in each location.'
    },
    {
      id: 7,
      category: 'programs',
      question: 'How do you measure program effectiveness?',
      answer: 'We use a rigorous monitoring and evaluation framework that tracks both output metrics (schools built, patients treated) and outcome metrics (literacy rates improved, health indicators changed). All programs undergo baseline assessments, quarterly reviews, and annual third-party evaluations. Results are published in our annual impact report.'
    },
    {
      id: 8,
      category: 'programs',
      question: 'What makes your approach different from other NGOs?',
      answer: 'We prioritize community-led solutions over top-down interventions. Local communities identify their own needs and lead program design and implementation. We provide resources, expertise, and support, but communities own the projects. This approach results in a 93% sustainability rate—programs continue thriving 5+ years after our direct involvement ends.'
    },
    {
      id: 9,
      category: 'programs',
      question: 'How long do your programs operate in each community?',
      answer: 'Most programs run for 3-5 years with the goal of building local capacity for independence. We use a phased exit strategy: Year 1-2 (intensive support), Year 3-4 (gradual transition to local leadership), Year 5 (monitoring only). We maintain relationships with communities for follow-up and continue tracking outcomes long-term.'
    },
    {
      id: 10,
      category: 'volunteer',
      question: 'How can I volunteer with Hope Foundation?',
      answer: 'We offer both remote and on-site volunteer opportunities. Remote roles include communications, translation, grant writing, and mentorship. Field volunteering requires a minimum 1-month commitment and covers education, healthcare, or agricultural support. Visit our Get Involved page to browse current openings and submit an application.'
    },
    {
      id: 11,
      category: 'volunteer',
      question: 'Do you provide support for volunteers traveling to field locations?',
      answer: 'Yes! We provide comprehensive pre-departure orientation, visa assistance, accommodation arrangements, and in-country support. Volunteers are responsible for their own flights and insurance, but we help coordinate logistics and provide a detailed packing list and country-specific guidance.'
    },
    {
      id: 12,
      category: 'volunteer',
      question: 'What qualifications do I need to volunteer?',
      answer: 'Requirements vary by role. Remote positions generally require relevant skills (writing, design, data analysis). Field positions in education require teaching experience or TEFL certification. Healthcare roles require medical credentials. All volunteers must pass a background check and complete our training program.'
    },
    {
      id: 13,
      category: 'transparency',
      question: 'How can I access your financial statements and annual reports?',
      answer: 'All annual reports, audited financial statements, IRS Form 990, and third-party evaluations are available on our Transparency page. We also publish quarterly financial updates and maintain 4-star ratings from Charity Navigator and GuideStar Platinum status, both of which provide independent financial analysis.'
    },
    {
      id: 14,
      category: 'transparency',
      question: 'Who oversees the organization and ensures accountability?',
      answer: 'Hope Foundation is governed by an independent Board of Directors with expertise in international development, finance, healthcare, and education. The Board meets quarterly, conducts annual audits, and maintains oversight committees for finance, programs, and governance. Board member bios are available on our About page.'
    },
    {
      id: 15,
      category: 'transparency',
      question: 'How do you ensure funds reach intended beneficiaries?',
      answer: 'We use strict financial controls including segregation of duties, regular audits, local oversight committees, and direct cash transfer systems monitored via mobile technology. All expenditures require documentation and multi-level approval. Our field staff conduct regular site visits and beneficiary verification.'
    },
    {
      id: 16,
      category: 'general',
      question: 'Can my company partner with Hope Foundation?',
      answer: 'Absolutely! We offer various partnership models including cause marketing, employee giving programs, corporate sponsorships, pro bono services, and workplace volunteering. Each partnership is customized to align with your company\'s values and objectives. Contact partnerships@hopefoundation.org to explore opportunities.'
    },
    {
      id: 17,
      category: 'general',
      question: 'How did Hope Foundation begin?',
      answer: 'Hope Foundation was founded in 2008 by a group of educators and healthcare professionals who saw the need for community-driven development solutions. It started with one school in rural Kenya and has since grown to serve 45 countries with education, healthcare, and economic programs.'
    },
    {
      id: 18,
      category: 'general',
      question: 'How can I stay updated on your work?',
      answer: 'Subscribe to our monthly newsletter for impact stories and field updates, follow us on social media (Facebook, Twitter, Instagram, LinkedIn), read our blog for in-depth articles, or sign up for our quarterly donor reports. You can manage your communication preferences in your account settings.'
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const categoryMatch = activeCategory === 'all' || faq.category === activeCategory;
    const searchMatch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const toggleFAQ = (id: any) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 border border-neutral-300 text-xs text-neutral-600 tracking-widest font-light mb-8">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              We're Here
              <br />
              to Help
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Find answers to common questions about our programs, donations, volunteering, and more
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                  activeCategory === category.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq: any) => (
                <div 
                  key={faq.id}
                  className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 flex items-start justify-between text-left hover:bg-neutral-100 transition-colors"
                  >
                    <div className="flex-1 pr-6">
                      <h3 className="text-lg font-light text-[#0F4C3A] mb-2"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {faq.question}
                      </h3>
                      <span className="text-xs text-neutral-500 font-light tracking-wider uppercase">
                        {categories.find(c => c.id === faq.category)?.label}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedId === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-[#0F4C3A]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-400" />
                      )}
                    </div>
                  </button>
                  {expandedId === faq.id && (
                    <div className="px-8 pb-6">
                      <p className="text-sm text-neutral-600 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h3 className="text-2xl font-light mb-4 text-neutral-600"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                No questions found
              </h3>
              <p className="text-neutral-500 font-light mb-6">
                Try adjusting your search or filters
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-sm text-[#0F4C3A] font-light"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <MessageCircle className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Still Have Questions?
          </h2>
          <p className="text-lg text-[#E8F5E9] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@hopefoundation.org"
              className="px-8 py-3 bg-white text-[#0F4C3A] text-sm font-light tracking-wide hover:bg-neutral-100 transition-all duration-300 rounded-lg flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
            <a 
              href="tel:+15551234567"
              className="px-8 py-3 border border-white/20 text-white text-sm font-light tracking-wide hover:bg-white/10 transition-all duration-300 rounded-lg flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>

    

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}