import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Travel Chatbot with RAG Framework",
      duration: "February 2025 - April 2025",
      description: "Developed a dense semantic retrieval system for more than 30,000 UNESCO heritage site documents and travel attractions, improving query accuracy by 92%.",
      highlights: [
        "Upgraded a 4.3 billion-parameter LLM (Phi-3.5-4B) model integrated with optimized FAISS vector search, resulting in query response times under 1.2 seconds and an embedding storage reduction of 78% (from 2.5GB to 2.5GB).",
        "Achieved 89% top-3 retrieval accuracy on paraphrased queries, outperforming TF-IDF baselines by 41%."
      ],
      technologies: ["Python", "LLM", "SentenceTransformers", "RAG", "FAISS"],
      category: "AI/ML",
      githubUrl: "https://github.com/Swarna2503/Travel-ChatBot-RAG.git"
    },
    {
      title: "High-Resolution Colorization Using GANs",
      duration: "January 2025 - March 2025",
      description: "Combined DeOldify for grayscale colorization and Real-ESRGAN for super-resolution to deliver grayscale-to-4K colorization with sharp, vivid results.",
      highlights: [
        "Fine-tuned Real-ESRGAN on the DIV2K dataset using perceptual loss, L1 loss, and adversarial loss with a Relativistic average GAN (RaGAN) discriminator.",
        "Enhanced model performance to 28.5 PSNR / 0.89 SSIM."
      ],
      technologies: ["Python", "DeOldify", "ESRGAN", "GANs", "Computer Vision"],
      category: "AI/ML",
      githubUrl: "https://github.com/Swarna2503/HighResolutionColorisationGan.git"
    },
    {
      title: "Multi-Class URL Classification with Bloom Filters",
      duration: "September 2024 - December 2024",
      description: "Designed and implemented a hybrid detection system combining logistic regression, LSTM classifiers, and dual-layer Bloom filters to identify malicious URLs with high precision in real-time traffic.",
      highlights: [
        "Reduced false positives by 15% through a dual-layer Bloom filter augmented with logistic regression for early URL classification on Kaggle DMOZ dataset.",
        "Implemented neural hashing to dynamically optimize Bloom Filter mappings.",
        "Leveraged XGBoost models as secondary classifiers for ambiguous URLs, boosting overall precision to 94% on the Kaggle DMOZ dataset."
      ],
      technologies: ["Python", "TensorFlow", "XGBoost", "Bloom Filters", "LSTM"],
      category: "AI/ML",
      githubUrl: "https://github.com/Swarna2503/LearnedBloomFilter.git"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Innovative solutions in AI, machine learning, and computer vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
              <div 
                className="aspect-video bg-gradient-primary rounded-t-lg relative overflow-hidden"
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-glow/60 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div onClick={() => setExpandedProject(expandedProject === index ? null : index)}>
                    <p className="text-sm text-muted-foreground mb-2">{project.duration}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {expandedProject === index && (
                    <div className="space-y-3 border-t pt-4">
                      <h5 className="font-semibold text-sm">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-xs text-muted-foreground leading-relaxed">
                            • {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {(expandedProject === index ? project.technologies : project.technologies.slice(0, 3)).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {expandedProject !== index && project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex justify-end items-center pt-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;