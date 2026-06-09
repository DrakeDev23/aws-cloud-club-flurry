import React from 'react';
import { Link } from 'react-router-dom';

const mascot1 = '/images/mascot1.svg';

export default function CTASection() {
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