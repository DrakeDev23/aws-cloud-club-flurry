import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/aboutData';
import { useInView } from '../../hooks/useInView';

const mascot = '/images/mascot2.svg';

export default function HeroSection() {
    const [ref, inView] = useInView(0.05);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={ref} className="relative overflow-hidden min-h-[85vh] flex items-center">
            {heroSlides.map((src, i) => (
                <div
                    key={src}
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: currentSlide === i ? 1 : 0,
                        transition: 'opacity 1.2s ease-in-out',
                        transform: currentSlide === i ? 'scale(1.05)' : 'scale(1)',
                        transitionProperty: 'opacity, transform',
                        transitionDuration: '1.2s, 8s',
                        transitionTimingFunction: 'ease-in-out, ease-out',
                    }}
                />
            ))}

            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'linear-gradient(135deg, rgba(10,25,50,0.82) 0%, rgba(13,40,69,0.72) 40%, rgba(37,119,212,0.45) 100%)',
                }}
            />
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'linear-gradient(to top, rgba(10,25,50,0.6) 0%, transparent 40%)',
                }}
            />

            <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-[160px] lg:py-[180px] w-full flex flex-col items-center">
                <div
                    className="text-center"
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(32px)',
                        transition: 'opacity 0.9s ease, transform 0.9s ease',
                    }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold tracking-wide mb-6"
                        style={{
                            background: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'rgba(255,255,255,0.9)',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                        AWS Cloud Club · Flurry Chapter
                    </div>

                    <h1
                        className="font-extrabold leading-[1.08] mb-5 tracking-[-0.04em] text-white"
                        style={{ fontSize: 'clamp(2.8rem, 5vw, 4.4rem)', textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
                    >
                        Who{' '}
                        <span className="inline-block relative">
                            <img
                                src={mascot}
                                alt="AWSCC Mascot"
                                className="absolute pointer-events-none"
                                style={{
                                    width: 'clamp(80px, 10vw, 120px)',
                                    left: '50%',
                                    bottom: '85%',
                                    transform: 'translateX(-50%)',
                                    animation: 'mascot-float-hero 4s ease-in-out infinite',
                                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))',
                                    zIndex: 10,
                                }}
                            />
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #93d2ff 0%, #38bdf8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                We Are
                            </span>
                        </span>
                    </h1>

                    <p className="text-[1.15rem] leading-[1.65] mb-10 max-w-[520px] mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        We're a community of cloud learners, builders, and future leaders
                        united by a shared passion for technology. At AWSCC Flurry, we don't
                        just learn the cloud we build with it, together.
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center">
                        <Link
                            to="/events"
                            className="btn-glow inline-flex items-center gap-2 text-white px-8 py-[14px] rounded-[12px] text-[0.95rem] font-semibold"
                            style={{
                                background: '#2577d4',
                                boxShadow: '0 4px 20px rgba(37,119,212,0.45)',
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Browse Events
                        </Link>
                        <a
                            href="#offices"
                            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[12px] text-[0.9rem] font-medium hover:-translate-y-[2px] transition-all"
                            style={{
                                background: 'rgba(255,255,255,0.12)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.25)',
                                color: 'white',
                            }}
                        >
                            Meet the Offices
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex gap-2 mt-12 justify-center">
                    {heroSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            style={{
                                width: currentSlide === i ? 32 : 10,
                                height: 10,
                                borderRadius: 5,
                                border: 'none',
                                cursor: 'pointer',
                                background: currentSlide === i ? '#2577d4' : 'rgba(255,255,255,0.35)',
                                transition: 'all 0.4s ease',
                                boxShadow: currentSlide === i ? '0 0 12px rgba(37,119,212,0.6)' : 'none',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}