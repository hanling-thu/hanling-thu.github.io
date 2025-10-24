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
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">代表性论文 Selected Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            已在 INFOCOM, ToN, TDSC, TC, WWW, ATC 等顶级会议和期刊发表论文20余篇
          </p>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <a href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                完整论文列表 (Google Scholar)
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="transition-all hover:shadow-medium">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                    <CardDescription className="text-base">
                      {pub.authors}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {pub.venue}, {pub.year}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <Badge className="bg-primary">{pub.rank}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {pub.links?.github && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={pub.links.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
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
