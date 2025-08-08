import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If already signed in, go home
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/");
    });
  }, [navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({ title: "Welcome back!", description: "Signed in successfully." });
      window.location.href = "/"; // full refresh to ensure clean state
    } catch (err: any) {
      toast({ title: "Sign in failed", description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/`;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { display_name: displayName }, emailRedirectTo: redirectUrl },
      });
      if (error) throw error;
      if (data.user) {
        toast({ title: "Check your email", description: "Confirm your account to finish signup." });
      }
    } catch (err: any) {
      toast({ title: "Sign up failed", description: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      <Helmet>
        <title>Login or Create Account – SAP Pathfinder</title>
        <meta name="description" content="Sign in or sign up to save your SAP quiz scores and track progress." />
        <link rel="canonical" href="/auth" />
      </Helmet>

      {/* Background gradient + subtle animated blobs */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-primary/20 blur-3xl animate-pulse" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl animate-pulse" aria-hidden="true" />

      <section className="container py-12 relative">
        <div className="mx-auto max-w-md animate-enter">
          <Card className="backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <CardHeader>
              <CardTitle className="text-2xl">Access your account</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign in</TabsTrigger>
                  <TabsTrigger value="signup">Sign up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin" className="mt-6">
                  <form className="grid gap-4" onSubmit={handleSignIn}>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" variant="hero" disabled={loading} className="w-full">
                      {loading ? "Signing in..." : "Sign in"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="signup" className="mt-6">
                  <form className="grid gap-4" onSubmit={handleSignUp}>
                    <div className="grid gap-2">
                      <Label htmlFor="displayName">Display name</Label>
                      <Input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email2">Email</Label>
                      <Input id="email2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password2">Password</Label>
                      <Input id="password2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" variant="hero" disabled={loading} className="w-full">
                      {loading ? "Creating account..." : "Create account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Sponsored by <a href="https://ai4spro.com/" target="_blank" rel="noreferrer" className="story-link">AI4S Pro</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Auth;
