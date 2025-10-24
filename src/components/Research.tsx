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
    <section id="research" className="py-16 border-b">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 font-serif">研究方向 Research Interests</h2>
          <p className="text-muted-foreground">
            主要研究领域包括可编程网络、P4技术、AI/LLM网络应用
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-soft transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg font-semibold">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
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
