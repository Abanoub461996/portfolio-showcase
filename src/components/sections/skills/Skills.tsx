import { useState, useMemo, FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Layout,
  Terminal,
  Layers,
  Workflow,
} from "lucide-react";
import { useSkillsGsapAnimations } from "@/hooks/use-skills-gsap";
import SkillBar from "./components/SkillBar";
import SkillCard from "./components/SkillCard";
import { SkillCategory, skillCategories, skillVisuals } from "./data";
import UiLibrariesSection from "./components/UiLibrariesSection";

const Skills:FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const {
    sectionRef,
    headerRef,
    tabsRef,
    tabChipsRef,
    skillBarsRef,
    cardsRef,
  } = useSkillsGsapAnimations(activeTab);

  const tabContents = useMemo(
    () =>
      (Object.keys(skillCategories) as SkillCategory[]).map((category) => (
        <TabsContent key={category} value={category} className="mt-0">
          <SkillCard category={category} />
        </TabsContent>
      )),
    []
  );

  const skillBars = useMemo(
    () =>
      skillVisuals.map((skill) => <SkillBar key={skill.name} {...skill} />),
    []
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section bg-gradient-to-b from-background to-card pt-0"
    >
      <div className="container mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 3 years of frontend development experience, I've mastered
            a wide range of technologies and methodologies to create exceptional
            web experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div ref={tabsRef} className="space-y-6">
            <Tabs defaultValue="frontend" className="w-full" value={activeTab}>
              <TabsList
                ref={tabChipsRef}
                className="grid grid-cols-2 md:grid-cols-4 w-full mb-6"
                aria-label="Skill categories"
              >
                <TabsTrigger
                  value="frontend"
                  className="flex items-center gap-2 tab-chip"
                  onClick={() => setActiveTab('frontend')}
                  aria-selected={activeTab === 'frontend'}
                >
                  <Layout className="w-4 h-4" />
                  <span>Frontend</span>
                </TabsTrigger>
                <TabsTrigger
                  value="frameworks"
                  className="flex items-center gap-2 tab-chip"
                  onClick={() => setActiveTab('frameworks')}
                  aria-selected={activeTab === 'frameworks'}
                >
                  <Code className="w-4 h-4" />
                  <span>Frameworks</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="flex items-center gap-2 tab-chip"
                  onClick={() => setActiveTab('tools')}
                  aria-selected={activeTab === 'tools'}
                >
                  <Terminal className="w-4 h-4" />
                  <span>Tools</span>
                </TabsTrigger>
                <TabsTrigger
                  value="concepts"
                  className="flex items-center gap-2 tab-chip"
                  onClick={() => setActiveTab('concepts')}
                  aria-selected={activeTab === 'concepts'}
                >
                  <Layers className="w-4 h-4" />
                  <span>Concepts</span>
                </TabsTrigger>
              </TabsList>
              <div ref={cardsRef}>{tabContents}</div>
            </Tabs>
            <p className="text-muted-foreground text-sm">
              Additionally, I have experience with various design tools, testing
              libraries, and continuous integration tools to ensure
              high-quality, maintainable code.
            </p>
          </div>
          <div ref={skillBarsRef}>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Workflow className="w-5 h-5" />
                <span>Proficiency Levels</span>
              </h3>
              <div className="space-y-6">{skillBars}</div>
              <UiLibrariesSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
