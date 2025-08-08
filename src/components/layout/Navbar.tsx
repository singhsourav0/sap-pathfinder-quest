import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About SAP" },
  { to: "/test", label: "Take Quiz" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg hover-scale">
          SAP Pathfinder
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors story-link ${isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild variant="outline" size="sm">
            <Link to="/auth">Login</Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/test">Start Quiz</Link>
          </Button>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent text-foreground"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t animate-slide-in-right">
          <div className="container py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/90 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/auth" onClick={() => setOpen(false)}>
                Login
              </Link>
            </Button>
            <Button asChild variant="hero" size="sm" className="w-full">
              <Link to="/test" onClick={() => setOpen(false)}>
                Start Quiz
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
