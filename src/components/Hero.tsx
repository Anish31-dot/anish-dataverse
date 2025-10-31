import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>
        
        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="gradient-text">
            Anish Butle
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Data Analyst | Python • SQL • Power BI • Machine Learning
        </p>

        {/* Description */}
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.15s' }}>
          Transforming raw data into actionable insights that drive business success. 
          Specialized in data visualization, statistical analysis, and predictive modeling.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" asChild className="group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all">
            <a href="#contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="glass-card hover:border-primary/40 hover:scale-105 transition-all">
            <a href="/Anish_Butle_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center pt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://github.com/anish31-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:scale-110 hover:border-primary/40 transition-all"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/anish-butle-47b021233"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:scale-110 hover:border-primary/40 transition-all"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:anishbutle99@gmail.com"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:scale-110 hover:border-primary/40 transition-all"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+918605202273"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:scale-110 hover:border-primary/40 transition-all"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
