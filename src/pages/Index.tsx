import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Patents from "@/components/Patents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="px-5 py-8 sm:px-8 lg:ml-80 lg:px-16 lg:py-12">
        <div className="max-w-7xl">
          <section className="mb-10 leading-relaxed">
            <p className="mb-5 max-w-5xl text-base text-foreground/90 lg:text-lg">
              我于2017年本科毕业于
              <a href="https://www.csu.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline"> 中南大学 </a>
              ，2020年硕士毕业于
              <a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline"> 清华大学 </a>
              ，2025年博士毕业于<a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline"> 清华大学 </a>。2020年至2021年曾任
              <a href="https://www.pcl.ac.cn/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline"> 鹏城实验室 </a>
              算法工程师，现任<strong className="font-semibold text-foreground"> 鹏城实验室助理研究员、博士生导师 </strong>，目前所在团队为
              <a href="https://www.smartinternet.group/" target="_blank" rel="noopener noreferrer" className="text-link hover:underline"> 清华智能网络团队 </a>
              。我曾获香港博士生论坛 Best Paper Award、鹏城实验室优秀博士生、鹏城实验室人才发展奖学金、清华大学校级综合奖学金等荣誉，长期担任NeurIPS、AAAI、ICLR、ECCV、CVPR、MM、IEEE Network等会议和期刊审稿人。
            </p>
          </section>

          <Research />
          <News />
          <Publications />
          <Patents />
        </div>
      </main>
    </div>
  );
};

export default Index;
