import { Badge } from "@/components/ui/badge";
import { Palette } from "lucide-react";
import { uiLibraries } from "../data";

const UiLibrariesSection = () => {
  return (
    <div className="mt-8 bg-background/30 p-4 rounded-md ui-libraries-section">
      <h4 className="font-medium flex items-center gap-2 mb-2">
        <Palette className="w-4 h-4" />
        <span>UI Libraries & Styling</span>
      </h4>
      <div className="flex flex-wrap gap-2">
        {uiLibraries.map((lib) => (
          <Badge className="ui-badge" key={lib}>
            {lib}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default UiLibrariesSection;
