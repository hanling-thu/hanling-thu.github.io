import { Github } from "lucide-react";

const publications = [
  {
    title: "Intelligent In-Network Attack Detection on Programmable Switches with Soterv2",
    authors: "G. Xie, Q. Li, C. Cui, et al.",
    venue: "IEEE TDSC 2024",
    note: "CCF A",
  },
  {
    title: "Generating neural networks for diverse networking classification tasks via hardware-aware neural architecture search",
    authors: "G. Xie, Q. Li, Z. Shi, et al.",
    venue: "IEEE TC 2023",
    note: "CCF A",
  },
  {
    title: "Empowering in-network classification in programmable switches by binary decision tree and knowledge distillation",
    authors: "G. Xie, Q. Li, G. Duan, J. Lin, et al.",
    venue: "IEEE/ACM ToN 2023",
    note: "CCF A",
  },
  {
    title: "Mousika: enable general in-network intelligence in programmable switches by knowledge distillation",
    authors: "G. Xie, Q. Li, Y. Dong, G. Duan, et al.",
    venue: "IEEE INFOCOM 2022",
    note: "CCF A",
    github: "https://github.com/xgr19/Mousika",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-serif border-b-2 border-primary pb-2">Selected Publications</h2>
      
      <p className="text-base mb-6">
        [<a 
          href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-link hover:underline font-medium"
        >
          Full List on Google Scholar
        </a>]
      </p>
      
      <ul className="space-y-6">
        {publications.map((pub, index) => (
          <li key={index} className="text-base pl-6 border-l-2 border-muted hover:border-primary transition-colors pb-4">
            <p className="mb-2 font-semibold text-foreground leading-relaxed">
              {pub.title}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              {pub.authors}
            </p>
            <p className="text-sm mb-2">
              <em className="text-foreground/80">{pub.venue}</em>
              {pub.note && <span className="ml-2 font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded text-xs">{pub.note}</span>}
            </p>
            {pub.github && (
              <a 
                href={pub.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-link hover:underline"
              >
                <Github className="h-4 w-4" />
                [GitHub]
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Publications;
