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
    <section id="research" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
      
      <ul className="list-disc list-inside space-y-2 ml-2">
        {researchAreas.map((area, index) => (
          <li key={index} className="text-base">
            <strong>{area.title}</strong>: {area.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Research;
