import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, Activity, TrendingUp, AlertOctagon } from "lucide-react";

const data = [
  { year: '2020', tbi: 4000, neuro: 2400 },
  { year: '2021', tbi: 3000, neuro: 1398 },
  { year: '2022', tbi: 2000, neuro: 9800 },
  { year: '2023', tbi: 2780, neuro: 3908 },
  { year: '2024', tbi: 1890, neuro: 4800 },
  { year: '2025', tbi: 2390, neuro: 3800 },
  { year: '2030', tbi: 3490, neuro: 4300 },
];

export default function Why() {
  return (
    <div className="container-width py-12 space-y-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">Why This Matters</h1>
        <p className="text-xl text-muted-foreground">
          The rising tide of neurodegenerative diseases and TBI requires immediate, collective action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-primary">The Silent Epidemic</h2>
          <p className="text-lg text-muted-foreground">
             As our population ages, neurodegenerative diseases are becoming more prevalent. Simultaneously, TBI remains a leading cause of disability across all age groups.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="bg-red-100 p-2 rounded text-red-600"><TrendingUp className="h-6 w-6" /></div>
              <div>
                <h4 className="font-bold">Rising Numbers</h4>
                <p className="text-sm text-muted-foreground">Dementia cases are projected to triple by 2050.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-orange-100 p-2 rounded text-orange-600"><AlertOctagon className="h-6 w-6" /></div>
              <div>
                <h4 className="font-bold">Preventable Risk</h4>
                <p className="text-sm text-muted-foreground">Up to 40% of dementia cases could be prevented or delayed.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="h-[400px] w-full bg-white p-6 rounded-xl shadow-lg border">
          <h3 className="text-center font-bold mb-4 text-sm text-muted-foreground">Projected Impact (Hypothetical Data)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="neuro" stackId="1" stroke="hsl(185 62% 28%)" fill="hsl(185 62% 28%)" fillOpacity={0.6} name="Neurodegenerative" />
              <Area type="monotone" dataKey="tbi" stackId="1" stroke="hsl(14 85% 65%)" fill="hsl(14 85% 65%)" fillOpacity={0.6} name="TBI Incidents" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 md:p-12 space-y-8">
        <h2 className="text-3xl font-serif font-bold text-primary text-center">Why TBI is distinct from Neurodegeneration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card>
             <CardHeader>
               <CardTitle className="flex items-center gap-2">
                 <Activity className="h-6 w-6 text-accent" />
                 Traumatic Brain Injury
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground mb-4">An acute event caused by external force.</p>
               <ul className="list-disc pl-5 text-sm space-y-2">
                 <li>Sudden onset</li>
                 <li>Caused by falls, hits, accidents</li>
                 <li>Can happen at any age</li>
                 <li>Recovery is possible, but scarring remains</li>
               </ul>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle className="flex items-center gap-2">
                 <Brain className="h-6 w-6 text-primary" />
                 Neurodegenerative Disease
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground mb-4">A progressive loss of neuronal function.</p>
               <ul className="list-disc pl-5 text-sm space-y-2">
                 <li>Gradual onset over years</li>
                 <li>Caused by biological processes (proteins, genetics)</li>
                 <li>Typically affects older adults</li>
                 <li>Progressive decline</li>
               </ul>
             </CardContent>
           </Card>
        </div>
        <p className="text-center italic text-muted-foreground font-medium">
          Note: While distinct, TBI can be a risk factor for later neurodegeneration, linking these two fields of study.
        </p>
      </div>
    </div>
  );
}
