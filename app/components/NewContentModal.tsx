'use client';

import { useState } from 'react';
import { X, ChevronRight, Plus } from 'lucide-react';

interface NewContentModalProps {
  onClose: () => void;
}

const contentTypes = ['Blog Post', 'Report', 'Case Study', 'Video', 'Newsletter', 'Press Release'];

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

export default function NewContentModal({ onClose }: NewContentModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: '', type: '', author: '', tags: '',
    publishDate: '', status: 'draft', summary: '', featuredImage: ''
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleCreate = () => {
    alert('Content created!');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }}>
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
      }} />

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
              {step === 1 ? 'Content Details' : 'Publishing Settings'}
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
              <div>
                <label style={labelStyle}>Title *</label>
                <input value={form.title} onChange={e => set('title', e.target.value)}
                  placeholder="e.g. How Education Transformed Rural Kenya" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>

              <div>
                <label style={labelStyle}>Content Type *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {contentTypes.map(type => (
                    <button key={type} type="button" onClick={() => set('type', type)} style={{
                      padding: '6px 12px', borderRadius: '20px', fontSize: '12px',
                      border: '1.5px solid',
                      borderColor: form.type === type ? '#0F4C3A' : '#e5e5e5',
                      background: form.type === type ? '#0F4C3A' : 'white',
                      color: form.type === type ? 'white' : '#555',
                      cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                    }}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Author *</label>
                  <input value={form.author} onChange={e => set('author', e.target.value)}
                    placeholder="Lisa Washington" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Tags</label>
                  <input value={form.tags} onChange={e => set('tags', e.target.value)}
                    placeholder="education, kenya, impact" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Summary / Excerpt</label>
                <textarea value={form.summary} onChange={e => set('summary', e.target.value)}
                  placeholder="A brief summary of the content..."
                  style={{ ...inputStyle, resize: 'none', height: '80px' }}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Publish Date</label>
                  <input type="date" value={form.publishDate} onChange={e => set('publishDate', e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Status</label>
                  <select value={form.status} onChange={e => set('status', e.target.value)}
                    style={{ ...inputStyle, background: 'white' }}>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Featured Image URL</label>
                <input value={form.featuredImage} onChange={e => set('featuredImage', e.target.value)}
                  placeholder="https://..." style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>

              {/* Status selector */}
              <div>
                <label style={labelStyle}>Visibility</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['Public', 'Members Only', 'Private'].map(v => (
                    <button key={v} type="button" style={{
                      flex: 1, padding: '8px', borderRadius: '10px', fontSize: '12px',
                      border: '1.5px solid #e5e5e5', background: 'white',
                      color: '#555', cursor: 'pointer', fontFamily: 'inherit',
                      transition: 'all 0.15s',
                    }}
                      onMouseOver={e => (e.currentTarget.style.borderColor = '#0F4C3A')}
                      onMouseOut={e => (e.currentTarget.style.borderColor = '#e5e5e5')}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {form.title && (
                <div style={{
                  flex: 1,
                  background: '#f0faf5', border: '1.5px solid #c8e6d0',
                  borderRadius: '12px', padding: '14px 16px',
                }}>
                  <p style={{ fontSize: '10px', color: '#0F4C3A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Summary</p>
                  <p style={{ fontSize: '15px', fontWeight: 500, color: '#111', fontFamily: 'Georgia, serif', marginBottom: '2px' }}>{form.title}</p>
                  <p style={{ fontSize: '12px', color: '#666' }}>
                    {form.type || '—'} · By {form.author || '—'} · {form.status}
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
            border: 'none', background: '#0F4C3A', fontSize: '13px',
            color: 'white', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            {step === 1 ? <><span>Continue</span><ChevronRight size={15} /></> : <><span>Create Content</span><Plus size={15} /></>}
          </button>
        </div>
      </div>
    </div>
  );
}