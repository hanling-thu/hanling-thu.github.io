import { Users, Briefcase } from "lucide-react";

const newsItems = [
  {
    icon: Users,
    date: "2025",
    content: "招收学生：鹏城-中山/西电联培博士（1~2名，26年入学）；科研实习生（可推免清华，长期招收）。本人及协助指导的学生都曾获大厂人才及华五推免offer。"
  },
  {
    icon: Briefcase,
    date: "2025",
    content: "招聘信息：鹏城实验室研究人员（长期）；博士后研究员（年薪56万+，海外回国博后68万+）。"
  }
];

const News = () => {
  return (
    <section id="news" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      
      <div className="space-y-4">
        {newsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex gap-4">
              <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                <p className="text-base leading-relaxed">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
