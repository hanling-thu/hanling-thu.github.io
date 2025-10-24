const Footer = () => {
  return (
    <footer className="border-t py-8 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 谢国锐 Guorui Xie. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Google Scholar
            </a>
            <a 
              href="https://github.com/xgr19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://smartinternet.group/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Research Group
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
