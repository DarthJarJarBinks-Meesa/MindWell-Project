import { Link } from "wouter";
import { Mail, Github, Twitter, Facebook, Instagram } from "lucide-react";
import logoImage from "@assets/generated_images/minimalist_logo_for_the_mindwell_project,_brain_and_leaf_intersection.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Logo" className="h-8 w-8 brightness-0 invert" />
              <span className="text-xl font-bold font-serif">MindWell</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Dedicated to lifelong brain health, prevention, and dignity. Bridging the gap between neurodegenerative disease awareness and traumatic brain injury prevention through evidence-based education.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/neurodegeneration" className="hover:text-white transition-colors">Neurodegenerative Disease</Link></li>
              <li><Link href="/tbi" className="hover:text-white transition-colors">Traumatic Brain Injury</Link></li>
              <li><Link href="/prevention" className="hover:text-white transition-colors">Prevention Strategies</Link></li>
              <li><Link href="/daily-puzzle" className="hover:text-white transition-colors">Daily Puzzle</Link></li>
              <li><Link href="/donate" className="hover:text-white transition-colors">Support Our Work</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Programs</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">Puzzle Outreach</Link></li>
              <li><Link href="/grants" className="hover:text-white transition-colors">Research Grants</Link></li>
              <li><Link href="/fellowship" className="hover:text-white transition-colors">MindWell Fellowship</Link></li>
              <li><Link href="/hackathon" className="hover:text-white transition-colors">Medical Hackathon</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
            <a href="mailto:neurodegenerative.awareness@gmail.com" className="flex items-center space-x-2 text-sm hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              <span>neurodegenerative.awareness@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} The MindWell Project. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Disclaimer: Educational content only; not medical advice. Consult a healthcare professional for medical concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
