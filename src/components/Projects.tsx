import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "视觉问答系统",
    description: "基于多模态Transformer的视觉问答系统，能够理解图像内容并回答相关问题。该系统在VQA 2.0数据集上取得了领先的性能。",
    tags: ["PyTorch", "Transformer", "Multi-Modal"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "目标检测框架",
    description: "轻量级目标检测框架，通过模型压缩和优化技术实现实时检测。在移动端设备上也能流畅运行。",
    tags: ["Computer Vision", "Real-time", "Mobile"],
    links: {
      github: "#",
    },
  },
  {
    title: "图像语义分割工具",
    description: "高精度的图像语义分割工具，支持多种主流模型。提供友好的可视化界面和丰富的预训练模型。",
    tags: ["Segmentation", "Deep Learning", "Open Source"],
    links: {
      github: "#",
      demo: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">项目经历</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            开源项目和研究成果
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col transition-all hover:shadow-medium hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base leading-relaxed mb-4 flex-1">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
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

export default Projects;
