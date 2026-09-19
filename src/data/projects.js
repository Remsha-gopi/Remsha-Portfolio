export const featuredProjects = [
  {
    id: 'recover-ai',
    title: 'RecoverAI',
    shortDescription: "RecoverAI is an AI-powered healthcare monitoring system designed to track a patient's recovery journey over time, identify meaningful deviations, and help clinicians monitor changes between consultations.",
    overview: "RecoverAI provides continuous monitoring and predictive insights into patient post-care recovery pathways, closing the visibility gap between clinical consultations.",
    problem: "Clinicians face limited visibility into how patients progress once discharged or between clinic visits, leading to delayed interventions when recovery deviates from expected timelines.",
    solution: "RecoverAI combines intelligent check-ins, deviation detection models, and interactive patient and doctor dashboards to identify abnormal trends early and alert medical teams.",
    features: [
      "Patient recovery journey tracking",
      "AI-based recovery prediction",
      "Trend analysis",
      "Deviation detection",
      "Clinician alerts",
      "Patient check-ins",
      "Appointment management",
      "Clinical notes and instructions",
      "Multilingual AI assistant",
      "Voice input and read-aloud",
      "Patient dashboard",
      "Clinician dashboard"
    ],
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Scikit-learn",
      "Random Forest",
      "JWT",
      "REST APIs",
      "Speech Recognition"
    ],
    github: null,
    liveDemo: null,
    badge: "AI Healthcare System"
  },
  {
    id: 'ai-image-restoration',
    title: 'AI Image Restoration',
    shortDescription: "A deep-learning-based image restoration system designed to reconstruct and enhance degraded images using a neural-network-based restoration pipeline.",
    overview: "A specialized computer vision deep learning pipeline implementing U-Net architectures to restore distorted, noisy, or corrupted visual media.",
    problem: "Digital imagery often suffers degradation from low-light capture, sensor noise, and compression artifacts, compromising data fidelity.",
    solution: "An end-to-end neural network architecture trained with CUDA acceleration that maps degraded pixel patterns back to high-fidelity reconstructed representations.",
    features: [
      "Image degradation/restoration pipeline",
      "Deep-learning restoration",
      "U-Net architecture",
      "GPU training",
      "Side-by-side restoration results",
      "Flask interface"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "U-Net",
      "CNN",
      "Flask",
      "CUDA"
    ],
    github: null,
    liveDemo: null,
    badge: "Deep Learning / CV"
  },
  {
    id: 'safe-exam-environment',
    title: 'Safe Exam Environment',
    shortDescription: "A secure examination environment designed using operating-system concepts to provide controlled conditions for digital examinations.",
    overview: "A controlled testing architecture that enforces operating-system-level restrictions and process monitoring to guarantee academic integrity during electronic evaluations.",
    problem: "Standard web-based testing tools can be easily circumvented through secondary applications, unauthorized background tasks, and unconstrained desktop interactions.",
    solution: "Leverages OS process controls, window focus monitoring, and a sandboxed browser workflow to block unauthorized context switching and guarantee exam integrity.",
    features: [
      "Controlled examination environment",
      "System-level restrictions",
      "Secure workflow",
      "Operating-system concepts",
      "Reduced opportunity for unauthorized activity"
    ],
    technologies: [
      "Python",
      "Operating System Concepts",
      "Web Technologies"
    ],
    github: null,
    liveDemo: null,
    badge: "System Security & OS"
  }
];

export const otherProjects = [
  {
    id: 'internshield',
    title: 'InternShield',
    shortDescription: "A fake internship detection web application designed to help identify potentially fraudulent internship opportunities.",
    overview: "An analytical web application that evaluates internship listings against known fraud vectors to protect students from predatory recruitment.",
    problem: "Students frequently encounter fraudulent or scam internship postings across online job portals and messaging platforms.",
    solution: "InternShield scans posted requirements, contact patterns, and operational indicators to flag red flags and protect applicants.",
    features: [
      "Scam pattern detection",
      "Domain and link verification",
      "Student alert flags",
      "Responsive web interface"
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Remsha-gopi/InternSHIELD",
    liveDemo: null
  },
  {
    id: 'sheskills',
    title: 'SheSkills',
    shortDescription: "A women skill-exchange platform designed to connect users for knowledge and skill sharing.",
    overview: "A community-focused web platform facilitating peer-to-peer mentorship and reciprocal skill development for women.",
    problem: "Access to focused mentorship networks and collaborative learning environments can be fragmented.",
    solution: "A clean, modern platform matching learners with mentors based on mutual skill exchange and collaborative interests.",
    features: [
      "Skill matching",
      "Mentorship exchange",
      "Interactive dashboard",
      "Modern responsive UI"
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    github: null,
    liveDemo: null
  },
  {
    id: 'birthday-reminder-app',
    title: 'Birthday Reminder App',
    shortDescription: "A Python-based web application for managing birthday reminders.",
    overview: "A lightweight productivity tool to schedule, organize, and receive automated reminders for key dates.",
    problem: "Managing important milestones without intrusive bloat or privacy concerns.",
    solution: "A streamlined Flask application organizing contact milestone dates with clean calendar management.",
    features: [
      "Milestone tracking",
      "Notification scheduling",
      "Clean entry forms",
      "Lightweight backend"
    ],
    technologies: ["Python", "Flask", "HTML", "CSS"],
    github: null,
    liveDemo: null
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    shortDescription: "A web application for generating customized QR codes from text and URLs.",
    overview: "An instant browser-based utility to encode custom text, web links, and contact payloads into clean scannable QR codes.",
    problem: "Need for quick, client-side QR generation without aggressive advertisements or telemetry.",
    solution: "Direct in-browser generation and download of crisp high-resolution QR matrix codes.",
    features: [
      "Instant encoding",
      "URL & text support",
      "One-click download",
      "Dynamic QR canvas rendering"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "QR Code Library"],
    github: "https://github.com/Remsha-gopi/qr_code_generator",
    liveDemo: null
  },
  {
    id: 'toolmind-ai',
    title: 'ToolMind AI',
    shortDescription: "A multi-step AI planning agent designed to break tasks into steps, use tools, and produce a final synthesized response.",
    overview: "An autonomous agent architecture utilizing LLM tool-calling and multi-step reasoning to tackle complex tasks step-by-step.",
    problem: "Single-turn LLM responses fail on complex workflows requiring external data retrieval, calculation, and multi-step execution.",
    solution: "Implements a deliberate reasoning loop that breaks tasks into distinct sub-goals, calls external tools/APIs, and synthesizes intermediate results.",
    features: [
      "Multi-step task decomposition",
      "Dynamic tool selection",
      "API integration",
      "Autonomous synthesis loop"
    ],
    technologies: ["Python", "AI Agents", "LLMs", "APIs", "Tool Calling"],
    github: "https://github.com/Remsha-gopi/ToolMind-AI",
    liveDemo: null
  },
  {
    id: 'calculator',
    title: 'Calculator',
    shortDescription: "An interactive calculator built as a frontend web application.",
    overview: "A responsive, accessible calculator application supporting basic arithmetic with precision and keyboard input.",
    problem: "Building an intuitive, bug-free mathematical interface with robust decimal and state handling.",
    solution: "Implemented clean event-driven state logic and responsive CSS styling with full keyboard support.",
    features: [
      "Standard arithmetic operations",
      "Keyboard support",
      "Clean display interface",
      "Instant evaluation"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Remsha-gopi/Calculator",
    liveDemo: null
  }
];
