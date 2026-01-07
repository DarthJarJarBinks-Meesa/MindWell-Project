import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Resources() {
  const resources = [
    { title: "Alzheimer's Association", desc: "Leading voluntary health organization in Alzheimer's care.", link: "https://www.alz.org" },
    { title: "Brain Injury Association of America", desc: "The voice of brain injury.", link: "https://www.biausa.org" },
    { title: "Family Caregiver Alliance", desc: "Support for family and friends providing long-term care.", link: "https://www.caregiver.org" },
    { title: "NIH National Institute on Aging", desc: "Federal government's lead agency for aging research.", link: "https://www.nia.nih.gov" },
  ];

  return (
    <div className="container-width py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">External Resources</h1>
        <p className="text-xl text-muted-foreground">
          A directory of trusted organizations for further support and information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {resources.map((res, i) => (
          <Card key={i} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex justify-between">
                {res.title}
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{res.desc}</p>
            </CardContent>
            <CardFooter>
              <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">
                Visit Website
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center text-sm text-muted-foreground pt-8">
        <p>Disclaimer: The MindWell Project is not responsible for the content of external websites.</p>
      </div>
    </div>
  );
}
