const researchAreas = [
  {
    title: "分布式系统",
    description: "面向大模型推理、实时视频分析等任务，研究系统架构、任务调度、性能建模与资源管理。",
  },
  {
    title: "大模型推理加速",
    description: "关注在线推理中的吞吐、时延和成本问题，研究投机解码、MoE推理、并行推理、缓存复用和异构资源分配。",
  },
  {
    title: "边云协同计算",
    description: "面向边缘智能、多租户边缘服务和边云视频分析，在带宽、算力和延迟约束下构建高效可靠的协同机制。",
  },
];

const Research = () => {
  return (
    <section id="research" className="mb-14">
      <h2 className="mb-5 border-b border-border pb-3 font-serif text-2xl font-bold text-foreground lg:text-3xl">研究方向</h2>

      <ul className="space-y-2.5">
        {researchAreas.map((area, index) => (
          <li key={index} className="grid gap-1 border-l-2 border-muted pl-4 transition-colors hover:border-primary md:grid-cols-[10rem_1fr] md:gap-5">
            <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
            <p className="text-base leading-snug text-foreground/75">{area.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Research;
