import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="public/profile.jpeg" 
              alt="Swarna Nallam" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-glow object-cover"
            />
          </div>                    
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Lakshmi Swarna Durga
            <br />
            <span className="text-primary-glow">Nallam</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            AI/ML Engineer & Full-Stack Developer specializing in intelligent systems, 
            data science, and scalable web applications
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[180px] bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'public/Swarna_Nallam_Resume.pdf';
                link.download = 'Swarna_Nallam_Resume.pdf';
                link.click();
              }}
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Python", "React", "Machine Learning", "TypeScript", "AI", "Data Science"].map((skill) => (
              <Badge key={skill} variant="outline" className="bg-white/5 text-white border-white/20 hover:bg-white/10">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;