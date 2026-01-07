import { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, RotateCcw, Info, AlertCircle, Brain, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// BRAIN REGIONS DATA
// In a production app, the GLB must be segmented with mesh names matching these keys
const BRAIN_REGIONS: Record<string, { description: string; tip?: string }> = {
  "Frontal_Lobe": {
    description: "Responsible for high-level cognitive functions such as planning, reasoning, and personality expression.",
    tip: "Often the primary area assessed in early-stage dementia."
  },
  "Temporal_Lobe": {
    description: "Processes sensory input and is highly involved in memory and language recognition.",
    tip: "Critical area for Alzheimer's research due to its link to the hippocampus."
  },
  "Parietal_Lobe": {
    description: "Integrates sensory information from various parts of the body.",
    tip: "Damage here can lead to difficulty with spatial orientation."
  },
  "Occipital_Lobe": {
    description: "The visual processing center of the mammalian brain.",
    tip: "Though less commonly associated with initial TBI, impact here affects visual field."
  },
  "Cerebellum": {
    description: "Coordinates voluntary movements such as posture, balance, and coordination.",
    tip: "Often impacted in Parkinson's disease, leading to motor symptoms."
  },
  "Brainstem": {
    description: "Controls the flow of messages between the brain and the rest of the body, and it also controls basic body functions.",
    tip: "Vital for survival; severe TBI here is life-threatening."
  }
};

function Model({ url, onSelect, selectedName, setLoadError }: { url: string; onSelect: (name: string) => void; selectedName: string | null; setLoadError: (err: boolean) => void }) {
  const { scene } = useGLTF(url, undefined, (err) => {
    console.error("GLTF Load Error:", err);
    setLoadError(true);
  });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <primitive 
      object={scene} 
      onClick={(e: any) => {
        e.stopPropagation();
        onSelect(e.object.name);
      }}
      onPointerOver={(e: any) => {
        e.stopPropagation();
        setHovered(e.object.name);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(null);
        document.body.style.cursor = 'auto';
      }}
    >
      {scene.traverse((obj: any) => {
        if (obj.isMesh) {
          const isSelected = obj.name === selectedName;
          const isHovered = obj.name === hovered;
          
          if (!obj.userData.originalColor) {
            obj.userData.originalColor = obj.material.color.clone();
          }

          if (isSelected) {
            obj.material.emissive = new THREE.Color(0xff4500);
            obj.material.emissiveIntensity = 0.5;
          } else if (isHovered) {
            obj.material.emissive = new THREE.Color(0x333333);
            obj.material.emissiveIntensity = 0.2;
          } else {
            obj.material.emissive = new THREE.Color(0x000000);
            obj.material.emissiveIntensity = 0;
          }
        }
      })}
    </primitive>
  );
}

export default function BrainMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const controlsRef = useRef<any>(null);
  const [loadError, setLoadError] = useState(false);

  const regionInfo = selectedRegion ? BRAIN_REGIONS[selectedRegion] : null;

  const filteredRegions = Object.keys(BRAIN_REGIONS).filter(name => 
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handleSelect = (name: string) => {
    setSelectedRegion(name);
  };

  return (
    <div className="container-width py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-serif font-bold text-primary">Interactive Brain Map</h1>
        <p className="text-muted-foreground">Explore the functional regions of the human brain. Click on areas to learn more.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[700px]">
        {/* Left: 3D Canvas */}
        <div className="lg:col-span-2 bg-muted/20 rounded-xl relative border overflow-hidden">
          {!loadError ? (
            <Suspense fallback={
              <div className="absolute inset-0 flex items-center justify-center bg-muted/10 backdrop-blur-sm z-10">
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="text-primary font-medium">Loading 3D brain...</p>
                </div>
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                <Stage environment="city" intensity={0.6} contactShadow={false}>
                  <Model 
                    url="/assets/brain_segmented.glb" 
                    onSelect={handleSelect}
                    selectedName={selectedRegion}
                    setLoadError={setLoadError}
                  />
                </Stage>
                <OrbitControls ref={controlsRef} makeDefault />
              </Canvas>
            </Suspense>
          ) : null}

          {/* Missing File Notice & 3D Viewport Placeholder */}
          {(loadError || true) && (
            <div className={cn(
              "absolute inset-0 flex items-center justify-center p-8 text-center bg-muted/5 z-0",
              loadError && "z-20 pointer-events-auto bg-muted/10 backdrop-blur-sm"
            )}>
            <div className="space-y-4 max-w-md pointer-events-auto bg-white/80 backdrop-blur p-6 rounded-xl border-2 border-dashed border-primary/20">
              <Brain className="h-12 w-12 text-primary mx-auto opacity-50" />
              <h3 className="font-bold text-lg text-primary">3D Asset Missing</h3>
              <p className="text-sm text-muted-foreground">
                To enable the interactive 3D brain, please place your <b>brain_segmented.glb</b> file in:
                <br />
                <code className="bg-muted px-1 py-0.5 rounded text-xs">client/public/assets/brain_segmented.glb</code>
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/pmndrs/drei-assets/blob/master/brain.glb', '_blank')}>
                  <ExternalLink className="h-4 w-4 mr-2" /> View Example Asset
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info Panel */}
        <div className="flex flex-col gap-4 overflow-hidden">
          <Card className="flex-none">
            <CardHeader className="p-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Search className="h-4 w-4" /> Find Region
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="relative">
                <Input 
                  placeholder="Search regions..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mb-2"
                />
                {searchQuery && (
                  <div className="absolute z-20 w-full bg-white border rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto">
                    {filteredRegions.map(name => (
                      <div 
                        key={name}
                        className="p-2 hover:bg-muted cursor-pointer text-sm"
                        onClick={() => {
                          handleSelect(name);
                          setSearchQuery("");
                        }}
                      >
                        {name.replace(/_/g, ' ')}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 overflow-hidden flex flex-col">
            <CardHeader className="bg-primary/5 border-b p-4">
              <CardTitle className="text-xl font-serif text-primary">
                Region: {selectedRegion ? selectedRegion.replace(/_/g, ' ') : "Select a region"}
              </CardTitle>
            </CardHeader>
            <ScrollArea className="flex-1">
              <CardContent className="p-6 space-y-6">
                {selectedRegion ? (
                  <>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Info className="h-4 w-4" /> Description
                      </h4>
                      <p className="text-foreground leading-relaxed">
                        {regionInfo?.description || "Description: Not yet added."}
                      </p>
                    </div>

                    {regionInfo?.tip && (
                      <div className="bg-secondary/20 p-4 rounded-lg border border-secondary/30">
                        <h4 className="text-sm font-bold text-primary mb-1">Clinical Context</h4>
                        <p className="text-sm text-muted-foreground italic">
                          {regionInfo.tip}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground py-20 space-y-4">
                    <Brain className="h-12 w-12 opacity-20" />
                    <p>Click on the 3D model or use the search bar to explore specific brain structures.</p>
                  </div>
                )}
              </CardContent>
            </ScrollArea>
          </Card>
        </div>
      </div>

      <div className="bg-muted/30 p-4 rounded-lg flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> This interactive map is an educational visualization tool. It is for informational purposes only and does not represent a clinically accurate medical model for diagnosis or treatment.
        </p>
      </div>
    </div>
  );
}
