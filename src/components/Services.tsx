import { Users, BookOpen } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-serif border-b-2 border-primary pb-2">Professional Activities</h2>
      
      <div className="space-y-6">
        <div className="pl-6 border-l-2 border-muted hover:border-primary transition-colors">
          <p className="font-semibold mb-3 flex items-center gap-2 text-foreground">
            <Users className="h-5 w-5 text-primary" />
            Program Committee Member
          </p>
          <p className="text-base leading-relaxed text-foreground/90">
            ACM CoNEXT 2026
          </p>
        </div>
        
        <div className="pl-6 border-l-2 border-muted hover:border-primary transition-colors">
          <p className="font-semibold mb-3 flex items-center gap-2 text-foreground">
            <BookOpen className="h-5 w-5 text-primary" />
            Reviewer
          </p>
          <p className="text-base leading-relaxed text-foreground/90">
            IEEE JSAC, Computer Networks, WWW 2025
          </p>
        </div>
        
        <div className="pl-6 border-l-2 border-muted hover:border-primary transition-colors">
          <p className="font-semibold mb-3 text-foreground">
            专委会委员
          </p>
          <ul className="space-y-2 text-base text-foreground/90">
            <li>• CCF分布式计算与系统专委会执行委员</li>
            <li>• CCF互联网专委会执行委员</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
