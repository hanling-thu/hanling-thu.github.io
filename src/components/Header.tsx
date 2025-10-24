import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">学术主页</h1>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            关于
          </a>
          <a href="#research" className="text-sm font-medium transition-colors hover:text-primary">
            研究
          </a>
          <a href="#publications" className="text-sm font-medium transition-colors hover:text-primary">
            论文
          </a>
          <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
            项目
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            联系
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:your.email@university.edu" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
