import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  User, 
  Code2, 
  Briefcase, 
  Award, 
  Mail,
  Github,
  Linkedin,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/skills", label: "Skills & Tech", icon: Code2 },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/certifications", label: "Certifications", icon: Award },
    { href: "/contact", label: "Contact Me", icon: Mail },
  ];

  return (
    <div className="h-screen w-64 bg-card border-r border-border hidden md:flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl font-display">
            JL
          </div>
          <div>
            <h1 className="font-display font-bold text-lg leading-tight">Jay Likhar</h1>
            <p className="text-xs text-muted-foreground font-medium">Portfolio</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = location === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <link.icon className={cn("w-5 h-5", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                {link.label}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/50 bg-muted/20">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
          Socials
        </h3>
        <div className="space-y-1">
          <a
            href="https://github.com/jaylikhar1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-white hover:text-foreground hover:shadow-sm border border-transparent hover:border-border transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
            <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
          </a>
          <a
            href="https://linkedin.com/in/jay-likhar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-white hover:text-foreground hover:shadow-sm border border-transparent hover:border-border transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
}
