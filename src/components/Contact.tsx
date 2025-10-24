import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">联系方式</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            欢迎与我交流学术问题或合作机会
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>联系信息</CardTitle>
              <CardDescription>
                如有任何问题或合作意向，请通过以下方式联系我
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">邮箱</h3>
                  <a 
                    href="mailto:your.email@university.edu" 
                    className="text-primary hover:underline"
                  >
                    your.email@university.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">所属机构</h3>
                  <p className="text-muted-foreground">
                    计算机科学与技术学院<br />
                    某某大学
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">办公地址</h3>
                  <p className="text-muted-foreground">
                    某某楼 XXX室<br />
                    某某大学<br />
                    中国，北京
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full" size="lg" asChild>
                  <a href="mailto:your.email@university.edu">
                    发送邮件
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
