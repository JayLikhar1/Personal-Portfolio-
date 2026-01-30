import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "C++", "JavaScript", "TypeScript"],
    color: "bg-blue-500",
  },
  {
    title: "Web Frameworks",
    skills: ["React.js", "Flask", "FastAPI", "Streamlit", "Node.js", "Express"],
    color: "bg-purple-500",
  },
  {
    title: "Databases & Tools",
    skills: ["MongoDB", "PostgreSQL", "Git", "Docker", "VS Code"],
    color: "bg-green-500",
  },
  {
    title: "Data Science & ML",
    skills: [
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Clustering",
      "Model Evaluation",
      "Scikit-learn",
      "Pandas/NumPy"
    ],
    color: "bg-orange-500",
  },
  {
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
    color: "bg-pink-500",
  },
];

export default function Skills() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Skills & Technologies" 
        description="A comprehensive overview of my technical expertise across full-stack development and data science."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={cn("w-1 h-8 rounded-full", category.color)} />
              <h3 className="font-display font-bold text-xl">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-muted/50 text-foreground text-sm font-medium rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
