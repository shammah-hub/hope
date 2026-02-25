"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerLinks = {
    organization: [
      { name: 'Our Story', href: '/about-us' },
      { name: 'Leadership Team', href: '/about-us#leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press & Media', href: '/media-kit' },
    ],
    programs: [
      { name: 'All Projects', href: '/projects' },
      { name: 'Case Studies', href: '/projects#case-studies' },
      { name: 'Impact & Results', href: '/impact' },
      { name: 'Annual Reports', href: '/impact#reports' },
    ],
    getInvolved: [
      { name: 'Volunteer', href: '/get-involved#volunteer' },
      { name: 'Partner With Us', href: '/get-involved#partners' },
      { name: 'Internships', href: '/get-involved#internships' },
      { name: 'Donate', href: '/donate' },
    ],
    resources: [
      { name: 'Blog & News', href: '/blog' },
      { name: 'Research Reports', href: '/resources' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-[#0F4C3A] text-[#A8D5BA] py-16 border-t border-[#1A5744]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#0F4C3A]" fill="currentColor" />
              </div>
              <span className="text-sm font-light text-white tracking-wide"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Hope
              </span>
            </div>
            <p className="text-xs leading-relaxed font-light">
              Creating sustainable change through community empowerment.
            </p>
          </div>
          <div>
            <h4 className="text-xs text-white mb-4 tracking-widest uppercase font-light">Organization</h4>
            <div className="space-y-2 text-xs">
              {footerLinks.organization.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="block hover:text-white transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs text-white mb-4 tracking-widest uppercase font-light">Get Involved</h4>
            <div className="space-y-2 text-xs">
              {footerLinks.getInvolved.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="block hover:text-white transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs text-white mb-4 tracking-widest uppercase font-light">Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex border-b border-[#1A5744]">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  required
                  className="flex-1 bg-transparent py-2 text-xs focus:outline-none font-light placeholder-[#A8D5BA]/50"
                />
                <button type="submit" className="text-xs hover:text-white transition-colors">→</button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t border-[#1A5744] pt-8 text-center text-xs font-light">
          <p>© 2026 VITAL/26. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}