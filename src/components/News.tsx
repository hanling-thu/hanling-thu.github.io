import { Users, Briefcase } from "lucide-react";

const newsItems = [
  {
    icon: Users,
    date: "2026",
    content: "招收学生：鹏城-中山联培博士（1名，26年入学）；科研实习生（可推免清华，长期招收）。本人及协助指导的学生都曾获大厂人才及华五推免offer。"
  },
  {
    icon: Briefcase,
    date: "2026",
    content: "招聘信息：鹏城实验室研究人员（长期）；博士后研究员（年薪56万+，海外回国博后68万+）。"
  }
];

const News = () => {
  return (
    <section id="news" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-serif border-b-2 border-primary pb-2">Latest News</h2>
      
      <div className="space-y-6">
        {newsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex gap-4 group">
              <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{item.date}</p>
                <p className="text-base leading-relaxed text-foreground/90">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
