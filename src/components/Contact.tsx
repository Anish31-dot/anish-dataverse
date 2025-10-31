import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Interested in working together? Feel free to reach out!
          </p>
        </div>

        <Card className="p-8 glass-card border-border/50 hover:shadow-card-hover transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="mailto:anishbutle99@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg glass-card hover:border-primary/40 hover:scale-105 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">anishbutle99@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+918605202273"
                className="flex items-center gap-4 p-4 rounded-lg glass-card hover:border-primary/40 hover:scale-105 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">+91 8605202273</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg glass-card">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Connect on Social</h3>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 glass-card hover:border-primary/40 hover:scale-105 transition-all group"
                  asChild
                >
                  <a href="https://github.com/anish31-dot" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    GitHub Profile
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 glass-card hover:border-primary/40 hover:scale-105 transition-all group"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/anish-butle-47b021233" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>

              <Button 
                size="lg" 
                className="w-full gap-2 mt-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
                asChild
              >
                <a href="/Anish_Butle_Resume.pdf" download>
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>© 2025 Anish Butle. Built with passion for data.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
