import profileImage from "../../hanling.JPG";

const navItems = [
  { href: "#advisors", label: "合作导师" },
  { href: "#research", label: "研究方向" },
  { href: "#news", label: "最新动态" },
  { href: "#publications", label: "论文" },
  { href: "#projects", label: "项目" },
  { href: "#standards", label: "标准" },
  { href: "#patents", label: "专利" },
];

const Sidebar = () => {
  return (
    <aside className="border-b border-sidebar-foreground/10 bg-sidebar p-5 text-sidebar-foreground sm:p-6 lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-80 lg:items-center lg:overflow-hidden lg:border-b-0 lg:border-r lg:p-6">
      <div className="flex flex-col gap-5 lg:w-full lg:items-center lg:gap-0 lg:text-center">
        <img
          src={profileImage}
          alt="Hanling Wang"
          className="h-auto w-28 flex-shrink-0 self-center border border-sidebar-foreground/20 shadow-soft sm:w-32 lg:mb-5 lg:w-44"
        />

        <div className="min-w-0 flex-1 lg:w-full">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-normal">
              王汉凌
            </h1>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sidebar-foreground/65">
              Hanling Wang
            </p>
            <p className="pt-3 text-base font-semibold leading-relaxed lg:pt-2">
              助理研究员 · 博导
            </p>
            <a
              href="https://www.pcl.ac.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm leading-relaxed opacity-85 transition-opacity hover:opacity-100"
            >
              鹏城国家实验室
            </a>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-relaxed lg:mt-5 lg:space-y-3 lg:leading-normal">
            <section className="border-t border-sidebar-foreground/20 pt-4 lg:pt-3">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/55">
                Research
              </h2>
              <p className="opacity-90 lg:mx-auto lg:max-w-56">
                分布式系统 · 大模型推理加速 · 边云协同计算
              </p>
            </section>

            <section className="border-t border-sidebar-foreground/20 pt-4 lg:pt-3">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/55">
                Contact
              </h2>
              <div className="space-y-2">
                <a
                  className="block break-all opacity-90 transition-opacity hover:opacity-100"
                >
                  hanling.thu@gmail.com
                </a>
                <a
                  className="block break-all opacity-90 transition-opacity hover:opacity-100"
                >
                  wanghl03@pcl.ac.cn
                </a>
                <a
                  href="https://scholar.google.com/citations?user=LhUh3sYAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-90 transition-opacity hover:opacity-100"
                >
                  Google Scholar
                </a>
              </div>
            </section>

            <nav className="border-t border-sidebar-foreground/20 pt-4 lg:pt-3" aria-label="页面导航">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/55 lg:mb-2">
                Navigation
              </h2>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 lg:grid-cols-1 lg:gap-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="opacity-85 transition-opacity hover:opacity-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
