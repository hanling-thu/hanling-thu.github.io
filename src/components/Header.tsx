import { Mail, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">谢国锐 Guorui Xie</h1>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            关于 About
          </a>
          <a href="#news" className="text-sm font-medium transition-colors hover:text-primary">
            动态 News
          </a>
          <a href="#research" className="text-sm font-medium transition-colors hover:text-primary">
            研究 Research
          </a>
          <a href="#publications" className="text-sm font-medium transition-colors hover:text-primary">
            论文 Publications
          </a>
          <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            服务 Services
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            联系
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:xiegr@pcl.ac.cn" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/xgr19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <FileText className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
