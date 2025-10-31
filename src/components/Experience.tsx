import { Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const achievements = [
    "Increased dashboard adoption by 40% by automating portfolio & campaign performance reports in Power BI and SQL",
    "Analyzed customer behavior, ROI, and marketing treatments, delivering insights that directly influenced leadership decisions",
    "Defined and tracked 150+ portfolio & campaign KPIs, expanding marketing analytics coverage",
    "Delivered 100% error-free reports on time, improving data accuracy and stakeholder trust",
    "Mentored peers on SQL optimization and dashboard best practices",
    "Presented insights to business partners that improved campaign effectiveness and ROI evaluation"
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>

        <Card className="p-8 glass-card border-border/50 hover:shadow-card-hover transition-all duration-500 group">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform origin-left">Data Analyst Intern</h3>
                <p className="text-xl text-foreground/80">Renan</p>
              </div>
              <span className="text-muted-foreground font-medium">May 2025 – Present</span>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform">
                  <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0 group-hover/item:text-primary group-hover/item:scale-110 transition-all" />
                  <p className="text-foreground/90 leading-relaxed group-hover/item:text-foreground transition-colors">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
