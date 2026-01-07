import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface BrainRegion {
  id: string;
  name: string;
  path: string;
  functions: string[];
  whyItMatters: string;
}

const regions: BrainRegion[] = [
  {
    id: "frontal",
    name: "Frontal Lobe",
    path: "M 120,200 C 120,100 250,80 300,100 C 300,100 300,280 300,300 C 200,300 120,280 120,200 Z",
    functions: ["Executive function", "Decision making", "Personality", "Motor control"],
    whyItMatters: "High risk for TBI impacts; crucial for personality and planning.",
  },
  {
    id: "parietal",
    name: "Parietal Lobe",
    path: "M 300,100 C 400,80 500,120 520,200 C 520,250 450,280 400,300 C 350,300 300,300 300,100 Z",
    functions: ["Sensory integration", "Spatial awareness", "Navigation"],
    whyItMatters: "Integrates touch and limb position; often impacted in falls.",
  },
  {
    id: "temporal",
    name: "Temporal Lobe",
    path: "M 180,310 C 250,310 380,310 420,310 C 420,380 350,420 300,430 C 220,420 180,380 180,310 Z",
    functions: ["Language processing", "Memory encoding", "Auditory processing"],
    whyItMatters: "Primary site for early-stage Alzheimer's degeneration.",
  },
  {
    id: "occipital",
    name: "Occipital Lobe",
    path: "M 520,200 C 550,250 550,320 500,380 C 450,350 420,310 420,310 C 420,310 520,200 520,200 Z",
    functions: ["Visual processing", "Color recognition", "Object perception"],
    whyItMatters: "Essential for interpreting the visual world.",
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    path: "M 420,400 C 480,400 520,450 500,500 C 450,520 400,500 400,450 C 400,420 420,400 420,400 Z",
    functions: ["Balance", "Coordination", "Fine motor skills"],
    whyItMatters: "Frequently affected by Parkinson's and stroke, causing tremors.",
  },
  {
    id: "brainstem",
    name: "Brainstem",
    path: "M 320,440 L 350,440 L 360,550 L 310,550 Z",
    functions: ["Breathing", "Heart rate", "Sleep cycles"],
    whyItMatters: "Critical for life-sustaining functions; vulnerable in severe TBI.",
  },
  {
    id: "hippocampus",
    name: "Hippocampus",
    path: "M 280,320 Q 300,340 320,320 Q 320,360 300,370 Q 280,360 280,320 Z",
    functions: ["Long-term memory", "Spatial navigation"],
    whyItMatters: "First region affected in Alzheimer's disease.",
  },
  {
    id: "amygdala",
    name: "Amygdala",
    path: "M 260,340 A 10,10 0 1,0 280,340 A 10,10 0 1,0 260,340 Z",
    functions: ["Emotional regulation", "Fear response"],
    whyItMatters: "Central to anxiety and emotional memory.",
  },
  {
    id: "thalamus",
    name: "Thalamus",
    path: "M 280,240 A 20,20 0 1,0 320,240 A 20,20 0 1,0 280,240 Z",
    functions: ["Relay center for sensory info", "Consciousness"],
    whyItMatters: "Acts as the brain's switchboard; damage can cause widespread cognitive issues.",
  },
  {
    id: "basalganglia",
    name: "Basal Ganglia",
    path: "M 250,220 Q 300,180 350,220 Q 350,280 300,300 Q 250,280 250,220 Z",
    functions: ["Movement habit formation", "Reward system"],
    whyItMatters: "Dopamine loss here is the hallmark of Parkinson's Disease.",
  },
];

export default function BrainMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedRegion = useMemo(
    () => regions.find((r) => r.id === selectedId),
    [selectedId]
  );

  return (
    <div className="container-width py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-serif font-bold text-primary">Interactive Brain Map</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the regions of the brain and learn about their functions and clinical significance.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 space-y-6 w-full">
          <div className="flex justify-between items-center gap-4">
            <Select onValueChange={setSelectedId} value={selectedId || undefined}>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Jump to a region..." />
              </SelectTrigger>
              <SelectContent>
                {regions.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => setSelectedId(null)}>Reset View</Button>
          </div>

          <div className="relative aspect-square border rounded-2xl bg-white shadow-inner flex items-center justify-center overflow-hidden p-4">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full max-h-[500px]"
              aria-label="Interactive anatomical brain map"
            >
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
                </filter>
              </defs>
              
              {regions.map((region) => (
                <path
                  key={region.id}
                  d={region.path}
                  className={cn(
                    "cursor-pointer transition-all duration-300 outline-none stroke-white stroke-[2px]",
                    selectedId === region.id ? "fill-primary stroke-primary-foreground stroke-[3px]" : 
                    hoveredId === region.id ? "fill-accent/60" : "fill-muted hover:fill-muted-foreground/30"
                  )}
                  onMouseEnter={() => setHoveredId(region.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedId(region.id)}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedId(region.id)}
                  tabIndex={0}
                  aria-label={region.name}
                  role="button"
                />
              ))}
              
              {hoveredId && !selectedId && (
                <g pointerEvents="none">
                  <rect
                    x="10"
                    y="10"
                    width="140"
                    height="32"
                    rx="6"
                    className="fill-primary/90"
                  />
                  <text
                    x="80"
                    y="31"
                    textAnchor="middle"
                    className="fill-white text-[14px] font-bold"
                  >
                    {regions.find(r => r.id === hoveredId)?.name}
                  </text>
                </g>
              )}
            </svg>
          </div>
          
          <div className="mt-8">
            <h3 className="font-bold mb-4 text-primary font-serif text-lg">Region Directory</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {regions.map(r => (
                <li key={r.id}>
                  <button 
                    onClick={() => setSelectedId(r.id)}
                    className={cn(
                      "w-full text-left p-2 rounded border transition-colors",
                      selectedId === r.id ? "bg-primary text-white border-primary" : "hover:bg-muted"
                    )}
                  >
                    {r.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-96 shrink-0">
          <Card className={cn("h-full border-t-8 transition-all duration-500", selectedRegion ? "border-t-primary shadow-xl translate-y-0 opacity-100" : "border-t-muted opacity-80")}>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                {selectedRegion ? selectedRegion.name : "Select a Region"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {selectedRegion ? (
                <>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Core Functions</h4>
                    <ul className="space-y-2">
                      {selectedRegion.functions.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-accent mt-1">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Why It Matters</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground font-medium italic">
                      "{selectedRegion.whyItMatters}"
                    </p>
                  </div>
                </>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-muted rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl text-muted-foreground">?</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic max-w-[200px] mx-auto">
                    Click on the brain map to reveal structural insights and clinical significance.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
