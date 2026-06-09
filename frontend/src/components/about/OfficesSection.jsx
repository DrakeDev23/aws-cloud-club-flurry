import React from 'react';
import OfficeCard from './OfficeCard';
import { offices } from '../../data/aboutData';
import { useInView } from '../../hooks/useInView';

export default function OfficesSection() {
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