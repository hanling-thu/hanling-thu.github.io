import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-large ring-4 ring-primary/10"
            />
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
                张三
              </h1>
              <p className="text-xl text-muted-foreground">
                博士研究生 | PhD Candidate
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                计算机科学与技术学院
              </p>
              <p className="text-lg text-muted-foreground">
                某某大学
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80">
                我的研究兴趣包括人工智能、机器学习、计算机视觉等领域。
                目前专注于深度学习在计算机视觉中的应用，特别是在图像识别、目标检测和语义分割方面的研究。
              </p>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <FileText className="h-5 w-5" />
                下载简历
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
