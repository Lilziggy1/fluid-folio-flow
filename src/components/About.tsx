
import { Card, CardContent } from "@/components/ui/card";
import { 
  Braces, 
  Database, 
  Globe, 
  Languages, 
  Layers, 
  MonitorSmartphone,
  Server
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    className: "frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    className: "backend",
    items: ["Node.js", "Express", "NestJS", "Django", "Ruby on Rails", "PHP"]
  },
  {
    category: "Database",
    className: "database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    className: "tools",
    items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "Vite"]
  }
];

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead development of enterprise web applications, mentoring junior developers, and implementing best practices.",
    icon: <Layers className="h-8 w-8 text-primary" />
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Solutions LLC",
    period: "2018 - 2021",
    description: "Built responsive web applications using React and integrated with RESTful APIs.",
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Server Systems Co.",
    period: "2016 - 2018",
    description: "Developed and maintained server-side applications and databases.",
    icon: <Server className="h-8 w-8 text-primary" />
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="mx-auto h-1 w-20 bg-primary rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-foreground/80">
            I'm a passionate full stack developer with over 5 years of experience building
            web applications that are not just functional, but also intuitive and enjoyable to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Braces className="h-6 w-6 text-primary" />
              My Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className={`skill-pill ${skillGroup.className}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              My Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex p-6">
                      <div className="mr-4 flex-shrink-0">{exp.icon}</div>
                      <div>
                        <h4 className="text-lg font-medium">{exp.title}</h4>
                        <p className="text-sm text-foreground/70">{exp.company} • {exp.period}</p>
                        <p className="mt-2 text-foreground/80">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
