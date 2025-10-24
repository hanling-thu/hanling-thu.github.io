import profileImage from "@/assets/profile-placeholder.jpg";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-sidebar text-sidebar-foreground p-10 overflow-y-auto">
      <div className="space-y-6">
        <h1 className="text-4xl font-serif font-bold leading-tight">
          Guorui Xie
        </h1>
        
        <img
          src={profileImage}
          alt="Guorui Xie"
          className="w-full aspect-square object-cover border-2 border-sidebar-foreground/20"
        />
        
        <div className="space-y-3 text-sm leading-relaxed border-t border-sidebar-foreground/20 pt-6">
          <p className="font-semibold text-base">助理研究员（博导）</p>
          <p className="opacity-90">Assistant Researcher</p>
          <p className="opacity-90">PhD Supervisor</p>
        </div>
        
        <div className="space-y-3 text-sm leading-relaxed border-t border-sidebar-foreground/20 pt-6">
          <p className="opacity-90">鹏城国家实验室</p>
          <p className="opacity-90">Pengcheng Laboratory</p>
        </div>
        
        <div className="space-y-3 text-sm leading-relaxed border-t border-sidebar-foreground/20 pt-6">
          <p className="opacity-90">清华智能网络团队</p>
        </div>
        
        <div className="space-y-2 text-sm border-t border-sidebar-foreground/20 pt-6">
          <p className="font-semibold">Contact:</p>
          <a 
            href="mailto:xieguorui@pcl.ac.cn" 
            className="block hover:opacity-80 transition-opacity break-all opacity-90"
          >
            xieguorui@pcl.ac.cn
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
