import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import grantsData from "@/data/grants.json";
import { HandCoins } from "lucide-react";

export default function Grants() {
  return (
    <div className="container-width py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Grants & Funding</h1>
        <p className="text-xl text-muted-foreground">
          Investing in the future of brain health research and community support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grantsData.map((grant) => (
          <Card key={grant.id} className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-serif">{grant.title}</CardTitle>
                <HandCoins className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardDescription className="font-bold text-accent">{grant.amount}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{grant.description}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Deadline: {grant.deadline}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="bg-secondary/20 p-8 rounded-xl text-center mt-12">
        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Partner With Us</h3>
        <p className="text-muted-foreground mb-6">Are you an organization looking to fund specific brain health initiatives?</p>
        <Button>Contact our Grants Team</Button>
      </div>
    </div>
  );
}
