import { Button } from "@/components/ui/button";
import { Check, ShieldAlert, HeartPulse, Brain } from "lucide-react";
import { Link } from "wouter";

export default function Prevention() {
  return (
    <div className="container-width py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Prevention & Risk Reduction</h1>
        <p className="text-xl text-muted-foreground">
          Evidence-based strategies to protect your brain health at every stage of life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border space-y-4">
          <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
            <HeartPulse className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-primary">Vascular Health</h3>
          <p className="text-muted-foreground">What's good for the heart is good for the brain. Managing blood pressure and cholesterol is crucial.</p>
          <ul className="space-y-2 pt-2">
            {['Monitor blood pressure', 'Regular cardio exercise', 'Quit smoking'].map(i => (
              <li key={i} className="flex items-center text-sm gap-2"><Check className="h-4 w-4 text-green-600" /> {i}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border space-y-4">
          <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-primary">Injury Prevention</h3>
          <p className="text-muted-foreground">Protecting against TBI significantly lowers the risk of later cognitive decline.</p>
          <ul className="space-y-2 pt-2">
            {['Wear certified helmets', 'Fall-proof your home', 'Seatbelts always'].map(i => (
              <li key={i} className="flex items-center text-sm gap-2"><Check className="h-4 w-4 text-green-600" /> {i}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border space-y-4">
          <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
            <Brain className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-primary">Cognitive Reserve</h3>
          <p className="text-muted-foreground">Building a resilient brain through lifelong learning and social engagement.</p>
          <ul className="space-y-2 pt-2">
            {['Learn a new skill', 'Socialize regularly', 'Challenge your mind'].map(i => (
              <li key={i} className="flex items-center text-sm gap-2"><Check className="h-4 w-4 text-green-600" /> {i}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Checklist Section */}
      <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-serif text-primary font-bold mb-8 text-center">Your Brain Health Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
          {[
            "Get 7-9 hours of quality sleep nightly",
            "Eat a Mediterranean-style diet rich in plants",
            "Manage stress through mindfulness or meditation",
            "Stay socially active and connected",
            "Treat hearing loss early",
            "Protect your head during sports"
          ].map((item, idx) => (
             <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
               <div className="h-6 w-6 rounded-full border-2 border-primary/20 flex items-center justify-center shrink-0">
                 <div className="h-3 w-3 bg-primary rounded-full opacity-20" /> 
               </div>
               <span className="font-medium text-foreground">{item}</span>
             </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="default" size="lg">Download PDF Guide</Button>
        </div>
      </div>
    </div>
  );
}
