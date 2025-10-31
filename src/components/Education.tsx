import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Education & Certifications</h2>
        </div>

        <div className="space-y-6">
          {/* Bachelor's Degree */}
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary">Bachelor of Engineering (B.E)</h3>
                <p className="text-lg text-foreground/90">Electronics and Telecommunication Engineering</p>
                <p className="text-muted-foreground mt-1">Sinhgad College Of Engineering, Vadgaon Bk, Pune</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-accent">CGPA: 8.94/10</p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
              </div>
            </div>
          </Card>

          {/* Senior Secondary */}
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary">Senior Secondary (XII)</h3>
                <p className="text-lg text-foreground/90">State Board</p>
                <p className="text-muted-foreground mt-1">Hislop Junior College</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-accent">78.00%</p>
                <p className="text-sm text-muted-foreground">2020</p>
              </div>
            </div>
          </Card>

          {/* Certification */}
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/50 transition-all duration-300">
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 rounded-lg h-fit">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-accent">Data Science Certification</h3>
                <p className="text-lg text-foreground/90">Internshala</p>
                <p className="text-muted-foreground mt-2">
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
