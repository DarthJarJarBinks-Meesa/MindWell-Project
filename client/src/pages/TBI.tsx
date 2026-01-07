import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Activity, AlertTriangle } from "lucide-react";

export default function TBI() {
  return (
    <div className="container-width py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Traumatic Brain Injury (TBI)</h1>
        <p className="text-xl text-muted-foreground">
          Prevention, recognition, and the long-term impact of brain injuries on cognitive health.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
           <div className="prose prose-lg max-w-none">
             <h3>What is TBI?</h3>
             <p>
               A traumatic brain injury (TBI) is a disruption in the normal function of the brain that can be caused by a bump, blow, or jolt to the head, or penetrating head injury.
             </p>
             <p>
               Effects can range from mild (brief change in mental status or consciousness) to severe (extended period of unconsciousness or memory loss).
             </p>
           </div>
           
           <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
             <h3 className="font-serif font-bold text-xl text-primary flex items-center gap-2">
               <AlertTriangle className="h-5 w-5 text-accent" />
               Common Causes
             </h3>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-muted/30 p-4 rounded text-center">
                 <span className="block font-bold text-lg text-primary">Falls</span>
                 <span className="text-xs text-muted-foreground">Leading cause, esp. in older adults</span>
               </div>
               <div className="bg-muted/30 p-4 rounded text-center">
                 <span className="block font-bold text-lg text-primary">Sports</span>
                 <span className="text-xs text-muted-foreground">Contact sports & recreation</span>
               </div>
               <div className="bg-muted/30 p-4 rounded text-center">
                 <span className="block font-bold text-lg text-primary">Vehicle</span>
                 <span className="text-xs text-muted-foreground">Car & motorcycle accidents</span>
               </div>
               <div className="bg-muted/30 p-4 rounded text-center">
                 <span className="block font-bold text-lg text-primary">Violence</span>
                 <span className="text-xs text-muted-foreground">Assaults & domestic violence</span>
               </div>
             </div>
           </div>
        </div>

        <div className="order-1 lg:order-2 bg-secondary/20 p-8 rounded-2xl border border-secondary/50">
          <ShieldCheck className="h-12 w-12 text-primary mb-6" />
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">The Long-Term Connection</h2>
          <p className="text-lg text-muted-foreground mb-6">
            While TBI is not itself a neurodegenerative disease, moderate to severe TBIs are associated with an increased risk of developing neurodegenerative conditions like Alzheimer’s and Parkinson’s later in life.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            This is why TBI prevention is a critical component of our mission. Protecting your brain from injury today protects your mind for tomorrow.
          </p>
          
          <div className="bg-white/80 p-6 rounded-xl border border-white/50">
             <h4 className="font-bold text-primary mb-2">Prevention is Key</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li className="flex gap-2"><span className="text-accent">•</span> Wear helmets during sports and cycling</li>
               <li className="flex gap-2"><span className="text-accent">•</span> Fall-proof homes for seniors</li>
               <li className="flex gap-2"><span className="text-accent">•</span> Use seatbelts every time</li>
             </ul>
             <Link href="/prevention" className="block mt-4">
               <Button variant="outline" className="w-full">View Prevention Guidelines</Button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
