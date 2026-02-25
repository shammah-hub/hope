'use client';

import { useState } from 'react';
import { X, ChevronRight, UserPlus } from 'lucide-react';

interface AddVolunteerModalProps {
  onClose: () => void;
}

const skills = ['Teaching', 'Healthcare', 'Agriculture', 'Construction', 'Engineering', 'Technology', 'Marketing', 'Community Outreach', 'Medical Training', 'Project Management', 'Communications', 'Education'];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 13px',
  border: '1.5px solid #e5e5e5', borderRadius: '10px',
  fontSize: '13px', color: '#111', fontFamily: 'inherit',
  outline: 'none', boxSizing: 'border-box', background: 'white',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '11px', fontWeight: 600,
  color: '#555', marginBottom: '6px',
  letterSpacing: '0.06em', textTransform: 'uppercase' as const,
};

export default function AddVolunteerModal({ onClose }: AddVolunteerModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    location: '', country: '', skills: [] as string[],
    availability: '', motivation: '', status: 'pending'
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const toggleSkill = (skill: string) => {
    setForm(f => ({
      ...f,
      skills: f.skills.includes(skill)
        ? f.skills.filter(s => s !== skill)
        : [...f.skills, skill]
    }));
  };

  const handleCreate = () => {
    alert('Volunteer added!');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
      }} />

      {/* Modal */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'white', borderRadius: '20px',
        width: '100%', maxWidth: '580px',
        height: 'min(620px, calc(100vh - 32px))',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0F4C3A, #1a6b52)',
          padding: '22px 28px', flexShrink: 0,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.07,
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }} />
          <button onClick={onClose} style={{
            position: 'absolute', top: '16px', right: '16px', zIndex: 1,
            background: 'rgba(255,255,255,0.15)', border: 'none',
            borderRadius: '8px', padding: '5px', cursor: 'pointer',
            color: 'white', display: 'flex',
          }}>
            <X size={17} />
          </button>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
              Step {step} of 2
            </p>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 400, fontFamily: 'Georgia, serif', margin: 0 }}>
              {step === 1 ? 'Personal Information' : 'Skills & Availability'}
            </h2>
            <div style={{ display: 'flex', gap: '5px', marginTop: '12px' }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  height: '3px', width: s <= step ? '28px' : '14px',
                  background: s <= step ? 'white' : 'rgba(255,255,255,0.3)',
                  borderRadius: '2px', transition: 'all 0.3s',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 0 }}>
          {step === 1 ? (
            <>
              {/* Name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input value={form.firstName} onChange={e => set('firstName', e.target.value)}
                    placeholder="Maria" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input value={form.lastName} onChange={e => set('lastName', e.target.value)}
                    placeholder="Garcia" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                    placeholder="maria@email.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input value={form.phone} onChange={e => set('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Location & Country */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>City / Region *</label>
                  <input value={form.location} onChange={e => set('location', e.target.value)}
                    placeholder="New York" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Country *</label>
                  <input value={form.country} onChange={e => set('country', e.target.value)}
                    placeholder="USA" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Status */}
              <div>
                <label style={labelStyle}>Initial Status</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['pending', 'active'].map(s => (
                    <button key={s} type="button" onClick={() => set('status', s)} style={{
                      padding: '8px 18px', borderRadius: '20px', fontSize: '12px',
                      border: '1.5px solid',
                      borderColor: form.status === s ? '#0F4C3A' : '#e5e5e5',
                      background: form.status === s ? '#0F4C3A' : 'white',
                      color: form.status === s ? 'white' : '#555',
                      cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                      textTransform: 'capitalize',
                    }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Skills */}
              <div>
                <label style={labelStyle}>Skills * <span style={{ color: '#999', fontWeight: 400, textTransform: 'none' }}>(select all that apply)</span></label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skills.map(skill => (
                    <button key={skill} type="button" onClick={() => toggleSkill(skill)} style={{
                      padding: '6px 12px', borderRadius: '20px', fontSize: '12px',
                      border: '1.5px solid',
                      borderColor: form.skills.includes(skill) ? '#0F4C3A' : '#e5e5e5',
                      background: form.skills.includes(skill) ? '#0F4C3A' : 'white',
                      color: form.skills.includes(skill) ? 'white' : '#555',
                      cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                    }}>
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label style={labelStyle}>Availability</label>
                <select value={form.availability} onChange={e => set('availability', e.target.value)}
                  style={{ ...inputStyle, background: 'white' }}>
                  <option value="">Select availability</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time (weekdays)</option>
                  <option value="weekends">Weekends only</option>
                  <option value="remote">Remote only</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Motivation */}
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Motivation / Note</label>
                <textarea value={form.motivation} onChange={e => set('motivation', e.target.value)}
                  placeholder="Why do they want to volunteer? Any additional notes..."
                  style={{ ...inputStyle, resize: 'none', height: '80px' }}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>

              {/* Summary */}
              {form.firstName && (
                <div style={{
                  background: '#f0faf5', border: '1.5px solid #c8e6d0',
                  borderRadius: '12px', padding: '14px 16px',
                }}>
                  <p style={{ fontSize: '10px', color: '#0F4C3A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Summary</p>
                  <p style={{ fontSize: '15px', fontWeight: 500, color: '#111', fontFamily: 'Georgia, serif', marginBottom: '2px' }}>
                    {form.firstName} {form.lastName}
                  </p>
                  <p style={{ fontSize: '12px', color: '#666' }}>
                    {form.location}{form.country ? `, ${form.country}` : ''} · {form.skills.length} skill{form.skills.length !== 1 ? 's' : ''} selected
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 28px', flexShrink: 0,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid #f0f0f0', background: 'white',
        }}>
          <button onClick={() => step === 1 ? onClose() : setStep(1)} style={{
            padding: '10px 20px', borderRadius: '10px',
            border: '1.5px solid #e5e5e5', background: 'white',
            fontSize: '13px', color: '#555', cursor: 'pointer', fontFamily: 'inherit',
          }}>
            {step === 1 ? 'Cancel' : '← Back'}
          </button>

          <button onClick={() => step === 1 ? setStep(2) : handleCreate()} style={{
            padding: '10px 22px', borderRadius: '10px',
            border: 'none', background: '#0F4C3A',
            fontSize: '13px', color: 'white', cursor: 'pointer',
            fontFamily: 'inherit', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            {step === 1
              ? <><span>Continue</span><ChevronRight size={15} /></>
              : <><span>Add Volunteer</span><UserPlus size={15} /></>
            }
          </button>
        </div>
      </div>
    </div>
  );
}