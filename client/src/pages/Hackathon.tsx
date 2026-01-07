import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, Lightbulb, Users } from "lucide-react";

export default function Hackathon() {
  return (
    <div className="container-width py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">MindWell Medical Hackathon</h1>
        <p className="text-xl text-muted-foreground">
          48 hours to build tools for brain health education, caregiver support, and early detection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-secondary/20 p-6 rounded-xl">
          <Code className="h-8 w-8 mx-auto text-primary mb-4" />
          <h3 className="font-bold">Build</h3>
          <p className="text-sm text-muted-foreground">Create apps, games, or hardware prototypes.</p>
        </div>
        <div className="bg-secondary/20 p-6 rounded-xl">
          <Users className="h-8 w-8 mx-auto text-primary mb-4" />
          <h3 className="font-bold">Collaborate</h3>
          <p className="text-sm text-muted-foreground">Work with clinicians, designers, and patients.</p>
        </div>
        <div className="bg-secondary/20 p-6 rounded-xl">
          <Lightbulb className="h-8 w-8 mx-auto text-primary mb-4" />
          <h3 className="font-bold">Solve</h3>
          <p className="text-sm text-muted-foreground">Tackle real-world challenges in neuro care.</p>
        </div>
      </div>

      <div className="bg-white border rounded-2xl p-8 max-w-xl mx-auto shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Register Interest</h3>
        <form className="space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Area of Expertise (Dev, Design, Medical)" />
          <Button className="w-full">Sign Up for Updates</Button>
        </form>
      </div>
      
      <div className="text-center pt-8">
        <h3 className="text-xl font-bold mb-4">Past Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-60">
           <div className="border border-dashed p-8 rounded-lg">Project Gallery Coming Soon</div>
           <div className="border border-dashed p-8 rounded-lg">Project Gallery Coming Soon</div>
        </div>
      </div>
    </div>
  );
}
