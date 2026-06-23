const projects = [
  {
    title: "基于网内智能的****",
    type: "鹏城实验室交叉前沿项目",
    number: "2025QYB020",
    period: "2025年12月-2027年11月",
    role: "项目负责人",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-14">
      <h2 className="mb-5 border-b border-border pb-3 font-serif text-2xl font-bold text-foreground lg:text-3xl">科研项目</h2>

      <ul className="space-y-2.5">
        {projects.map((project, index) => (
          <li key={index} className="border-l-2 border-muted pl-4 transition-colors hover:border-primary">
            <p className="mb-1 font-semibold leading-snug text-foreground">
              {project.title}
              <span className="ml-2 rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-foreground/80">
                {project.type}
              </span>
              <span className="ml-2 rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                {project.number}
              </span>
            </p>
            <p className="text-sm leading-snug text-muted-foreground">
              {project.period}，<strong className="font-semibold text-primary">{project.role}</strong>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
