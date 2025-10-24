import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">联系方式 Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            欢迎联系交流学术问题、科研合作或招生咨询
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
                  <h3 className="font-semibold mb-1">邮箱 Email</h3>
                  <a 
                    href="mailto:xiegr@pcl.ac.cn" 
                    className="text-primary hover:underline"
                  >
                    xiegr@pcl.ac.cn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">所属机构 Affiliation</h3>
                  <p className="text-muted-foreground">
                    鹏城国家实验室 Pengcheng Laboratory<br />
                    清华智能网络团队<br />
                    中国深圳 Shenzhen, China
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">研究团队 Research Group</h3>
                  <p className="text-muted-foreground">
                    清华智能网络团队<br />
                    <a href="https://smartinternet.group/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      smartinternet.group
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full" size="lg" asChild>
                  <a href="mailto:xiegr@pcl.ac.cn">
                    发送邮件 Send Email
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
