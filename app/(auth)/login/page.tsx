'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: #b0b0a8; }
        input:focus { outline: none; border-color: #0F4C3A !important; }
        .login-btn:hover { background: #1a6b52 !important; }
        .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.8s linear infinite; }

        /* Mobile: stack vertically */
        @media (max-width: 640px) {
          .layout-wrapper {
            flex-direction: column !important;
          }
          .left-panel {
            width: 100% !important;
            min-height: unset !important;
            height: auto !important;
            padding: 20px 24px !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
          }
          .left-panel-tagline {
            display: none !important;
          }
          .right-panel {
            flex: 1 !important;
            padding: 32px 24px 40px !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
          }
        }

        /* Tablet: narrower left panel */
        @media (min-width: 641px) and (max-width: 900px) {
          .left-panel {
            width: 280px !important;
          }
          .right-panel {
            padding: 0 40px !important;
          }
        }
      `}</style>

      <div className="layout-wrapper" style={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#fff',
      }}>

        {/* LEFT — Green gradient panel */}
        <div className="left-panel" style={{
          width: '420px',
          flexShrink: 0,
          background: 'radial-gradient(ellipse at 30% 30%, #4aad7a 0%, #1a7a50 30%, #0F4C3A 65%, #082e22 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '28px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle noise overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }} />

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Heart size={16} color="white" fill="white" />
            </div>
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 500, letterSpacing: '0.03em' }}>HOPE/26</span>
          </div>

          {/* Bottom tagline — hidden on mobile via CSS */}
          <div className="left-panel-tagline" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', fontWeight: 300, marginBottom: '8px' }}>
              You're making a difference
            </p>
            <p style={{
              color: 'white',
              fontSize: '22px',
              fontFamily: "'DM Serif Display', serif",
              lineHeight: 1.3,
              fontWeight: 400,
            }}>
              Empowering communities across 45 countries.
            </p>
          </div>
        </div>

        {/* RIGHT — Form panel */}
        <div className="right-panel" style={{
          flex: 1,
          padding: '0 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxWidth: '560px',
          margin: '0 auto',
          backgroundColor: '#fff',
        }}>
          {/* Asterisk accent */}
          <div style={{ color: '#0F4C3A', fontSize: '26px', fontWeight: 300, marginBottom: '10px', lineHeight: 1 }}>✦</div>

          <h1 style={{
            fontSize: '26px',
            fontWeight: 500,
            color: '#111',
            marginBottom: '6px',
            letterSpacing: '-0.02em',
          }}>
            Welcome back
          </h1>
          <p style={{ fontSize: '13px', color: '#888', fontWeight: 300, marginBottom: '28px', lineHeight: 1.5 }}>
            Sign in to your admin dashboard and manage your impact.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#444', fontWeight: 400, marginBottom: '6px' }}>
                Your email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hopefoundation.org"
                style={{
                  width: '100%', padding: '10px 12px',
                  border: '1px solid #ddd', borderRadius: '8px',
                  fontSize: '13px', color: '#111', fontWeight: 300,
                  fontFamily: 'inherit', transition: 'border-color 0.2s',
                }}
              />
            </div>

            {/* Password */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '12px', color: '#444', fontWeight: 400 }}>Password</label>
                <Link href="/forgot-password" style={{ fontSize: '12px', color: '#0F4C3A', textDecoration: 'none' }}>
                  Forgot?
                </Link>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{
                    width: '100%', padding: '10px 36px 10px 12px',
                    border: '1px solid #ddd', borderRadius: '8px',
                    fontSize: '13px', color: '#111', fontWeight: 300,
                    fontFamily: 'inherit', transition: 'border-color 0.2s',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#aaa',
                  }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#0F4C3A', width: '14px', height: '14px' }}
              />
              <label htmlFor="remember" style={{ fontSize: '12px', color: '#666', fontWeight: 300 }}>Remember me</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="login-btn"
              style={{
                marginTop: '6px',
                width: '100%', padding: '12px',
                background: '#0F4C3A', color: 'white',
                border: 'none', borderRadius: '8px',
                fontSize: '13px', fontWeight: 500,
                fontFamily: 'inherit', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'background 0.2s',
              }}
            >
              {isLoading ? (
                <>
                  <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Signing in...
                </>
              ) : (
                <>Sign in to Dashboard <ArrowRight size={15} /></>
              )}
            </button>
          </form>

          <p style={{ marginTop: '20px', width: '100%', textAlign: 'center', fontSize: '12px', color: '#999', fontWeight: 300 }}>
            Don't have an account?{' '}
            <Link href="/contact" style={{ color: '#0F4C3A', fontWeight: 500, textDecoration: 'none' }}>
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}