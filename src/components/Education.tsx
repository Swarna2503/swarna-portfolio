import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educationData = [
    {
      institution: "Rice University",
      degree: "Masters in Computer Science",
      duration: "August 2024 - Present",
      location: "Houston, TX",
      coursework: [
        "Artificial Intelligence (AI)",
        "Information Retrieval",
        "Machine Learning",
        "Introduction to Deep Learning"
      ]
    },
    {
      institution: "SRM University",
      degree: "Bachelors in Computer Science",
      duration: "August 2019 - May 2023",
      location: "Andhra Pradesh, India",
      coursework: [
        "Advanced Data Structures and Algorithms",
        "Big Data",
        "Computer Networks",
        "Operating Systems",
        "Applied Mathematics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Education</h2>
          <p className="text-xl text-muted-foreground">
            Strong academic foundation in computer science and specialized AI/ML training
          </p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {edu.institution}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mb-1">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{edu.duration}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
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

export default Education;