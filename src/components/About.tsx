import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging AI and technology to solve real-world problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
              Currently pursuing my Master's in Computer Science at Rice University, where I'm exploring the depths of Artificial Intelligence, Machine Learning, and Information Retrieval. I enjoy transforming complex ideas into real-world applications whether it's developing an AI-powered chatbot, optimizing neural networks, or building practical tools like my DMV web app.
              </p>
              <p className="text-muted-foreground leading-relaxed">
              I'm especially passionate about working on meaningful projects that people can actually use—technology that solves real problems and makes everyday life better. During my undergrad, I also had the chance to attend a summer familiarization program at UTP Malaysia, which broadened both my technical and cultural perspectives.
              </p>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;