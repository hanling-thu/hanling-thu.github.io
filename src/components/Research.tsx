import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Network, Cpu } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "深度学习",
    description: "研究深度神经网络架构设计与优化方法，包括卷积神经网络、循环神经网络和Transformer等模型。",
  },
  {
    icon: Eye,
    title: "计算机视觉",
    description: "专注于图像识别、目标检测、语义分割等视觉任务，探索视觉理解的新方法。",
  },
  {
    icon: Network,
    title: "多模态学习",
    description: "研究视觉-语言融合、跨模态检索等多模态学习问题，构建统一的多模态表示。",
  },
  {
    icon: Cpu,
    title: "模型压缩",
    description: "探索神经网络压缩、知识蒸馏、模型剪枝等技术，实现高效的模型部署。",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">研究方向</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我的研究主要集中在以下几个方向
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className="transition-all hover:shadow-medium hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Research;
