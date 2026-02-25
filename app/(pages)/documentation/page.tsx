'use client';

import { useState } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'pages', label: 'Pages & Routes' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'customization', label: 'Customization' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'support', label: 'Support' },
];

export default function DocumentationPage() {
  const [active, setActive] = useState('overview');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&family=Playfair+Display:wght@700&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .mono { font-family: 'DM Mono', monospace; }
        .serif { font-family: 'Playfair Display', serif; }
        .sidebar-link { transition: all 0.2s; }
        .sidebar-link:hover { color: #4ade80; padding-left: 4px; }
        .sidebar-link.active { color: #4ade80; border-left: 2px solid #4ade80; padding-left: 12px; }
        .code-block { background: #111; border: 1px solid #222; border-radius: 8px; padding: 16px; overflow-x: auto; }
        .badge { display: inline-flex; align-items: center; padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 500; }
        .section { scroll-margin-top: 80px; }
        .card { background: #111; border: 1px solid #1e1e1e; border-radius: 12px; padding: 24px; }
        .card:hover { border-color: #2e2e2e; }
        .tag { background: #0f2e1a; color: #4ade80; border: 1px solid #166534; border-radius: 6px; padding: 2px 8px; font-size: 12px; }
        .divider { border: none; border-top: 1px solid #1e1e1e; margin: 32px 0; }
        .step-num { width: 28px; height: 28px; background: #0f2e1a; border: 1px solid #166534; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4ade80; font-size: 13px; font-weight: 600; flex-shrink: 0; }
      `}</style>

      {/* Top Nav */}
      <header style={{ borderBottom: '1px solid #1e1e1e', background: '#0a0a0a', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, background: '#166534', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#4ade80', fontWeight: 700, fontSize: 14 }}>H</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16 }}>HOPE<span style={{ color: '#4ade80' }}>/26</span></span>
            <span style={{ color: '#444', margin: '0 4px' }}>/</span>
            <span style={{ color: '#888', fontSize: 14 }}>Documentation</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span className="badge" style={{ background: '#0f2e1a', color: '#4ade80', border: '1px solid #166534' }}>v1.0.0</span>
            <a href="/donate" style={{ background: '#166534', color: '#4ade80', padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Buy Template →</a>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 48 }}>

        {/* Sidebar */}
        <aside style={{ width: 220, flexShrink: 0, paddingTop: 40, position: 'sticky', top: 73, height: 'calc(100vh - 73px)', overflowY: 'auto' }}>
          <p style={{ color: '#555', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Contents</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActive(s.id)}
                className={`sidebar-link${active === s.id ? ' active' : ''}`}
                style={{ color: active === s.id ? '#4ade80' : '#888', fontSize: 14, padding: '6px 0 6px 14px', textDecoration: 'none', borderLeft: active === s.id ? '2px solid #4ade80' : '2px solid transparent' }}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <hr className="divider" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ color: '#555', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Tech Stack</p>
            {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React 18'].map(t => (
              <span key={t} className="tag" style={{ width: 'fit-content' }}>{t}</span>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, paddingTop: 40, paddingBottom: 80, maxWidth: 720 }}>

          {/* Overview */}
          <section id="overview" className="section">
            <div style={{ marginBottom: 8 }}>
              <span className="tag">Template</span>
            </div>
            <h1 className="serif" style={{ fontSize: 40, fontWeight: 700, marginTop: 12, marginBottom: 16, lineHeight: 1.2 }}>
              HOPE/26 <span style={{ color: '#4ade80' }}>NGO Template</span>
            </h1>
            <p style={{ color: '#888', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              A full-featured, production-ready website template built for nonprofits, NGOs, and charitable organizations. 
              Includes a public-facing website with 15+ pages and a complete admin dashboard with 10 management modules.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 40 }}>
              {[
                { label: 'Total Pages', value: '25+' },
                { label: 'Dashboard Modules', value: '10' },
                { label: 'Components', value: '30+' },
              ].map(stat => (
                <div key={stat.label} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: '#4ade80' }}>{stat.value}</div>
                  <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* Getting Started */}
          <section id="getting-started" className="section">
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Getting Started</h2>
            <p style={{ color: '#888', marginBottom: 24, lineHeight: 1.7 }}>Get up and running in under 5 minutes. You'll need Node.js 18+ installed.</p>

            {[
              {
                step: 1,
                title: 'Install dependencies',
                code: 'npm install',
              },
              {
                step: 2,
                title: 'Run the development server',
                code: 'npm run dev',
              },
              {
                step: 3,
                title: 'Open in your browser',
                code: 'http://localhost:3000',
              },
              {
                step: 4,
                title: 'Build for production',
                code: 'npm run build',
              },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
                <div className="step-num">{item.step}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 8, color: '#ccc' }}>{item.title}</p>
                  <div className="code-block mono" style={{ fontSize: 13, color: '#4ade80' }}>{item.code}</div>
                </div>
              </div>
            ))}

            <div style={{ background: '#0f1f17', border: '1px solid #166534', borderRadius: 10, padding: 16, marginTop: 24 }}>
              <p style={{ color: '#4ade80', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>💡 Requirements</p>
              <p style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>Node.js 18 or higher · npm 8+ · Git</p>
            </div>
          </section>

          <hr className="divider" />

          {/* Pages */}
          <section id="pages" className="section">
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Pages & Routes</h2>
            <p style={{ color: '#888', marginBottom: 24 }}>All pages are statically generated for maximum performance.</p>

            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Public Pages</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  ['/', 'Homepage — Hero, stats, programs, testimonials'],
                  ['/about', 'About — Mission, vision, history'],
                  ['/our-story', 'Our Story — Founding narrative'],
                  ['/projects', 'Projects — Filterable project grid'],
                  ['/impact', 'Impact — Statistics and outcomes'],
                  ['/team', 'Team — Leadership profiles'],
                  ['/leadership', 'Leadership — Board members'],
                  ['/blog', 'Blog — Articles and updates'],
                  ['/donate', 'Donate — Donation amounts and form'],
                  ['/contact', 'Contact — Contact form and info'],
                  ['/get-involved', 'Get Involved — Volunteer, intern, partner'],
                  ['/partners', 'Partners — Partner organizations'],
                  ['/careers', 'Careers — Job listings'],
                  ['/FAQ', 'FAQ — Common questions'],
                  ['/resources', 'Resources — Downloadable materials'],
                  ['/reports-research', 'Reports — Annual reports'],
                  ['/media-kit', 'Media Kit — Press resources'],
                  ['/transparency', 'Transparency — Financial info'],
                ].map(([route, desc]) => (
                  <div key={route} style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: '1px solid #161616', alignItems: 'center' }}>
                    <span className="mono" style={{ color: '#4ade80', fontSize: 13, minWidth: 180 }}>{route}</span>
                    <span style={{ color: '#666', fontSize: 13 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Legal Pages</p>
              {[['/privacy-policy', 'Privacy Policy'], ['/terms-of-use', 'Terms of Use'], ['/cookie-policy', 'Cookie Policy']].map(([r, d]) => (
                <div key={r} style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: '1px solid #161616' }}>
                  <span className="mono" style={{ color: '#4ade80', fontSize: 13, minWidth: 180 }}>{r}</span>
                  <span style={{ color: '#666', fontSize: 13 }}>{d}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* Dashboard */}
          <section id="dashboard" className="section">
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Dashboard</h2>
            <p style={{ color: '#888', marginBottom: 8, lineHeight: 1.7 }}>
              Access the admin dashboard at <span className="mono" style={{ color: '#4ade80', fontSize: 13 }}>/login</span>. 
              The dashboard includes 10 management modules for running your organization.
            </p>
            <p style={{ color: '#666', fontSize: 13, marginBottom: 24 }}>Note: The dashboard uses mock data. Connect your own backend or CMS to make it functional.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { route: '/dashboard', label: 'Overview', desc: 'Key stats, recent donations, active projects' },
                { route: '/dashboard/donations', label: 'Donations', desc: 'Track and manage all donations' },
                { route: '/dashboard/projects', label: 'Projects', desc: 'Project management and progress' },
                { route: '/dashboard/volunteers', label: 'Volunteers', desc: 'Volunteer roster and applications' },
                { route: '/dashboard/partners', label: 'Partners', desc: 'Partner organizations management' },
                { route: '/dashboard/content', label: 'Content', desc: 'Blog posts and media management' },
                { route: '/dashboard/communications', label: 'Communications', desc: 'Emails and announcements' },
                { route: '/dashboard/reports', label: 'Reports', desc: 'Analytics and financial reports' },
                { route: '/dashboard/team', label: 'Team', desc: 'Staff and admin user management' },
                { route: '/dashboard/settings', label: 'Settings', desc: 'Organization settings and config' },
              ].map(item => (
                <div key={item.route} className="card" style={{ padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 14 }}>{item.label}</span>
                    <span className="tag">{item.route.split('/').pop()}</span>
                  </div>
                  <p style={{ color: '#666', fontSize: 13 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* Customization */}
          <section id="customization" className="section">
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Customization</h2>
            <p style={{ color: '#888', marginBottom: 24, lineHeight: 1.7 }}>Everything is designed to be easily customizable. Here's where to make key changes.</p>

            {[
              {
                title: '🎨 Colors & Branding',
                desc: 'Update your brand colors in tailwind.config.ts or use CSS variables in globals.css. The primary green color is #0F4C3A.',
                code: `// tailwind.config.ts\ncolors: {\n  primary: '#0F4C3A',\n  accent: '#4ade80',\n}`,
              },
              {
                title: '🏢 Organization Name',
                desc: 'Replace "HOPE/26" with your organization name by searching across all files.',
                code: `// Find and replace globally\n"HOPE/26" → "YOUR ORG NAME"`,
              },
              {
                title: '📊 Dashboard Data',
                desc: 'All dashboard stats are mock data stored directly in each component. Replace with API calls to your backend.',
                code: `// Example: dashboard/page.tsx\nconst stats = {\n  donations: 248532, // ← replace with API call\n  projects: 47,\n  volunteers: 1248,\n}`,
              },
              {
                title: '🖼️ Images & Media',
                desc: 'Add your images to the /public folder and reference them in components.',
                code: `<Image src="/your-image.jpg"\n  alt="Description"\n  width={800} height={600} />`,
              },
            ].map(item => (
              <div key={item.title} className="card" style={{ marginBottom: 16 }}>
                <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>{item.title}</p>
                <p style={{ color: '#888', fontSize: 13, marginBottom: 12, lineHeight: 1.6 }}>{item.desc}</p>
                <div className="code-block mono" style={{ fontSize: 12, color: '#4ade80', whiteSpace: 'pre' }}>{item.code}</div>
              </div>
            ))}
          </section>

          <hr className="divider" />

          {/* Deployment */}
          <section id="deployment" className="section">
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Deployment</h2>
            <p style={{ color: '#888', marginBottom: 24, lineHeight: 1.7 }}>Deploy your site in minutes. We recommend Vercel for the best Next.js experience.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { platform: 'Vercel (Recommended)', steps: ['Push your code to GitHub', 'Go to vercel.com → New Project', 'Import your GitHub repo', 'Click Deploy — done!'] },
                { platform: 'Netlify', steps: ['Run npm run build', 'Drag the .next folder to Netlify', 'Or connect your GitHub repo'] },
                { platform: 'Self-hosted', steps: ['Run npm run build', 'Run npm start on your server', 'Use nginx as a reverse proxy'] },
              ].map(item => (
                <div key={item.platform} className="card">
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 12 }}>{item.platform}</p>
                  <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {item.steps.map((step, i) => (
                      <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ color: '#4ade80', fontWeight: 700, fontSize: 13 }}>{i + 1}.</span>
                        <span style={{ color: '#888', fontSize: 13 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* Support */}
          <section id="support" className="section">
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Support</h2>
            <p style={{ color: '#888', marginBottom: 24, lineHeight: 1.7 }}>Need help? Here's how to get support after purchasing the template.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { icon: '📧', title: 'Email Support', desc: 'Get help via email within 24-48 hours for setup and customization questions.' },
                { icon: '📄', title: 'License', desc: 'Single license for one project. Extended license available for multiple projects.' },
                { icon: '🔄', title: 'Updates', desc: 'Free updates for 6 months after purchase. Bug fixes are always free.' },
                { icon: '🎁', title: "What's Included", desc: 'Full source code, documentation, component library, and free minor updates.' },
              ].map(item => (
                <div key={item.title} className="card">
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{item.title}</p>
                  <p style={{ color: '#666', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: '#0f2e1a', border: '1px solid #166534', borderRadius: 12, padding: 24, marginTop: 24, textAlign: 'center' }}>
              <p style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Ready to get started?</p>
              <p style={{ color: '#888', fontSize: 14, marginBottom: 20 }}>Purchase includes full source code, this documentation, and 6 months of support.</p>
              <a href="/donate" style={{ background: '#4ade80', color: '#0a0a0a', padding: '12px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
                Purchase Template →
              </a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}