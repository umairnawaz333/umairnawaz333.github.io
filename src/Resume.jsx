function Resume() {
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
                    highlights: [
                        'Built SEO-optimized Next.js pages, ensuring fast SSR/ISR and improved Google crawl ranking.',
                        'Designed and tuned PostgreSQL queries for user profiles and search filters.',
                        'Developed responsive UI components with Tailwind.',
                        'Improved overall site visibility through structured data and crawl-friendly routing.'
                    ]
                },
                {
                    name: 'Mapforce',
                    link: 'https://mapforce.io/',
                    description: 'Developed Node.js backend to manage multi-business operations, syncing data with Firebase Realtime Database.',
                    highlights: [
                        'Integrated Google Business API to manage multiple business locations from a single platform (photos upload, business details update, hours/time changes, scheduled updates, video uploads).',
                        'Implemented Firebase Auth for secure login, role-based access, and session handling.',
                        'Built React.js UI for business dashboards, live updates, and operational controls.',
                        'Utilized Firebase Realtime Database for real-time business state updates and synchronized client views.',
                        'Implemented Google Cloud Scheduler + Queues for automated background jobs, cron-based updates, and asynchronous processing.'
                    ]
                },
                {
                    name: 'BlueCord',
                    link: 'https://bluecord.com',
                    description: 'Developed Django backend with GraphQL schema (queries/mutations) to support CRM workflows.',
                    highlights: [
                        'Integrated React.js components consuming GraphQL APIs for dynamic data rendering.',
                        'Designed and optimized PostgreSQL database models and relationships.',
                        'Built UI with Tailwind, improving component consistency.',
                        'Wrote unit tests for backend modules to ensure stable releases and API reliability.'
                    ]
                },
                {
                    name: 'CoinStackers.io',
                    link: 'https://coinstackers.io',
                    description: 'Developed Node.js services for tracking leads, user funnels, and data analytics.',
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
                    link: 'https://quizpops.com',
                    description: 'Built and deployed the Flutter app to Google Play Store with full cross-platform support.',
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
            <main className="max-w-4xl m-auto px-6 md:px-8 py-12 md:py-16">
                {/* Header Section */}
                <header className="">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 leading-tight">Muhammad Umair Nawaz</h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-normal">Full Stack Software Engineer</p>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm md:text-base text-gray-600">
                        <a href="mailto:umair.nawaz1997@gmail.com" className="hover:text-gray-900 transition-colors">
                            umair.nawaz1997@gmail.com
                        </a>
                        <a href="tel:+923322253600" className="hover:text-gray-900 transition-colors">
                            +92 332 2253600
                        </a>
                        <span>Lahore</span>
                    </div>
                </header>

                {/* Profile Section */}
                <div className="border-t border-gray-200 mt-10 md:mt-12 pt-10 md:pt-12">
                <section>
                    <h2 className="text-base md:text-lg font-bold mb-4 text-gray-900 uppercase tracking-wider">Profile</h2>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        Backend-Heavy Full Stack Engineer with 5+ years of experience building scalable systems for Digital Commerce and SaaS products.
                        Skilled in <strong>Node.js, NestJS, React, Next.js, and designing modular microservices</strong>, REST/GraphQL APIs, and optimized
                        PostgreSQL schemas. Experienced in creating performant front-end interfaces using React, Redux, Tailwind, and Mantine. Strong in
                        cloud deployments on <strong>AWS and Google Cloud</strong>, system performance optimization, and database design—delivering reliable
                        full-stack solutions that support product growth.
                    </p>
                </section>
                </div>

                {/* Skills Section */}
                <div className="border-t border-gray-200 mt-10 md:mt-12 pt-10 md:pt-12">
                <section>
                    <h2 className="text-base md:text-lg font-bold mb-4 text-gray-900 uppercase tracking-wider">Skills</h2>
                    <div className="space-y-5">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm md:text-base">Front-End</h3>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                {skills.frontend.join(', ')}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm md:text-base">Back-End</h3>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                {skills.backend.join(', ')}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm md:text-base">Databases & Caching</h3>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                {skills.databases.join(', ')}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm md:text-base">Cloud & DevOps</h3>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                {skills.cloud.join(', ')}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm md:text-base">Testing & Optimization</h3>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                {skills.testing.join(', ')}
                            </p>
                        </div>
                    </div>
                </section>
                </div>

                {/* Experience Section */}
                <div className="border-t border-gray-200 mt-10 md:mt-12 pt-10 md:pt-12">
                <section>
                    <h2 className="text-base md:text-lg font-bold mb-5 text-gray-900 uppercase tracking-wider">Professional Experience & Projects</h2>
                    <div className="space-y-8 md:space-y-10">
                        {experience.map((job, idx) => (
                            <div key={idx} className="space-y-4 md:space-y-5">
                                {/* Company Header */}
                                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-6">
                                    <div className="text-xs md:text-sm text-gray-500">
                                        {job.period || ''}
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-gray-900">
                                            {job.role ? `${job.role} at ${job.company}` : job.company}
                                        </h3>
                                        {job.location && (
                                            <p className="text-xs md:text-sm text-gray-600 mt-0.5">{job.location}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Projects */}
                                {job.projects.map((project, pIdx) => (
                                    <div key={pIdx} className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-6">
                                        <div></div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                                                    {project.name}
                                                </a>
                                            </h4>
                                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{project.description}</p>
                                            <ul className="space-y-1.5 ml-4">
                                                {project.highlights.map((highlight, hIdx) => (
                                                    <li key={hIdx} className="text-xs md:text-sm text-gray-700 leading-relaxed list-disc">
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
                </div>

                {/* Education Section */}
                <div className="border-t border-gray-200 mt-10 md:mt-12 pt-10 md:pt-12">
                <section>
                    <h2 className="text-base md:text-lg font-bold mb-5 text-gray-900 uppercase tracking-wider">Education</h2>
                    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-6">
                        <div className="text-xs md:text-sm text-gray-500">
                            2017 – 2021
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                            <p className="text-xs md:text-sm text-gray-600 italic mt-0.5">Comsats University Islamabad</p>
                            <div className="mt-3">
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                <strong>Relevant Coursework:</strong> Programming Fundamentals, Object-Oriented Programming, Databases,
                                    Data Structures & Algorithms, Web Engineering, Artificial Intelligence, Machine Learning,
                                    Linear Logic Systems, Parallel Programming.
                                </p>
                            </div>
                            <p className="text-xs md:text-sm text-gray-600 mt-2 leading-relaxed">Represented the University in many Programming competitions.</p>
                        </div>
                    </div>
                </section>
                </div>
            </main>
        </div>
    )
}

export default Resume

