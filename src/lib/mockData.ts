import type { PromptTemplate } from '../types/prompt';

export const mockTemplates: PromptTemplate[] = [
  {
    id: '1',
    title: 'TypeScript Auditor',
    description: 'A deep-dive technical auditor for TypeScript/React projects. Focuses on performance, memory leaks, and architectural anti-patterns.',
    tags: ['Coding', 'CleanCode', 'Audit'],
    lastModified: Date.now() - 86400000,
    bilingual: true,
    category: 'Coding'
  },
  {
    id: '2',
    title: 'Visual Arts Stylist',
    description: 'Generates poetic, highly specific stylistic descriptions for AI image generation. Specializes in glassmorphism and cyberpunk aesthetics.',
    tags: ['Creative', 'ImageGen', 'VFX'],
    lastModified: Date.now() - 172800000,
    bilingual: false,
    category: 'Creative'
  },
  {
    id: '3',
    title: 'Business Negotiation Coach',
    description: 'Simulates difficult business scenarios to train communication skills. Implements the Harvard Negotiation Project methodology.',
    tags: ['Business', 'SoftSkills', 'Coach'],
    lastModified: Date.now() - 259200000,
    bilingual: true,
    category: 'Business'
  },
  {
    id: '4',
    title: 'Fullstack Architect (Next.js)',
    description: 'Specializes in organizing complex Turborepo structures and implementing Auth.js/Prisma/Tailwind stacks.',
    tags: ['Coding', 'Frameworks', 'WebDev'],
    lastModified: Date.now() - 43200000,
    bilingual: true,
    category: 'Coding'
  },
  {
    id: '5',
    title: 'Creative Fiction Worldbuilder',
    description: 'Helps writers establish cohesive lore, magic systems, and historical timelines for speculative fiction novels.',
    tags: ['Creative', 'Writing', 'Worldbuilding'],
    lastModified: Date.now() - 604800000,
    bilingual: false,
    category: 'Creative'
  },
  {
    id: '6',
    title: 'Marketing Strategy Lead',
    description: 'Brainstorms 360° marketing campaigns with a focus on data-driven KPIs and conversion-centric copywriting.',
    tags: ['Business', 'Marketing', 'Strategy'],
    lastModified: Date.now() - 345600000,
    bilingual: true,
    category: 'Business'
  },
  {
    id: '7',
    title: 'Prompt Engineer (Glaze Standard)',
    description: 'Optimizes raw prompts for maximum clarity and structural integrity using the Vitreous logic framework.',
    tags: ['System', 'Optimization', 'Meta'],
    lastModified: Date.now(),
    bilingual: true,
    category: 'System'
  },
  {
    id: '8',
    title: 'Python Script Refactor',
    description: 'Specializes in converting legacy procedural Python scripts into modern async/await patterns with strict type hinting.',
    tags: ['Coding', 'Refactor', 'Python'],
    lastModified: Date.now() - 432000000,
    bilingual: true,
    category: 'Coding'
  }
];
