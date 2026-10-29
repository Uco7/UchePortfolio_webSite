import { useState } from 'react'
import { useReveal } from '../hook/useReveal'
import "../css/App.css"

const PROJECTS = [
  {
  id: 'project-01',
  name: "Trackify: Smart Student Finance Platform",
  type: "web",
  description:
    "A full-stack campus financial management application engineered as a Computer Science framework to resolve student budgeting stress. The system allows users to track structured transaction ledgers, categorize allocations, analyze cashflows via dynamic charting modules, and configure automated live threshold alerts to actively prevent impulse spending leaks.",
  stack: [
    "HTML5",
    "CSS3",
    // "Tailwind CSS",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Chart.js",
    "Git & GitHub"
  ],
  link: 'https://trackify-kmfy.onrender.com/',
  repo: 'https://github.com',
},
{
  id: 'project-02',
  name: "LiteAcad: Virtual Learning Management & CBT Platform",
  type: "web",
  description:
    "A full-stack e-learning and computer-based testing (CBT) platform featuring an interactive student workspace dashboard. The system enables users to track learning progress metrics, resume structured course tracks dynamically, manage lesson completions, and execute real-time automated CBT assessments with detailed analytics and automated scoring modules.",
  stack: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "Git & GitHub"
  ],
  link: 'https://course-app-cuhq.onrender.com/account/dashboard',
  repo: 'https://github.com',
},


  {
    id: 'project-03',
   name: " Web Base Student Result Upload Complaint System",
type: "web",
description:
  "A full-stack academic management system that enables lecturers to upload student results while allowing students to securely view their grades and submit complaints for review. Built with Node.js, Express, MongoDB, and Bootstrap, the application features JWT authentication, role-based access control, and RESTful APIs for efficient result management and complaint resolution.",
stack: [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Git & GitHub"
],
    link: 'https://web-based-studentsesult-upload-complaint.onrender.com',
    repo: 'https://github.com/Uco7/web-based_studentsEsult_upload_complaint_system/tree/master',
  },
  {
    id: 'project-04',
   name: "Hospital Record System",
type: "web",
description:
  "A full-stack hospital record management system designed to streamline patient registration, medical records, appointment scheduling, and staff management. Built with Node.js, Express, MongoDB, and a responsive Bootstrap interface, the system features secure JWT authentication, role-based access, and RESTful APIs for efficient healthcare data management.",
stack: [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Git & GitHub"
],
    link: 'https://web-based-hospital-record-system.onrender.com',
    repo: 'https://github.com/Uco7/Web_based_hospital_record_system',
  },
  {
    id: 'project-05',
   name: "Online Workers Connect",
type: "web",
description:
  "A full-stack job marketplace platform that connects freelancers and clients, enabling users to create profiles, post jobs, submit proposals, and manage projects through a secure and responsive web application. Built with Node.js, Express, MongoDB, and Bootstrap, the platform features JWT authentication, RESTful APIs, and role-based user management.",
stack: [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Git & GitHub"
],
    link: 'https://professional-workers-connect.onrender.com',
    repo: 'https://github.com/Uco7/professional_workers_connect/tree/main',
  },
  {
    id: 'project-06',
name: "Hall Allocation System",
type: "web",
description:
  "A full-stack hall allocation management system designed to automate student accommodation assignments, room allocation, and occupancy tracking. Built with Node.js, Express, MongoDB, and Bootstrap, the application provides secure JWT authentication, role-based access for administrators and students, and RESTful APIs for efficient hostel and resident management.",
stack: [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Git & GitHub"
],
    link: 'https://hall-allocation-system-2a7r.onrender.com',
    repo: 'https://github.com/Uco7/hall_allocation_system',
  },
  {
    id: 'project-07',
    name: 'Bookstore  App',
    type: 'mobile',
    description:"Developed a full-stack cross-platform digital bookstore and library application that enables users to discover, purchase, read, and manage digital books. Built with React Native, Node.js, Express.js, and MongoDB, the app features secure authentication, Paystack payment integration, Google AdMob monetization, AI-powered features, push notifications, PDF management, and a scalable RESTful API backend.",
    stack: [
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "JavaScript (ES6+)",
  "REST APIs",
  "JWT Authentication",
  "AWS EC2",
  "AWS S3",
  "Google AdMob",
  "Paystack Integration",
  "AI API Integration",
  "Prompt Engineering",
  "Git & GitHub"
],
    link: 'https://play.google.com/store/apps/details?id=com.ucmobileapk.bookstore&pcampaignid=web_share',
    repo: 'https://github.com/Uco7/testBookStoreApp/tree/recovery',
  },
  {
    id: 'project-08',
    name: 'Document Processing App',
    type: 'mobile',
    description:
      'Enterprise mobile app for document workflows, with AI-assisted processing that cut manual handling by 40%.',
    stack: ['React Native', 'Expo', 
      
      "Git & GitHub",
       "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript (ES6+)",
  "REST APIs",

    ],
    link: '#',
    repo: '#',
  },
]

// Small inline icons — no extra icon library needed.
function MonitorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function MobileIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  )
}

const TABS = [
  { key: 'web', label: 'Web Projects', icon: MonitorIcon },
  { key: 'mobile', label: 'Mobile App Projects', icon: MobileIcon },
]

export default function Projects() {
  const [ref, visible] = useReveal()
  const [activeTab, setActiveTab] = useState('web')

  const filteredProjects = PROJECTS.filter((p) => p.type === activeTab)

  return (
    <section className="projects section" id="projects">
      <div className="section-inner">
        <h2 className="section-label heading-text"> Completed Projects</h2>

        <div className="project-toggle" role="tablist" aria-label="Project category">
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`project-toggle-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <Icon />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div
          ref={ref}
          className={`projects-list reveal ${visible ? 'is-visible' : ''}`}
        >
          {filteredProjects.map((project, idx) => (
            <article className="project-row" key={project.id}>
              <span className="project-index mono text-muted">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description text-muted">
                  {project.description}
                </p>
                <ul className="project-stack">
                  {project.stack.map((tech) => (
                    <li className="mono project-tech" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a className="btn btn-ghost" href={project.link}>
                  Live ↗
                </a>
                <a className="btn btn-ghost" href={project.repo}>
                  Code ↗
                </a>
              </div>
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <p className="projects-empty text-muted mono">
              No {activeTab} projects added yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}