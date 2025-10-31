import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Text Intelligence: Sentiment Analysis",
      subtitle: "Machine Learning, NLP",
      description: [
        "Preprocessed text using NLP techniques for sentiment classification",
        "Achieved 85% accuracy in classifying movie sentiments using Word2Vec & TF-IDF",
        "Delivered sentiment trend reports to understand viewer feedback"
      ],
      link: "https://github.com/Anish31-dot/Natural-Language-Processing-Project",
      tags: ["Python", "NLP", "Word2Vec", "TF-IDF"]
    },
    {
      title: "Sales Performance Analysis of Walmart Stores",
      subtitle: "MySQL, SQL Analytics",
      description: [
        "Used advanced SQL (CTEs, Window Functions, Views, Stored Procedures) to build pipeline and revenue performance reports",
        "Visualized sales trends and store performance in Power BI for leadership reporting",
        "Integrated revenue insights into dashboards, aiding in strategic business decisions"
      ],
      link: "https://github.com/Anish31-dot/-Sales-Performance-Analysis-Using-Advanced-MySQL-Techniques",
      tags: ["SQL", "MySQL", "Power BI", "ETL"]
    },
    {
      title: "Electric Vehicle Data Analysis",
      subtitle: "Data Analysis, Hypothesis Testing",
      description: [
        "Analyzed 1000+ electric vehicle performance records to extract performance trends",
        "Conducted hypothesis testing and regression analysis to identify battery-related performance factors",
        "Presented insights with clean visual storytelling using Matplotlib & Seaborn"
      ],
      link: "https://github.com/Anish31-dot/Electric-Vehicle-Data-Analysis-Project-Using-Python",
      tags: ["Python", "Pandas", "Matplotlib", "Statistics"]
    },
    {
      title: "Airline Performance Analysis",
      subtitle: "Data Visualization, BI Tools",
      description: [
        "Created interactive dashboards with DAX to visualize operational performance KPIs",
        "Delivered executive-level reports to identify revenue-impacting metrics and improve profitability",
        "Improved tracking accuracy of key metrics by 25%"
      ],
      link: "https://github.com/Anish31-dot/-Airline-Performance-Analysis-using-Power-BI",
      tags: ["Power BI", "DAX", "KPI Reporting", "Visualization"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <FolderGit2 className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 glass-card border-border/50 hover:shadow-card-hover hover:scale-[1.02] transition-all duration-500 group"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary group-hover:scale-105 transition-transform origin-left">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>

                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/80 leading-relaxed flex gap-2 hover:text-foreground transition-colors">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="hover:bg-primary/20 hover:border-primary/40 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full gap-2 glass-card hover:border-primary/40 group/btn"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
