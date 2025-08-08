import { Helmet } from "react-helmet-async";

const About = () => {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SAP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAP is a leading enterprise software suite that integrates core business processes such as finance, supply chain, sales, and human resources."
        }
      },
      {
        "@type": "Question",
        name: "Why learn SAP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAP skills are in high demand across industries. Learning SAP opens roles in consulting, analytics, operations, and IT with strong career growth."
        }
      }
    ]
  };

  return (
    <main>
      <Helmet>
        <title>About SAP – What It Is and Why Learn It</title>
        <meta name="description" content="Understand what SAP is, core modules, and why learning SAP boosts your career prospects in enterprise technology." />
        <link rel="canonical" href="/about" />
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>

      <header className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold">About SAP</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          SAP connects every part of a business—finance, supply chain, sales, HR—on a single, real-time platform for smarter decisions and efficient operations.
        </p>
      </header>

      <section className="container grid md:grid-cols-2 gap-8 pb-12">
        <article className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Core Concepts</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Integrated end-to-end processes</li>
            <li>Real-time analytics with SAP HANA</li>
            <li>Modern UX via SAP Fiori</li>
            <li>Modular architecture (FI, MM, SD, PP, HCM, etc.)</li>
          </ul>
        </article>
        <article className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Why Learn SAP</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>In-demand skill set across industries</li>
            <li>High-impact roles and attractive compensation</li>
            <li>Bridges business and technology</li>
            <li>Cloud-ready with S/4HANA</li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default About;
