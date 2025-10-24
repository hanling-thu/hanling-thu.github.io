const Footer = () => {
  return (
    <footer className="border-t py-8 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 学术个人主页. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Google Scholar
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ResearchGate
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ORCID
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
