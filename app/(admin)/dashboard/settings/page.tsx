'use client';

import { useState } from 'react';
import { 
  Settings, User, Bell, Lock, CreditCard, Globe,
  Mail, Save, Eye, EyeOff, CheckCircle
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'preferences', label: 'Preferences', icon: Settings },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-light text-neutral-900 mb-2" 
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Settings
        </h1>
        <p className="text-neutral-600 font-light">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid lg:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar Tabs */}
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-light transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0F4C3A] text-white'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl border border-neutral-200 p-8">
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-light text-neutral-900 mb-6" 
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Profile Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] flex items-center justify-center text-white text-2xl font-medium">
                    AD
                  </div>
                  <div>
                    <button className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-light hover:bg-neutral-50 transition-colors mb-2">
                      Change Photo
                    </button>
                    <p className="text-xs text-neutral-500 font-light">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-neutral-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="Admin"
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-neutral-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="User"
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="admin@hopefoundation.org"
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    defaultValue="System Administrator"
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2">Bio</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h2 className="text-2xl font-light text-neutral-900 mb-6" 
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Security Settings
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-neutral-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-neutral-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm font-light focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/20"
                  />
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <h3 className="text-lg font-light text-neutral-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Enable 2FA</p>
                      <p className="text-xs text-neutral-600 font-light">Add an extra layer of security</p>
                    </div>
                    <button className="px-4 py-2 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-colors">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-2xl font-light text-neutral-900 mb-6" 
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Notification Preferences
              </h2>

              <div className="space-y-6">
                {[
                  { title: 'Email Notifications', desc: 'Receive email updates about donations and projects' },
                  { title: 'New Donations', desc: 'Get notified when new donations are received' },
                  { title: 'Project Updates', desc: 'Updates about project milestones and progress' },
                  { title: 'Volunteer Applications', desc: 'New volunteer application submissions' },
                  { title: 'Monthly Reports', desc: 'Receive monthly summary reports' },
                  { title: 'System Alerts', desc: 'Important system notifications and updates' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                      <p className="text-xs text-neutral-600 font-light">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0F4C3A]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0F4C3A]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-neutral-200">
            {saved && (
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <CheckCircle className="w-4 h-4" />
                Changes saved successfully
              </div>
            )}
            <button className="px-6 py-2.5 border border-neutral-300 rounded-lg text-sm font-light hover:bg-neutral-50 transition-colors">
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-6 py-2.5 bg-[#0F4C3A] text-white rounded-lg text-sm font-light hover:bg-[#1A5744] transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}