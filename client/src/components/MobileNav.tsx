import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  User, 
  Code2, 
  Briefcase, 
  Award, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/skills", label: "Skills & Tech", icon: Code2 },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/certifications", label: "Certifications", icon: Award },
    { href: "/contact", label: "Contact Me", icon: Mail },
  ];

  return (
    <div className="md:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-display">
          JL
        </div>
        <span className="font-display font-bold text-sm">Jay Likhar</span>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80">
          <div className="p-6 border-b border-border/50">
             <SheetTitle className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl font-display">
                JL
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-lg leading-tight">Jay Likhar</div>
                <p className="text-xs text-muted-foreground font-medium font-sans">Portfolio</p>
              </div>
            </SheetTitle>
            <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setOpen(false)}
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
