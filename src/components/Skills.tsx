import { Card } from "@/components/ui/card";
import { Code2, Database, BarChart3, Brain, Users, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming & Scripting",
      icon: Code2,
      skills: ["Python", "SQL", "Java", "VBA"]
    },
    {
      category: "Reporting & Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Tableau", "MS Excel", "Pivot Tables", "VLOOKUP"]
    },
    {
      category: "Data Handling & Analysis",
      icon: Database,
      skills: ["MySQL", "Pandas", "NumPy", "ETL", "Data Wrangling"]
    },
    {
      category: "Machine Learning & NLP",
      icon: Brain,
      skills: ["Scikit-learn", "TensorFlow", "Word2Vec", "TF-IDF"]
    }
  ];

  const softSkills = [
    { name: "Analytical Thinking", icon: Target },
    { name: "Team Collaboration", icon: Users },
    { name: "Data-Driven Decision Making", icon: BarChart3 },
    { name: "Detail-Oriented", icon: Target }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 glass-card border-border/50 hover:shadow-card-hover hover:scale-[1.02] transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{category.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md border border-border/50 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={index}
                    className="p-4 glass-card border-border/50 hover:shadow-card-hover hover:scale-105 transition-all duration-500 text-center group cursor-pointer"
                  >
                    <Icon className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 group-hover:text-primary transition-all" />
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
