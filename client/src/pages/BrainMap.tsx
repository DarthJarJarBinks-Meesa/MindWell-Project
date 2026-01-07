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
import { Search } from "lucide-react";

interface BrainRegion {
  id: string;
  name: string;
  path: string;
  functions: string[];
  relevance: string;
  color: string;
}

const regions: BrainRegion[] = [
  {
    id: "frontal",
    name: "Frontal Lobe",
    path: "M 150,320 C 130,280 130,180 180,120 C 230,60 350,70 380,110 C 380,110 380,320 380,320 C 320,350 200,350 150,320 Z",
    functions: ["Executive function", "Decision making", "Personality", "Motor control"],
    relevance: "High risk for TBI impacts; crucial for personality and planning. Primary site for executive dysfunction.",
    color: "#ffcccc",
  },
  {
    id: "parietal",
    name: "Parietal Lobe",
    path: "M 380,110 C 450,90 550,130 570,220 C 570,280 500,320 450,330 C 420,330 380,320 380,320 Z",
    functions: ["Sensory integration", "Spatial awareness", "Navigation"],
    relevance: "Integrates touch and limb position; often impacted in falls causing spatial disorientation.",
    color: "#e6ccff",
  },
  {
    id: "temporal",
    name: "Temporal Lobe",
    path: "M 180,330 C 250,330 400,330 440,330 C 440,400 380,450 320,460 C 240,450 180,400 180,330 Z",
    functions: ["Language processing", "Memory encoding", "Auditory processing"],
    relevance: "Primary site for early-stage Alzheimer's degeneration and memory loss.",
    color: "#ffffcc",
  },
  {
    id: "occipital",
    name: "Occipital Lobe",
    path: "M 570,220 C 600,280 600,360 550,420 C 500,380 450,330 450,330 C 450,330 570,220 570,220 Z",
    functions: ["Visual processing", "Color recognition", "Object perception"],
    relevance: "Essential for interpreting the visual world; damage causes cortical blindness or agnosia.",
    color: "#ccffcc",
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    path: "M 450,430 C 520,430 580,480 560,550 C 500,580 430,550 430,500 C 430,460 450,430 450,430 Z",
    functions: ["Balance", "Coordination", "Fine motor skills"],
    relevance: "Frequently affected by Parkinson's and cerebellar ataxia, causing tremors and gait issues.",
    color: "#ffe6cc",
  },
  {
    id: "brainstem",
    name: "Brainstem",
    path: "M 340,470 L 380,470 L 400,600 L 320,600 Z",
    functions: ["Breathing", "Heart rate", "Sleep cycles"],
    relevance: "Critical for life-sustaining functions; vulnerable in severe TBI and metabolic disorders.",
    color: "#ccffff",
  },
  {
    id: "hippocampus",
    name: "Hippocampus",
    path: "M 280,320 Q 300,340 320,320 Q 320,360 300,370 Q 280,360 280,320 Z",
    functions: ["Long-term memory", "Spatial navigation"],
    relevance: "Deep internal structure. First region affected in Alzheimer's disease.",
    color: "#d1d5db",
  },
  {
    id: "amygdala",
    name: "Amygdala",
    path: "M 250,350 A 10,10 0 1,0 270,350 A 10,10 0 1,0 250,350 Z",
    functions: ["Emotional regulation", "Fear response"],
    relevance: "Central to anxiety, emotional memory, and behavioral changes in dementia.",
    color: "#9ca3af",
  },
  {
    id: "thalamus",
    name: "Thalamus",
    path: "M 290,240 A 25,25 0 1,0 340,240 A 25,25 0 1,0 290,240 Z",
    functions: ["Relay center for sensory info", "Consciousness"],
    relevance: "Acts as the brain's switchboard; damage can cause widespread cognitive and sensory deficits.",
    color: "#6b7280",
  },
  {
    id: "basalganglia",
    name: "Basal Ganglia",
    path: "M 260,220 Q 310,170 360,220 Q 360,300 310,320 Q 260,300 260,220 Z",
    functions: ["Movement habit formation", "Reward system"],
    relevance: "Dopamine loss here is the hallmark of Parkinson's Disease, leading to rigidity and tremors.",
    color: "#4b5563",
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
          Explore the anatomical regions of the human brain. Click on a region to learn about its functions and clinical significance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Map View */}
        <div className="flex-1 space-y-6 w-full">
          <div className="flex flex-wrap justify-between items-center gap-4">
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
            <Button variant="outline" onClick={() => setSelectedId(null)}>Reset Selection</Button>
          </div>

          <div className="relative aspect-square border rounded-2xl bg-white shadow-xl flex items-center justify-center overflow-hidden p-8 border-primary/10">
            <svg
              viewBox="0 0 700 700"
              className="w-full h-full max-h-[600px]"
              aria-label="Anatomically accurate human brain diagram"
            >
              {/* External Regions */}
              {regions.map((region) => (
                <path
                  key={region.id}
                  d={region.path}
                  fill={region.color}
                  className={cn(
                    "cursor-pointer transition-all duration-300 outline-none stroke-slate-400 stroke-[1px] hover:stroke-primary hover:stroke-[2px]",
                    selectedId === region.id ? "stroke-primary stroke-[3px] opacity-100" : 
                    hoveredId === region.id ? "opacity-80" : "opacity-90"
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

              {/* Callout lines for internal structures if they overlap too much or need emphasis */}
              <g className="pointer-events-none opacity-50">
                 {/* Simplified lines indicating depth for internal structures */}
              </g>

              {/* Tooltip Overlay */}
              {hoveredId && !selectedId && (
                <g pointerEvents="none">
                  <rect
                    x="20"
                    y="20"
                    width="160"
                    height="36"
                    rx="8"
                    className="fill-primary/95 shadow-lg"
                  />
                  <text
                    x="100"
                    y="43"
                    textAnchor="middle"
                    className="fill-white text-[16px] font-bold"
                  >
                    {regions.find(r => r.id === hoveredId)?.name}
                  </text>
                </g>
              )}
            </svg>
          </div>
          
          {/* Legend */}
          <div className="bg-muted/30 p-6 rounded-xl border border-dashed">
            <h3 className="font-bold mb-4 text-primary font-serif">Region Legend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {regions.map(r => (
                <button 
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  className="flex items-center gap-2 text-xs font-medium hover:text-primary transition-colors"
                >
                  <div className="w-4 h-4 rounded-sm border" style={{ backgroundColor: r.color }} />
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-full lg:w-96 shrink-0">
          <Card className={cn("h-full border-t-8 transition-all duration-500 sticky top-24", selectedRegion ? "border-t-primary shadow-2xl" : "border-t-muted")}>
            <CardHeader>
              <CardTitle className="font-serif text-3xl">
                {selectedRegion ? selectedRegion.name : "Select a Region"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {selectedRegion ? (
                <>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary border-b pb-1">Primary Functions</h4>
                    <ul className="space-y-3">
                      {selectedRegion.functions.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-snug">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary border-b pb-1">Clinical Relevance</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground font-medium italic bg-secondary/30 p-4 rounded-lg">
                      {selectedRegion.relevance}
                    </p>
                  </div>
                </>
              ) : (
                <div className="py-20 text-center space-y-6">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto flex items-center justify-center animate-pulse">
                    <Search className="h-8 w-8 text-muted-foreground/40" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-serif text-primary/60">Anatomical Explorer</p>
                    <p className="text-sm text-muted-foreground max-w-[240px] mx-auto">
                      Interact with the lateral-view brain diagram to discover critical insights into human neurobiology.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Accessibility Fallback List */}
      <div className="pt-12 border-t mt-12">
        <h3 className="font-bold mb-6 text-xl font-serif text-primary">Anatomical Directory</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map(r => (
            <div key={r.id} className="space-y-2">
              <h4 className="font-bold text-primary flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: r.color }} />
                 {r.name}
              </h4>
              <p className="text-xs text-muted-foreground">{r.functions.join(", ")}</p>
              <button 
                onClick={() => {
                  setSelectedId(r.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-accent text-[10px] uppercase font-bold hover:underline"
              >
                View Details &uarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
