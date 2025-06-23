import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Layout,
  Terminal,
  Layers,
  Palette,
  Workflow,
} from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = {
    frontend: [
      "HTML5",
      "CSS3/SCSS",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Redux Toolkit",
      "Redux Saga",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "Progressive Web App",
    ],
    frameworks: ["React.js", "Angular (14+)", "Next.js (14+)", "Vue.js (3+)"],
    tools: [
      "Webpack",
      "Native ES Modules",
      "Service Workers",
      "Version Control (GitHub & GitLab)",
      "Postman",
      "Swagger",
      "Figma",
    ],
    concepts: [
      "SEO Principles",
      "Data Structures & Algorithms",
      "Design Patterns",
      "Cross Browser Compatibilities",
      "Object Oriented Programming",
      "DevOps Tasks",
    ],
  };

  const categoryIcons = {
    frontend: <Layout className="w-5 h-5" />,
    frameworks: <Code className="w-5 h-5" />,
    tools: <Terminal className="w-5 h-5" />,
    concepts: <Layers className="w-5 h-5" />,
  };

  const skillVisuals = [
    {
      name: "React",
      level: 90,
      color: "bg-blue-500",
    },
    {
      name: "Angular",
      level: 60,
      color: "bg-red-600",
    },
    {
      name: "Next.js",
      level: 85,
      color: "bg-indigo-500", // Changed from dark gray to indigo for better visibility
    },
    {
      name: "TypeScript",
      level: 95,
      color: "bg-blue-600",
    },
    {
      name: "Redux / Redux Toolkit / Redux Saga",
      level: 85,
      color: "bg-purple-600",
    },
    {
      name: "HTML/CSS",
      level: 95,
      color: "bg-orange-500",
    },
  ];

  return (
    <section
      id="skills"
      className="section bg-gradient-to-b from-background to-card"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 5 years of frontend development experience, I've mastered
            a wide range of technologies and methodologies to create exceptional
            web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-6">
                <TabsTrigger
                  value="frontend"
                  className="flex items-center gap-2"
                  onClick={() => setActiveTab("frontend")}
                >
                  <Layout className="w-4 h-4" />
                  <span>Frontend</span>
                </TabsTrigger>
                <TabsTrigger
                  value="frameworks"
                  className="flex items-center gap-2"
                  onClick={() => setActiveTab("frameworks")}
                >
                  <Code className="w-4 h-4" />
                  <span>Frameworks</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="flex items-center gap-2"
                  onClick={() => setActiveTab("tools")}
                >
                  <Terminal className="w-4 h-4" />
                  <span>Tools</span>
                </TabsTrigger>
                <TabsTrigger
                  value="concepts"
                  className="flex items-center gap-2"
                  onClick={() => setActiveTab("concepts")}
                >
                  <Layers className="w-4 h-4" />
                  <span>Concepts</span>
                </TabsTrigger>
              </TabsList>

              {Object.keys(skillCategories).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {categoryIcons[category as keyof typeof categoryIcons]}
                        <h3 className="text-lg font-semibold capitalize">
                          {category} Skills
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {skillCategories[
                          category as keyof typeof skillCategories
                        ].map((skill) => (
                          <span key={skill} className="tech-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <p className="text-muted-foreground text-sm">
              Additionally, I have experience with various design tools, testing
              libraries, and continuous integration tools to ensure
              high-quality, maintainable code.
            </p>
          </div>

          <div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Workflow className="w-5 h-5" />
                <span>Proficiency Levels</span>
              </h3>

              <div className="space-y-6">
                {skillVisuals.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${skill.color}`}
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-background/30 p-4 rounded-md">
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <Palette className="w-4 h-4" />
                  <span>UI Libraries & Styling</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Material UI</Badge>
                  <Badge>Styled Components</Badge>
                  <Badge>SCSS</Badge>
                  <Badge>CSS Modules</Badge>
                  <Badge>Shadow DOM</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
