import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Education & Certifications</h2>
        </div>

        <div className="space-y-6">
          {/* Bachelor's Degree */}
          <Card className="p-6 glass-card border-border/50 hover:shadow-card-hover hover:scale-[1.02] transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary group-hover:scale-105 transition-transform origin-left">Bachelor of Engineering (B.E)</h3>
                <p className="text-lg text-foreground/90">Electronics and Telecommunication Engineering</p>
                <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors">Sinhgad College Of Engineering, Vadgaon Bk, Pune</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-accent group-hover:scale-110 transition-transform">CGPA: 8.94/10</p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
              </div>
            </div>
          </Card>

          {/* Senior Secondary */}
          <Card className="p-6 glass-card border-border/50 hover:shadow-card-hover hover:scale-[1.02] transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary group-hover:scale-105 transition-transform origin-left">Senior Secondary (XII)</h3>
                <p className="text-lg text-foreground/90">State Board</p>
                <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors">Hislop Junior College</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-accent group-hover:scale-110 transition-transform">78.00%</p>
                <p className="text-sm text-muted-foreground">2020</p>
              </div>
            </div>
          </Card>

          {/* Certification */}
          <Card className="p-6 glass-card border-border/50 hover:shadow-card-hover hover:scale-[1.02] transition-all duration-500 group">
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 rounded-lg h-fit group-hover:bg-accent/20 transition-colors">
                <Award className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-accent group-hover:scale-105 transition-transform origin-left">Data Science Certification</h3>
                <p className="text-lg text-foreground/90">Internshala</p>
                <p className="text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                  Hands-on training in Python, SQL, Power BI, Tableau, Machine Learning, ETL, and Data Wrangling
                </p>
                <p className="text-sm text-muted-foreground mt-2">July 2024 - February 2025</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
