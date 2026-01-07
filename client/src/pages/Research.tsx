import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import researchData from "@/data/research.json";
import { Search } from "lucide-react";

export default function Research() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredData = researchData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container-width py-12 space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Research Highlights</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We curate the latest groundbreaking studies in neurodegeneration and TBI to keep you informed.
        </p>
        
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10" 
            placeholder="Search by topic (e.g., Sleep, TBI)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <Card key={item.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex gap-2 flex-wrap mb-2">
                {item.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="text-xl font-serif leading-tight">{item.title}</CardTitle>
              <CardDescription>{item.date} • {item.source}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">{item.summary}</p>
            </CardContent>
            <CardFooter>
              <a href="#" className="text-primary text-sm font-semibold hover:underline">Read Full Study &rarr;</a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredData.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No research found matching your search.
        </div>
      )}
    </div>
  );
}
