'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, DollarSign, FolderKanban, Users,
  Handshake, FileText, Mail, BarChart3, Settings,
  HelpCircle, Heart, X, Menu, ChevronLeft
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Donations', href: '/dashboard/donations', icon: DollarSign },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
  { name: 'Volunteers', href: '/dashboard/volunteers', icon: Users },
  { name: 'Partners', href: '/dashboard/partners', icon: Handshake },
  { name: 'Content', href: '/dashboard/content', icon: FileText },
  { name: 'Communications', href: '/dashboard/communications', icon: Mail },
  { name: 'Reports', href: '/dashboard/reports', icon: BarChart3 },
  { name: 'Team', href: '/dashboard/team', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

// Most-used items surfaced in the mobile bottom bar
const bottomNavItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Donations', href: '/dashboard/donations', icon: DollarSign },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
  { name: 'Content', href: '/dashboard/content', icon: FileText },
  { name: 'More', href: '#', icon: Menu, isMore: true },
];

export default function DashboardSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── MOBILE: top bar strip (shows logo + hamburger on xs screens) ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-[#0F4C3A] flex items-center px-4 shadow-lg">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <Heart className="w-4 h-4 text-[#0F4C3A]" fill="currentColor" />
          </div>
          <span className="text-white font-black tracking-tight text-base">HOPE/26</span>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="ml-auto w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center"
          aria-label="Open navigation"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex w-72 flex-col bg-[#0F4C3A] z-10 shadow-2xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"
              aria-label="Close navigation"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="flex items-center px-6 py-6 border-b border-[#1A5744]">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#0F4C3A]" fill="currentColor" />
                </div>
                <div>
                  <h2 className="text-lg font-black leading-none tracking-tight text-white">HOPE/26</h2>
                  <p className="text-[8px] font-mono tracking-[0.2em] text-[#A8D5BA] uppercase mt-0.5">Admin Dashboard</p>
                </div>
              </Link>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm font-light rounded-lg transition-all ${
                      active ? 'bg-white/10 text-white' : 'text-[#A8D5BA] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="px-4 py-4 border-t border-[#1A5744]">
              <Link
                href="/help"
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-4 py-3 text-sm font-light text-[#A8D5BA] hover:bg-white/5 hover:text-white rounded-lg transition-all"
              >
                <HelpCircle className="w-5 h-5 mr-3" />
                Help & Support
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE: bottom tab bar (quick access to 4 key sections) ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 flex">
        {bottomNavItems.map((item) => {
          const active = !item.isMore && isActive(item.href);
          return item.isMore ? (
            <button
              key="more"
              onClick={() => setMobileOpen(true)}
              className="flex-1 flex flex-col items-center justify-center py-2 gap-1 text-neutral-400 hover:text-[#0F4C3A] transition-colors"
            >
              <Menu className="w-5 h-5" />
              <span className="text-[10px] font-light">More</span>
            </button>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-1 transition-colors ${
                active ? 'text-[#0F4C3A]' : 'text-neutral-400 hover:text-[#0F4C3A]'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-light">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* ── DESKTOP SIDEBAR (collapsible) ── */}
      <aside
        className="hidden lg:flex lg:flex-col"
        style={{
          width: collapsed ? '72px' : '256px',
          transition: 'width 0.25s ease',
          position: 'fixed',
          left: 0, top: 0, bottom: 0,
          zIndex: 40,
        }}
      >
        <div className="flex flex-col h-full bg-[#0F4C3A] overflow-hidden">

          {/* Logo area */}
          <div className="flex items-center flex-shrink-0 px-4 py-5 border-b border-[#1A5744]" style={{ minHeight: '73px' }}>
            {collapsed ? (
              <div className="w-full flex justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#0F4C3A]" fill="currentColor" />
                </div>
              </div>
            ) : (
              <Link href="/" className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#0F4C3A]" fill="currentColor" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base font-black leading-none tracking-tight text-white">HOPE/26</h2>
                  <p className="text-[8px] font-mono tracking-[0.18em] text-[#A8D5BA] uppercase mt-0.5">Admin Dashboard</p>
                </div>
              </Link>
            )}
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto overflow-x-hidden">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  title={collapsed ? item.name : undefined}
                  className={`flex items-center rounded-lg transition-all ${
                    collapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'
                  } ${active ? 'bg-white/10 text-white' : 'text-[#A8D5BA] hover:bg-white/5 hover:text-white'}`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="ml-3 text-sm font-light whitespace-nowrap">{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="flex-shrink-0 px-2 py-3 border-t border-[#1A5744] space-y-1">
            <Link
              href="/help"
              title={collapsed ? 'Help & Support' : undefined}
              className={`flex items-center rounded-lg text-[#A8D5BA] hover:bg-white/5 hover:text-white transition-all ${
                collapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'
              }`}
            >
              <HelpCircle className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="ml-3 text-sm font-light">Help & Support</span>}
            </Link>

            <button
              onClick={() => setCollapsed(!collapsed)}
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              className={`w-full flex items-center rounded-lg text-[#A8D5BA] hover:bg-white/5 hover:text-white transition-all ${
                collapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'
              }`}
            >
              <ChevronLeft
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                style={{ transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
              {!collapsed && <span className="ml-3 text-sm font-light">Collapse</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}