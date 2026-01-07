import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Users, Megaphone, Microscope, GraduationCap } from "lucide-react";

export default function WhatWeDo() {
  return (
    <div className="container-width py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Our Impact</h1>
        <p className="text-xl text-muted-foreground">
          We turn awareness into action through five core pillars of service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Puzzle, title: "Puzzle Outreach", desc: "We've distributed over 100,000 Sudoku, crossword, and logic puzzles to senior centers and hospitals." },
          { icon: Users, title: "Community Education", desc: "Hosting free workshops on brain health, TBI prevention, and caregiver support in 100+ locations." },
          { icon: Megaphone, title: "Advocacy", desc: "Pushing for policy changes that prioritize brain injury prevention in sports and workplaces." },
          { icon: Microscope, title: "Research Translation", desc: "Breaking down complex neuroscience into understandable, actionable advice for the public." },
          { icon: GraduationCap, title: "Fellowships", desc: "Supporting the next generation of researchers through our annual MindWell Fellowship program." },
        ].map((item, i) => (
          <Card key={i} className="hover:shadow-lg transition-all">
            <CardHeader>
              <item.icon className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary text-white rounded-2xl p-12 text-center space-y-6 mt-12">
        <h2 className="text-3xl font-serif font-bold">Help Us Do More</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Every program we run is powered by donors and volunteers like you.
        </p>
      </div>
    </div>
  );
}
