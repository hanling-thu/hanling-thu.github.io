import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section id="about" className="py-20 border-b">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Guorui Xie - Profile"
              className="w-48 h-48 rounded object-cover border"
            />
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
                谢国锐 Guorui Xie
              </h1>
              <p className="text-xl text-muted-foreground">
                助理研究员（博导）| Assistant Researcher (PhD Supervisor)
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                鹏城国家实验室 | Pengcheng Laboratory
              </p>
              <p className="text-lg text-muted-foreground">
                清华智能网络团队
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-3">
                I received my BEng (2019) and PhD (2024) degrees from SYSU and Tsinghua (China), respectively. 
                I was also a CSC-funded research visitor at Polimi (Italy, 2023~2024).
              </p>
              <p className="text-foreground/80">
                我在2019年本科毕业于中山大学、2024年博士毕业于清华大学，曾获国家留学基金资助海外联培（2023~2024）、腾讯青云计划。
                主要研究可编程网络、P4技术、AI/LLM的网络应用等。
              </p>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5" />
                  Google Scholar
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#contact">
                  <Mail className="h-5 w-5" />
                  联系我
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
