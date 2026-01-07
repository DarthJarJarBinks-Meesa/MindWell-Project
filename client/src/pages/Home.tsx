import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/diverse_group_of_people_enjoying_outdoors,_soft_focus,_brain_health_concept.png";
import { ArrowRight, Brain, ShieldCheck, Puzzle, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container-width relative h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold font-serif leading-tight"
            >
              Protect brain health across a lifetime.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 font-light"
            >
              Advancing awareness and prevention for neurodegenerative diseases and traumatic brain injury.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/prevention">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white text-lg px-8 py-6 rounded-full">
                  Learn Prevention
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 text-lg px-8 py-6 rounded-full">
                  Get Involved
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="container-width -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: "100,000+", label: "Cognitive Puzzles Distributed", icon: Puzzle },
            { number: "100+", label: "Community Locations Reached", icon: Users },
            { number: "Nationwide", label: "Awareness & Education Sessions", icon: Activity },
          ].map((stat, idx) => (
            <Card key={idx} className="border-none shadow-xl bg-white/95 backdrop-blur">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-2">
                <stat.icon className="h-10 w-10 text-accent mb-2" />
                <span className="text-4xl font-bold text-primary">{stat.number}</span>
                <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm">{stat.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="container-width py-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-serif text-primary">Our Mission in Action</h2>
          <p className="text-lg text-muted-foreground">
            We bridge the gap between scientific research and community action through five key pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Neurodegenerative Disease Awareness", desc: "Educating the public on early signs, progression, and the reality of conditions like Alzheimer's and Parkinson's.", link: "/neurodegeneration" },
            { title: "TBI Prevention & Safety", desc: "Promoting safety in sports, workplaces, and daily life to prevent traumatic brain injuries before they happen.", link: "/tbi" },
            { title: "Brain-Boost Puzzle Outreach", desc: "Delivering cognitive engagement tools to at-risk populations to stimulate neural pathways.", link: "/what-we-do" },
            { title: "Community Education", desc: "Hosting workshops and advocacy sessions to empower families with knowledge.", link: "/resources" },
            { title: "Research Translation", desc: "Making complex scientific findings accessible and actionable for everyone.", link: "/research" },
            { title: "Get Involved Today", desc: "Join our movement as a volunteer, donor, or partner.", link: "/get-involved", special: true },
          ].map((card, idx) => (
            <Link key={idx} href={card.link}>
              <Card className={`h-full hover:shadow-lg transition-all cursor-pointer group ${card.special ? 'bg-primary text-white border-primary' : 'bg-card'}`}>
                <CardHeader>
                  <CardTitle className={`text-xl font-serif ${card.special ? 'text-white' : 'text-primary'}`}>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={card.special ? 'text-white/90' : 'text-muted-foreground'}>{card.desc}</p>
                </CardContent>
                <CardFooter>
                  <div className={`flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform ${card.special ? 'text-accent' : 'text-accent'}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Daily Puzzle Teaser */}
      <section className="bg-secondary/30 py-20">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif text-primary">Challenge Your Brain Today</h2>
              <p className="text-lg text-muted-foreground">
                Daily cognitive engagement is a key pillar of brain health. Try our daily puzzle to keep your mind sharp and active.
              </p>
              <Link href="/daily-puzzle">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Play Today's Puzzle <Puzzle className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-sm border-2 border-primary/10">
                <div className="grid grid-cols-3 gap-2 opacity-50 mb-4">
                  {[1,2,3,4,5,6,7,8,9].map(i => (
                    <div key={i} className="aspect-square bg-muted rounded flex items-center justify-center text-2xl font-bold text-primary/30">
                      {i % 2 === 0 ? i : ''}
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground font-medium">Daily Sudoku Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
