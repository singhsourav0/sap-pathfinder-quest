const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container py-8 grid gap-4 md:grid-cols-3">
        <div>
          <p className="font-semibold">SAP Pathfinder</p>
          <p className="text-sm text-muted-foreground mt-2">
            Learn SAP fundamentals and test your knowledge with a modern, responsive experience.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Explore</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="/about" className="hover:text-foreground">About SAP</a></li>
            <li><a href="/test" className="hover:text-foreground">Take the Quiz</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Legal</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>© {new Date().getFullYear()} SAP Pathfinder</li>
            <li>All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
