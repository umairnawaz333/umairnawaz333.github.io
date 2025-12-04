import { ContactUs } from './ContactUs';
import { useState } from 'react';

function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Use larger offset for mobile (768px is md: breakpoint in Tailwind)
            const isMobile = window.innerWidth < 768;
            const headerOffset = isMobile ? 120 : 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };
    const skills = {
        frontend: ['React.js', 'Redux', 'Next.js', 'Tailwind CSS', 'Mantine', 'Material-UI', 'React Router', 'React Query', 'Zustand', 'React Hook Form', 'Storybook', 'chakra UI'],
        backend: ['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'NestJS', 'Microservices', 'Monolithic Architectures', 'RESTful APIs', 'GraphQL (Queries, Mutations, Resolvers)', 'TypeORM', 'Prisma ORM', 'Sequelize', 'Webhooks', 'Event-Driven Systems', 'WebSockets', 'FastAPI', 'Django'],
        databases: ['PostgreSQL', 'MongoDB (Mongoose)', 'Microsoft SQL Server (MSSQL)', 'Redis', 'Firebase Realtime Database'],
        cloud: ['Google Cloud (Cloud Scheduler, Cloud Queues)', 'Docker Compose', 'GitHub Actions', 'AWS (Secrets Manager, EC2, S3, CloudFront, Lambda, CloudWatch)'],
        testing: ['Unit Testing', 'Functional Testing', 'Integration Testing', 'Debugging', 'Error Monitoring and Reporting (Sentry)']
    };

    const experience = [
        {
            company: 'Esketchers',
            role: 'Senior Software Engineer',
            period: '08/2021 – Present',
            location: 'Lahore',
            projects: [
                {
                    name: 'Lula Commerce',
                    link: 'https://www.lulacommerce.com/',
                    description: 'Built and maintained a microservices architecture using Node.js/NestJS while developing optimized RESTful APIs for modular services including catalog, checkout, and order management.',
                    image: 'https://api.screenshotmachine.com/?key=0a4873&url=https://www.lulacommerce.com&dimension=1280x720',
                    highlights: [
                        'Integrated third-party delivery platforms such as UberEats, DoorDash, and Grubhub to sync menus, manage incoming orders, update order statuses, and streamline end-to-end eCommerce operations.',
                        'Integrated React/Next.js front-end modules with microservices through secure API gateways.',
                        'Designed and improved PostgreSQL schemas, ensuring high-performance queries and backward compatibility.',
                        'Created responsive UI components with Tailwind'
                    ]
                },
                {
                    name: 'Mental Health Match',
                    link: 'https://mentalhealthmatch.com/',
                    description: 'Created Node.js backend services to support therapist-client matching logic.',
                    image: 'https://api.screenshotmachine.com/?key=0a4873&url=https://mentalhealthmatch.com&dimension=1280x720',
                    highlights: [
                        'Built SEO-optimized Next.js pages, ensuring fast SSR/ISR and improved Google crawl ranking.',
                        'Designed and tuned PostgreSQL queries for user profiles and search filters.',
                        'Developed responsive UI components with Tailwind.',
                        'Improved overall site visibility through structured data and crawl-friendly routing.',
                        'implement nextjs parallel routes for improved performance and SEO',
                        'implement nextjs image optimization',
                    ]
                },
                {
                    name: 'Mapforce',
                    link: 'https://mapforce.io/',
                    description: 'Developed Node.js backend to manage multi-business operations, syncing data with Firebase Realtime Database.',
                    image: 'https://api.screenshotmachine.com/?key=0a4873&url=https://mapforce.io&dimension=1280x720',
                    highlights: [
                        'Integrated Google Business API to manage multiple business locations from a single platform (photos upload, business details update, hours/time changes, scheduled updates, video uploads).',
                        'Implemented Firebase Auth for secure login and session handling.',
                        'Utilized Firebase Realtime Database for real-time business state updates and synchronized client views.',
                        'Implemented Google Cloud Scheduler + Queues for automated background jobs and cron-based updates.'
                    ]
                },
                {
                    name: 'BlueCord',
                    link: 'https://www.bluecord.com/',
                    description: 'Developed Django backend with GraphQL schema (queries/mutations) to support CRM workflows.',
                    image: 'https://api.screenshotmachine.com/?key=0a4873&url=https://www.bluecord.com&dimension=1280x720',
                    highlights: [
                        'Integrated React.js components consuming GraphQL APIs for dynamic data rendering.',
                        'Designed and optimized PostgreSQL database models and relationships.',
                        'Built UI with Tailwind, improving component consistency.',
                        'Wrote unit tests for backend modules to ensure stable releases and API reliability.'
                    ]
                },
                {
                    name: 'CoinStackers.io',
                    link: 'https://www.coinstackers.io',
                    description: 'Developed Node.js services for tracking leads, user funnels, and data analytics.',
                    image: 'https://api.screenshotmachine.com/?key=0a4873&url=https://www.coinstackers.io&dimension=1280x720&delay=1000',
                    highlights: [
                        'Integrated Mongoose for schema-based modeling and optimized NoSQL queries.',
                        'Built React.js interfaces for dashboards and lead insights.',
                        'Improved data ingestion and lead-tracking accuracy through efficient pipelines.'
                    ]
                },
                { 
                    name: 'TrackHabit',
                    link: 'https://trackhabit.io',
                    description: 'Built React.js UI for managing habits, progress logs, and task automation flows.',
                    image: 'https://api.screenshotmachine.com/?key=0a4873&url=https://trackhabit.io&dimension=1280x720',
                    highlights: [
                        'Integrated FastAPI backend for habit tracking, scheduling, and data operations.',
                        'Connected ChatGPT APIs to generate AI-driven tasks based on user-selected timelines.',
                        'Implemented real-time habit status updates and reminders for user engagement.'
                    ]
                }
            ]
        },
        {
            company: 'BLISSTEQ INC',
            role: 'Software Engineer',
            period: '09/2020 – 07/2021',
            location: 'Remote',
            projects: [
                {
                    name: 'Quizpops',
                    link: 'https://play.google.com/store/apps/details?id=quizpops.exams.parent&hl=en',
                    description: 'Built and deployed the Flutter app to Google Play Store with full cross-platform support.',
                    image: 'https://api.screenshotmachine.com/?key=0a4873&url=https://play.google.com/store/apps/details?id=quizpops.exams.parent&hl=en&dimension=1280x720',
                    highlights: [
                        'Integrated RESTful APIs for authentication, quizzes, results, and student activity.',
                        'Implemented parent-side features for viewing quiz history, attendance, performance reports, and secure communication with teachers.',
                        'Optimized data handling for large question sets and real-time student updates.'
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Navigation */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <nav className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <button 
                            onClick={() => scrollToSection('hero')}
                            className="flex items-center"
                        >
                            <img 
                                src="/umair logo.png" 
                                alt="Umair Nawaz" 
                                className="h-10 md:h-12 w-auto"
                            />
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                About
                            </button>
                            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Skills
                            </button>
                            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Experience
                            </button>
                            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                Education
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')} 
                                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="flex flex-col gap-4">
                                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left">
                                    About
                                </button>
                                <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left">
                                    Skills
                                </button>
                                <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left">
                                    Experience
                                </button>
                                <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left">
                                    Education
                                </button>
                                <button 
                                    onClick={() => scrollToSection('contact')} 
                                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-left"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            <main className="max-w-7xl m-auto px-6 md:px-8 py-12 md:py-16">
                {/* Hero Section */}
                <section id="hero" className="text-center mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 leading-tight">
                        Muhammad Umair Nawaz
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-6">
                        Full Stack Software Engineer
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm md:text-base">
                        <a href="mailto:umair.nawaz1997@gmail.com" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            umair.nawaz1997@gmail.com
                        </a>
                        <a href="tel:+923322253600" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +92 332 2253600
                        </a>
                        <a href="https://www.linkedin.com/in/iamumairnawaz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                            </svg>
                            iamumairnawaz
                        </a>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Lahore
                        </span>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Backend-Heavy Full Stack Engineer with 5+ years of experience building scalable systems for Digital Commerce and SaaS products.
                        Skilled in <strong>Node.js, NestJS, React, Next.js, and designing modular microservices</strong>, REST/GraphQL APIs, and optimized
                        PostgreSQL schemas. Experienced in creating performant front-end interfaces using React, Redux, Tailwind, and Mantine. Strong in
                        cloud deployments on <strong>AWS and Google Cloud</strong>, system performance optimization, and database design—delivering reliable
                        full-stack solutions that support product growth.
                    </p>
                </section>

                {/* Skills Section */}
                <section id="skills" className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">Front-End</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {skills.frontend.join(', ')}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">Back-End</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {skills.backend.join(', ')}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">Databases & Caching</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {skills.databases.join(', ')}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">Cloud & DevOps</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {skills.cloud.join(', ')}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">Testing & Optimization</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {skills.testing.join(', ')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Professional Experience & Projects Section */}
                <section id="experience" className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Professional Experience & Projects</h2>
                    <div className="space-y-12">
                        {experience.map((job, idx) => (
                            <div key={idx} className="space-y-6">
                                {/* Company Header */}
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                                {job.role ? `${job.role} at ${job.company}` : job.company}
                                            </h3>
                                            {job.location && (
                                                <p className="text-sm md:text-base text-gray-600 mt-1">{job.location}</p>
                                            )}
                                        </div>
                                        {job.period && (
                                            <p className="text-sm md:text-base text-gray-500">{job.period}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Projects */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {job.projects.map((project, pIdx) => (
                                        <div key={pIdx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <div className="w-full aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </a>
                                            <div className="p-6">
                                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                                                        {project.name}
                                                    </a>
                                                </h4>
                                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <ul className="space-y-1">
                                                    {project.highlights.map((highlight, hIdx) => (
                                                        <li key={hIdx} className="text-sm text-gray-600 leading-relaxed list-disc list-inside">
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Education</h2>
                    <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                                <p className="text-base md:text-lg text-gray-600 italic mt-1">Comsats University Islamabad</p>
                            </div>
                            <p className="text-sm md:text-base text-gray-500">2017 – 2021</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-2">
                                <strong>Relevant Coursework:</strong> Programming Fundamentals, Object-Oriented Programming, Databases,
                                Data Structures & Algorithms, Web Engineering, Artificial Intelligence, Machine Learning,
                                Linear Logic Systems, Parallel Programming.
                            </p>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                Represented the University in many Programming competitions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="contact" className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Get In Touch</h2>
                    <ContactUs />
                </section>
            </main>
        </div>
    )
}

export default HomePage
