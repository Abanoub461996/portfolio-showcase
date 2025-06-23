import { FC } from "react";
import { SkillVisual } from "../skills";



const SkillBar:FC<SkillVisual> = ({ name, level, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full skill-bar-fill ${color}`}
        data-width={`${level}%`}
        style={{ width: 0, transition: "width 1s ease-in-out" }}
        aria-label={`${name} proficiency bar`}
      ></div>
    </div>
  </div>
);

export default SkillBar;
