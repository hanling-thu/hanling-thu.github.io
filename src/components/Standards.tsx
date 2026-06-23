const drafts = [
  {
    title: "An Open, Decentralized, and Scalable Framework for Large Language Model Inference",
    authors: "Hanling Wang, Qing Li, Yong Jiang, Mingwei Xu",
    document: "draft-wang-cats-odsi-00",
    group: "IETF CATS Working Group",
    date: "2026",
    link: "https://datatracker.ietf.org/doc/draft-wang-cats-odsi/",
  },
  {
    title: "A Framework of Intelligence Delivery Network (IDN) for Deep Learning Inference",
    authors: "Qing Li, Hanling Wang, Yong Jiang, Mingwei Xu",
    document: "draft-li-cats-idn-00",
    group: "IETF CATS Working Group",
    date: "2026",
    link: "https://datatracker.ietf.org/doc/draft-li-cats-idn/",
  },
];

const renderAuthors = (authors: string) => {
  const parts = authors.split(/(Hanling Wang)/g);

  return parts.map((part, index) =>
    part === "Hanling Wang" ? (
      <strong key={index} className="font-semibold text-primary">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
};

const Standards = () => {
  return (
    <section id="standards" className="mb-14">
      <h2 className="mb-5 border-b border-border pb-3 font-serif text-2xl font-bold text-foreground lg:text-3xl">标准化工作</h2>

      <ul className="space-y-4">
        {drafts.map((draft, index) => (
          <li key={index} className="border-l-2 border-muted pb-2 pl-4 text-base transition-colors hover:border-primary">
            <p className="mb-1.5 font-semibold leading-snug text-foreground">
              {draft.title}
              <a
                href={draft.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 whitespace-nowrap text-sm font-medium text-link hover:underline"
              >
                [link]
              </a>
            </p>
            <p className="mb-1 text-sm leading-snug text-muted-foreground">
              {renderAuthors(draft.authors)}
            </p>
            <p className="text-sm leading-snug text-foreground/80">
              <em>{draft.document}</em>
              <span className="text-muted-foreground">，{draft.group}，{draft.date}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Standards;
