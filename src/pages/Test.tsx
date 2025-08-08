import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { sapQuiz, type QuizQuestion } from "@/data/sap-quiz";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Test = () => {
  const questions = useMemo<QuizQuestion[]>(() => sapQuiz, []);
  const [answers, setAnswers] = useState<Record<number, number | null>>(
    Object.fromEntries(questions.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);
  const total = questions.length;

  const score = useMemo(() =>
    Object.entries(answers).reduce((acc, [id, idx]) => {
      const q = questions.find((x) => x.id === Number(id));
      return acc + (q && idx === q.answerIndex ? 1 : 0);
    }, 0), [answers, questions]);

  const handleSubmit = () => {
    if (Object.values(answers).some((v) => v === null)) {
      toast({ title: "Incomplete", description: "Please answer all questions." });
      return;
    }
    setSubmitted(true);

    // Temporary local save; will switch to Supabase once connected
    try {
      const results = JSON.parse(localStorage.getItem("sap-quiz-results") || "[]");
      results.push({ score, total, date: new Date().toISOString() });
      localStorage.setItem("sap-quiz-results", JSON.stringify(results));
      toast({ title: "Score saved locally", description: `You scored ${score}/${total}. Connect backend to save permanently.` });
    } catch {
      // ignore
    }
  };

  return (
    <main className="container py-10">
      <Helmet>
        <title>SAP Basics Quiz – 20 Questions</title>
        <meta name="description" content="Take a 20-question SAP basics quiz. Immediate scoring; backend score storage enabled once connected." />
        <link rel="canonical" href="/test" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">SAP Basics Quiz</h1>
      <p className="text-muted-foreground mb-8">Answer all questions and submit to see your score.</p>

      <form className="grid gap-6">
        {questions.map((q, i) => (
          <fieldset key={q.id} className="rounded-lg border p-4">
            <legend className="font-medium">{i + 1}. {q.question}</legend>
            <div className="mt-3 grid gap-2">
              {q.options.map((opt, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    className="accent-[hsl(var(--primary))]"
                    checked={answers[q.id] === idx}
                    onChange={() => setAnswers((a) => ({ ...a, [q.id]: idx }))}
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>

      <div className="mt-8 flex items-center gap-4">
        <Button variant="hero" size="lg" onClick={handleSubmit}>
          Submit Quiz
        </Button>
        {submitted && (
          <div className="text-lg font-semibold animate-fade-in" aria-live="polite">
            Score: {score}/{total}
          </div>
        )}
      </div>
    </main>
  );
};

export default Test;
