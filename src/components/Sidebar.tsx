import profileImage from "@/assets/profile-placeholder.jpg";

const Sidebar = () => {
  return (
    <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-72 bg-sidebar text-sidebar-foreground p-6 lg:p-10 lg:overflow-y-auto">
      <div className="flex lg:flex-col lg:space-y-6 items-center lg:items-start gap-6 lg:gap-0">
        <div className="flex-shrink-0">
          <h1 className="text-2xl lg:text-4xl font-serif font-bold leading-tight mb-4 lg:mb-0">
            Hanling Wang（王汉凌）
          </h1>
          
          <img
            src={profileImage}
            alt="Hanling Wang"
            className="w-24 h-24 lg:w-full lg:aspect-square object-cover border-2 border-sidebar-foreground/20 mt-4 lg:mt-6"
          />
        </div>
        
        <div className="flex-1 lg:w-full space-y-4 lg:space-y-6">
          <div className="space-y-2 lg:space-y-3 text-sm leading-relaxed lg:border-t border-sidebar-foreground/20 lg:pt-6">
            <p className="font-semibold text-base">助理研究员（博导）</p>
            <p className="opacity-90">Assistant Researcher</p>
            <p className="opacity-90">PhD Supervisor</p>
          </div>
          
          <div className="space-y-2 lg:space-y-3 text-sm leading-relaxed border-t border-sidebar-foreground/20 pt-4 lg:pt-6">
            <p className="opacity-90">鹏城国家实验室</p>
            <p className="opacity-90">Pengcheng Laboratory</p>
          </div>
          
          <div className="space-y-2 lg:space-y-3 text-sm leading-relaxed border-t border-sidebar-foreground/20 pt-4 lg:pt-6">
            <p className="opacity-90">清华智能网络团队</p>
          </div>
          
          <div className="space-y-2 text-sm border-t border-sidebar-foreground/20 pt-4 lg:pt-6">
            <p className="font-semibold">Contact:</p>
            <a 
              href="mailto:wanghl03@pcl.ac.cn" 
              className="block hover:opacity-80 transition-opacity break-all opacity-90"
            >
              wanghl03@pcl.ac.cn
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
