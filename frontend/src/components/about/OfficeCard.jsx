import React from 'react';

export default function OfficeCard({ office, index, inView }) {
    return (
        <div
            className="flip-card-wrapper"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
            }}
        >
            <div className="flip-card">
                <div className="flip-face flip-front glass-card" style={{ borderRadius: 20 }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 20, right: 20, height: 3,
                        borderRadius: '0 0 4px 4px',
                        background: `linear-gradient(90deg, transparent, ${office.accent}, transparent)`,
                        opacity: 0.6,
                    }} />
                    <div style={{
                        width: 56, height: 56, borderRadius: 16,
                        background: office.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: office.accent,
                        marginBottom: 16,
                        border: `1px solid ${office.accent}25`,
                    }}>
                        {office.frontIcon}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0d2845', marginBottom: 8 }}>
                        {office.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#2577d4', fontWeight: 600, opacity: 0.7 }}>
                        Hover to learn more
                    </p>
                </div>

                <div
                    className="flip-face flip-back"
                    style={{
                        borderRadius: 20,
                        background: `linear-gradient(145deg, ${office.accent}ee, ${office.accent}bb)`,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'flex-start', justifyContent: 'space-between',
                        padding: '22px 20px',
                    }}
                >
                    <div>
                        <div style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
                            {office.frontIcon}
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginBottom: 12 }}>
                            {office.title}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65 }}>
                            {office.description}
                        </p>
                    </div>
                    <div style={{
                        marginTop: 20, fontSize: '0.78rem', fontWeight: 700,
                        color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em',
                    }}>
                        AWSCC · Flurry
                    </div>
                </div>
            </div>
        </div>
    );
}