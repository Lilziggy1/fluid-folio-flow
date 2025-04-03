
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Badge, 
  ExternalLink,
  Github,
} from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with product listings, cart, checkout, and user authentication.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    demoUrl: "#",
    repoUrl: "#",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with project organization and team collaboration features.",
    image: "https://images.unsplash.com/photo-1540349086487-add52fc9dd27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    category: "frontend"
  },
  {
    id: 3,
    title: "Booking System API",
    description: "A RESTful API for a booking system with authentication, authorization, and resource management.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    demoUrl: "#",
    repoUrl: "#",
    category: "backend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode, animations, and contact form.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    category: "frontend"
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time messaging application with user presence, read receipts, and file sharing.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
    category: "fullstack"
  },
  {
    id: 6,
    title: "Microservices Architecture",
    description: "A microservices-based application with service discovery, API gateway, and message queues.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Docker", "Kubernetes", "Node.js", "RabbitMQ"],
    demoUrl: "#",
    repoUrl: "#",
    category: "backend"
  }
];

// Filter categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Full Stack" }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="mx-auto h-1 w-20 bg-primary rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-foreground/80">
            A selection of my recent projects, showcasing my skills and experience
            in web development.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/20 text-primary-foreground px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" asChild variant="default">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink size={14} /> Demo
                      </a>
                    </Button>
                    <Button size="sm" asChild variant="outline">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github size={14} /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
