import profileImage from "../../hanling.JPG";

const navItems = [
  { href: "#research", label: "研究方向" },
  { href: "#news", label: "最新动态" },
  { href: "#publications", label: "论文" },
  { href: "#patents", label: "专利" },
];

const Sidebar = () => {
  return (
    <aside className="border-b border-sidebar-foreground/10 bg-sidebar p-6 text-sidebar-foreground lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-80 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:p-10">
      <div className="flex flex-col gap-6 min-[380px]:flex-row lg:flex-col lg:gap-0">
        <img
          src={profileImage}
          alt="Hanling Wang"
          className="h-28 w-28 flex-shrink-0 border border-sidebar-foreground/20 object-cover shadow-soft sm:h-32 sm:w-32 lg:mb-7 lg:aspect-square lg:h-auto lg:w-full"
        />

        <div className="min-w-0 flex-1 lg:w-full">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-normal lg:text-4xl">
              王汉凌
            </h1>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sidebar-foreground/65">
              Hanling Wang
            </p>
            <p className="pt-3 text-base font-semibold leading-relaxed">
              助理研究员 · 博士生导师
            </p>
            <a
              href="https://www.pcl.ac.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm leading-relaxed opacity-85 transition-opacity hover:opacity-100"
            >
              鹏城实验室
            </a>
          </div>

          <div className="mt-6 space-y-5 text-sm leading-relaxed lg:mt-8">
            <section className="border-t border-sidebar-foreground/20 pt-5">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/55">
                Research
              </h2>
              <p className="opacity-90">
                分布式系统 · 大模型推理加速 · 边云协同计算
              </p>
            </section>

            <section className="border-t border-sidebar-foreground/20 pt-5">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/55">
                Contact
              </h2>
              <div className="space-y-2">
                <a
                  href="mailto:wanghl03@pcl.ac.cn"
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

            <nav className="border-t border-sidebar-foreground/20 pt-5" aria-label="页面导航">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/55">
                Navigation
              </h2>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 lg:grid-cols-1">
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
