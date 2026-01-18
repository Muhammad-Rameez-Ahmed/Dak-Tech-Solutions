
import React from 'react';
import { 
  Globe, Smartphone, Database, Cloud, Palette, Cpu, Zap,
  TrendingUp, Target, Search, BarChart3, Mail, Megaphone, Share2,
  ShieldCheck, Award, HeartHandshake, Rocket, Brain, FastForward, Activity,
  TrendingDown, Percent, Users2, Eye, Compass, Layers, RocketIcon, LineChart,
  FileText, Shield, ZapIcon, BarChart, ShoppingCart, Home as HomeIcon, Building2, Briefcase,
  HelpCircle, Scale, FileSignature
} from 'lucide-react';
import { ServiceCardProps, ProjectProps, NavLinkProps, BlogPostProps } from './types';

export const NAV_LINKS: NavLinkProps[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const MARKETING_KPIS = [
  {
    label: 'Average Client ROI',
    value: 350,
    suffix: '%',
    description: 'Direct revenue growth through optimized funnels.',
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'text-brand-primary'
  },
  {
    label: 'Lead Volume Scale',
    value: 10,
    suffix: 'x',
    description: 'Average increase in high-intent lead generation.',
    icon: <Zap className="w-5 h-5" />,
    color: 'text-brand-accent'
  },
  {
    label: 'Cost Per Acquisition',
    value: 45,
    suffix: '%',
    prefix: '-',
    description: 'Reduction in CAC via intelligent automation.',
    icon: <TrendingDown className="w-5 h-5" />,
    color: 'text-brand-secondary'
  },
  {
    label: 'Client Retention',
    value: 92,
    suffix: '%',
    description: 'Founders who trust us for long-term growth.',
    icon: <HeartHandshake className="w-5 h-5" />,
    color: 'text-brand-primary'
  }
];

export const GROWTH_FRAMEWORK = [
  {
    title: 'Discovery',
    description: 'Deep dive into your business model, unit economics, and market challenges. We audit your current tech and marketing to find the leaks.',
    icon: <Compass className="w-6 h-6" />
  },
  {
    title: 'Strategy',
    description: 'Crafting a bespoke roadmap that aligns engineering with revenue. We define the tech stack and the marketing engine before a single line of code is written.',
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: 'Build',
    description: 'High-performance engineering meets conversion-optimized design. We build scalable systems that are meant to handle millions while looking world-class.',
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: 'Launch',
    description: 'Seamless deployment with rigorous stress-testing. We launch with a "market-first" approach, ensuring your product is ready for real-world growth.',
    icon: <RocketIcon className="w-6 h-6" />
  },
  {
    title: 'Scale',
    description: 'Continuous data-driven optimization. We use AI and behavioral analytics to grow your revenue exponentially and maintain a competitive edge.',
    icon: <LineChart className="w-6 h-6" />
  }
];

export const INDUSTRIES = [
  {
    title: 'Startups & Scale-ups',
    description: 'We help founders go from MVP to Series A and beyond. We build the tech that scales and the marketing that proves your model.',
    icon: <Rocket className="w-8 h-8 text-brand-primary" />,
    focus: ['MVP Development', 'GTM Strategy', 'Investor Readiness']
  },
  {
    title: 'E-commerce',
    description: 'High-conversion stores that handle massive traffic spikes. We integrate advanced tracking and automated retention funnels.',
    icon: <ShoppingCart className="w-8 h-8 text-brand-secondary" />,
    focus: ['Conversion Optimization', 'Retention Marketing', 'Omnichannel Sales']
  },
  {
    title: 'Real Estate',
    description: 'Lead generation systems that actually work. We build custom CRM integrations and high-end property discovery apps.',
    icon: <HomeIcon className="w-8 h-8 text-brand-accent" />,
    focus: ['Automated Lead Nurturing', 'Custom IDX/MLS', 'Property Apps']
  },
  {
    title: 'SaaS & Fintech',
    description: 'Complex products that require security and high performance. We focus on product-led growth and reducing churn.',
    icon: <Layers className="w-8 h-8 text-brand-primary" />,
    focus: ['User Retention', 'Subscription Ops', 'Security First Architecture']
  },
  {
    title: 'Local Businesses',
    description: 'Dominating your local market. We provide consistent lead flow through GMB optimization and targeted local SEO.',
    icon: <Building2 className="w-8 h-8 text-brand-secondary" />,
    focus: ['Local SEO', 'Reputation Management', 'Lead Pipelines']
  },
  {
    title: 'Professional Services',
    description: 'Building authority and trust. We help law firms, agencies, and consultants position themselves as market leaders.',
    icon: <Briefcase className="w-8 h-8 text-brand-accent" />,
    focus: ['Thought Leadership', 'Authority Brand Design', 'Qualified Booking Systems']
  }
];

export const FAQS = [
  {
    question: "How does your pricing structure work?",
    answer: "We offer three primary models tailored to different growth stages: Fixed-Price for well-defined projects (like MVPs), Monthly Retainers for ongoing growth and fractional leadership, and Hybrid Performance models for specific marketing outcomes. Every partnership begins with a transparent breakdown of costs and expected ROI."
  },
  {
    question: "What is the typical timeline for a custom software project?",
    answer: "A standard MVP (Minimum Viable Product) typically takes between 8 to 12 weeks from Discovery to Launch. Complex enterprise systems may take 4 to 6 months for initial deployment. We focus on 'speed-to-market' while ensuring robust scalability."
  },
  {
    question: "Do you provide ongoing support after the project launch?",
    answer: "Absolutely. We view our relationships as long-term partnerships. We offer flexible Maintenance & Growth packages that include performance monitoring, security updates, and continuous feature optimization based on real user data."
  },
  {
    question: "How do you ensure the security of our data and intellectual property?",
    answer: "Security is baked into our engineering lifecycle. We sign comprehensive NDAs, use enterprise-grade cloud security, and follow industry best practices like OWASP for software and GDPR/CCPA for data privacy. Your IP belongs 100% to you."
  },
  {
    question: "Can you help scale an existing marketing funnel that isn't performing?",
    answer: "Yes, this is one of our core specialties. We perform a 'Growth Audit' to identify leaks in your current funnel, optimize your conversion triggers, and then apply targeted performance marketing to scale what works."
  }
];

export const CLIENT_TYPES = [
  {
    title: 'Startup Founders',
    description: 'Entrepreneurs looking to launch MVPs and scale from 0 to 1 with reliable tech.',
    icon: <Rocket className="text-brand-primary" />
  },
  {
    title: 'Growth-Stage Businesses',
    description: 'Companies struggling with leads who need predictable marketing systems.',
    icon: <TrendingUp className="text-brand-secondary" />
  },
  {
    title: 'Visionary Entrepreneurs',
    description: 'Founders who want scalable systems and long-term partners, not just shortcuts.',
    icon: <Brain className="text-brand-accent" />
  }
];

export const TECH_SERVICES: ServiceCardProps[] = [
  {
    title: 'Web Development',
    description: 'High-performance, conversion-focused web applications designed to turn visitors into paying customers.',
    icon: <Globe className="w-8 h-8 text-brand-primary" />,
    tags: ['Next.js', 'Performance', 'Conversion']
  },
  {
    title: 'Mobile App Development',
    description: 'Native experiences that keep your users engaged. Built for scalability and user retention.',
    icon: <Smartphone className="w-8 h-8 text-brand-secondary" />,
    tags: ['React Native', 'User Retention']
  },
  {
    title: 'Backend & APIs',
    description: 'The backbone of your business. Robust, secure, and built to handle millions of requests without breaking.',
    icon: <Database className="w-8 h-8 text-brand-accent" />,
    tags: ['Scalability', 'Architecture']
  },
  {
    title: 'AI & Automation',
    description: 'Cutting operational costs by automating repetitive tasks with custom LLMs and intelligent workflows.',
    icon: <Cpu className="w-8 h-8 text-brand-accent" />,
    tags: ['Efficiency', 'Automation']
  },
  {
    title: 'UI/UX Design',
    description: 'Design that doesn\'t just look good but works. We focus on user psychology and behavioral science.',
    icon: <Palette className="w-8 h-8 text-brand-secondary" />,
    tags: ['Psychology', 'Experience']
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Zero downtime architectures. Your business never sleeps, and neither should your infrastructure.',
    icon: <Cloud className="w-8 h-8 text-brand-primary" />,
    tags: ['Reliability', 'AWS']
  },
];

export const MARKETING_SERVICES: ServiceCardProps[] = [
  {
    title: 'Digital Strategy',
    description: 'Your growth roadmap. We align your tech stack with a marketing engine that generates predictable ROI.',
    icon: <TrendingUp className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: 'Lead Generation',
    description: 'Funnels, ads, and automation that bring consistent, qualified leads—not just random traffic.',
    icon: <Target className="w-8 h-8 text-brand-accent" />,
  },
  {
    title: 'Paid Advertising',
    description: 'ROI-focused PPC on Google & Meta. We spend your budget as if it were our own.',
    icon: <Megaphone className="w-8 h-8 text-brand-secondary" />,
  },
  {
    title: 'Search Engine Optimization',
    description: 'Dominating search results to drive high-intent organic traffic that actually converts.',
    icon: <Search className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: 'Social Media Growth',
    description: 'Building authority and trust. We manage your presence to turn followers into brand advocates.',
    icon: <Share2 className="w-8 h-8 text-brand-secondary" />,
  },
  {
    title: 'Analytics & CRO',
    description: 'Stop the leaks in your funnel. We use data to optimize every step of your customer journey.',
    icon: <BarChart3 className="w-8 h-8 text-brand-accent" />,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Founder Perspective',
    description: 'We think like business owners, not just developers or marketers. Every decision is weighed against profit and long-term viability.',
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: 'Profit & Growth Focus',
    description: 'We don\'t just ship code; we build revenue engines. Our priority is your bottom line and sustainable business growth.',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: 'Scalability & Longevity',
    description: 'We build for the future. Our systems are engineered to handle millions of users while maintaining peak performance as you scale.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Long-Term Partnership',
    description: 'We act as your fractional CTO and marketing lead. We aren\'t here for a one-off project; we grow alongside your business.',
    icon: <HeartHandshake className="w-6 h-6" />
  }
];

export const PROJECTS: ProjectProps[] = [
  {
    id: '1',
    title: 'Fintech Scale-up',
    category: 'Software Development',
    description: 'Re-engineering a wealth management platform to handle 10x user growth while increasing conversion.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'Conversion Optimization', 'Scalability']
  },
  {
    id: '2',
    title: 'D2C Growth Engine',
    category: 'E-commerce & Marketing',
    description: 'Scaling a sustainable brand from 0 to $1M ARR via automated funnels and high-ROAS ad systems.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tech: ['Lead Gen', 'Meta Ads', 'Retention']
  },
  {
    id: '3',
    title: 'AI Automation Suite',
    category: 'SaaS Development',
    description: 'Custom AI integration that reduced operational overhead by 40% for a global logistics provider.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tech: ['AI', 'Automation', 'ROI Focus']
  },
  {
    id: '4',
    title: 'PropTech Lead Gen',
    category: 'Real Estate / Marketing',
    description: 'Automated 150% increase in high-intent property leads via custom CRM-integrated discovery portals.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tech: ['Lead Automation', 'React', 'CRM Sync']
  },
  {
    id: '5',
    title: 'Telemedicine 2.0',
    category: 'HealthTech / Software',
    description: 'HIPAA-compliant patient management system serving 100k+ monthly consultations with zero downtime.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tech: ['HIPAA Compliance', 'Node.js', 'AWS']
  },
  {
    id: '6',
    title: 'SaaS Analytics Hub',
    category: 'B2B / SaaS',
    description: 'Real-time data visualization dashboard for enterprise logistics, handling 50M+ events daily.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['Data Viz', 'Tailwind', 'PostgreSQL']
  },
  {
    id: '7',
    title: 'EdTech Ecosystem',
    category: 'Education / Software',
    description: 'High-concurrency LMS serving 50k+ students with interactive video learning and automated grading.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    tech: ['WebSockets', 'Next.js', 'Redis']
  },
  {
    id: '8',
    title: 'Luxury Auto Sales',
    category: 'Automotive / Marketing',
    description: 'Performance funnel for a tier-1 auto dealer that slashed cost-per-acquisition by 65%.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    tech: ['PPC', 'CRO', 'Retargeting']
  },
  {
    id: '9',
    title: 'LegalOps Automation',
    category: 'Professional Services',
    description: 'Streamlining case management for a top-tier law firm, reclaiming 15 hours/week for senior partners.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    tech: ['Automation', 'Document AI', 'Python']
  },
  {
    id: '10',
    title: 'Web3 Asset Tracker',
    category: 'Fintech / Web3',
    description: 'Secure, real-time portfolio management for institutional digital asset holders with multi-chain support.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800',
    tech: ['Blockchain', 'Security', 'React']
  },
  {
    id: '11',
    title: 'Fashion Brand Rebirth',
    category: 'D2C / Branding',
    description: 'End-to-end digital transformation for a heritage fashion label, resulting in 4x online revenue growth.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
    tech: ['E-com', 'Brand Design', 'Scale']
  }
];

export const BLOGS: BlogPostProps[] = [
  {
    id: '1',
    title: 'Why Marketing is the Heartbeat of Modern SaaS',
    excerpt: 'Code is the body, but marketing is the blood flow. Learn why the best product in the world fails without a high-intent growth engine.',
    category: 'Growth Strategy',
    date: 'June 01, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    author: 'Daniyal Ahmed Khan'
  },
  {
    id: '2',
    title: 'Scaling from 0 to 1M: The Founder\'s Playbook',
    excerpt: 'We analyze how top-tier founders bridge the gap between initial traction and predictable scale using integrated tech & marketing.',
    category: 'Entrepreneurship',
    date: 'May 28, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    author: 'Daniyal Ahmed Khan'
  },
  {
    id: '3',
    title: 'Performance Marketing vs. Brand Awareness: The ROI Debate',
    excerpt: 'Stop wasting budget on "likes". Discover how to shift your spend toward performance metrics that actually drive P&L growth.',
    category: 'Marketing',
    date: 'May 24, 2024',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800',
    author: 'Daniyal Ahmed Khan'
  },
  {
    id: '4',
    title: 'AI Automation: How to Reclaim 20 Hours of Your Week',
    excerpt: 'Custom AI workflows aren\'t just for big tech. Small teams are using intelligent automation to out-compete massive agencies.',
    category: 'Tech & AI',
    date: 'May 20, 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    author: 'Daniyal Ahmed Khan'
  },
  {
    id: '5',
    title: 'The Billion Dollar Aesthetic: Premium Design as a Trust Signal',
    excerpt: 'Why high-net-worth clients avoid "basic" looking platforms. How premium UI/UX design directly impacts your conversion rates.',
    category: 'Design Psychology',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    author: 'Daniyal Ahmed Khan'
  },
  {
    id: '6',
    title: 'High-Intent Lead Gen: Stop Fishing in the Wrong Ocean',
    excerpt: 'Traffic is cheap; conversion is expensive. Learn our strategy for finding customers exactly when they are ready to buy.',
    category: 'Marketing',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    author: 'Daniyal Ahmed Khan'
  },
  {
    id: '7',
    title: 'The Fractional Partner: The Secret to Lean Scaling',
    excerpt: 'Why hiring a full-time CTO or CMO too early can kill your startup. The case for expert fractional leadership in 2024.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
    category: 'Strategy',
    date: 'May 05, 2024',
    author: 'Daniyal Ahmed Khan'
  },
  {
    id: '8',
    title: 'The Silent Killer of Growth: Solving High Churn Rates',
    excerpt: 'Most founders focus on acquisition while their "bucket is leaking". Here is how tech-driven retention saves your LTV.',
    category: 'Customer Success',
    date: 'May 01, 2024',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
    author: 'Daniyal Ahmed Khan'
  }
];

export const FREE_RESOURCES = [
  {
    title: "Free Growth Audit",
    description: "A 30-minute deep dive into your current tech and marketing systems. We identify exactly where you are losing money.",
    icon: <Search className="w-8 h-8 text-brand-primary" />,
    cta: "Book My Free Audit",
    tag: "Highly Recommended"
  },
  {
    title: "The 2024 Scaling Checklist",
    description: "A comprehensive PDF guide for founders scaling from $10k to $100k MRR. Tech stack, marketing funnels, and hire sequences.",
    icon: <FileText className="w-8 h-8 text-brand-secondary" />,
    cta: "Download Checklist",
    tag: "Free PDF"
  },
  {
    title: "Website Performance Guide",
    description: "Learn how to optimize your site for Core Web Vitals and conversion. We share the exact benchmarks we use for our $1M+ clients.",
    icon: <ZapIcon className="w-8 h-8 text-brand-accent" />,
    cta: "Get the Guide",
    tag: "Technical Value"
  },
  {
    title: "Performance Marketing Audit",
    description: "Not sure if your ads are working? Submit your last 30 days of data and our experts will provide a video breakdown of improvements.",
    icon: <BarChart className="w-8 h-8 text-brand-primary" />,
    cta: "Submit My Data",
    tag: "Direct ROI"
  }
];
