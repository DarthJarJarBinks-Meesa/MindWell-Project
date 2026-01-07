import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Heart } from "lucide-react";
import { useState } from "react";

export default function Donate() {
  const [amount, setAmount] = useState<number | null>(null);

  return (
    <div className="container-width py-12 max-w-5xl mx-auto">
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">Support Our Mission</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your donation helps us distribute cognitive puzzles, fund research, and provide free educational resources to communities in need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[25, 50, 100].map((tier) => (
          <Card 
            key={tier} 
            className={`cursor-pointer transition-all hover:shadow-lg ${amount === tier ? 'ring-2 ring-primary border-primary' : ''}`}
            onClick={() => setAmount(tier)}
          >
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">${tier}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {tier === 25 && "Provides 10 puzzle books to seniors."}
              {tier === 50 && "Funds one community awareness workshop."}
              {tier === 100 && "Supports early-stage research grants."}
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant={amount === tier ? "default" : "outline"} className="w-full">Select</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/20 p-8 rounded-2xl border border-secondary text-center space-y-6">
        <h3 className="text-2xl font-serif font-bold text-primary">Custom Donation</h3>
        <div className="flex max-w-xs mx-auto gap-4">
           <span className="text-2xl font-bold text-muted-foreground self-center">$</span>
           <Input 
             type="number" 
             placeholder="Other Amount" 
             className="text-lg" 
             onChange={(e) => setAmount(Number(e.target.value))}
           />
        </div>
        <Button size="lg" className="w-full max-w-md bg-accent text-white hover:bg-accent/90">
          <Heart className="mr-2 h-5 w-5 fill-current" />
          Donate {amount ? `$${amount}` : "Now"}
        </Button>
        <p className="text-xs text-muted-foreground">
          Donations are processed securely. The MindWell Project is a 501(c)(3) nonprofit organization.
        </p>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">Where Your Money Goes</h3>
          <ul className="space-y-3">
             {[
               "Printing & Distributing Cognitive Puzzles",
               "Community Education Workshops",
               "Research Grants & Fellowships",
               "Digital Awareness Campaigns"
             ].map((item, i) => (
               <li key={i} className="flex items-center gap-3">
                 <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                   <Check className="h-4 w-4" />
                 </div>
                 {item}
               </li>
             ))}
          </ul>
        </div>
        <div className="bg-muted/30 p-6 rounded-xl">
           <h3 className="font-bold text-lg mb-2">Other Ways to Give</h3>
           <p className="text-sm text-muted-foreground mb-4">
             We also accept stock donations, legacy gifts, and employer matching.
           </p>
           <a href="mailto:neurodegenerative.awareness@gmail.com" className="text-primary font-medium underline">Contact us for details</a>
        </div>
      </div>
    </div>
  );
}
