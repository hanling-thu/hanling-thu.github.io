import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "博士",
    major: "计算机科学与技术",
    school: "某某大学",
    period: "2021 - 至今",
    description: "研究方向：深度学习与计算机视觉",
  },
  {
    degree: "硕士",
    major: "计算机科学与技术",
    school: "某某大学",
    period: "2018 - 2021",
    description: "GPA: 3.9/4.0，获优秀毕业生",
  },
  {
    degree: "学士",
    major: "软件工程",
    school: "某某大学",
    period: "2014 - 2018",
    description: "GPA: 3.8/4.0，专业排名前5%",
  },
];

const Education = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">教育背景</h2>
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
                    <div className="flex items-start justify-between gap-4 mb-2">
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
        </div>
      </div>
    </section>
  );
};

export default Education;
