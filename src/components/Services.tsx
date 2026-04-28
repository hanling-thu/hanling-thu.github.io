import { Users, BookOpen } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-serif border-b-2 border-primary pb-2">Professional Activities</h2>
      
      <div className="space-y-6">
        
        <div className="pl-6 border-l-2 border-muted hover:border-primary transition-colors">
          <p className="font-semibold mb-3 flex items-center gap-2 text-foreground">
            <BookOpen className="h-5 w-5 text-primary" />
            Reviewer
          </p>
          <p className="text-base leading-relaxed text-foreground/90">
            NeurIPS, AAAI, ECCV, CVPR, MM, IEEE Network, ICLR
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
