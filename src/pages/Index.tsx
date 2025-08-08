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
            <div className="flex flex-wrap gap-3 relative z-50">
              <Link to="/test" className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium bg-gradient-primary text-primary-foreground shadow-[var(--shadow-elegant)] hover:brightness-110 transition-all">
                Start the Quiz
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all">
                Why Learn SAP?
              </Link>
              <Link to="/auth" className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all">
                Sign in / Sign up
              </Link>
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
            <p className="text-muted-foreground">Scores are saved to your account when signed in.</p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" aria-hidden="true" />
        <div className="container">
          <div className="rounded-xl border bg-card/70 backdrop-blur p-6 shadow-[var(--shadow-elegant)] animate-enter">
            <h2 className="text-2xl font-semibold mb-2">Sponsored by AI4S Pro</h2>
            <p className="text-muted-foreground mb-4">
              AI4S Pro empowers learners and teams with practical AI solutions and training. Explore tools, guides, and resources to supercharge your SAP and AI journey.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <a href="https://ai4spro.com/" target="_blank" rel="noreferrer" aria-label="Visit AI4S Pro website">Visit AI4SPro.com</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/auth">Sign in to save scores</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
