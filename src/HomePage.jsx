import { ContactUs } from './ContactUs';

function HomePage() {
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
                    image: 'https://image.thum.io/get/width/1200/crop/675/noanimate/https://www.lulacommerce.com',
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
                    image: 'https://image.thum.io/get/width/1200/crop/675/noanimate/https://mentalhealthmatch.com',
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
                    image: 'https://image.thum.io/get/width/1200/crop/675/noanimate/https://mapforce.io',
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
                    image: 'https://image.thum.io/get/width/1200/crop/675/noanimate/https://bluecord.com',
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
                    image: 'https://image.thum.io/get/width/1200/crop/675/noanimate/https://coinstackers.io',
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
                    image: 'https://image.thum.io/get/width/1200/crop/675/noanimate/https://trackhabit.io',
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
                    image: '/placeholder-quizpops.jpg',
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
            <main className="max-w-7xl m-auto px-6 md:px-8 py-12 md:py-16">
                {/* Hero Section */}
                <section className="text-center mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 leading-tight">
                        Muhammad Umair Nawaz
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-6">
                        Full Stack Software Engineer
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm md:text-base">
                        <a href="mailto:umair.nawaz1997@gmail.com" className="hover:text-gray-900 transition-colors">
                            umair.nawaz1997@gmail.com
                        </a>
                        <a href="tel:+923322253600" className="hover:text-gray-900 transition-colors">
                            +92 332 2253600
                        </a>
                        <a href="https://www.linkedin.com/in/iamumairnawaz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                            LinkedIn
                        </a>
                        <span>Lahore</span>
                    </div>
                </section>

                {/* About Section */}
                <section className="mb-16 md:mb-24">
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
                <section className="mb-16 md:mb-24">
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
                <section className="mb-16 md:mb-24">
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
                                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
                                                        <span className="text-sm font-medium">{project.name}</span>
                                                    </div>
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
                <section className="mb-16 md:mb-24">
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
                <section className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Get In Touch</h2>
                    <ContactUs />
                </section>
            </main>
        </div>
    )
}

export default HomePage
