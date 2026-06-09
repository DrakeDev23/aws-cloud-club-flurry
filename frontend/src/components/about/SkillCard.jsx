import React from 'react';

export default function SkillCard({ dept, inView, index }) {
    return (
        <div
            className="flex-shrink-0 w-72 p-8 rounded-2xl flex flex-col items-center text-center
                        cursor-default select-none
                        transition-transform duration-300 ease-out hover:scale-[1.03]"
            style={{
                opacity: inView ? 1 : 0,
                transition: `opacity 0.6s ease ${index * 60}ms, transform 0.3s ease`,
                border: '1px solid rgba(37,119,212,0.12)',
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0 2px 16px rgba(13,40,69,0.06)',
            }}
        >
            <div
                className="mb-5 flex items-center justify-center rounded-2xl"
                style={{
                    width: 60, height: 60,
                    background: 'rgba(37,119,212,0.08)',
                    color: '#2577d4',
                    border: '1px solid rgba(37,119,212,0.15)',
                }}
            >
                {dept.icon}
            </div>

            <h3
                className="font-bold tracking-wide mb-3"
                style={{ fontSize: '1.05rem', color: '#0d2845' }}
            >
                {dept.title}
            </h3>

            <p
                className="text-sm leading-[1.7]"
                style={{ color: '#4a7fa5', opacity: 0.9 }}
            >
                {dept.description}
            </p>
        </div>
    );
}