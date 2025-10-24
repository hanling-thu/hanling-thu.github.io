import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Network, Cpu } from "lucide-react";

const researchAreas = [
  {
    icon: Network,
    title: "可编程网络 Programmable Network",
    description: "研究基于P4的可编程交换机技术，探索网络数据平面的灵活编程能力，实现高性能的网络功能。",
  },
  {
    icon: Cpu,
    title: "P4技术",
    description: "深入研究P4语言及其在网络设备中的应用，开发创新的数据平面算法和架构。",
  },
  {
    icon: Brain,
    title: "AI/LLM网络应用",
    description: "探索人工智能和大语言模型在网络领域的应用，包括智能网络攻击检测、网络优化等。",
  },
  {
    icon: Eye,
    title: "网内智能 In-Network Intelligence",
    description: "研究在网络设备中实现智能算法，通过知识蒸馏等技术在可编程交换机上部署机器学习模型。",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">研究方向 Research Interests</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            主要研究领域包括可编程网络、P4技术、AI/LLM网络应用
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
