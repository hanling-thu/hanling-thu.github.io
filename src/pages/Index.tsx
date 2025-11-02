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
            Welcome! I received my BEng (2019) and PhD (2024) degrees from <a href="https://www.sysu.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">SYSU</a> and <a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Tsinghua</a> (China), respectively. 
            I was also a CSC-funded research visitor at <a href="https://www.polimi.it/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Polimi</a> (Italy, 2023~2024).
          </p>
          <p className="text-base lg:text-lg mb-6 text-foreground/90">
            我在2019年本科毕业于中山大学、2024年博士毕业于清华大学，曾获国家留学基金资助海外联培（2023~2024）、腾讯青云计划。
            主要研究可编程网络、P4技术、AI/LLM的网络应用等。
          </p>
          
          <p className="text-sm lg:text-base mb-3">
            Research interests: <strong className="text-foreground">Programmable Network, P4 Technology, AI/LLM Network Applications</strong>
          </p>
          
          <p className="text-sm lg:text-base mb-6">
            [<a 
              href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Google Scholar
            </a>]
          </p>
          
          <p className="text-sm lg:text-base font-semibold text-foreground bg-muted px-3 py-2 lg:px-4 lg:py-3 rounded border-l-4 border-primary">
            欢迎对可编程网络、P4、网络智能等方向感兴趣的同学联系我！
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
