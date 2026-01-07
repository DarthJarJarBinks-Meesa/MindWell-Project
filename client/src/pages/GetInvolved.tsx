import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function GetInvolved() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Interest Registered",
        description: "We've saved your info. A coordinator will reach out soon!",
      });
    }, 1000);
  };

  return (
    <div className="container-width py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Get Involved</h1>
        <p className="text-xl text-muted-foreground">
          Join a community dedicated to protecting brain health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Volunteer Opportunities</h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow-sm border">
                <h4 className="font-bold">Community Ambassador</h4>
                <p className="text-sm text-muted-foreground">Host awareness sessions in your local library or community center.</p>
              </li>
              <li className="bg-white p-4 rounded shadow-sm border">
                <h4 className="font-bold">Puzzle Pal</h4>
                <p className="text-sm text-muted-foreground">Visit senior centers to facilitate cognitive game hours.</p>
              </li>
              <li className="bg-white p-4 rounded shadow-sm border">
                <h4 className="font-bold">Event Staff</h4>
                <p className="text-sm text-muted-foreground">Help run our annual hackathons and fundraisers.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-xl border">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Volunteer Interest Form</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input required placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input required type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Interests (Select all that apply)</Label>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ambassador" />
                  <label htmlFor="ambassador" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Ambassador Program
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="event" />
                  <label htmlFor="event" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Event Support
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="admin" />
                  <label htmlFor="admin" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Administrative/Remote
                  </label>
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Up to Volunteer"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
