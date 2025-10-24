import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "博士 PhD",
    major: "计算机科学与技术",
    school: "清华大学 | Tsinghua University",
    period: "2019 - 2024",
    description: "清华智能网络团队，导师：xxx教授",
  },
  {
    degree: "访问学者 Visiting Scholar",
    major: "计算机科学",
    school: "米兰理工大学 | Politecnico di Milano",
    period: "2023 - 2024",
    description: "国家留学基金委(CSC)资助海外联合培养",
  },
  {
    degree: "学士 BEng",
    major: "计算机科学与技术",
    school: "中山大学 | Sun Yat-sen University",
    period: "2015 - 2019",
    description: "本科毕业",
  },
];

const honors = [
  "腾讯青云计划",
  "国家留学基金委(CSC)资助",
  "多名协助指导学生获得华五推免offer",
  "多名协助指导学生获得大厂人才计划offer",
];

const Education = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">教育背景 Education</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="transition-all hover:shadow-medium">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <CardTitle className="text-xl">{edu.degree} - {edu.major}</CardTitle>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                    </div>
                    <CardDescription className="text-base mb-2">
                      {edu.school}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">荣誉与成就 Honors & Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {honors.map((honor, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{honor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
