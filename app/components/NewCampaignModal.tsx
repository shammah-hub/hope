'use client';

import { useState } from 'react';
import { X, ChevronRight, Send } from 'lucide-react';

interface NewCampaignModalProps {
  onClose: () => void;
}

const audienceTypes = ['All Subscribers', 'Donors', 'Volunteers', 'Partners', 'Newsletter', 'Custom Segment'];

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

export default function NewCampaignModal({ onClose }: NewCampaignModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', subject: '', audience: '', sendDate: '',
    sendTime: '', fromName: '', replyTo: '',
    previewText: '', status: 'draft'
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleCreate = () => {
    alert('Campaign created!');
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
              {step === 1 ? 'Campaign Details' : 'Audience & Schedule'}
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
                <label style={labelStyle}>Campaign Name *</label>
                <input value={form.name} onChange={e => set('name', e.target.value)}
                  placeholder="e.g. Monthly Newsletter - March" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>

              <div>
                <label style={labelStyle}>Email Subject Line *</label>
                <input value={form.subject} onChange={e => set('subject', e.target.value)}
                  placeholder="e.g. See the impact you've made this month" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>

              <div>
                <label style={labelStyle}>Preview Text</label>
                <input value={form.previewText} onChange={e => set('previewText', e.target.value)}
                  placeholder="Short text shown after subject in inbox..." style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                  onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>From Name *</label>
                  <input value={form.fromName} onChange={e => set('fromName', e.target.value)}
                    placeholder="HOPE/26 Team" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Reply-To Email</label>
                  <input type="email" value={form.replyTo} onChange={e => set('replyTo', e.target.value)}
                    placeholder="hello@hopefoundation.org" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Status toggle */}
              <div>
                <label style={labelStyle}>Save as</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['draft', 'scheduled'].map(s => (
                    <button key={s} type="button" onClick={() => set('status', s)} style={{
                      flex: 1, padding: '8px', borderRadius: '10px', fontSize: '12px',
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
              <div>
                <label style={labelStyle}>Target Audience *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {audienceTypes.map(type => (
                    <button key={type} type="button" onClick={() => set('audience', type)} style={{
                      padding: '6px 12px', borderRadius: '20px', fontSize: '12px',
                      border: '1.5px solid',
                      borderColor: form.audience === type ? '#0F4C3A' : '#e5e5e5',
                      background: form.audience === type ? '#0F4C3A' : 'white',
                      color: form.audience === type ? 'white' : '#555',
                      cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                    }}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Send Date</label>
                  <input type="date" value={form.sendDate} onChange={e => set('sendDate', e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
                <div>
                  <label style={labelStyle}>Send Time</label>
                  <input type="time" value={form.sendTime} onChange={e => set('sendTime', e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0F4C3A'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'} />
                </div>
              </div>

              {/* Estimated reach */}
              {form.audience && (
                <div style={{
                  background: '#f5f0ff', border: '1.5px solid #d4c8f5',
                  borderRadius: '12px', padding: '14px 16px',
                }}>
                  <p style={{ fontSize: '10px', color: '#6b46c1', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Estimated Reach</p>
                  <p style={{ fontSize: '22px', fontWeight: 400, fontFamily: 'Georgia, serif', color: '#111' }}>
                    {form.audience === 'All Subscribers' ? '15,240' :
                     form.audience === 'Donors' ? '8,450' :
                     form.audience === 'Volunteers' ? '1,248' :
                     form.audience === 'Partners' ? '47' : '~5,000'} recipients
                  </p>
                </div>
              )}

              {form.name && (
                <div style={{
                  flex: 1,
                  background: '#f0faf5', border: '1.5px solid #c8e6d0',
                  borderRadius: '12px', padding: '14px 16px',
                }}>
                  <p style={{ fontSize: '10px', color: '#0F4C3A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Summary</p>
                  <p style={{ fontSize: '15px', fontWeight: 500, color: '#111', fontFamily: 'Georgia, serif', marginBottom: '2px' }}>{form.name}</p>
                  <p style={{ fontSize: '12px', color: '#666' }}>
                    {form.audience || '—'} · {form.status}
                    {form.sendDate ? ` · ${form.sendDate}` : ''}
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
            {step === 1 ? <><span>Continue</span><ChevronRight size={15} /></> : <><span>Create Campaign</span><Send size={15} /></>}
          </button>
        </div>
      </div>
    </div>
  );
}