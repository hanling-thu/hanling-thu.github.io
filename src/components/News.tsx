import { Award, Briefcase, TrendingUp, Users } from "lucide-react";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-primary">{children}</strong>
);

const AwardHighlight = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-rose-700">{children}</strong>
);

const newsItems = [
  {
    icon: Award,
    date: "2026年6月",
    content: (
      <>
        论文 VaVLM 获 <AwardHighlight>IEEE Broadcast Technology Society 2026 Scott Helt Memorial Award</AwardHighlight>。
      </>
    )
  },
  {
    icon: Users,
    date: "2026年4月",
    content: (
      <>
        招收学生：<Highlight>鹏城实验室-中山大学联培博士 1 名</Highlight>（2026年入学），详见：
        <a href="https://graduate.sysu.edu.cn/zsw/article/523" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">
          https://graduate.sysu.edu.cn/zsw/article/523
        </a>
        。
      </>
    )
  },
  {
    icon: Users,
    date: <AwardHighlight>【长期有效】</AwardHighlight>,
    content: (
      <>
        欢迎对分布式系统、大模型推理加速、边云协同计算感兴趣的同学联系，长期招收<Highlight>科研实习生</Highlight>（大二/大三），可支持推免清华。
        <br />
        多名往届学生已保研至清华（本部 & 深圳）、北大（本部）等。
      </>
    )
  },
  {
    icon: Briefcase,
    date: <AwardHighlight>【长期有效】</AwardHighlight>,
    content: (
      <>
        招聘信息：长期招聘鹏城实验室全职研究人员，助研年薪<Highlight> 60万 </Highlight>以上，博士后年薪<Highlight> 56万 </Highlight>以上，海外回国博士后年薪<Highlight> 68万 </Highlight>以上。
      </>
    )
  }
];

const News = () => {
  return (
    <section id="news" className="mb-14">
      <h2 className="mb-5 border-b border-border pb-3 font-serif text-2xl font-bold text-foreground lg:text-3xl">最新动态</h2>
      
      <div className="space-y-4">
        {newsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="group flex gap-3">
              <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />
              <div>
                <p className="mb-1 text-sm font-medium text-muted-foreground">{item.date}</p>
                <p className="flex gap-2 text-base leading-snug text-foreground/90 lg:text-[1.03rem]">
                  <TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>{item.content}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
