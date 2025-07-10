import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "sn103@rice.edu",
      display: "sn103@rice.edu",
      icon: "📧",
      primary: true
    },
    {
      type: "Phone", 
      value: "(+1) 7133596070",
      display: "(+1) 713-359-6070",
      icon: "📱"
    },
    {
      type: "LinkedIn",
      value: "https://linkedin.com/in/swarna-nallam",
      display: "Swarna Nallam",
      icon: "💼"
    },
    {
      type: "Location",
      value: "Houston, TX",
      display: "Houston, Texas",
      icon: "📍"
    }
  ];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in AI/ML, full-stack development, and research collaborations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-foreground">EMAIL</h3>
              <p className="text-xl text-muted-foreground mb-8">sn103@rice.edu</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-2 text-foreground">PHONE</h3>
              <p className="text-xl text-muted-foreground mb-8">(+1) 713-359-6070</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-2 text-foreground">ADDRESS</h3>
              <p className="text-xl text-muted-foreground mb-8">Houston, Texas</p>
            </div>
            
            <div className="pt-6">
              <Button 
                variant="hero" 
                size="lg"
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
          </div>
          
          {/* Contact Form */}
          <div>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const message = formData.get('message') as string;
                  
                  const subject = `Contact from ${name}`;
                  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                  
                  window.location.href = `mailto:sn103@rice.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="px-12"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;