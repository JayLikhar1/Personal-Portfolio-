import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Award, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Deloitte Australia Technology Job Simulation",
    issuer: "Forage",
    date: "Jan 2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_qRjPNgXnx3DYaNCTk_1769744134946_completion_certificate.pdf",
    skills: ["Technology Consulting", "Data Analysis", "Client Communication"]
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "Nov 2025",
    link: "https://www.hackerrank.com/certificates/iframe/63dbe4adafff",
    skills: ["Complex Queries", "Joins", "Aggregations", "Indexing"]
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Dec 2024",
    link: "https://www.hackerrank.com/certificates/iframe/77fab85a4200",
    skills: ["Data Structures", "Control Flow", "Functions", "OOP"]
  }
];

export default function Certifications() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Certifications & Achievements" 
        description="Professional credentials verifying my technical skills and industry knowledge."
      />

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col md:flex-row items-center gap-6 bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Award className="w-8 h-8" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-muted-foreground mb-3">
                <span className="font-medium text-foreground">{cert.issuer}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span>{cert.date}</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {cert.skills.map(skill => (
                  <span key={skill} className="inline-flex items-center text-xs text-muted-foreground px-2 py-1 bg-muted/50 rounded-md border border-border/50">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button asChild variant="outline" className="rounded-xl">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  View Certificate
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
