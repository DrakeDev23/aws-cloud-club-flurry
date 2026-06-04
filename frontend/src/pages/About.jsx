import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParallaxClouds from '../components/ParallaxClouds';
import ScrollToTop from '../components/ScrollToTop';

const mascot = '/images/mascot2.svg';

const offices = [
    {
        id: 1,
        title: 'Executive',
        description: 'Steering the club\'s long-term vision and strategic direction, championing innovation and cultivating a culture where every member can grow.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="3" /><path d="M8 21v-1a4 4 0 0 1 8 0v1" /><path d="m17 5 2-2 2 2" /><path d="M19 3v8" />
            </svg>
        ),
        accent: '#2577d4',
        bg: 'rgba(37,119,212,0.08)',
    },
    {
        id: 2,
        title: 'Finance',
        description: 'Keeping our fiscal foundation rock-solid through smart budget allocation, financial planning, and ensuring every resource creates maximum impact.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        accent: '#0891b2',
        bg: 'rgba(8,145,178,0.08)',
    },
    {
        id: 3,
        title: 'Creatives',
        description: 'The visual heartbeat of AWSCC — crafting compelling brand identities, stunning materials, and visual stories that make the cloud world feel alive.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
        ),
        accent: '#7c3aed',
        bg: 'rgba(124,58,237,0.08)',
    },
    {
        id: 4,
        title: 'Operations',
        description: 'The engine behind every seamless event — ensuring internal workflows are lean, logistics are airtight, and the club runs like a well-architected system.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" /><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M22 12h-2" /><path d="M2 12h2" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" /><path d="m11 13.73-4 6.93" />
            </svg>
        ),
        accent: '#0d9488',
        bg: 'rgba(13,148,136,0.08)',
    },
    {
        id: 5,
        title: 'Relations',
        description: 'Building genuine bridges with communities, sponsors, and partners — amplifying our reach and deepening our impact across the region.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-1" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" />
            </svg>
        ),
        accent: '#ea580c',
        bg: 'rgba(234,88,12,0.08)',
    },
    {
        id: 6,
        title: 'Marketing',
        description: 'Amplifying the AWSCC story across every channel — from campaigns to content, driving awareness, engagement, and brand growth at every touchpoint.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 11 19-9-9 19-2-8-8-2z" />
            </svg>
        ),
        accent: '#db2777',
        bg: 'rgba(219,39,119,0.08)',
    },
    {
        id: 7,
        title: 'Technology',
        description: 'Building the digital backbone of our community — engineering secure, scalable tools and driving the hands-on technical culture that defines us.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        accent: '#16a34a',
        bg: 'rgba(22,163,74,0.08)',
    },
];

const stats = [
    { value: '200+', label: 'Active Members' },
    { value: '30+', label: 'Events Hosted' },
    { value: '7', label: 'Core Offices' },
    { value: '3+', label: 'Years Strong' },
];

const pillars = [
    {
        title: 'Our Mission',
        body: 'To empower students with real-world cloud skills through hands-on learning, community-driven projects, and AWS-backed resources — building the next generation of cloud professionals.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
            </svg>
        ),
        color: '#2577d4',
    },
    {
        title: 'Our Vision',
        body: 'A future where every student has access to cloud technology — and where Filipino tech talent leads innovation on the global stage, one certification at a time.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
            </svg>
        ),
        color: '#0ea5e9',
    },
    {
        title: 'Our Values',
        body: 'Collaboration over competition. Curiosity over comfort. Community over credentials. The best builders lift others as they rise — and that\'s exactly what we do.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        ),
        color: '#7c3aed',
    },
];

function useInView(threshold = 0.12) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

function OfficeCard({ office, index, inView }) {
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
                        padding: '28px 24px',
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

function HeroSection() {
    const [ref, inView] = useInView(0.05);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden pt-[140px] pb-[100px] lg:pt-[180px] px-6"
        >
            <div
                className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(ellipse, rgba(147,210,255,0.55) 0%, rgba(200,235,255,0.25) 45%, transparent 75%)',
                    filter: 'blur(40px)',
                }}
            />
            <div
                className="absolute bottom-0 right-[-5%] w-[500px] h-[300px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(ellipse, rgba(186,220,255,0.4) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
            />

            <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateX(0)' : 'translateX(-32px)',
                        transition: 'opacity 0.9s ease, transform 0.9s ease',
                    }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold tracking-wide mb-6"
                        style={{
                            background: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(147,210,255,0.5)',
                            color: '#1a60b8',
                            boxShadow: '0 2px 12px rgba(37,119,212,0.1)',
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                        AWS Cloud Club · Flurry Chapter
                    </div>

                    <h1
                        className="font-extrabold leading-[1.08] mb-5 tracking-[-0.04em] text-[#0d2845]"
                        style={{ fontSize: 'clamp(2.8rem, 5vw, 4.4rem)', textShadow: '0 2px 20px rgba(37,119,212,0.08)' }}
                    >
                        Who{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #1a60b8 0%, #38bdf8 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            We Are
                        </span>
                    </h1>

                    <p className="text-[1.15rem] leading-[1.65] mb-10 max-w-[520px]" style={{ color: '#4a7fa5' }}>
                        We're a community of cloud learners, builders, and future leaders
                        united by a shared passion for technology. At AWSCC Flurry, we don't
                        just learn the cloud — we build with it, together.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <Link
                            to="/events"
                            className="btn-glow inline-flex items-center gap-2 text-white px-8 py-[14px] rounded-[12px] text-[0.95rem] font-semibold"
                            style={{
                                background: '#2577d4',
                                boxShadow: '0 4px 20px rgba(37,119,212,0.35)',
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Browse Events
                        </Link>
                        <a
                            href="#offices"
                            className="glass-card inline-flex items-center gap-2 px-8 py-[14px] rounded-[12px] text-[0.9rem] font-medium text-[#1a60b8] hover:-translate-y-[2px] transition-all"
                        >
                            Meet the Offices
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateX(0)' : 'translateX(32px)',
                        transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
                    }}
                >
                    <div className="relative">
                        <div
                            className="absolute inset-0 rounded-[28px] pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at 60% 40%, rgba(147,210,255,0.5) 0%, transparent 70%)',
                                filter: 'blur(30px)',
                                transform: 'scale(1.1)',
                            }}
                        />
                        <div
                            className="relative glass-card rounded-[28px] p-8 overflow-visible"
                            style={{ border: '1px solid rgba(147,210,255,0.4)' }}
                        >
                            <img
                                src={mascot}
                                alt="AWSCC Mascot"
                                className="absolute pointer-events-none"
                                style={{
                                    width: 140,
                                    right: -20,
                                    top: -70,
                                    animation: 'mascot-float 4s ease-in-out infinite',
                                    filter: 'drop-shadow(0 8px 20px rgba(37,119,212,0.25))',
                                    zIndex: 10,
                                }}
                            />

                            <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-5" style={{ color: '#2577d4', opacity: 0.7 }}>
                                By the numbers
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((s, i) => (
                                    <div
                                        key={s.label}
                                        className="rounded-[16px] p-4"
                                        style={{ background: i % 2 === 0 ? 'rgba(37,119,212,0.06)' : 'rgba(147,210,255,0.1)', border: '1px solid rgba(147,210,255,0.2)' }}
                                    >
                                        <div className="font-extrabold text-[1.8rem] tracking-tight" style={{ color: '#0d2845', lineHeight: 1.1 }}>{s.value}</div>
                                        <div className="text-[0.78rem] font-medium mt-1" style={{ color: '#4a7fa5' }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="mt-5 rounded-[14px] px-4 py-3 flex items-center gap-3"
                                style={{ background: 'linear-gradient(135deg, #2577d4, #0ea5e9)', boxShadow: '0 4px 16px rgba(37,119,212,0.3)' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                                </svg>
                                <span className="text-white text-[0.85rem] font-semibold">Est. 2022 · Philippines</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MissionSection() {
    const [ref, inView] = useInView(0.1);

    return (
        <section ref={ref} className="py-24 px-6">
            <div className="max-w-[1100px] mx-auto">
                <div
                    className="text-center mb-14"
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <span
                        className="inline-block text-[0.75rem] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-4"
                        style={{ background: 'rgba(37,119,212,0.1)', color: '#1a60b8', border: '1px solid rgba(37,119,212,0.2)' }}
                    >
                        What Drives Us
                    </span>
                    <h2
                        className="font-extrabold tracking-[-0.03em] text-[#0d2845]"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                        Purpose-built for builders
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((p, i) => (
                        <div
                            key={p.title}
                            className="glass-card rounded-[20px] p-8 relative overflow-hidden"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                                transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
                                border: `1px solid ${p.color}22`,
                            }}
                        >
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                                background: `linear-gradient(90deg, ${p.color}, ${p.color}88)`,
                            }} />
                            <div
                                className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-5"
                                style={{ background: `${p.color}15`, color: p.color }}
                            >
                                {p.icon}
                            </div>
                            <h3 className="font-bold text-[1.1rem] text-[#0d2845] mb-3">{p.title}</h3>
                            <p className="text-[0.9rem] leading-[1.7]" style={{ color: '#4a7fa5' }}>{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OfficesSection() {
    const [ref, inView] = useInView(0.04);

    return (
        <section id="offices" ref={ref} className="py-24 px-6">
            <div className="max-w-[1100px] mx-auto">
                <div
                    className="text-center mb-14"
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <span
                        className="inline-block text-[0.75rem] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-4"
                        style={{ background: 'rgba(37,119,212,0.1)', color: '#1a60b8', border: '1px solid rgba(37,119,212,0.2)' }}
                    >
                        Our Structure
                    </span>
                    <h2
                        className="font-extrabold tracking-[-0.03em] text-[#0d2845] mb-4"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                        Meet the Offices
                    </h2>
                    <p className="text-[1rem] max-w-[480px] mx-auto" style={{ color: '#4a7fa5' }}>
                        Seven specialized teams. One unified mission. Hover each card to learn what each office does.
                    </p>
                </div>

                <div
                    className="grid gap-5"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
                >
                    {offices.map((office, i) => (
                        <OfficeCard key={office.id} office={office} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const mascot1 = '/images/mascot1.svg';

function CTASection() {
    return (
        <div className="relative z-[6] px-6 pb-24 pt-10">
            <section
                className="relative rounded-[24px] overflow-hidden mx-auto shadow-[0_20px_60px_rgba(37,119,212,0.2)]"
                style={{
                    background: 'linear-gradient(135deg, #1a4fa8 0%, #2577d4 35%, #0ea5e9 65%, #7c3aed 100%)',
                    backgroundSize: '300% 300%',
                    animation: 'shimmer-bg 8s ease infinite',
                }}
            >
                <div className="absolute top-[-30px] left-[-40px] w-[220px] h-[100px] opacity-20 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, white 0%, transparent 70%)', filter: 'blur(20px)' }} />
                <div className="absolute bottom-[-20px] right-[10%] w-[180px] h-[80px] opacity-15 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, white 0%, transparent 70%)', filter: 'blur(18px)' }} />
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)' }} />

                <div className="max-w-[1000px] mx-auto text-white flex flex-col-reverse md:flex-row justify-between items-stretch gap-0 md:gap-10">
                    <div className="flex-1 flex flex-col justify-center relative z-[2] px-8 pt-0 pb-12 max-[450px]:px-5 max-[450px]:pb-10 md:py-[70px]">
                        <span
                            className="inline-block text-[0.75rem] font-bold tracking-[0.15em] uppercase mb-4 px-3 py-1 rounded-full w-fit"
                            style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
                        >
                            Get Started Today
                        </span>
                        <h2 className="text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold leading-[1.15] mb-5">
                            Ready to Build<br />the Future?
                        </h2>
                        <p className="text-[1.1rem] mb-10 leading-[1.6]" style={{ color: 'rgba(255,255,255,0.85)' }}>
                            Join AWS Cloud Club Flurry today and accelerate your cloud journey with hands-on experience.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                to="/events"
                                className="btn-glow inline-flex items-center gap-2 px-[32px] py-[12px] rounded-[10px] text-[0.95rem] font-semibold transition-all"
                                style={{ background: 'rgba(255,255,255,1)', color: '#1a4fa8', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                                </svg>
                                Browse Events
                            </Link>
                            <button
                                className="inline-flex items-center gap-2 px-[32px] py-[12px] rounded-[10px] text-[0.9rem] font-medium transition-all hover:-translate-y-[2px]"
                                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.35)', color: 'white' }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-end flex-none w-full h-[240px] md:w-[320px] md:h-auto overflow-hidden md:overflow-visible pr-0 md:pr-8">
                        <img
                            src={mascot1}
                            alt="Mascot"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[300px] max-w-[70%] md:max-w-none h-auto z-[1] pointer-events-none"
                            style={{ animation: 'mascot-float 3.5s ease-in-out infinite', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.3))' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function AboutPage() {
    return (
        <div
            className="min-h-screen relative"
            style={{ fontFamily: "'League Spartan', 'Inter', sans-serif", color: '#0d2845' }}
        >
            <ParallaxClouds />

            <Navbar />

            <main className="relative z-[1]">
                <HeroSection />
                <MissionSection />
                <OfficesSection />
                <CTASection />
            </main>

            <Footer />
            <ScrollToTop />

            <style>{`
        /* ── Flip card ── */
        .flip-card-wrapper {
          perspective: 1000px;
          height: 220px;
        }
        .flip-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .flip-card-wrapper:hover .flip-card {
          transform: rotateY(180deg);
        }
        .flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .flip-back {
          transform: rotateY(180deg);
        }

        /* ── Shared with Landing ── */
        @keyframes mascot-float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes shimmer-bg {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </div>
    );
}