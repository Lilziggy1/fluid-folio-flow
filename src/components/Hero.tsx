
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="animate-slide-in-up [animation-delay:200ms] opacity-0 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Full Stack<br />
          <span className="text-gradient">Developer</span>
        </h1>
        
        <p className="animate-slide-in-up [animation-delay:400ms] opacity-0 text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          I build modern, responsive web applications with a focus on user experience,
          performance, and clean code.
        </p>
        
        <div className="animate-slide-in-up [animation-delay:600ms] opacity-0 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="animate-slide-in-up [animation-delay:800ms] opacity-0 flex justify-center space-x-5 mb-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <a 
          href="#about"
          className="animate-bounce-light inline-block text-foreground/50 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
}
