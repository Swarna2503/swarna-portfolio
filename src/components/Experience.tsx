import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const technologies = [
    { name: "AI/ML", color: "bg-blue-500" },
    { name: "OCR", color: "bg-indigo-500" },
    { name: "React", color: "bg-purple-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "MongoDB", color: "bg-green-500" },
    { name: "NLP", color: "bg-purple-600" },
    { name: "Python", color: "bg-blue-500" },
    { name: "Teaching", color: "bg-indigo-600" }
  ];

  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Rice University",
      duration: "June 2025 - Present",
      description: "Launched dmv-agent ai to automate vehicle registrations, cutting process time from 2+ hours to under 10 minutes.",
      highlights: [
        "Founded dmv-agent.ai, an AI-driven web platform automating vehicle registration for Houston DPS, reducing manual processing time from over 2 hours to less than 10 minutes per transaction.",
        "Implemented OCR-based data extraction pipelines leveraging Microsoft's TIQCR model and NLP techniques, achieving over 95% accuracy in parsing driver's licenses and vehicle titles, significantly reducing manual intervention.",
        "Built responsive frontend interfaces using HTML, CSS, TypeScript, and React.js, and designed scalable backend services integrating MongoDB for efficient data storage and retrieval."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Rice University",
      duration: "Jan 2025 - May 2025",
      description: "Guided 30+ graduate students through probabilistic models and Transformer labs, raising average project scores by 15%.",
      highlights: [
        "Assisted in delivering a graduate-level NLP course to 30 students, covering probabilistic models and neural representations.",
        "Held weekly office hours, mentoring students on sentiment analysis, chatbot design, and information extraction",
        "Designed and implemented detailed grading rubrics for all lab assignments, delivering targeted feedback that boosted project scores significantly."
      ]
    },
    {
      title: "Fullstack Developer",
      company: "Barclays, Indo-Euro Synchronization",
      duration: "July 2023 - July 2024",
      description: "Engineered customized solutions in Adobe Experience Manager for 10+ US co-branded marketing websites.",
      highlights: [
        "Developed and configured scalable Adobe Experience Manager (AEM 6.5), including creation of custom components, templates, and workflows, leveraging Java (Sling Models, OSGi Bundles), HTML, JavaScript, and web services for 10+ US co-branded credit card marketing pages.",
        "Collaborated within an agile team alongside UX designers, QA analysts, DevOps engineers, and business stakeholders and CI/CD practices (Jenkins, Maven).",
        "Conducted 50+ detailed code reviews, significantly enhancing code quality, to reduce production defects, managed Digital Asset Management (DAM) for streamlined asset storage and reuse."
      ]
    },
    {
      title: "Advanced Data Science Intern",
      company: "APSSDC, Indo-Euro Synchronization",
      duration: "March 2022 - August 2022",
      description: "Revamped customer segmentation strategies to improve targeted marketing and cross-selling opportunities.",
      highlights: [
        "Worked under guidance from Hochschule Kempten University (Germany), APSSDC, and Indo-Euro Synchronization.",
        "Transformed customer segmentation strategies based on frequency-based reward programs, boosting targeted marketing.",
        "Performed market basket analyses identifying key product associations that drove cross-selling opportunities and increased sales."
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions across AI, web development, and data science
          </p>
        </div>

        {/* Technologies & Tools Section */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-6 text-foreground">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <Badge 
                key={tech.name} 
                className={`${tech.color} text-white hover:opacity-80 transition-opacity px-4 py-2 text-sm font-medium`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                {/* Content */}
                <div className="ml-12">
                  <Card className="shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer" onClick={() => toggleExpanded(index)}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-2">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            {exp.duration}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {expandedExperience === index && (
                        <div className="mt-6 pt-4 border-t border-border">
                          <ul className="space-y-3">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-muted-foreground leading-relaxed flex items-start">
                                <span className="text-primary mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Button 
                        variant="link" 
                        className="text-primary hover:text-primary/80 p-0 h-auto mt-4 font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(index);
                        }}
                      >
                        {expandedExperience === index ? 'Hide Details' : 'View Highlights'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;