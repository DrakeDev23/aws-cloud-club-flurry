import React from 'react';
import { useInView } from '../../hooks/useInView';

export default function LegacySection() {
    const [ref, inView] = useInView(0.1);

    return (
        <section ref={ref} className="py-24 px-6">
            <div className="max-w-[1100px] mx-auto">
                <div
                    className="mb-16"
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
                        Our Legacy
                    </span>
                    <h2
                        className="font-extrabold tracking-[-0.03em] text-[#0d2845] mb-2"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                        Defining the Standard
                    </h2>
                    <p className="text-[1rem] font-semibold" style={{ color: '#2577d4', opacity: 0.7 }}>
                        Since 2023
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateX(0)' : 'translateX(-24px)',
                            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
                        }}
                    >
                        <p className="text-[1.05rem] leading-[1.75] mb-6" style={{ color: '#3a6a8a' }}>
                            As a rising chapter of the AWS Cloud Club community, AWSCC Flurry has quickly set the benchmark for student led tech organizations. In our first year, we ignited a movement hosting cloud workshops, hackathons, and community events that brought real-world AWS skills directly to students.
                        </p>
                        <p className="text-[1.05rem] leading-[1.75]" style={{ color: '#3a6a8a' }}>
                            We bridge the critical gap between academic learning and industry level cloud expertise, connecting students with AWS professionals and global leaders to explore the future of cloud technology one hands on experience at a time.
                        </p>
                    </div>

                    <div
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateX(0)' : 'translateX(24px)',
                            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
                        }}
                    >
                        <div className="legacy-mission-card glass-card rounded-[20px] p-8 relative overflow-hidden cursor-pointer">
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                                background: 'linear-gradient(90deg, #2577d4, #0ea5e9)',
                            }} />
                            <div className="legacy-mission-glow" />
                            <div className="relative z-[2]">
                                <div className="legacy-mission-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                </div>
                                <p className="text-[1rem] leading-[1.75] italic mb-6" style={{ color: '#1a3f5f', fontWeight: 500 }}>
                                    "To empower students through education, skill development, and industry engagement, providing them with the tools and opportunities needed to excel in the digital economy."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div style={{
                                        width: 40, height: 2,
                                        background: 'linear-gradient(90deg, #2577d4, #0ea5e9)',
                                        borderRadius: 2,
                                    }} />
                                    <span className="text-[0.85rem] font-bold tracking-[0.08em] uppercase" style={{ color: '#2577d4' }}>
                                        Our Mission
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mt-6 rounded-[14px] px-6 py-4 flex items-center gap-3"
                            style={{
                                background: 'linear-gradient(135deg, #2577d4, #0ea5e9)',
                                boxShadow: '0 4px 20px rgba(37,119,212,0.3)',
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                            </svg>
                            <span className="text-white text-[0.95rem] font-bold">
                                Bridging Academia & Industry
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}