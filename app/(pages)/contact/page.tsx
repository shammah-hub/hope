'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, Mail, Phone, MapPin, Clock, Send,
  MessageCircle, FileText, Briefcase, HelpCircle, Globe,
  Linkedin, Twitter, Facebook, Instagram, Users, Calendar,
  CheckCircle, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiry: 'general',
    message: ''
  });
  // Fix 1: type as string | null so 'success' is assignable
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neutral-50">

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1 border border-neutral-300 text-xs text-neutral-600 tracking-widest font-light mb-6 sm:mb-8">
              CONTACT US
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light mb-6 sm:mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              We'd Love to
              <br />
              Hear From You
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Whether you have questions about our programs, want to get involved, or need support, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { icon: Mail, title: 'Email Us', value: 'info@hopefoundation.org', action: 'mailto:info@hopefoundation.org', description: 'General inquiries' },
              { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567', action: 'tel:+15551234567', description: 'Mon-Fri, 9am-5pm EST' },
              { icon: MapPin, title: 'Visit Us', value: 'New York, USA', action: '#locations', description: 'Global offices' },
              { icon: MessageCircle, title: 'Live Chat', value: 'Start Chat', action: '#', description: 'Available 24/7' },
            ].map((contact, idx) => (
              <a key={idx} href={contact.action}
                className="group bg-neutral-50 p-4 sm:p-6 rounded-lg border border-neutral-200 hover:border-[#0F4C3A]/30 transition-all hover:shadow-lg text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#0F4C3A]/5 transition-all">
                  <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F4C3A]/60" />
                </div>
                <h3 className="text-xs sm:text-sm font-light mb-1 sm:mb-2 text-[#0F4C3A] tracking-wide"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {contact.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light mb-1 hidden sm:block">{contact.value}</p>
                <p className="text-xs text-neutral-400 font-light hidden sm:block">{contact.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Contact Form */}
            <div>
              <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">Send a Message</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 leading-tight text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Get in Touch
              </h2>

              {formStatus === 'success' && (
                <div className="mb-8 p-4 bg-[#E8F5E9] border border-[#0F4C3A]/20 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0F4C3A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-[#0F4C3A] font-light"><strong>Message sent successfully!</strong></p>
                    <p className="text-xs text-neutral-600 font-light mt-1">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm text-neutral-600 mb-2 font-light tracking-wide">YOUR NAME *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-neutral-600 mb-2 font-light tracking-wide">EMAIL ADDRESS *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
                      placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-neutral-600 mb-2 font-light tracking-wide">SUBJECT *</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all"
                    placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-neutral-600 mb-2 font-light tracking-wide">INQUIRY TYPE</label>
                  <select name="inquiry" value={formData.inquiry} onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all">
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donate">Donations & Giving</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media & Press</option>
                    <option value="programs">Program Information</option>
                    <option value="support">Support Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-neutral-600 mb-2 font-light tracking-wide">MESSAGE *</label>
                  {/* Fix 2: rows={6} as a number, not "6" as a string */}
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={6}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] transition-all resize-none"
                    placeholder="Tell us more about your inquiry..." />
                </div>

                <button type="submit"
                  className="w-full py-4 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-300 rounded-lg flex items-center justify-center group">
                  Send Message
                  <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-neutral-500 text-center font-light">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">Contact Information</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 leading-tight text-[#0F4C3A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Other Ways to<br />Reach Us
              </h2>

              <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
                {[
                  { icon: Mail, title: 'General Inquiries', details: ['info@hopefoundation.org', 'Response time: 24 hours'] },
                  { icon: Briefcase, title: 'Partnerships & Corporate', details: ['partnerships@hopefoundation.org', 'Connect with our partnerships team'] },
                  { icon: FileText, title: 'Media & Press', details: ['press@hopefoundation.org', 'For media inquiries and interviews'] },
                  { icon: Users, title: 'Volunteer Coordination', details: ['volunteer@hopefoundation.org', 'Join our volunteer programs'] },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F4C3A]/60" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-light mb-1 sm:mb-2 text-[#0F4C3A]"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-neutral-600 font-light">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-light mb-6 text-[#0F4C3A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Follow Our Journey
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, link: '#' },
                    { icon: Twitter, link: '#' },
                    { icon: Instagram, link: '#' },
                    { icon: Linkedin, link: '#' },
                  ].map((social, idx) => (
                    <a key={idx} href={social.link}
                      className="w-10 h-10 sm:w-12 sm:h-12 border border-neutral-300 rounded-full flex items-center justify-center hover:border-[#0F4C3A] hover:bg-[#0F4C3A]/5 transition-all">
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="locations" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">Our Offices</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Global Presence
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              We operate in 45 countries with regional offices supporting our global mission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { region: 'North America', office: 'Global Headquarters', address: '123 Hope Street, Suite 400', city: 'New York, NY 10001', country: 'United States', phone: '+1 (555) 123-4567', email: 'americas@hopefoundation.org' },
              { region: 'East Africa', office: 'Regional Office', address: 'Kilimani Road, Westlands', city: 'Nairobi', country: 'Kenya', phone: '+254 20 123 4567', email: 'africa@hopefoundation.org' },
              { region: 'Southeast Asia', office: 'Regional Office', address: 'Bonifacio Global City', city: 'Metro Manila', country: 'Philippines', phone: '+63 2 8123 4567', email: 'asia@hopefoundation.org' },
            ].map((office, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 sm:p-8 rounded-lg border border-neutral-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-light mb-1 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {office.region}
                    </h3>
                    <p className="text-xs text-neutral-500 tracking-wider uppercase font-light">{office.office}</p>
                  </div>
                  <Globe className="w-8 h-8 text-[#0F4C3A]/20 flex-shrink-0" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0F4C3A]/60 flex-shrink-0 mt-1" />
                    <div className="text-sm text-neutral-600 font-light">
                      <p>{office.address}</p>
                      <p>{office.city}</p>
                      <p>{office.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0F4C3A]/60 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-sm text-neutral-600 font-light hover:text-[#0F4C3A]">{office.phone}</a>
                  </div>
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-[#0F4C3A]/60 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-sm text-neutral-600 font-light hover:text-[#0F4C3A] break-all">{office.email}</a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    Mon-Fri: 9:00 AM - 5:00 PM (Local Time)
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-600 font-light mb-4">Looking for a field office in your region?</p>
            <button className="text-sm text-[#0F4C3A] font-light flex items-center justify-center mx-auto group">
              View All 45 Office Locations
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-6 font-light">Frequently Asked Questions</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0F4C3A] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Quick Answers
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { question: 'How can I track the impact of my donation?', answer: 'All donors receive quarterly impact reports showing exactly how their contributions are being used. You can also log into your donor portal to see real-time updates on funded projects.' },
              { question: 'Do you accept in-kind donations?', answer: 'Yes! We accept medical supplies, educational materials, technology equipment, and professional services. Please contact us to discuss your specific donation and ensure it aligns with current needs.' },
              { question: 'How do I apply for a volunteer position?', answer: 'Visit our Get Involved page to browse current volunteer opportunities. Applications can be submitted online, and our volunteer coordinator will contact you within 5 business days.' },
              { question: 'Are donations tax-deductible?', answer: 'Yes, Hope Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your records.' },
              { question: 'How can my company partner with Hope Foundation?', answer: 'We offer various partnership models including cause marketing, employee engagement programs, and corporate giving. Contact partnerships@hopefoundation.org to discuss opportunities.' },
              { question: 'Where can I find your annual reports and financials?', answer: 'All annual reports, financial statements, and third-party evaluations are available on our Transparency page. We maintain 4-star ratings from Charity Navigator and GuideStar Platinum status.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-8 rounded-lg border border-neutral-200">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#0F4C3A]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F4C3A]/60" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-light mb-2 sm:mb-3 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {faq.question}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-600 font-light mb-4">Can't find what you're looking for?</p>
            <button className="text-sm text-[#0F4C3A] font-light flex items-center justify-center mx-auto group">
              Browse Full FAQ Library
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 sm:py-16 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-light text-white mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Emergency Assistance
                </h3>
                <p className="text-sm text-[#E8F5E9] font-light">For urgent humanitarian support requests</p>
              </div>
            </div>
            <a href="tel:+15551234567"
              className="self-start sm:self-auto px-6 sm:px-8 py-3 bg-white text-[#0F4C3A] text-sm font-light tracking-wide hover:bg-neutral-100 transition-all duration-300 rounded-lg flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Call 24/7 Hotline
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}