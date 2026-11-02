import { GalleryCategorySection } from '@/types/gallery';

// Bump this query version when replacing an image at an existing path to refresh Next.js optimized-image cache.
export const gallerySections: GalleryCategorySection[] = [
{
    key: 'cohort-sessions',
    title: 'Cohort Sessions',
    subtitle: 'Hands-on live lectures, peer coding, and collaborative build hours.',
    pattern: 'pattern-a',
    items: [
    { id: 'cs-1', title: 'Peer Review', category: 'cohort-sessions', imageUrl: '/images/gallary/cohort-sessions/cohortsession1.JPG?v=5' },
    { id: 'cs-2', title: 'Live Coding lab', category: 'cohort-sessions', imageUrl: '/images/gallary/cohort-sessions/cohortsession2.JPG?v=5' },
    { id: 'cs-3', title: 'Interactive Lecture', category: 'cohort-sessions', imageUrl: '/images/gallary/cohort-sessions/cohortsession3.JPG?v=5' },
    { id: 'cs-4', title: 'Group Brainstorm', category: 'cohort-sessions', imageUrl: '/images/gallary/cohort-sessions/cohortsession4.JPG?v=5' },
    { id: 'cs-5', title: 'Instructor Mentorship', category: 'cohort-sessions', imageUrl: '/images/gallary/cohort-sessions/cohortsession5.JPG?v=5' },
    { id: 'cs-6', title: 'Build Hour', category: 'cohort-sessions', imageUrl: '/images/gallary/cohort-sessions/cohortsession6.JPG?v=5' },
    ],
},
{
    key: 'hackathons',
    title: 'Hackathons',
    subtitle: 'High-energy 48-hour build sprints solving real-world challenges.',
    pattern: 'pattern-b',
    items: [
    { id: 'hk-1', title: 'Sprint Kickoff', category: 'hackathons', imageUrl: '/images/gallary/hackathons/hackaton1.jpg?v=5' },
    { id: 'hk-2', title: 'Architecture Pitch', category: 'hackathons', imageUrl: '/images/gallary/hackathons/hackaton2.jpg?v=5' },
    { id: 'hk-3', title: 'Team Huddle', category: 'hackathons', imageUrl: '/images/gallary/hackathons/hackaton3.jpg?v=5' },
    { id: 'hk-4', title: 'Debugging', category: 'hackathons', imageUrl: '/images/gallary/hackathons/hackaton4.jpg?v=5' },
    { id: 'hk-5', title: 'Debugging 2', category: 'hackathons', imageUrl: '/images/gallary/hackathons/hackaton5.jpg?v=5' },
    { id: 'hk-6', title: 'The Team', category: 'hackathons', imageUrl: '/images/gallary/hackathons/hackaton6.jpg?v=5' },
    ],
},
{
    key: 'workshops',
    title: 'Workshops',
    subtitle: 'Specialized deep-dives into industry tools and frameworks.',
    pattern: 'pattern-a',
    items: [
    { id: 'ws-1', title: 'Tech Showcase', category: 'workshops', imageUrl: '/images/gallary/workshops/workshop1.jpg?v=5' },
    { id: 'ws-2', title: 'Community Hangout', category: 'workshops', imageUrl: '/images/gallary/workshops/workshop2.jpg?v=5' },
    { id: 'ws-3', title: 'Practical Demo', category: 'workshops', imageUrl: '/images/gallary/workshops/workshop3.jpg?v=5' },
    { id: 'ws-4', title: 'Tutor Session ', category: 'workshops', imageUrl: '/images/gallary/workshops/workshop4.jpg?v=5' },
    { id: 'ws-5', title: 'Q&A Networking', category: 'workshops', imageUrl: '/images/gallary/workshops/workshop5.jpg?v=5' },
    { id: 'ws-6', title: 'Hands-on Practice', category: 'workshops', imageUrl: '/images/gallary/workshops/workshop6.jpg?v=5' },
    ],
},
{
    key: 'graduation',
    title: 'Graduation',
    subtitle: 'Celebrating our graduates moving into better tech roles.',
    pattern: 'pattern-b',
    items: [
    { id: 'gr-1', title: '', category: 'graduation', imageUrl: '/images/gallary/graduation/graduation1.JPG?v=5' },
    { id: 'gr-2', title: '', category: 'graduation', imageUrl: '/images/gallary/graduation/graduation2.JPG?v=5' },
    { id: 'gr-3', title: '', category: 'graduation', imageUrl: '/images/gallary/graduation/graduation3.JPG?v=5' },
    { id: 'gr-4', title: '', category: 'graduation', imageUrl: '/images/gallary/graduation/graduation4.JPG?v=5' },
    { id: 'gr-5', title: '', category: 'graduation', imageUrl: '/images/gallary/graduation/graduation5.JPG?v=5' },
    { id: 'gr-6', title: '', category: 'graduation', imageUrl: '/images/gallary/graduation/graduation6.mp4?v=5', mediaType: 'video' },
    ],
},
];