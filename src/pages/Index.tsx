import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-72 py-8 px-4 sm:px-6 lg:py-16 lg:px-20 max-w-6xl">
        <section className="mb-12 lg:mb-16 leading-relaxed">
          <p className="text-base lg:text-lg mb-4 text-foreground/90">
            Welcome! I received my Bsc (2017) from <a href="https://www.csu.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">CSU</a>, Msc (2020) from Tsnghua University, and <a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Tsinghua</a> (China), respectively. 
            I am currently an assistant researcher at <a href="https://www.pcl.ac.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Pengcheng Laboratory (PCL)</a>.
          </p>
          <p className="text-base lg:text-lg mb-6 text-foreground/90">
            我在2017年本科毕业于中南大学、2020年硕士毕业于清华大学、2025年博士毕业于清华大学。目前任职于鹏城实验室，担任助理研究员，课题组官网Smart Internet Group（www.smartinternet.group）。
            主要研究分布式系统、大模型推理加速、边云协同计算等。
          </p>
          
          <p className="text-sm lg:text-base mb-3">
            Research interests: <strong className="text-foreground">Distributed System, LLM Inference Acceleration, edge-cloud colloborative computing</strong>
          </p>
          
          <p className="text-sm lg:text-base mb-6">
            [<a 
              href="https://scholar.google.com/citations?user=LhUh3sYAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Google Scholar
            </a>]
          </p>
          
          <p className="text-sm lg:text-base font-semibold text-foreground bg-muted px-3 py-2 lg:px-4 lg:py-3 rounded border-l-4 border-primary">
            欢迎对分布式系统、大模型推理加速、边云协同计算的同学联系我！
          </p>
        </section>

        <News />
        <Research />
        <Publications />
        <Services />
        <Education />
      </main>
    </div>
  );
};

export default Index;
