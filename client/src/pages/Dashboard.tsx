import { PageHeader } from "@/components/PageHeader";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Code2, BrainCircuit, Terminal, Globe, Download, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Dashboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">
            Welcome back, <span className="text-primary">Recruiter!</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Here is an overview of Jay Likhar's profile and qualifications.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-border hover:bg-muted/50">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
          <Link href="/contact">
            <Button className="rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <motion.div variants={item}>
          <StatsCard 
            title="Total Projects" 
            value="4+" 
            icon={<Globe className="w-5 h-5" />} 
            trend="Active Development"
            color="blue"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatsCard 
            title="Tech Stack" 
            value="10+" 
            icon={<Code2 className="w-5 h-5" />} 
            trend="Full Stack & Data"
            color="purple"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatsCard 
            title="ML Models" 
            value="Active" 
            icon={<BrainCircuit className="w-5 h-5" />} 
            trend="High Accuracy"
            color="green"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatsCard 
            title="Certifications" 
            value="3" 
            icon={<Terminal className="w-5 h-5" />} 
            color="orange"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border/50">
              <h3 className="font-display font-bold text-xl">About Me</h3>
            </div>
            <div className="p-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Computer Science Engineering student with hands-on experience in data analytics, machine learning, and full-stack application development.
              </p>
              <p>
                Proven ability to build ML-driven web applications and dashboards, and translate analytical outputs into business-ready insights. Strong focus on clean architecture, scalable systems, and data-driven problem solving.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/50">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-sm">jaylikhar9@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-sm">+91-9529212362</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-sm">India</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Availability</h4>
                  <p className="text-sm text-green-600 font-medium">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
            <div className="p-6 border-b border-border/50">
              <h3 className="font-display font-bold text-xl">Quick Links</h3>
            </div>
            <div className="p-2">
              <Link href="/projects">
                <div className="p-4 hover:bg-muted/50 rounded-xl cursor-pointer transition-colors group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">View Projects</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">Explore my technical portfolio</p>
                </div>
              </Link>
              <Link href="/skills">
                <div className="p-4 hover:bg-muted/50 rounded-xl cursor-pointer transition-colors group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">Technical Skills</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">Languages & Frameworks</p>
                </div>
              </Link>
              <Link href="/certifications">
                <div className="p-4 hover:bg-muted/50 rounded-xl cursor-pointer transition-colors group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">Certifications</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">Credentials & Achievements</p>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
