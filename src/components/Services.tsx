import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    type: "TPC Member",
    items: ["ACM CoNEXT 2026"],
  },
  {
    type: "Reviewer",
    items: ["IEEE JSAC", "Computer Networks", "WWW 2025"],
  },
  {
    type: "专委会委员",
    items: [
      "CCF分布式计算与系统专委会执行委员",
      "CCF互联网专委会执行委员",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">学术服务 Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            担任多个国际会议程序委员会成员和期刊审稿人
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-medium">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.type}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
