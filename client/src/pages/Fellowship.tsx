import { Button } from "@/components/ui/button";
import { isWithinInterval, parseISO } from "date-fns";

export default function Fellowship() {
  const today = new Date();
  const startDate = parseISO(`${today.getFullYear()}-03-01`);
  const endDate = parseISO(`${today.getFullYear()}-05-01`);
  
  const isOpen = isWithinInterval(today, { start: startDate, end: endDate });

  return (
    <div className="container-width py-12 space-y-12 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">The MindWell Fellowship</h1>
        <p className="text-xl text-muted-foreground">
          Empowering early-career researchers and advocates to lead the next generation of brain health innovation.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-12 shadow-lg max-w-2xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">Application Status</h2>
          <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${isOpen ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            {isOpen ? "APPLICATIONS OPEN" : "APPLICATIONS CLOSED"}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Application Window:</p>
          <p className="text-muted-foreground">March 1 — May 1</p>
        </div>

        <Button size="lg" disabled={!isOpen} className="w-full md:w-auto px-8">
          {isOpen ? "Apply Now" : "Opens March 1st"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto pt-8">
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Mentorship</h3>
          <p className="text-sm text-muted-foreground">Direct guidance from leading neurologists and public health experts.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Funding</h3>
          <p className="text-sm text-muted-foreground">$10,000 stipend to support your project or research focus.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Network</h3>
          <p className="text-sm text-muted-foreground">Access to our global network of partner organizations.</p>
        </div>
      </div>
    </div>
  );
}
