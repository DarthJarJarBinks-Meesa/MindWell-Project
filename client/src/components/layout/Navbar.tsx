import { Link, useLocation } from "wouter";
import { Menu, X, Heart, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logoImage from "@assets/generated_images/minimalist_logo_for_the_mindwell_project,_brain_and_leaf_intersection.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Why", href: "/why" },
  { label: "Neurodegeneration", href: "/neurodegeneration" },
  { label: "TBI", href: "/tbi" },
  { label: "Prevention", href: "/prevention" },
  { label: "Key Papers", href: "/key-papers" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Daily Puzzle", href: "/daily-puzzle" },
  { label: "Research", href: "/research" },
  { label: "Resources", href: "/resources" },
];

const secondaryNavItems = [
  { label: "Get Involved", href: "/get-involved" },
  { label: "Grants", href: "/grants" },
  { label: "Fellowship", href: "/fellowship" },
  { label: "Hackathon", href: "/hackathon" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-width flex h-20 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src={logoImage} alt="The MindWell Project Logo" className="h-10 w-10 object-contain" />
          <span className="hidden text-xl font-bold tracking-tight text-primary md:inline-block">
            The MindWell Project
          </span>
        </Link>
        
        {/* Desktop Nav - Main */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navItems.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
           {/* Mobile Menu */}
           <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-primary mb-4">
                    The MindWell Project
                  </Link>
                  {[...navItems, ...secondaryNavItems].map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-2 text-base font-medium transition-colors hover:text-primary",
                          location === item.href ? "text-primary font-bold" : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                     <Link href="/donate" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/donate" className="hidden lg:block">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-sm">
              <Heart className="mr-2 h-4 w-4 fill-current" />
              Donate
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Desktop Sub-Nav for secondary items to keep main clean */}
      <div className="hidden lg:block border-t bg-muted/30">
        <div className="container-width flex h-10 items-center justify-end gap-6 text-xs text-muted-foreground">
           {navItems.slice(5).map((item) => (
            <Link key={item.href} href={item.href}>
              <span className="hover:text-primary transition-colors cursor-pointer">{item.label}</span>
            </Link>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          {secondaryNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className="hover:text-primary transition-colors cursor-pointer">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
