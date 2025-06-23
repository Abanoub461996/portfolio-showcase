
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: React.ReactNode;
  technologies: string[];
  isLatest?: boolean;
};

const ExperienceItem = ({ title, company, period, description, technologies, isLatest }: ExperienceItemProps) => {
  return (
    <Card className={`card-hover relative ${isLatest ? 'border-primary/40' : ''}`}>
      {isLatest && (
        <div className="absolute -top-3 -right-2">
          <Badge className="bg-primary text-primary-foreground">Current</Badge>
        </div>
      )}
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-muted-foreground flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {company}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground flex items-center gap-1 text-sm">
              <Calendar className="w-4 h-4" />
              {period}
            </p>
          </div>
        </div>

        <div className="text-sm text-foreground/80">
          {description}
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Dice Marketing and Advertising",
      period: "April 2025 – Present",
      description: (
        <div className="space-y-3">
          <p>
            Leading the frontend team in planning and delivering high-quality web applications for both internal use and SaaS products. Responsible for architecting and developing multiple production-ready platforms using React, Next.js, and Vue.
          </p>
          <p>
            Collaborated closely with cross-functional teams to ensure scalable, maintainable codebases and smooth project delivery. All applications are actively in use, deployed behind authenticated access.
          </p>
          <div className="mt-2">
            <h4 className="font-semibold">Key Projects:</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Spread:</strong> Social media posts management tool built with Vue 3
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Grid:</strong> Events project progress tracker - 
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="pl-1" 
                    asChild
                  >
                    <a 
                      href="https://grid.dicema.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      grid.dicema.com
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Company:</strong> 
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="pl-1" 
                    asChild
                  >
                    <a 
                      href="https://dicema.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      dicema.com
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      technologies: [
        "React", 
        "Next.js", 
        "Vue 3", 
        "TypeScript", 
        "Team Leadership",
        "Architecture Design"
      ],
      isLatest: true
    },
    {
      title: "Senior Frontend Developer",
      company: "StoryMe",
      period: "August 2024 – April 2025",
      description: (
        <div className="space-y-3">
          <p>
            Participated in multiple creative appealing websites using ThreeJS and GSAP libraries as a solo pilot, and mainly participating with a large team in the StoryMe editor application.
          </p>
          <div className="mt-2">
            <h4 className="font-semibold">Highlighted Project: StoryME Editor</h4>
            <p className="mt-1">
              StoryME Editor, a user-friendly tool that empowers creators to transform narratives into visually stunning, interactive web pages. By leveraging pre-built web components and engaging animations, users can effortlessly bring their stories to life.
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Role:</strong> Senior Front-end Developer
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Reference:</strong> 
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="pl-1" 
                    asChild
                  >
                    <a 
                      href="https://main.d2r3zvfauhj3p9.amplifyapp.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      StoryME Editor 
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      technologies: [
        "ThreeJS", 
        "GSAP", 
        "Web Components", 
        "Interactive Animations"
      ],
      isLatest: false
    },
    {
      title: "Frontend Instructor",
      company: "AMIT Learning",
      period: "December 2023 – August 2024",
      description: (
        <div className="space-y-3">
          <p>
            Developed and delivered comprehensive curriculum modules in HTML, CSS, JavaScript, and React, fostering a dynamic learning environment.
          </p>
          <p>
            Provided personalized mentorship and guidance, resulting in measurable improvements in student comprehension.
          </p>
        </div>
      ),
      technologies: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "React", 
        "Teaching"
      ],
      isLatest: false
    },
    {
      title: "Frontend Developer",
      company: "Caduceus Lane Company",
      period: "December 2022 – September 2024",
      description: (
        <div className="space-y-3">
          <p>
            Worked alongside Back-End Developers, Graphic Designers, UI/UX Designers, and the PO to deliver the best modern-look browser-friendly user experience.
          </p>
          <div className="mt-2">
            <h4 className="font-semibold">Highlighted Project: Exhibit Platform</h4>
            <p className="mt-1">
              Interactive Marketplace Platform for tailored event design solutions, enabling users to explore 3D booths and event items, customize designs by alternating materials or adding logos, images, or videos to be presented in their physical events and purchase finalized design files.
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Exhibit Sellers Portal:</strong> Desktop App for Publishing 3D designs, uploading 3D files and specifying the possible customizations on the designs.
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Exhibit Buyers Portal:</strong> Web App for browsing the 3D designs and customization before completing purchase the finalized design files.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      technologies: [
        "Angular 14", 
        "Electron", 
        "Next.js 13", 
        "AWS S3", 
        "Lambda", 
        "Three.js",
        "CryptoJS",
        "Stripe.js"
      ],
      isLatest: false
    },
    {
      title: "Junior Frontend Developer",
      company: "Sphinx Publishing Company",
      period: "February 2022 – December 2022",
      description: (
        <div className="space-y-3">
          <p>
            Worked on digitalizing Educational School books, transferring the Content into responsive interactive web pages.
          </p>
          <div className="mt-2">
            <h4 className="font-semibold">Highlighted Project: York</h4>
            <p className="mt-1">
              A complete suite of tools to transform the classroom and support learning both in the classroom and at home including digital library, assessment bank and other tools.
            </p>
          </div>
        </div>
      ),
      technologies: [
        "React", 
        "JavaScript", 
        "SCSS", 
        "HTML5", 
        "Responsive Design", 
        "Interactive Content"
      ],
      isLatest: false
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">Work History</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey as a Frontend Developer across different companies and projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
              isLatest={exp.isLatest}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
