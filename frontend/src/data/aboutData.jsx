export const heroSlides = [
    '/images/event1.png',
    '/images/event2.jpg',
    '/images/event3.png',
];

export const offices = [
    {
        id: 1,
        title: 'Executive',
        description: 'Steering the club\'s long term vision and strategic direction, championing innovation and cultivating a culture where every member can grow.',
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
        description: 'Keeping our fiscal foundation rock solid through smart budget allocation, financial planning, and ensuring every resource creates maximum impact.',
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
        description: 'The visual heartbeat of AWSCC crafting compelling brand identities, stunning materials, and visual stories that make the cloud world feel alive.',
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
        description: 'The engine behind every seamless event ensuring internal workflows are lean, logistics are airtight, and the club runs like a well architected system.',
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
        description: 'Building genuine bridges with communities, sponsors, and partners amplifying our reach and deepening our impact across the region.',
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
        description: 'Amplifying the AWSCC story across every channel from campaigns to content, driving awareness, engagement, and brand growth at every touchpoint.',
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
        description: 'Building the digital backbone of our community engineering secure, scalable tools and driving the hands on technical culture that defines us.',
        frontIcon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        accent: '#16a34a',
        bg: 'rgba(22,163,74,0.08)',
    },
];

export const skillDepartments = [
    {
        id: 1,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
        ),
        title: 'Cloud Architecture',
        description: 'Design and deploy scalable, fault-tolerant infrastructure on AWS using industry best practices.',
    },
    {
        id: 2,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'Software Engineering',
        description: 'Build production grade applications and APIs with modern development patterns and cloud-native tools.',
    },
    {
        id: 3,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
            </svg>
        ),
        title: 'UI / UX Design',
        description: 'Craft intuitive digital experiences through research backed design systems and prototyping workflows.',
    },
    {
        id: 4,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
        title: 'Content & Writing',
        description: 'Develop sharp technical and creative content that communicates complex cloud ideas with clarity.',
    },
    {
        id: 5,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h7v7H3z" /><path d="M14 3h7v7h-7z" /><path d="M14 14h7v7h-7z" /><path d="M3 14h7v7H3z" />
            </svg>
        ),
        title: 'Project Management',
        description: 'Lead end to end project lifecycles, aligning cross functional teams toward on time, impactful delivery.',
    },
    {
        id: 6,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
            </svg>
        ),
        title: 'Community & Events',
        description: 'Organize high impact meetups, workshops, and hackathons that bring the cloud community to life.',
    },
    {
        id: 7,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        title: 'Data & Analytics',
        description: 'Turn raw data into actionable insight using cloud based pipelines, dashboards, and ML tooling.',
    },
    {
        id: 8,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: 'Cybersecurity',
        description: 'Implement identity, access, and compliance controls that keep cloud workloads safe at every layer.',
    },
];