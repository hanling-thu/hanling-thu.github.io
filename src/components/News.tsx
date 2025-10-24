import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const News = () => {
  return (
    <section className="py-16 bg-gradient-subtle border-y">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">最新动态 News</h2>
            <span className="text-2xl">🔥</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <Card className="border-primary/30 shadow-medium hover:shadow-large transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">招收学生</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge className="mt-1">博士</Badge>
                  <p className="text-sm text-muted-foreground flex-1">
                    鹏城-中山/西电联培博士（1~2名，26年入学）
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="mt-1">实习</Badge>
                  <p className="text-sm text-muted-foreground flex-1">
                    科研实习生（可推免清华，长期招收）
                  </p>
                </div>
              </div>
              <p className="text-sm text-primary pt-2">
                本人及协助指导的学生都曾获大厂人才及华五推免offer
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30 shadow-medium hover:shadow-large transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">招聘信息</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge className="mt-1">研究员</Badge>
                  <p className="text-sm text-muted-foreground flex-1">
                    鹏城实验室研究人员（长期）
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="mt-1">博后</Badge>
                  <p className="text-sm text-muted-foreground flex-1">
                    博士后研究员
                  </p>
                </div>
              </div>
              <p className="text-sm text-primary pt-2">
                年薪56万+（海外回国博后68万+）
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default News;
