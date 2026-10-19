import { Project } from '@/types/project';

export const projectsData: Project[] = [
{
    id: 'folio-forge',
    title: 'Folio-Forge',
    description:
    'Interactive portfolio builder for creators with custom layouts, responsive themes, and live previews. Features a comprehensive dashboard for managing experience, services, certifications, and project readiness.',
    problemStatement: 'Creators need a straightforward way to present their experience, services, certifications, and work without building a portfolio site from scratch.',
    teamContributions: [
    'Built customizable portfolio layouts and responsive themes.',
    'Created live previews and a dashboard for managing creator profiles and projects.',
    ],
    image: '/images/projects/folio-forge.png',
    liveDemoUrl: 'https://folio-forge-2jxa.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    track: 'FullStack Development',
    creators: ['Akintade Temidayo'],
    featured: true,
},
{
    id: 'taskflow',
    title: 'TaskFlow',
    description:
    'A web-based, real-time collaborative project management application designed to help teams organize, prioritize, and track work across dedicated workspaces.',
    problemStatement: 'Teams need a shared workspace to coordinate tasks, set priorities, and follow project progress together.',
    teamContributions: [
    'Built collaborative workspace and project organization flows.',
    'Implemented task prioritization and progress tracking for teams.',
    ],
    image: '/images/projects/Taskflow.png',
    liveDemoUrl: 'https://taskflow-sufv.vercel.app/workspace',
    techStack: ['Next.js', 'Tailwind CSS', 'Express.js', 'MySQL'],
    track: 'FullStack Development',
    creators: ['Kolawole Ayomide', 'Saheed Adeitan'],
    featured: true,
},
{
    id: 'meal-planner',
    title: 'Meal Planner (MealCraft)',
    description:
    'An interactive recipe planner designed to help you find dishes based on ingredients you already have in your kitchen, equipped with meal planning and automated shopping list tools.',
    problemStatement: 'Planning meals can be difficult when people need to find recipes that match ingredients already in their kitchen and keep grocery needs organized.',
    teamContributions: [
    'Built ingredient-based recipe discovery and meal-planning features.',
    'Created tools for organizing meals and generating shopping lists.',
    ],
    image: '/images/projects/mealplanner.png',
    liveDemoUrl: 'https://meal-planner-three-mu.vercel.app/',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    track: 'Frontend Engineering',
    creators: ['Akintade Temidayo'],
    featured: false,
},
];