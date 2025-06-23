import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github, Code, Box, ChevronRight } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
  featured?: boolean;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card
      className={`overflow-hidden card-hover ${
        project.featured ? "border-primary/30" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden bg-secondary group">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-tech-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-3">
            {project.links.demo && (
              <Button size="sm" className="gap-1" asChild>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="outline" className="gap-1" asChild>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
        {project.featured && (
          <Badge className="bg-primary/20 text-primary border-primary/30">
            Featured Project
          </Badge>
        )}
        <div className="flex gap-2 ml-auto">
          {project.links.demo && (
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "3D Interactive Visualization Project",
      description:
        "Engaging, interactive 3D experiences on the web using Three.js, demonstrating skills in 3D modeling, animation, lighting, and user interaction design.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Three.js", "JavaScript", "WebGL", "3D Modeling", "Animation"],
      links: {
        demo: "https://abanoub461996.github.io/3D-Models/",
        github: "https://github.com/Abanoub461996/3D-Models",
      },
      featured: true,
    },
    {
      title: "Chess Game Simulation",
      description:
        "A chess game simulation using Angular 16 deployed on Firebase with the ngx-chess-board library. The main page hosts two iframes, each loading a chess board with mirrored moves.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tags: ["Angular 16", "Firebase", "ngx-chess-board", "TypeScript", "CSS"],
      links: {
        demo: "https://abanoub-chess-game.web.app",
        github: "https://github.com/Abanoub461996/chess-game",
      },
      featured: false,
    },
    {
      title: "Aram - Task Management System",
      description:
        "My first ever completed project and graduation project from ITI Alexandria. A full-featured task management tool with real-time collaboration, built as a team project. Features include user authentication, project boards, task management with priority labels, file attachments, role-based permissions, and real-time updates using Firebase.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: [
        "React",
        "SCSS",
        "Bootstrap",
        "Firebase",
        "Team Project",
        "Graduation Project",
      ],
      links: {
        demo: "https://aram-seven.vercel.app/",
        github: "https://github.com/Abanoub461996/Aram",
      },
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="section bg-gradient-to-b from-card to-background"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personal Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my skills through personal projects and contributions.
            These represent my passion for frontend development and 3D
            visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto glass p-8 text-center">
          <div className="flex justify-center mb-6">
            {/* 3D Cube Icon */}
            <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <Box className="w-7 h-7" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">
            Interested in my 3D visualization work?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm passionate about creating interactive 3D experiences on the web.
            Using Three.js and WebGL, I build immersive user interfaces that
            combine technical excellence with creative design.
          </p>
          <Button size="lg" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <span>Let's Discuss Your Project</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
