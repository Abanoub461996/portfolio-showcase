import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";
import { SkillCategory, skillCategories } from "../data";
import { Layout, Code, Terminal, Layers } from "lucide-react";

const categoryIcons: Record<SkillCategory, JSX.Element> = {
  frontend: <Layout className="w-5 h-5" />,
  frameworks: <Code className="w-5 h-5" />,
  tools: <Terminal className="w-5 h-5" />,
  concepts: <Layers className="w-5 h-5" />,
};

const SkillCard: FC<{ category: SkillCategory }> = ({ category }) => (
  <Card className="skill-card">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        {categoryIcons[category]}
        <h3 className="text-lg font-semibold capitalize">{category} Skills</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillCategories[category].map((skill) => (
          <span key={skill} className="tech-tag">
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default SkillCard;
