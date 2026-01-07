export default function About() {
  return (
    <div className="container-width py-12 space-y-12">
       <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">About Us</h1>
        <p className="text-xl text-muted-foreground">
          Founded on the belief that brain health is a lifelong human right.
        </p>
      </div>
      
      <div className="prose prose-lg mx-auto">
        <p>
          The MindWell Project began as a small community initiative to distribute puzzles to local nursing homes. It has since grown into a national advocacy organization dedicated to the twin pillars of neurodegenerative disease awareness and traumatic brain injury prevention.
        </p>
        <p>
          We believe in dignity for those living with cognitive decline, and empowerment for those seeking to protect their brain health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <div className="text-center space-y-2">
           <div className="h-24 w-24 bg-muted rounded-full mx-auto mb-4" />
           <h3 className="font-bold text-lg">Dr. Sarah Chen</h3>
           <p className="text-sm text-muted-foreground">Executive Director</p>
        </div>
        <div className="text-center space-y-2">
           <div className="h-24 w-24 bg-muted rounded-full mx-auto mb-4" />
           <h3 className="font-bold text-lg">James Wilson</h3>
           <p className="text-sm text-muted-foreground">Head of Outreach</p>
        </div>
        <div className="text-center space-y-2">
           <div className="h-24 w-24 bg-muted rounded-full mx-auto mb-4" />
           <h3 className="font-bold text-lg">Elena Rodriguez</h3>
           <p className="text-sm text-muted-foreground">Research Coordinator</p>
        </div>
      </div>
    </div>
  );
}
