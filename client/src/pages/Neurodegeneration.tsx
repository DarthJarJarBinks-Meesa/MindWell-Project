import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, AlertCircle, Info } from "lucide-react";

export default function Neurodegeneration() {
  return (
    <div className="container-width py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Neurodegenerative Diseases</h1>
        <p className="text-xl text-muted-foreground">
          Understanding the biological progression, early signs, and the importance of lifelong brain health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg prose-slate max-w-none">
          <h3>What is Neurodegeneration?</h3>
          <p>
            Neurodegenerative diseases result from the progressive loss of structure or function of neurons, including death of neurons. Many neurodegenerative diseases—including amyotrophic lateral sclerosis, Parkinson's, Alzheimer's, and Huntington's—occur as a result of neurodegenerative processes.
          </p>
          <p>
             These conditions are incurable and debilitating, resulting in progressive degeneration and/or death of nerve cells. This causes problems with movement (called ataxias), or mental functioning (called dementias).
          </p>
          
          <h3>Key Focus Areas</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Alzheimer’s Disease:</strong> The most common form of dementia, affecting memory, thinking, and behavior.</li>
            <li><strong>Parkinson’s Disease:</strong> Affects movement, often including tremors.</li>
            <li><strong>Frontotemporal Dementia:</strong> Affects the frontal and temporal lobes of the brain.</li>
          </ul>
        </div>
        
        <div className="bg-secondary/30 p-8 rounded-2xl space-y-6 border border-secondary">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary">Prevention & Risk Reduction</h3>
          </div>
          
          <p className="text-muted-foreground">
            While there is currently no cure for many of these conditions, research suggests that lifestyle changes can significantly impact risk and progression.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
               <div className="min-w-1 h-full bg-accent rounded-full" />
               <div>
                 <h4 className="font-bold text-primary">Physical Exercise</h4>
                 <p className="text-sm text-muted-foreground">Regular cardiovascular exercise increases blood flow to the brain.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="min-w-1 h-full bg-accent rounded-full" />
               <div>
                 <h4 className="font-bold text-primary">Cognitive Engagement</h4>
                 <p className="text-sm text-muted-foreground">Lifelong learning and complex mental tasks build cognitive reserve.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="min-w-1 h-full bg-accent rounded-full" />
               <div>
                 <h4 className="font-bold text-primary">Social Connection</h4>
                 <p className="text-sm text-muted-foreground">Strong social ties are associated with lower dementia risk.</p>
               </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link href="/prevention">
              <Button className="w-full bg-primary text-white">View Prevention Strategies</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 border rounded-xl p-8 mt-12">
        <div className="flex items-start gap-4">
          <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
          <div>
             <h4 className="font-bold text-lg text-primary mb-2">Important Distinction</h4>
             <p className="text-muted-foreground">
               While <strong>Traumatic Brain Injury (TBI)</strong> can increase the risk of developing neurodegenerative diseases later in life, TBI itself is an acute injury event, whereas neurodegenerative diseases are progressive conditions. We address both because protecting the brain from injury is a crucial part of long-term prevention.
             </p>
             <Link href="/tbi" className="text-accent hover:underline mt-2 inline-block font-medium">Learn more about TBI &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
