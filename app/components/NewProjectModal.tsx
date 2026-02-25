'use client';

import { useState } from 'react';
import { X, ChevronRight, Plus } from 'lucide-react';

interface NewProjectModalProps {
  onClose: () => void;
}

const categories = ['Education', 'Healthcare', 'Water & Sanitation', 'Agriculture', 'Economic Development', 'Infrastructure'];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 13px',
  border: '1.5px solid #e5e5e5', borderRadius: '10px',
  fontSize: '13px', color: '#111', fontFamily: 'inherit',
  outline: 'none', boxSizing: 'border-box',
  background: 'white',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '11px', fontWeight: 600,
  color: '#555', marginBottom: '6px',
  letterSpacing: '0.06em', textTransform: 'uppercase' as const,
};

export default function NewProjectModal({ onClose }: NewProjectModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', category: '', location: '', country: '',
    budget: '', startDate: '', endDate: '',
    beneficiaries: '', teamSize: '', description: '', status: 'active'
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleCreate = () => {
    // Replace with real API call
    alert('Project created!');
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

      {/* Modal — fixed height, no scroll */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'white',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '580px',
        height: 'min(620px, calc(100vh - 32px))',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}>

        {/* Header — fixed */}
        <div style={{
          background: 'linear-gradient(135deg, #0F4C3A, #1a6b52)',
          padding: '22px 28px',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.07,
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }} />
          <button onClick={onClose} style={{
            position: 'absolute', top: '16px', right: '16px', zIndex: 1,
            background: 'rgba(255,255,255,0.15)', border: 'none',
            borderRadius: '8px', padding: '5px', cursor: 'pointer', color: 'white',
            display: 'flex',
          }}>
            <X size={17} />
          </button>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
              Step {step} of 2
            </p>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 400, fontFamily: 'Georgia, serif', margin: 0 }}>
              {step === 1 ? 'Project Details' : 'Budget & Timeline'}
            </h2>
            <div style={{ display: 'flex', gap: '5px', marginTop: '12px' }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  height: '3px',
                  width: s <= step ? '28px' : '14px',
                  background: s <= step ? 'white' : 'rgba(255,255,255,0.3)',
                  borderRadius: '2px', transition: 'all 0.3s',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Body — fills remaining space, no overflow */}
        <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: 0 }}>
          {step === 1 ? (
            <>
              {/* Project Name */}
              <div>
                <label style={labelStyle}>Project Name *</label>
                <input
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  placeholder="e.g. Rural Education Initiative"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'}
                />
              </div>

              {/* Category pills */}
              <div>
                <label style={labelStyle}>Category *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {categories.map(cat => (
                    <button key={cat} type="button" onClick={() => set('category', cat)} style={{
                      padding: '6px 12px', borderRadius: '20px', fontSize: '12px',
                      border: '1.5px solid',
                      borderColor: form.category === cat ? '#0F4C3A' : '#e5e5e5',
                      background: form.category === cat ? '#0F4C3A' : 'white',
                      color: form.category === cat ? 'white' : '#555',
                      cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                    }}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Region / City *</label>
                  <input value={form.location} onChange={e => set('location', e.target.value)}
                    placeholder="e.g. Kisumu County" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Country *</label>
                  <input value={form.country} onChange={e => set('country', e.target.value)}
                    placeholder="e.g. Kenya" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Description */}
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Description</label>
                <textarea value={form.description} onChange={e => set('description', e.target.value)}
                  placeholder="Briefly describe the project goals and impact..."
                  style={{ ...inputStyle, resize: 'none', height: '72px' }}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>
            </>
          ) : (
            <>
              {/* Budget & Beneficiaries */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Total Budget ($) *</label>
                  <input type="number" value={form.budget} onChange={e => set('budget', e.target.value)}
                    placeholder="250000" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Beneficiaries *</label>
                  <input type="number" value={form.beneficiaries} onChange={e => set('beneficiaries', e.target.value)}
                    placeholder="1200" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Dates */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Start Date *</label>
                  <input type="date" value={form.startDate} onChange={e => set('startDate', e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>End Date *</label>
                  <input type="date" value={form.endDate} onChange={e => set('endDate', e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Team & Status */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Team Size</label>
                  <input type="number" value={form.teamSize} onChange={e => set('teamSize', e.target.value)}
                    placeholder="8" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Initial Status</label>
                  <select value={form.status} onChange={e => set('status', e.target.value)}
                    style={{ ...inputStyle, background: 'white' }}>
                    <option value="active">Active</option>
                    <option value="delayed">Delayed</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Summary card */}
              <div style={{
                flex: 1,
                background: '#f0faf5', border: '1.5px solid #c8e6d0',
                borderRadius: '12px', padding: '14px 16px',
              }}>
                <p style={{ fontSize: '10px', color: '#0F4C3A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Summary
                </p>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#111', marginBottom: '2px', fontFamily: 'Georgia, serif' }}>
                  {form.name || '—'}
                </p>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                  {form.category || '—'} · {form.location}{form.country ? `, ${form.country}` : ''}
                </p>
                {form.budget && (
                  <p style={{ fontSize: '12px', color: '#0F4C3A', fontWeight: 600 }}>
                    ${Number(form.budget).toLocaleString()} budget · {form.beneficiaries || '—'} beneficiaries
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer — fixed at bottom */}
        <div style={{
          padding: '16px 28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid #f0f0f0',
          flexShrink: 0,
          background: 'white',
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
            {step === 1 ? <><span>Continue</span><ChevronRight size={15} /></> : <><span>Create Project</span><Plus size={15} /></>}
          </button>
        </div>
      </div>
    </div>
  );
}