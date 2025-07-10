import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Ruby", "C/C++", "SQL", "Java", "JavaScript", "HTML", "CSS", "TypeScript", "R", "Hive"]
    },
    {
      title: "Frameworks & Libraries", 
      icon: "🛠️",
      skills: ["Rails", "Hadoop", "Hive", "React", "Node.js", "AEM 6.5", "JUnit", "WordPress"]
    },
    {
      title: "Developer Tools",
      icon: "⚙️", 
      skills: ["Git", "Docker", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"]
    },
    {
      title: "AI/ML Libraries",
      icon: "🤖",
      skills: ["pandas", "NumPy", "Matplotlib", "scikit-learn", "TensorFlow", "PyTorch", "Transformers"]
    }
  ];

  const technicalHighlights = [
    {
      category: "Artificial Intelligence & Machine Learning",
      description: "Advanced expertise in deep learning, neural networks, and AI model development",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "GANs", "Transformers"]
    },
    {
      category: "Data Science & Analytics", 
      description: "Comprehensive data analysis, visualization, and statistical modeling capabilities",
      skills: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Big Data", "Market Research"]
    },
    {
      category: "Full-Stack Development",
      description: "End-to-end web application development with modern technologies",
      skills: ["Frontend Development", "Backend Architecture", "Database Design", "API Development", "Cloud Services"]
    },
    {
      category: "Research & Development",
      description: "Academic research experience with published work and innovative solutions",
      skills: ["Research Methodology", "Technical Writing", "Algorithm Design", "Innovation", "Problem Solving"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive expertise across AI/ML, full-stack development, and data science
          </p>
        </div>
        
        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader className="text-center pb-3">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Technical Highlights */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalHighlights.map((highlight, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {highlight.category}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {highlight.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;