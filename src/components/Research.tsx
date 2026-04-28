import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Network, Cpu } from "lucide-react";

const researchAreas = [
  {
    icon: Network,
    title: "分布式系统",
    description: "研究分布式模型推理系统。",
  },
  {
    icon: Cpu,
    title: "大模型推理加速",
    description: "投机解码、MoE等。",
  },
  {
    icon: Brain,
    title: "边云协同计算",
    description: "边缘智能",
  }
];

const Research = () => {
  return (
    <section id="research" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-serif border-b-2 border-primary pb-2">Research Interests</h2>
      
      <ul className="space-y-3">
        {researchAreas.map((area, index) => (
          <li key={index} className="text-base leading-relaxed pl-6 border-l-2 border-muted hover:border-primary transition-colors">
            <strong className="text-foreground">{area.title}</strong>
            <span className="text-foreground/80">: {area.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Research;
