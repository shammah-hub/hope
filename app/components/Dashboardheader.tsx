'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bell, Search, Menu, LogOut, User, Settings, ChevronDown
} from 'lucide-react';

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white border-b border-neutral-200">
      {/* Mobile Menu Button */}
     
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
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <User className="w-4 h-4 mr-3" />
                    Your Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </Link>
                  <hr className="my-1 border-neutral-200" />
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-neutral-100"
                    onClick={() => setUserMenuOpen(false)}
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
  );
}