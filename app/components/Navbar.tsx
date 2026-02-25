"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { 
        name: 'About', 
        href: '/about',
        dropdown: [
          { name: 'Our Story', href: '/our-story' },
          { name: 'Team', href: '/team' },
          { name: 'Leadership', href: '/leadership' },
          { name: 'Careers', href: '/careers' },
        ]
      },
      { 
        name: 'Projects', 
        href: '/our-work',
        dropdown: [
          { name: 'Impact & Results', href: '/impact' },
        ]
      },
      { 
        name: 'Get Involved', 
        href: '/get-involved',
        dropdown: [
         // { name: 'Volunteer', href: '/get-involved#volunteer' },
          { name: 'Partner With Us', href: '/partners' },
          { name: 'Internships', href: '/get-internships' },
        ]
      },
      { 
        name: 'Resources', 
        href: '/resources',
        dropdown: [
          { name: 'Blog & News', href: '/blog' },
          { name: 'Reports & Research', href: '/reports-research' },
          { name: 'Media Kit', href: '/media-kit' },
          { name: 'FAQ', href: '/FAQ' },
        ]
      },
      { name: 'Contact', href: '/contact' },
    ],
    cta: { name: 'Donate', href: '/donate' }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-white/95 backdrop-blur-xl shadow-lg border-b border-neutral-200' 
            : 'py-6 bg-white/90 backdrop-blur-sm border-b border-neutral-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-[#0F4C3A] rounded-full flex items-center justify-center group-hover:bg-[#1A5744] transition-all">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <h2 className="text-xl font-black leading-none tracking-tight bg-gradient-to-r from-[#0F4C3A] to-[#1A5744] bg-clip-text text-transparent group-hover:from-[#1A5744] group-hover:to-[#0F4C3A] transition-all">
                  HOPE/26
                </h2>
                <p className="text-[7px] font-mono tracking-[0.3em] text-[#0F4C3A]/60 uppercase">
                  Community Impact
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-light text-neutral-700 hover:text-[#0F4C3A] transition-colors relative group tracking-wide"
                  >
                    {item.name}
                    {item.dropdown && (
                      <span className="ml-1 text-xs">▾</span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F4C3A] group-hover:w-full transition-all duration-300" />
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 overflow-hidden"
                      >
                        {item.dropdown.map((subItem, idx) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm font-light text-neutral-700 hover:bg-[#E8F5E9] hover:text-[#0F4C3A] transition-colors border-b border-neutral-100 last:border-b-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link
                href={navigation.cta.href}
                className="hidden lg:block px-6 py-2 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all duration-300 rounded"
              >
                {navigation.cta.name}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-[#0F4C3A] transition-colors"
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-[90] lg:hidden overflow-y-auto pt-24 px-6 pb-6"
          >
            <div className="space-y-2">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-light text-neutral-800 hover:text-[#0F4C3A] hover:bg-[#E8F5E9] rounded-lg transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {item.name}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm font-light text-neutral-600 hover:text-[#0F4C3A] hover:bg-[#E8F5E9] rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                href={navigation.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full mt-6 px-6 py-4 bg-[#0F4C3A] text-white text-center text-lg font-light rounded-lg hover:bg-[#1A5744] transition-all shadow-lg"
              >
                {navigation.cta.name}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
      `}</style>
    </>
  );
}