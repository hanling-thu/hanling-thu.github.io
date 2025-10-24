import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Intelligent In-Network Attack Detection on Programmable Switches with Soterv2",
    authors: "G. Xie, Q. Li, C. Cui, et al.",
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
    year: "2024",
    type: "Journal",
    rank: "CCF A",
    tags: ["Network Security", "Programmable Switches", "Attack Detection"],
  },
  {
    title: "Generating neural networks for diverse networking classification tasks via hardware-aware neural architecture search",
    authors: "G. Xie, Q. Li, Z. Shi, et al.",
    venue: "IEEE Transactions on Computers (TC)",
    year: "2023",
    type: "Journal",
    rank: "CCF A",
    tags: ["Neural Architecture Search", "Network Classification"],
  },
  {
    title: "Empowering in-network classification in programmable switches by binary decision tree and knowledge distillation",
    authors: "G. Xie, Q. Li, G. Duan, J. Lin, et al.",
    venue: "IEEE/ACM Transactions on Networking (ToN)",
    year: "2023",
    type: "Journal",
    rank: "CCF A",
    tags: ["In-Network Intelligence", "Knowledge Distillation", "P4"],
  },
  {
    title: "Mousika: enable general in-network intelligence in programmable switches by knowledge distillation",
    authors: "G. Xie, Q. Li, Y. Dong, G. Duan, et al.",
    venue: "IEEE International Conference on Computer Communications (INFOCOM)",
    year: "2022",
    type: "Conference",
    rank: "CCF A",
    tags: ["In-Network Intelligence", "P4", "Knowledge Distillation"],
    links: {
      github: "https://github.com/xgr19/Mousika",
    },
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 bg-muted/20 border-b">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 font-serif">代表性论文 Selected Publications</h2>
          <p className="text-muted-foreground mb-4">
            已在 INFOCOM, ToN, TDSC, TC, WWW, ATC 等顶级会议和期刊发表论文20余篇
          </p>
          <Button variant="outline" size="sm" asChild>
            <a href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" target="_blank" rel="noopener noreferrer" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              完整论文列表 (Google Scholar)
            </a>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-soft transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 font-semibold">{pub.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {pub.authors}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground mt-1">
                      {pub.venue}, {pub.year}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">{pub.type}</Badge>
                    <Badge className="bg-primary text-xs">{pub.rank}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {pub.links?.github && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs" asChild>
                      <a href={pub.links.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
