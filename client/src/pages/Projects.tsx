import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Advanced Amazon Customer Segmentation",
    description: "Performed exploratory data analysis and engineered behavioral features to generate actionable customer segments. Used K-Means clustering to identify distinct user groups for targeted marketing strategies.",
    tech: ["Python", "SQL", "Scikit-learn", "Streamlit"],
    demo: "https://amazon-customer-segmentation-ghzq6fsiyhj4vpjarcfusn.streamlit.app/",
    github: "https://github.com/JayLikhar1/Amazon-Customer-Segmentation",
    tags: ["Data Science", "Analytics"],
  },
  {
    title: "Smart Study Scheduler",
    description: "Built a full-stack study planning platform with React and Flask. Implemented ML-driven scheduling logic to optimize study sessions based on user performance and preferences.",
    tech: ["React", "Flask", "MongoDB", "Scikit-learn"],
    demo: "https://smart-study-scheduler-8b7c-git-main-jaylikhar1s-projects.vercel.app/",
    github: "https://github.com/JayLikhar1/smart-study-scheduler",
    tags: ["Full Stack", "EdTech"],
  },
  {
    title: "Accessibility Analyzer",
    description: "Developed a web-based accessibility evaluation tool using FastAPI. Generates severity-weighted accessibility scores based on WCAG 2.0 guidelines using machine learning models.",
    tech: ["FastAPI", "WCAG 2.0", "Machine Learning"],
    demo: "https://accessibility-analyzer-git-main-jaylikhar1s-projects.vercel.app/",
    github: "https://github.com/JayLikhar1/Accessibility-Analyzer",
    tags: ["Web Accessibility", "ML"],
  },
  {
    title: "AI-Powered Conversational ChatBot",
    description: "Designed an AI chatbot with context-aware dialogue capabilities using LangChain and Grok API. Features modular prompt pipelines and multi-turn conversation support.",
    tech: ["Python", "LangChain", "Grok API", "Flask"],
    demo: "https://ai-chatbot-by-jay-ct6zsdpii6bbyk3q9lz4wv.streamlit.app/",
    github: "https://github.com/JayLikhar1/AI-ChatBot-by-Jay",
    tags: ["AI", "LLM", "NLP"],
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Featured Projects" 
        description="A showcase of my work in full-stack development, machine learning, and data analytics."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-medium text-muted-foreground px-2 py-1 bg-secondary rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="px-6 py-4 bg-muted/30 border-t border-border/50 flex gap-3">
              <Button 
                asChild 
                variant="outline"
                className="flex-1 rounded-xl bg-white border border-border text-foreground hover:bg-muted/50 hover:text-primary shadow-sm"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="flex-1 rounded-xl bg-white border border-border text-foreground hover:bg-muted/50 hover:text-primary shadow-sm"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
