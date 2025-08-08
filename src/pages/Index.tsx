import { Helmet } from "react-helmet-async";
import hero from "@/assets/hero-sap.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>SAP Pathfinder Quest – Learn SAP Basics & Quiz</title>
        <meta name="description" content="Modern, responsive site to learn SAP basics and take a 20-question quiz. Animated landing page and clear learning path." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" aria-hidden="true" />
        <div className="container grid md:grid-cols-2 gap-8 items-center py-16">
          <div className="space-y-6 animate-enter">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Master SAP Basics with Confidence
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn the fundamentals of SAP, understand why it matters, and test yourself with a concise 20-question quiz.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg" className="hover-scale">
                <Link to="/test" aria-label="Start the SAP quiz">Start the Quiz</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/about" aria-label="Learn about SAP">Why Learn SAP?</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] animate-scale-in">
            <img
              src={hero}
              alt="Abstract modern SAP learning illustration with data flows and glass panels"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <article className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
            <h2 className="text-xl font-semibold mb-2">Learn</h2>
            <p className="text-muted-foreground">Clear introduction to SAP concepts and modules.
            </p>
          </article>
          <article className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
            <h2 className="text-xl font-semibold mb-2">Practice</h2>
            <p className="text-muted-foreground">20 curated questions covering SAP fundamentals.</p>
          </article>
          <article className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
            <h2 className="text-xl font-semibold mb-2">Track</h2>
            <p className="text-muted-foreground">Scores will be saved once backend is connected.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Index;
