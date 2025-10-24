import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Deep Learning for Computer Vision: A Comprehensive Survey",
    authors: "Zhang San, Li Si, Wang Wu",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: "2024",
    type: "Journal",
    tags: ["Computer Vision", "Deep Learning", "Survey"],
    links: {
      paper: "#",
      code: "#",
    },
  },
  {
    title: "Efficient Multi-Modal Learning with Attention Mechanisms",
    authors: "Zhang San, Wang Wu",
    venue: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2024",
    type: "Conference",
    tags: ["Multi-Modal", "Attention", "CVPR"],
    links: {
      paper: "#",
      code: "#",
    },
  },
  {
    title: "Neural Network Compression via Knowledge Distillation",
    authors: "Li Si, Zhang San",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2023",
    type: "Conference",
    tags: ["Model Compression", "Knowledge Distillation"],
    links: {
      paper: "#",
    },
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">发表论文</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            在国际顶级会议和期刊上发表的学术成果
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="transition-all hover:shadow-medium">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                    <CardDescription className="text-base">
                      {pub.authors}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {pub.venue}, {pub.year}
                    </p>
                  </div>
                  <Badge variant="secondary">{pub.type}</Badge>
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
                <div className="flex gap-2">
                  {pub.links.paper && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4" />
                        论文
                      </a>
                    </Button>
                  )}
                  {pub.links.code && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        代码
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
