import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases: string[] = useMemo(
    () => [
      "React Developer",
      "Angular Developer",
      "Next.js Developer",
      "3D Enthusiast",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const phrase: string = phrases[currentPhraseIndex];
    let charIndex = 0;
    setTypedText("");

    const typingInterval = setInterval(() => {
      if (charIndex <= phrase.length) {
        setTypedText(phrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex, phrases]);

  const handleDownloadCV = () => {
    const cvUrl = "/cv/AbanoubRagaay_Frontend_Developer_Resume.pdf"; // Update with your actual CV path
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Abanoub_Ragaay_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* Code-like background decoration */}
      <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
        <pre className="text-xs md:text-sm font-code text-left p-8">
          {`function Portfolio() {
  const [skills, setSkills] = useState([
    'React', 'Angular', 'Next.js', 'TypeScript', 
    'Three.js', 'Tailwind CSS', 'MUI'
  ]);
  
  const experience = [
    {
      company: 'Caduceus Lane',
      position: 'Frontend Developer',
      period: 'December 2022 - September 2024'
    },
    {
      company: 'Sphinx Publishing',
      position: 'Frontend Developer',
      period: 'February 2022 - December 2022'
    }
  ];
  
  return (
    <Developer 
      name="Abanoub Ragaay"
      title="Senior Frontend Engineer"
      location="Alexandria, Egypt"
    />
  );
}`}
        </pre>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            <span>Senior Frontend Engineer</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-scale-in">
            Hi, I'm <span className="text-primary">Abanoub Ragaay</span>
          </h1>

          <div className="h-8 mb-6">
            <span className="text-xl md:text-2xl font-medium typing-container">
              {typedText}
            </span>
          </div>

          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            I build exceptional, interactive user experiences with modern
            frontend technologies. Specializing in React, Angular, and 3D
            visualizations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gap-2 text-lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center w-full">
            <a
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
