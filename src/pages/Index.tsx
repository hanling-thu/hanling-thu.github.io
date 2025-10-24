import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-64 p-12 max-w-5xl">
        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-4">
            Welcome! I received my BEng (2019) and PhD (2024) degrees from SYSU and Tsinghua (China), respectively. 
            I was also a CSC-funded research visitor at Polimi (Italy, 2023~2024).
          </p>
          <p className="text-lg leading-relaxed mb-4">
            我在2019年本科毕业于中山大学、2024年博士毕业于清华大学，曾获国家留学基金资助海外联培（2023~2024）、腾讯青云计划。
            主要研究可编程网络、P4技术、AI/LLM的网络应用等。
          </p>
          
          <p className="text-base mt-6">
            Research interests: <strong>Programmable Network, P4 Technology, AI/LLM Network Applications</strong>.
          </p>
          
          <p className="text-base mt-4">
            [<a 
              href="https://scholar.google.com/citations?user=DaHzpI0AAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Google Scholar
            </a>]
          </p>
          
          <p className="text-base mt-6 font-semibold">
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
