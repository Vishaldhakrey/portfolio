import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "WorkLyft",
    description:
      "A job portal application designed to connect businesses with top talent, built with the MERN stack.",
    image: "work-lyft.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Vishaldhakrey/worklyft",
    details: {
      problem:
        "Traditional job portals are outdated and lack modern user-friendly features.",
      solution:
        "Built a modern job portal with advanced features for job seekers and employers, making the hiring process smoother and more efficient.",
      features: [
        "Job listings with advanced search filters",
        "Employer and job seeker profiles",
        "Real-time notifications for job applications",
        "User-friendly interface for job management",
      ],
      impact: "Connecting job seekers with opportunities and helping employers find top talent efficiently.",
    },
  },
  {
    title: "Spotify Backend",
    description:
      "Backend for a Spotify-like application, built with Node.js, Express, and MongoDB.",
    image: "spotify.jpg",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Vishaldhakrey/spotify-backend",
    details: {
      problem:
        "Need for a backend system for a scalable music streaming platform.",
      solution:
        "Developed an API for song management, user authentication, and playlist creation.",
      features: [
        "User authentication with Clerk",
        "Song and playlist management",
        "Scalable database design using MongoDB",
        "Integration with Cloudinary for media storage",
      ],
      impact: "Providing a robust backend for a music streaming service.",
    },
  },
  {
    title: "Web Leads Extension",
    description: "A Chrome extension for generating and managing web leads.",
    image: "web-lead-extension.webp",
    tech: ["JavaScript", "HTML", "CSS", "Chrome Extensions API"],
    github: "https://github.com/Vishaldhakrey/web-leads-extension",
    details: {
      problem:
        "Manual web lead generation is time-consuming and inefficient.",
      solution:
        "Built a Chrome extension to automate lead generation and management directly from the browser.",
      features: [
        "Capture leads from web pages",
        "Save and export leads in various formats",
        "User-friendly interface with real-time updates",
        "Customizable lead filters",
      ],
      impact: "Streamlining lead generation for businesses and users.",
    },
  },
  {
    title: "NoteSpace",
    description: "A note-taking app with features like pinning, editing, and deleting notes.",
    image: "notespace.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Vishaldhakrey/NoteSpace",
    details: {
      problem: "Existing note-taking apps lack personalization and advanced features.",
      solution: "Created a personalized note-taking app with essential features like pinning and editing.",
      features: [
        "Create, update, delete, and pin notes",
        "Real-time sync between devices",
        "User authentication for secure access",
        "Customizable themes and settings",
      ],
      impact: "Helping users organize their thoughts and improve productivity.",
    },
  },
];
