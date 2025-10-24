import profileImage from "@/assets/profile-placeholder.jpg";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground p-8 overflow-y-auto">
      <div className="space-y-8">
        <h1 className="text-4xl font-serif font-bold">
          Guorui Xie
        </h1>
        
        <img
          src={profileImage}
          alt="Guorui Xie"
          className="w-full aspect-square object-cover"
        />
        
        <div className="space-y-2 text-sm">
          <p className="font-semibold">助理研究员（博导）</p>
          <p>Assistant Researcher</p>
          <p>PhD Supervisor</p>
          <p className="pt-2">鹏城国家实验室</p>
          <p>Pengcheng Laboratory</p>
          <p className="pt-2">清华智能网络团队</p>
        </div>
        
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Contact Info:</p>
          <a 
            href="mailto:xieguorui@pcl.ac.cn" 
            className="block hover:underline break-all"
          >
            xieguorui@pcl.ac.cn
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
