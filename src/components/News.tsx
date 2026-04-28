import { Briefcase, Flame, Users } from "lucide-react";

const newsItems = [
  {
    icon: Users,
    date: "2026年4月",
    content: "招收学生：鹏城实验室-中山大学联培博士1名（2026年入学），详见：https://graduate.sysu.edu.cn/zsw/article/523。"
  },
  {
    icon: Users,
    date: "【长期有效】",
    content: "欢迎对分布式系统、大模型推理加速、边云协同计算感兴趣的同学联系，长期招收科研实习生（大二/大三），可支持推免清华。"
  },
  {
    icon: Briefcase,
    date: "【长期有效】",
    content: "招聘信息：长期招聘鹏城实验室研究人员；招聘博士后研究员，年薪56万以上，海外回国博士后年薪68万以上。"
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
                  <Flame className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
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
