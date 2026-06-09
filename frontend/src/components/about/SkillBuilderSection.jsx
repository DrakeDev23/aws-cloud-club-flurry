import React, { useEffect, useRef } from 'react';
import SkillCard from './SkillCard';
import { skillDepartments } from '../../data/aboutData';
import { useInView } from '../../hooks/useInView';

export default function SkillBuilderSection() {
    const [ref, inView] = useInView(0.06);
    const trackRef = useRef(null);
    const animFrameRef = useRef(null);
    const offsetRef = useRef(0);
    const pausedRef = useRef(false);
    const SPEED = 0.45;

    const doubled = [...skillDepartments, ...skillDepartments];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const halfWidth = track.scrollWidth / 2;

        const tick = () => {
            if (!pausedRef.current) {
                offsetRef.current += SPEED;
                if (offsetRef.current >= halfWidth) {
                    offsetRef.current -= halfWidth;
                }
                track.style.transform = `translateX(-${offsetRef.current}px)`;
            }
            animFrameRef.current = requestAnimationFrame(tick);
        };

        animFrameRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, []);

    return (
        <section ref={ref} className="py-24 overflow-hidden">
            <div
                className="max-w-[1100px] mx-auto px-6 mb-14 text-center"
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.7s ease, transform 0.7s ease',
                }}
            >
                <span
                    className="inline-block text-[0.75rem] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-4"
                    style={{
                        background: 'rgba(37,119,212,0.1)',
                        color: '#1a60b8',
                        border: '1px solid rgba(37,119,212,0.2)',
                    }}
                >
                    Skill Builder
                </span>
                <h2
                    className="font-extrabold tracking-[-0.03em] text-[#0d2845] mb-4"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                    Grow in Every Direction
                </h2>
                <p
                    className="text-[1rem] max-w-[500px] mx-auto leading-[1.7]"
                    style={{ color: '#4a7fa5' }}
                >
                    Whether you code, design, lead, or write there's a path here built
                    for you. Explore the departments shaping the next generation of cloud
                    builders.
                </p>
            </div>

            <div
                className="relative"
                onMouseEnter={() => { pausedRef.current = true; }}
                onMouseLeave={() => { pausedRef.current = false; }}
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
            >
                <div
                    ref={trackRef}
                    className="flex gap-5 will-change-transform"
                    style={{ width: 'max-content' }}
                >
                    {doubled.map((dept, i) => (
                        <SkillCard key={`${dept.id}-${i}`} dept={dept} inView={inView} index={i % skillDepartments.length} />
                    ))}
                </div>
            </div>
        </section>
    );
}