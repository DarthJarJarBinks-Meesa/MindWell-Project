import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Neurodegeneration from "@/pages/Neurodegeneration";
import TBI from "@/pages/TBI";
import DailyPuzzle from "@/pages/DailyPuzzle";
import Prevention from "@/pages/Prevention";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import Why from "@/pages/Why";
import WhatWeDo from "@/pages/WhatWeDo";
import GetInvolved from "@/pages/GetInvolved";
import Research from "@/pages/Research";
import Grants from "@/pages/Grants";
import Fellowship from "@/pages/Fellowship";
import Hackathon from "@/pages/Hackathon";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import KeyPapers from "@/pages/KeyPapers";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/neurodegeneration" component={Neurodegeneration} />
        <Route path="/tbi" component={TBI} />
        <Route path="/daily-puzzle" component={DailyPuzzle} />
        <Route path="/prevention" component={Prevention} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />
        <Route path="/why" component={Why} />
        <Route path="/what-we-do" component={WhatWeDo} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/research" component={Research} />
        <Route path="/grants" component={Grants} />
        <Route path="/fellowship" component={Fellowship} />
        <Route path="/hackathon" component={Hackathon} />
        <Route path="/resources" component={Resources} />
        <Route path="/about" component={About} />
        <Route path="/key-papers" component={KeyPapers} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
