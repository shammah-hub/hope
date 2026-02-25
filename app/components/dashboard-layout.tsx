'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, DollarSign, FolderKanban, Users, 
  Handshake, FileText, Mail, BarChart3, Settings,
  Bell, Search, Menu, X, Heart, LogOut, User,
  ChevronDown, HelpCircle
} from 'lucide-react';

export default function DashboardLayout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col z-50">
        <div className="flex flex-col flex-grow bg-[#0F4C3A] overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-6 py-6 border-b border-[#1A5744]">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#0F4C3A]" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-lg font-black leading-none tracking-tight text-white">
                  HOPE/26
                </h2>
                <p className="text-[8px] font-mono tracking-[0.2em] text-[#A8D5BA] uppercase">
                  Admin Dashboard
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-light rounded-lg transition-all ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-[#A8D5BA] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="flex-shrink-0 px-4 py-4 border-t border-[#1A5744]">
            <Link
              href="/help"
              className="flex items-center px-4 py-3 text-sm font-light text-[#A8D5BA] hover:bg-white/5 hover:text-white rounded-lg transition-all"
            >
              <HelpCircle className="w-5 h-5 mr-3" />
              Help & Support
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-neutral-900/80"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-[#0F4C3A]">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Logo */}
              <div className="flex items-center flex-shrink-0 px-6 py-6 border-b border-[#1A5744]">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#0F4C3A]" fill="currentColor" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black leading-none tracking-tight text-white">
                      HOPE/26
                    </h2>
                    <p className="text-[8px] font-mono tracking-[0.2em] text-[#A8D5BA] uppercase">
                      Admin Dashboard
                    </p>
                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navigation.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-light rounded-lg transition-all ${
                        active
                          ? 'bg-white/10 text-white'
                          : 'text-[#A8D5BA] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area - FIXED: Added lg:pl-64 here */}
      <div className="flex flex-col flex-1 lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white border-b border-neutral-200">
          <button
            type="button"
            className="px-4 text-neutral-500 focus:outline-none lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 justify-between px-4 lg:px-8">
            {/* Search Bar */}
            <div className="flex flex-1 items-center">
              <div className="w-full max-w-lg">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="search"
                    placeholder="Search..."
                    className="block w-full rounded-lg border border-neutral-300 bg-white py-2 pl-10 pr-3 text-sm font-light placeholder-neutral-400 focus:outline-none focus:border-[#0F4C3A] focus:ring-1 focus:ring-[#0F4C3A]"
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-neutral-500 hover:text-neutral-700 transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-neutral-100 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-[#0F4C3A] flex items-center justify-center">
                    <span className="text-sm font-medium text-white">AD</span>
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-neutral-900">Admin User</p>
                    <p className="text-xs text-neutral-500">admin@hopefoundation.org</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-neutral-500" />
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Link
                        href="/dashboard/profile"
                        className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        <User className="w-4 h-4 mr-3" />
                        Your Profile
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                      </Link>
                      <hr className="my-1 border-neutral-200" />
                      <button
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-neutral-100"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}