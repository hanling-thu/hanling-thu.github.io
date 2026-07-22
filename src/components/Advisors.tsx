const advisors = [
  {
    name: "江勇",
    institution: "清华大学深圳国际研究生院",
    position: "教授、博士生导师",
    roles: "深圳市软件定义网络关键技术重点实验室主任",
    research: "网络体系架构与传输协议、分布式异构多智能体协同、算网一体大模型训练与推断。",
    url: "https://www.sigs.tsinghua.edu.cn/jy/main.htm",
  },
  {
    name: "王力哲",
    institution: "清华大学深圳国际研究生院",
    position: "数信院院长、教授、博士生导师",
    roles: "欧洲科学院院士、IEEE Fellow",
    research: "商业航天卫星技术、低空技术与工程、遥感信息工程及数字地球。",
    url: "https://www.sigs.tsinghua.edu.cn/wlz/main.htm",
  },
  {
    name: "郑培嘉",
    institution: "中山大学计算机学院",
    position: "教授、博士生导师",
    roles: "网络空间安全研究所副所长",
    research: "人工智能与大模型、加密信号处理、云计算与联邦学习、密码学应用及隐私计算。",
    url: "https://cse.sysu.edu.cn/teacher/ZhengPeijia",
  },
];

const Advisors = () => {
  return (
    <section id="advisors" className="mb-14">
      <h2 className="mb-5 border-b border-border pb-3 font-serif text-2xl font-bold text-foreground lg:text-3xl">
        合作导师
      </h2>

      <div className="grid gap-4 lg:grid-cols-3">
        {advisors.map((advisor) => (
          <article key={advisor.name} className="border border-border bg-card p-5 shadow-soft">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{advisor.name} 教授</h3>
                <p className="mt-1 text-sm text-foreground/70">{advisor.institution}</p>
              </div>
              <a
                href={advisor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm text-link hover:underline"
              >
                主页
              </a>
            </div>

            <p className="text-sm font-medium leading-relaxed text-foreground/90">{advisor.position}</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/70">{advisor.roles}</p>
            <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-foreground/80">
              <span className="font-medium text-foreground">研究方向：</span>
              {advisor.research}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Advisors;
